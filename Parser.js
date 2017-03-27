// header consists of size (4 bytes) and type (4 bytes)
var headerSize = 8;
var mdatContent = null;

function findBox(stream) {
	var contextPosition = stream.position;
	
	// end of stream was reached
	if (stream.byteLength <= contextPosition) {
		return -1;
	}

	var size = stream.readUint32();
	var type = stream.readString(4).toLowerCase();

	logData("Found box of type " + type + " and size " + size);

	if (type != "moof" && type != "traf") {
	    if (type == "mdat") {
	        mdatContent = stream.readString(size - headerSize);
	        logData("content " + mdatContent);
	    }
		// move to the end of box
		stream.seek(contextPosition + size);
	}
	else {
		var ret;
		// recursively iterate through child boxes
		while (stream.position < contextPosition + size) {
			ret = findBox(stream);
		}
	}

	return 1;
}

function parse(stream) {
	var status;

	while (true) {
		// parse through root boxes and recursively traverse all inner boxes
		status = findBox(stream);

		// end of stream reached
		if (status == -1)
		    return mdatContent;
	}
}

var Parser = function (arrayBuffer) {
	// initialize object which manipulates with ArrayBuffer and pass it for parsing
	var inputStream = new DataStream(arrayBuffer, 0, DataStream.BIG_ENDIAN);
	this.response = parse(inputStream);
	
}







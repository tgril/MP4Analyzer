var mdatDataList = [];

function Parser() {
}

Parser.prototype.parse = function (arrayBuffer) {
	// initialize object which manipulates with ArrayBuffer and parse it
	var stream = new DataStream(arrayBuffer, 0, DataStream.BIG_ENDIAN);
	var status;

	// clear list of mdat boxes
	mdatDataList = [];

	while (true) {
		// parse through root boxes and recursively traverse all inner boxes
		status = findBox(stream);
	    // end of stream reached
		if (status == -1)
			return mdatDataList;
	}
}

function findBox(stream) {
	var contextPosition = stream.position;
	
	// end of stream was reached
	if (stream.byteLength <= contextPosition) {
		return -1;
	}

	var size = stream.readUint32();
	var type = stream.readString(4).toLowerCase();

	logData("Found box of type " + type + " and size " + size);
	
	// assumption is that only boxes of type moof and traf contain other boxes
	if (type != "moof" && type != "traf") {
		if (type == "mdat") {
			// add box data (all except first 8 bytes) to list of mdat boxes
			var mdatData = stream.readString(size - 8);
			mdatDataList.push(mdatData);
			logData("content " + mdatData);
		}
		// move to the end of box
		stream.seek(contextPosition + size);
	}
	else {
		// recursively iterate through child boxes
		while (stream.position < contextPosition + size) {
			findBox(stream);
		}
	}

	return 1;
}











function download(url) {
	var downloader = new Downloader();

	downloader.setCallback(
		function (response) {
			logData("Successfully loaded file " + url);

			var parserResponse = new Parser(response);

			var imageParser = new ImageParser();
			var imageParserResponse = imageParser.parse(parserResponse.response);
			generateImages(imageParserResponse);
		}
	);

	downloader.setUrl(url);
	downloader.download();
}

function generateImages(images) {
    
	for (i = 0; i < images.length; i++) {
		$('#images').prepend($('<img>', { id:'image' + i, src:'data:image/png;base64,' + images[i] }));
		$('#images').prepend($('<p>'));
	}
}

function analyze() {
    $("#analyzeButton").prop("disabled", true);
    $('#images').empty();
	$('#result').show();
	$('#result').val("");

	var uri = $('#inputUrl').val();
	download(uri);

	$('#imagesHeader').show();
	$('#images').show();
	$("#analyzeButton").prop("disabled", false);
}


window.onload = function () {
    $('#imagesHeader').hide();
    $('#images').hide();
	$('#result').hide();
	$("#analyzeButton").button();
	
}













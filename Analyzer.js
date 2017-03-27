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
	$('#result').show();
	$('#result').val("");

	var uri = $('#inputUrl').val();
	download(uri);

	

	showImagesSection();
	$("#analyzeButton").prop("disabled", false);
}

function hideImagesSection() {
	$('#imagesHeader').hide();
	$('#images').hide();
}
function showImagesSection() {
	$('#imagesHeader').show();
	$('#images').show();
}

window.onload = function () {
	hideImagesSection();
	$('#result').hide();
	$("#analyzeButton").button();
}













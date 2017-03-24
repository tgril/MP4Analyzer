function download(url) {
	var downloader = new Downloader();

	downloader.setCallback(
		function (response) {
			console.log(getDate() + "Successfully loaded file " + url);

			this.parser = new Parser(response);
		}
	);

	downloader.setUrl(url);
	downloader.download();
}

function analyze() {
	download("http://demo.castlabs.com/tmp/text0.mp4");
}

window.onload = function () {
	$("#AnalyzeButton").button();
}













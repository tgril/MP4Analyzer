function Downloader() {
}

Downloader.prototype.setUrl = function (url) {
    this.url = url;
}

Downloader.prototype.setCallback = function (callback) {
    this.callback = callback;
}

Downloader.prototype.download = function () {
    var downloader = this;

    var req = new XMLHttpRequest();
    req.open("GET", this.url, true);
    req.responseType = "arraybuffer";
    logData("Loading " + this.url);
    req.send();

    req.onreadystatechange = function (e) {
        if ((req.status == 200 || req.status == 304) && req.readyState == this.DONE) {
            var response = req.response;
            downloader.callback(response);
        } 
    };
}
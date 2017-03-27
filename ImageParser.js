ImageParser.prototype.parse = function (xml) {
    var xmlDoc = $.parseXML(xml);

    var images = [];

    $(xmlDoc).find("smpte\\:image").each(function () {
        images.push($(this).text());
    });

    this.images = images;
    return this.images;
}

function ImageParser() {
}







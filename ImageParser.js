function ImageParser() {
}

ImageParser.prototype.parse = function (xml) {
    var xmlDoc = null;
    var images = [];

    // convert input string to XML - presumption is that input file is XML
    try {
        xmlDoc = $.parseXML(xml);
    }
    catch (e) {
        return null;
    }

    // find all occurances of smpte:image tag and push their data to list of image bytes
    // presumtion is that images are found only as a data inside smpte:image tag
    $(xml).find("smpte\\:image").each(function () {
        images.push($(this).text());
    });

    return images;
}







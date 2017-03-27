function getDate() {
    return (new Date).toUTCString();
}

function logData(data) {
    console.log(getDate() + " " + data);
    $('#logBox').val($('#logBox').val() + data + "\n");
}


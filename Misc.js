function getDate() {
    return (new Date).toUTCString();
}

function logData(data) {
    console.log(getDate() + " " + data);
    $('#result').val($('#result').val() + data + "\n");
}


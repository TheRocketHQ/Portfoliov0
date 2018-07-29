function loadDoc() {
    $.get("https://cors-anywhere.herokuapp.com/http;//carnes.cc/code/ajax_example.txt", function (data, status) {
            console.log("Data: " + data + "/nStatus: " + status);
        },
        "dataType"
    );
}
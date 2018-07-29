function loadDoc() {
    $("#demo").load("https://cors-anywhere.herokuapp.com/http;//carnes.cc/code/ajax_example.txt"),
        function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                alert("External content loaded successfully!");
            }
            if (statusTxt == "error") {
                alert("Error: " + xhr.status + ": " + xhr.statusTxt);
            }
        }
}
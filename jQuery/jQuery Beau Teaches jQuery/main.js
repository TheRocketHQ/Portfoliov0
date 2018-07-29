function loadDoc() {
    // Post data to a server
    $.post("https://cors-anywhere.herokuapp.com/http;//carnes.cc/code/ajax_example.txt", {
            name: "Beau Carnes",
            city: "Grand Rapids"
        },
        function (data, status) {
            console.log("data: " + data + "\nStatus: " + status);
        });
}
// Load when document is ready
$(document).ready(function () {
    // Selects button class and run on click 
    $("button").click(function () {
        // Select the p Tags
        $("p").hide();
        // Another Example would be replacing it with the id
        $("#cereal").hide();
        // Another Example would be replacing it with the class
        $(".cereal").hide();
    });

    // Anexing to parent element
    $("button").click(function () {
        $("button").hide();
    });

});
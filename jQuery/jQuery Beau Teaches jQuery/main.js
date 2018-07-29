// jQuery: Getting and Setting Content and Attributes   
$("#btn").click(function () {
    // gets the attribute
    console.log($("#fcc").attr("href"))
});

$("#btn2").click(function () {
    // Sets the attribute
    $("#text").text("FreeCodeCamp is Awesome");
});
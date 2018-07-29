// jQuery: Getting and Setting Content and Attributes   
$("#btn").click(function () {
    // gets the attribute
    console.log($("#fcc").attr("href"))
});

$("#btn2").click(function () {
    // Sets the attribute in text
    $("#text").text("FreeCodeCamp is Awesome");
    // set the attribute in html like bold or wtv
    $("#text").html("FreeCodeCamp is < b > Awesome < /b>");
});
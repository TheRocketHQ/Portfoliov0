// jQuery: Getting and Setting Content and Attributes   
$("#btn").click(function () {
    // gets the attribute
    console.log($("#fcc").attr("href"))
});

$("#btn2").click(function () {
    // set the attribute in html like bold or wtv
    $("#text").text(function (i, origText) {
        return "Old Text: " + origText + " New text: FreeCodeCamp is awesome! (index:" + i + ")"
    })
});

$("#btn3").click(function () {
    // Set the Value
    $("#name").val("Quincy Larson");
});
// jQuery .animate

// .animate (properties [, duration][, easing][, complete])
// .animate (properties, options)

$("#go").click(function () {
    $("#block").animate({
        opacity: .5,
        marginLeft: "+=50",
        height: "400px"
    }, 3000, "linear", function () {
        $(this).after("<div>Animation Complete</div>");
    });
});
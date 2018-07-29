// jQuery .animate Changes from one method to another  

// .animate (properties [, duration][, easing][, complete])
// .animate (properties, options)
// Only numeric values can be animated

// Example of Animation Chain
$("#go").click(function () {
    $("#block")
        .animate({
            width: "90%"
        }, 1000)
        .animate({
            fontSize: "40px"
        }, 1000)
        .animate({
            borderLeftWidth: "30px"
        }, 1000)
});
$("button").click(function () {

    //set the font size of the p tag 
    // it's usually best practices to avoid putting too much css in the js
    $('p.big').css({
        fontSize: "50px",
        color: "blue",
        backgroundColor: "yellow"
    });
});
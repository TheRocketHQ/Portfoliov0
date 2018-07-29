 // jQuery Events
 // NOTE CHECK JQ SNIPPETS
 // Putting the function inside the jquery

 //  Multiple Events with on as long as it's separated with a space character
 $(function () {
     $("p").on({
         "click": function () {
             console.log("clicked!");
         },
         "mouseover": function () {
             console.log("hovered!");
         },
     });

     $("input").change(function () {
         console.log("you did something");

     });
 });

 // dblclick, mouseenter,mouseleave, mousedown, mouseup, hover
 // form event: focus, blur, change
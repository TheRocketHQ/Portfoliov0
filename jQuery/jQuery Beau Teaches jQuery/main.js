 // jQuery Events
 // NOTE CHECK JQ SNIPPETS
 // Putting the function inside the jquery

 $(function () {
     $("p").hover(function () {
             console.log("you entered");
         },
         function () {
             console.log("You Left");
         });
     $("input").focus(function () {
         console.log("You Did Something!");
     });
 });




 $("p").click(function () {
     console.log("you click a paragraph");
 });



 // dblclick, mouseenter,mouseleave, mousedown, mouseup, hover
 // form event: focus, blur, change
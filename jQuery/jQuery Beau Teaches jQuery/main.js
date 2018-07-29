//  jQuery; Adding and Removing Elements
//Append and prepend are going to be inside the target
$('.target')
    .append('<div class="child">Append</div>')
    .prepend('<div class="child">Prepend</div>')
    .before('<div class="child">Before</div>')
    .after('<div class="sibling">After</div>')
//  jQuery; Adding and Removing Elements
//Append and prepend are going to be inside the target
$('.target')
    .append('<div class="child">Append</div>')
    .prepend('<div class="child">Prepend</div>')
    .before('<div class="child">Before</div>')
    .after('<div class="sibling">After</div>')
// Will append each p tag
$('p').append('<b>Lots</b>');

// Will remove 
$('.target').remove()

// will not remove but will empty 
$('.target').empty();
//this code activates and changes color of button on index page when hover/clicked
var def_color;
$('.verbs .card-panel').hover(
    function() {
        $(this).toggleClass('darken-4');
    },
    function() {
        $(this).toggleClass('darken-4');
    });

$('.verbs .card-panel').click(function() {
    var link = $(this).attr('id');
    window.location.href = link;
    return false;
});
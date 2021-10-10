$(document).ready(function() {
    $('.top-line__headerBurger').click(function(event) {
        $('.top-line__headerBurger,.top-line__item').toggleClass('active');
        $('body').toggleClass('lock');
    });
}); 
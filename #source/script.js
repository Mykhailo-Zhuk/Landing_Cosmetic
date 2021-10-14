$(this.document).ready(function() {
    $('.top-line__headerBurger').click(function(event) {
        $('.top-line__headerBurger,.top-line__item,.top-line__body_list').toggleClass('active');
        $('body').toggleClass('lock');
    });
}); 
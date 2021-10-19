$(this.document).ready(function() {
    $('.top-line__headerBurger').click(function(event) {
        $('.top-line__headerBurger,.top-line__item,.top-line__body_list').toggleClass('active');
        $('body').toggleClass('lock');
    });
}); 
$(this.document).ready(function() {
    $('.navigation__panel_listButton').click(function(event) {
        $('.navigation__panel_list').toggleClass('active');
    });
}); 
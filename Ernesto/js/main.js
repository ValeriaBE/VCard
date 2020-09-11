$('.psai__content__tabs__list li a').click(function(e) {
    e.preventDefault();
    var active_tab_selector = $('.psai__content__tabs__list li.active a').attr('href');
    var actived_nav = $('.psai__content__tabs__list li.active');
    actived_nav.removeClass('active');
    $(this).parents('li').addClass('active');
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');
    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
});
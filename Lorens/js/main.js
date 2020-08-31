var tabs = document.getElementsByClassName('Tab');

Array.prototype.forEach.call(tabs, function(tab) {
    tab.addEventListener('click', setActiveClass);
})

function setActiveClass(evt) {
    Array.prototype.forEach.call(tabs, function(tab) {
        tab.classList.remove('active');
    })
    evt.currentTarget.classList.add('active')
}
$('.Tab button').on('click', function(evt) {
    evt.preventDefault();
    var sel = this.getAttribute('data-toggle-target');
    $('.tab-content').removeClass('active').filter(sel).addClass('active');
    $('.vcard__footer').removeClass('static');
});
$('.verformas').click(function() {
    $('.vcard__tabs__content__contact__share__forms').toggle();
    $(this).toggle();
    $('.vermenos').toggle();
    $('.vcard__footer').addClass('static');
});
$('.vermenos').click(function() {
    $('.vcard__tabs__content__contact__share__forms').toggle();
    $(this).toggle();
    $('.verformas').toggle();
    $('.vcard__footer').removeClass('static');
});
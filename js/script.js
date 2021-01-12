$(document).ready(function(){
        // MODAL window
    $('[data-modal=delivery] ').on('click', function() {
        $('.overlay, #delivery').fadeIn('slow');
    });

    $('[data-modal=coll] ').on('click', function() {
        $('.overlay, #collMI').fadeIn('slow');
    });
    
    
    $('.close ').on('click', function() {
        $('.overlay, #delivery, #collMI').fadeOut('slow');
    });

    $('[data-modal=coll]').on('click', function() {
        $('#delivery').fadeOut('slow');
    });

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
  

    // PUP
    $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

//плавная прокрутка//

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});


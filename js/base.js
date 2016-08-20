$(document).ready(function(){
    
    var burger = $('.burger-lines');
    var burgerMenu = $('.burger-menu');
    
    /* BURGER MENU IN RIGHT */
    burger.click(function() {
        
        burger.toggleClass('burger-animated');
        burgerMenu.fadeToggle('fast');
        
    });
    
    $('.header-nav-login-rating').click(function() {

        $('.header-nav-popup').fadeToggle('fast');
        
    });
    
    $('.header-mob-login').click(function() {

        $('.header-mob-popup').fadeToggle('fast');
        
    });
    
});
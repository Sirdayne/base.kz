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
    
    
    
    /* REGISTRATION & AUTHORIZATION*/
    
    $('.header-nav-login').click(function() {

        $('.reg-form').fadeIn('fast');
        $('.reg-form-background').fadeIn('slow');
        
    });
    
    $('.reg-form-cancel').click(function() {

        $('.reg-form').fadeOut('fast');
        $('.reg-form-background').fadeOut('slow');
        
    });
    
    $('.reg-form-background').click(function() {

        $('.reg-form').fadeOut('fast');
        $('.reg-form-background').fadeOut('slow');
        
    });
    
    $('#registration').click(function() {
        
        $('#authorization').removeClass('reg-active');
        $('.reg-authorization').hide();
        $('.reg-registration').show();
        $('#registration').addClass('reg-active');
        
    });
    
    $('#authorization').click(function() {
        
        $('#registration').removeClass('reg-active');
        $('.reg-registration').hide();
        $('.reg-authorization').show();
        $('#authorization').addClass('reg-active');
        
    });
    
    $('#set-registration').click(function() {
        
        $('#set-authorization').removeClass('nav-active');
        $('#set-password').removeClass('nav-active');
        $('.reg-password').hide();
        $('.reg-authorization').hide();
        $('.reg-registration').show();
        $('#set-registration').addClass('nav-active');
        
    });
    
    $('#set-authorization').click(function() {
        
        $('#set-registration').removeClass('nav-active');
        $('#set-password').removeClass('nav-active');
        $('.reg-password').hide();
        $('.reg-registration').hide();
        $('.reg-authorization').show();
        $('#set-authorization').addClass('nav-active');
        
    });
    
     $('#set-password').click(function() {
        
        $('#set-registration').removeClass('nav-active');
        $('#set-authorization').removeClass('nav-active');
        $('.reg-authorization').hide();
        $('.reg-registration').hide();
        $('.reg-password').show();
        $('#set-password').addClass('nav-active');
        
    });
});
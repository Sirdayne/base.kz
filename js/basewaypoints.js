    
    /* SPOILERS IN MAIN PAGE */
    
    $('.input-switch').click(function() {
        $(this).parents('.post').children('.post-content').slideToggle("fast");
        $(this).parents('.post').children('.post-rating').children('.rating-checkbox').toggleClass('rating-checkbox-main');
    });

    /* WAYPOINTS FOR HIDING CHECKBOX */
    
    $('.post-start-magic').waypoint( function(dir) {
        if ( dir === 'down')
            $(this).parents('.post').children('.post-rating').children('.rating-checkbox').addClass('rating-checkbox-magic');
        else
            $(this).parents('.post').children('.post-rating').children('.rating-checkbox').removeClass('rating-checkbox-magic');
    }, {
        offset: '0%'
    });
           
    $('.post-end-magic').waypoint( function(dir) {
        if ( dir === 'down')
            $(this).parents('.post').children('.post-rating').children('.rating-checkbox').removeClass('rating-checkbox-magic');
        else
            $(this).parents('.post').children('.post-rating').children('.rating-checkbox').addClass('rating-checkbox-magic');
    }, {
        offset: '20%'
    });

    /* SPOILER IN INSIDE POST COMMENTARIES */
    
    $('#button-spoiler').click(function() {
        $('.comment-spoiler').slideToggle("fast");
        
        $(this).children('.classPlus').fadeToggle('fast');
        $(this).children('.classMinus').fadeToggle('fast');

    });
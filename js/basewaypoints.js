    
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
    
    $('.comment-send-answer').click(function() {
        $(this).parent('.comment-send').addClass('comment-send-active');
    });
    $('.comment-send-cancel').click(function() {
        $(this).parent('.comment-send').removeClass('comment-send-active');
    });


    $('.button-spoiler').click(function() {
        
        $(this).parent('.comment').children('.comment-spoiler').slideToggle("fast");
        
        $(this).children('.classPlus').fadeToggle('fast');
        $(this).children('.classMinus').fadeToggle('fast');

    });
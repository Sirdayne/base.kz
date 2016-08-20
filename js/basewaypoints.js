    /* SPOILERS IN MAIN PAGE */
    
    var ratingCheckbox = $('.rating-checkbox');
    var post = $('.post');
    var counter = -1;

    $('.input-switch').click(function() {
        $(this).parents('.post').children('.post-content').slideToggle("fast", Waypoint.refreshAll);
        if (counter > 0) {
        post[counter].scrollIntoView();
        }
        else{
        document.getElementById('settings').scrollIntoView();  
        }
    });

    $('.post-start-magic').waypoint({
        handler: function(direction) {
            if (direction === 'down') {
                counter++;
                ratingCheckbox[counter].className = "rating-checkbox rating-checkbox-magic";
            } 
            else {
                ratingCheckbox[counter].className = "rating-checkbox";
                counter--;
            }
        },
        offset: -50
    });

    $('.post-end-magic').waypoint({
        handler: function(direction) {
            if (direction === 'down') {
                ratingCheckbox[counter].className = "rating-checkbox";
            } 
            else {
                ratingCheckbox[counter].className = "rating-checkbox rating-checkbox-magic";
            }
        },
        offset: 50
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
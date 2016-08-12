$(document).ready(function(){
        
    $('#switch').click(function() {
        $('#post-content').slideToggle("fast");
    });
    
    
    $('#button-spoiler').click(function() {
        $('.comment-spoiler').slideToggle("fast");
    });
        
});

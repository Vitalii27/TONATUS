$(document).ready(function() {
    $('a[href^="#our__works"], a[href^="#our__services"]').on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 700);
    });
});
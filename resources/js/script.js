$(document).ready(function () {
    $("#contact").click(function () {
        $(".social-media-links").css("border", "3px solid #fff");
        setTimeout(ChangeBorder, 3000);
        function ChangeBorder() {
            $(".social-media-links").css("border", "0");
            $(".social-media-links").css("padding-top", "3px");
        };
        
        
    });
});
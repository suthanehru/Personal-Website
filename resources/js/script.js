$(document).ready(function () {
    $("#contact").click(function () {
        $(".icon-big").css("font-size", "150%");
        $(".ion-social-linkedin").css("color", "#007bb6");
        $(".ion-social-github").css("color", "#6cc644");
        $(".ion-android-mail").css("color", "#0266C8");
        
        setTimeout(ChangeBorder, 3000);
        function ChangeBorder() {
            $(".icon-big").css("font-size", "125%");
            $(".ion-social-linkedin").css("color", "#fff");
            $(".ion-social-github").css("color", "#fff"); 
            $(".ion-android-mail").css("color", "#fff");
            
        };
        
        
    });
});
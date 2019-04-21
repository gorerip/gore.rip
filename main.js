$(document).ready(function(){
    $("#projects").hide()

    $("#project-link").click(function(){
        $("#landing").fadeOut(400)
        $("#projects").delay(600).fadeIn(1200)
        
    })

    $("#back-link").click(function(){
        $("#projects").hide()
        $("#landing").fadeIn(1200)
    })
});
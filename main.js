$(document).ready(function(){
    $("#projects").hide()

    $("#project-link").click(function(){
        $("#landing").hide()
        $("#projects").fadeIn(1200)
    })

    $("#back-link").click(function(){
        $("#projects").hide()
        $("#landing").fadeIn(1200)
    })
});
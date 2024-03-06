$(document).ready(function () {
    $("button").tooltip()
})

$('#enviar_correo').click(function () {

    alert("Email enviado con éxito")
})

$("h5").dblclick(function () {

    $(this).css({
        "color": "red",

    })
})

$('.card-title').click(function(){
    $('.recetas-relacionadas p').toggle("hide");

})



// aggiunta del messaggio digitato nel display quando clicco l'aereo
$(".plane").click(
  function () {
    var msg = $(".input-msg-txt").val();
    if (msg != "") {
      $(".display-messaggi").append("<div class='messaggio-inviato'><p class='p-msg'>" + msg + "</p></div>");
      $(".input-msg-txt").val("");
    }
  }
)


// evidenziare il contatto selezionato----------------
$(".contatto").click(
  function () {
    $(this).addClass("contatto-attivo-bg");
    $(this).siblings().removeClass("contatto-attivo-bg");
  }
)
// cambio icona da microfono a aereo-----------------------
$(".input-msg-txt").focus(function(){
  $(".plane").css("display", "block");
  $(".fa-microphone").css("display", "none");
});
$(".input-msg-txt").focusout(
  send
);
function send() {
  setTimeout(function(){
    $(".plane").css("display", "none");
    $(".fa-microphone").css("display", "block"); }, 300);
}

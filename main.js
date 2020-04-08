
// aggiunta del messaggio digitato nel display quando clicco l'aereo
$(".plane").click(
  function () {
    var msg = $(".input-msg-txt").val();
    if (msg != "") {
      $(".display-messaggi").append("<div class='messaggio-inviato'><p class='p-msg'>" + msg + "</p></div>");
      $(".input-msg-txt").val("");
      // messaggio di risposta statico----------------
      setTimeout(function(){
       $(".display-messaggi").append("<div class='messaggio-ricevuto'><p class='p-msg'>" + "ciao" + "</p></div>");
         }, 1000);
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

// ricerca dei contatti---------------------------

 $(".input-contatti").keyup(function () {

   $(".contatto").each(function () {
     var contattoCercato = $(".input-contatti").val();
     var contattoCercatoMin = contattoCercato.toLowerCase();
     var h4 = $(this).find("h4");
     var nome = h4.text();
     var nomeMin = nome.toLowerCase();

     if (!nomeMin.includes(contattoCercatoMin)) {
       $(this).css("display", "none");
     }
     else {
       $(this).css("display", "flex");
     }
   })
 })

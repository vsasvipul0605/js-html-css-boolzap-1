
// aggiunta del messaggio digitato nel display quando clicco l'aereo
$(".plane").click(
  function () {
    var msg = $(".input-msg-txt").val();
    if (msg != "") {
      $(".display-messaggi.active").append("<div class='messaggio-inviato'><span class='p-msg'>" + msg +
      "</span> <div class='freccina'><i class='fas fa-chevron-down'></i></div> <div class='menu-tendina'><span>Cancella messaggio</span></div></div>");
      $(".input-msg-txt").val("");
      // messaggio di risposta statico----------------
      setTimeout(function(){
       $(".display-messaggi.active").append("<div class='messaggio-ricevuto'><span class='p-msg'>" + "ciao" +
       "</span> <div class='freccina'><i class='fas fa-chevron-down'></i></div> <div class='menu-tendina'><span>Cancella messaggio</span></div></div>");
       // modifico l'ora nel contatto in base allultimo msg spedito
       var d = new Date();
       var ora = d.getHours().toString();
       var minuti = d.getMinutes().toString();
       $(".contatto-attivo-bg").find("span").text(ora + ":" + minuti);
         }, 1000);
    }
  }
)



// evidenziare il contatto selezionato e selezionare la relativa chat----------------
$(".contatto").click(
  function () {
    $(this).addClass("contatto-attivo-bg");
    $(this).siblings().removeClass("contatto-attivo-bg");
    var indexContatto = $(this).index();
    $(".display-messaggi").eq(indexContatto).addClass("active");
    $(".display-messaggi").eq(indexContatto).siblings().removeClass("active");
    // cambio utente nella fascia superiore--------------------
    $(".fascia-sup-utente").find("h4").text($(this).find("h4").text());
    $(".fascia-sup-utente").find("img").attr("src",$(this).find("img").attr("src"));
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

 // menu per cancellare messaggio-------------
 $( ".display-messaggi" ).on( "click", ".menu-tendina", function( ) {
    $(this).parent().hide();
 });
 $( ".display-messaggi" ).on( "click", ".freccina", function( ) {
    $(this).siblings(".menu-tendina").toggle();
 });
 // il menu a tendina si chiude quando il mouse esce dal messaggio
 $( ".display-messaggi" ).on( "mouseleave", ".messaggio-inviato", function( ) {
    $(this).find(".menu-tendina").hide();
 });
 $( ".display-messaggi" ).on( "mouseleave", ".messaggio-ricevuto", function( ) {
    $(this).find(".menu-tendina").hide();
 });

/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card"s HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card"s symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card"s symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 /* corpo contenedor do jQuery */
 $(document).ready(function () {
   

 /* timer para a carta ser exibida por tempo suficiente*/ 
  function contagem( funcao ){
     setTimeout(funcao, 1000);
}





 /* função para desvirar as cartas*/
let deck,carta,baralho;
$("li").click(function() {
    let classeCarta = $(this).attr("class");
    if (classeCarta == "card") {
      $(this).addClass("open show");
      contagem(checaPar);
      //checaPar();
    }else if (classeCarta == "card open show"){
      alert("Carta já esta virada, selecione outra!");
    } else {
      alert("Carta ja tem seu par!");
    }
});


/**
 * funçao de checagem
 * aqui são mudadas as classes caso sucesso
 */
function checaPar(){
  let pardecartas;
  pardecartas = $(".card.open.show");
  if (pardecartas.length < 2) {
      return;
  }else if ($(pardecartas[0]).children(0)[0].className == $(pardecartas[1]).children(0)[0].className){
       pardecartas.each(function(index){
        $(pardecartas[index]).addClass("match"); 
        $(pardecartas[index]).removeClass("open show");
        console.log("its a match")
        return;
        })
    }else {     
      pardecartas.each(function(index){
           $(pardecartas[index]).removeClass("open show");
      })
    }
  }


});
/* fim do corpo jQuery */

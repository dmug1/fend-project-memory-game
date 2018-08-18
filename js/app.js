/*
 * Create a list that holds all of your cards
 */
let baralhoInicial = ["fa fa-bolt", "fa fa-bolt", "fa fa-bicycle", "fa fa-bicycle", "fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-leaf", "fa fa-leaf", "fa fa-anchor", "fa fa-anchor", "fa fa-bomb", "fa fa-bomb", "fa fa-cube", "fa fa-cube"];

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

let baralho = [],viradas = 0, moves = 0;

 
 /* corpo contenedor do jQuery */
 $(document).ready(function () {
  restart();

  /* CLICK SOBRE O RESTART GAME  */
    $(".fa-repeat").click(function() {
    restart()
  });
  
/* RESTART GAME  */
  function restart(){
    shuffle(baralhoInicial);
    baralho = [];
    viradas = 0;
    moves = 0;
    disporCartas(baralhoInicial);
  };

  /**ATRIBUIR CARTAS EMBARALHADAS */
  function disporCartas(array){
    let cards;
    cards = $(".card");
    esconderCartas();
    cards.children().each(function(index){
    $(cards[index]).children().removeClass();
    $(cards[index]).children().addClass(array[index]);
    });
    }

    /* ESCONDER CARTAS */
    function esconderCartas(){
      let cartaVoltaOpen;
      cartaVoltaOpen = $(".card.open.show") ;   
      cartaVoltaOpen.each(function(index){
        $(cartaVoltaOpen[index]).removeClass("open show");
        viradas = 0;
      });      
      let cartaVoltaMatch;
      cartaVoltaMatch = $(".match") ;   
      cartaVoltaMatch.each(function(index){
        $(cartaVoltaMatch[index]).removeClass("match");
        viradas = 0;
      });
    }

 /* timer para a carta ser exibida por tempo suficiente*/
  function contagem( funcao ){
     setTimeout(funcao, 1000);
}

/*
 *função de click, aqui ela chama a virada de cartas 
 */
$("li").click(function() {
  let carta = $(this).attr("class");
  let tagEfeito = $(this);
  if (viradas <2){
    virarCarta(carta,tagEfeito);
    moves ++;
    console.log(moves);
  }
});


 /* função para virar as cartas*/
function virarCarta(classeCarta,tagEfeito){
  if (classeCarta == "card") {
    tagEfeito.addClass("open show");
    viradas ++;
    contagem(checaPar);
  }else if (classeCarta == "card open show"){
    alert("Carta já esta virada, selecione outra!");
  } else {
    alert("Carta ja tem seu par!");
  }
}


/*funçao de checagem de match * */
function checaPar(){
  let pardecartas;
  pardecartas = $(".card.open.show");
  if (pardecartas.length < 2) {
      return;
  }else if ($(pardecartas[0]).children(0)[0].className == $(pardecartas[1]).children(0)[0].className){
       pardecartas.each(function(index){
        $(pardecartas[index]).addClass("match"); 
        $(pardecartas[index]).removeClass("open show");
        viradas = 0;
        baralho.push($(pardecartas[index]).children(0)[0].className);
        console.log(baralho);
        endGame();
        });
    }else {     
      pardecartas.each(function(index){
           $(pardecartas[index]).removeClass("open show");
           viradas = 0;
      });
    }
  }


  function endGame(){
    if (baralho.length == 16) {
      alert('venceu!');
    }
  }


});
/* fim do corpo jQuery */

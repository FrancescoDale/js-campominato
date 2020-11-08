// faccio scegliere che livello di difficoltà avrà il gioco
var gameDiff = 0; // preimposto a 0
var gameNumbers;
var randomNumbers = []; // mine
var inputNumbers = [];
var gameOver = false; //variabile binaria che a seconda del valore decide quando il gioco finisce

do{
    gameDiff = parseInt(prompt('Scegli la difficoltà : da 0 ( minimo ) a 2 ( massimo ):  '));

} while(gameDiff>2 || gameDiff<0)  // finchè nel prompt non vengono inseriti valori che rispettano questa condizione, il ciclo si ripete

// controllo
console.log('Hai scelto : ' + gameDiff);

// a seconda del valore della variabile gameDiff, il campo minato assume diverse dimensioni

if(gameDiff==0) {
    gameNumbers = 100;
}
else if(gameDiff==1) {
        gameNumbers = 80;
    }
else if(gameDiff==2) {
        gameNumbers = 50;
    }

//controllo
console.log(' caselle campo minato = ' + gameNumbers);

// genero dei numeri casuali ( mine )
while(randomNumbers.length < 16) {  // 15 numeri
    var r = Math.floor((Math.random() * gameNumbers)+1); // genera il numero e lo assegna come valore alla variabile r
    if(randomNumbers.indexOf(r) === -1) randomNumbers.push(r); // push solo quando è diverso
}

//controllo
console.log(randomNumbers);

//gioco vero e proprio

// ciclo che si interrompe solo quando gameOver assume valore true

while (gameOver==true) {
    console.log(' Game Over!')

    
}

// faccio scegliere che livello di difficoltà avrà il gioco
var gameDiff = 0; // preimposto a 0
var gameNumbers;

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

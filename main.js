// faccio scegliere che livello di difficoltà avrà il gioco
var gameDiff = 0; // preimposto a 0

do{
    gameDiff = parseInt(prompt('Scegli la difficoltà : da 0 ( minimo ) a 2 ( massimo ):  '));

} while(gameDiff>2 || gameDiff<0)  // finchè nel prompt non vengono inseriti valori che rispettano questa condizione, il ciclo si ripete

// controllo

console.log('Hai scelto : ' + gameDiff);

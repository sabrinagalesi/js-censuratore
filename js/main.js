/* - Il software riceve in input un lungo testo e una serie di parole da censurare.  
   - Restituisce il testo con xxx al posto delle parole censurate.  
   - Stampa un "badword index" calcolato come il numero di parole censurate su il numero di parole totali. 
    Fare un prompt in cui scrivere un lungo messaggio con delle parole da censurare
    Con stringa.replace possiamo rimpiazzare le parole da censurare con xxx*/

var testo = "In una terra lontana, dietro le montagne Parole, lontani dalle terre di Vocalia e Consonantia, vivono i testi casuali. Vivono isolati nella cittadina di Lettere, sulle coste del Semantico, un immenso oceano linguistico. Un piccolo ruscello chiamato Devoto Oli attraversa quei luoghi, rifornendoli di tutte le regolalie di cui hanno bisogno. È una terra paradismatica, un paese della cuccagna in cui golose porzioni di proposizioni arrostite volano in bocca a chi le desideri";

//Abbiamo creato un testo, adesso stabiliamo che "di", "terra" e "cuccagna" sono delle badwords

var arrayTesto = testo.split(" ");
var arrayBadwords = [];

for(var posizione = 0; posizione < arrayTesto.length; posizione++) {
    console.log(posizione, arrayTesto[posizione]);
    if(arrayTesto[posizione] == "di" || arrayTesto[posizione] == "terra" || arrayTesto[posizione] == "cuccagna") {
        console.log("badwords!");
        arrayTesto[posizione] = "xxx";
        arrayBadwords.push(arrayTesto[posizione]);
    }
}
var testoCensurato = arrayTesto.join(" ");


alert("Ho censurato " + arrayBadwords.length + " su " + arrayTesto.length);

console.log(arrayTesto);
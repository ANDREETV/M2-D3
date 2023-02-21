let q1 = "<p>ESERCIZIO 1</p>"
document.getElementById('q1').innerHTML = q1

let domanda = "<p>Scrivi un algoritmo per trovare il più grande tra due numeri interi.</p>"
document.getElementById('domanda_1').innerHTML = domanda

let risposta = '<ul><li> let n1 = 10;</li><li>let n2 = 5;</li><li>if (n1 > n2) { <br> console.log(n1); <br> } else { <br> console.log(n2);}</li></ul>'
document.getElementById('risposta').innerHTML = risposta


let q2 = "<p>ESERCIZIO 2</p>"
document.getElementById('q2').innerHTML = q2
domanda = "<p>Scrivi un algoritmo che mostri 'not equal' in console se un numero intero fornito è diverso da 5.</p>"
document.getElementById('domanda_2').innerHTML = domanda

risposta = "<ul><li>let n3 = 4;</li></li><li>if (n3 !== 5) { <br> console.log('Not equal'); <br> } else { console.log('Equa');}</li></ul>"
document.getElementById('risposta_2').innerHTML = risposta

let q3 = "<p>ESERCIZIO 3</p>"
document.getElementById('q3').innerHTML = q3
domanda = "<p>Scrivi un algoritmo che mostri 'divisible by 5' in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)</p>"
document.getElementById('domanda_3').innerHTML = domanda

risposta ='<ul><li> let n4 = 15; </li> <li> if (n4 % 5 === 0) { <br> console.log("divisible by 5"); } <br> else { console.log("non divisible by 5");} </li> </ul>'
document.getElementById('risposta_3').innerHTML = risposta 

let q4 = "<p>ESERCIZIO 4</p>"
document.getElementById('q4').innerHTML = q4
domanda = "<p>Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.</p>"
document.getElementById('domanda_4').innerHTML = domanda

risposta ='<ul><li> let n5 = 7; </li><li>let n6 = 1;</li><li>if (n5 === 8 || n6 === 8){<br>console.log("almeno uno dei due numeri è uguale a 8");<br>} else if(n5 + n6 === 8) {<br>console.log("la loro somma è uguale a 8");<br>} else if (n5 - n6 === 8 || n6 - n5 === 8) {<br>console.log("la loro sottrazione è uguale a 8");}</li> </ul>'
document.getElementById('risposta_4').innerHTML = risposta 

let q5 = "<p>ESERCIZIO 5</p>"
document.getElementById('q5').innerHTML = q5


domanda = "<p>Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile 'totalShoppingCart'. <br> C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10). <br> Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.</p>"
document.getElementById('domanda_5').innerHTML = domanda

risposta ='<ul><li> let b = 40; </li><li>if (b > 50) {<br>console.log("la spedizone sarà gratis");<br>} else if (b < 50) {<br>console.log("la spedizione costerà 10 euro in più");}</li> </ul>'
document.getElementById('risposta_5').innerHTML = risposta 


let q6 = "<p>ESERCIZIO 6</p>"
document.getElementById('q6').innerHTML = q6

domanda = "<p>Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto. <br> Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.</p>"
document.getElementById('domanda_6').innerHTML = domanda

risposta ='<ul><li>let carello = 40;</li><li>if (carello > 50) {<br>console.log(carello * 0.8);<br>} else if (carello < 50) {<br>console.log("la spedizione costerà 10 euro in più");</li><li>console.log(carello + 10); } </li></ul>'
document.getElementById('risposta_6').innerHTML = risposta

let q7 = "<p>ESERCIZIO 7</p>"
document.getElementById('q7').innerHTML = q7

domanda = "<p>  Crea tre variabili, e assegna un valore numerico a ciascuna di esse. <br> Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso. <br> Alla fine mostra il risultato in console.</p>"
document.getElementById('domanda_7').innerHTML = domanda

risposta ='<ul><li>if (y > z) {<br>console.log(x + "," +y+ "," +z);<br>} else {<br>console.log(x + "," +z+ "," +y);<br>} else if (y > x && y > z) {<br>if (x > z) {<br>console.log(y + "," +x+ "," +z);<br>} else {<br>console.log(y + "," +z+ "," +x);<br>}<br>} else if (z > x && z > y) {<br>if (x > y) {<br>console.log(z + "," +x+ "," +y);<br>}else{<br>console.log(z+ "," +y+ "," + x);}}</li></ul>'
document.getElementById('risposta_7').innerHTML = risposta


let q8 = "<p>ESERCIZIO 8</p>"
document.getElementById('q8').innerHTML = q8


domanda = "<p>Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca 'typeof').</p>"
document.getElementById('domanda_8').innerHTML = domanda


risposta ='<ul><li>let n = 3;</li> <li>if (typeof n === "number") {<br>console.log("è un numero");<br>}else{<br>console.log("non è un numero");}</li> <br> or <li>let n =2.3;</li><br> console.log(Number.isInteger (n));</ul>'
document.getElementById('risposta_8').innerHTML = risposta



let q9 = "<p>ESERCIZIO 9</p>"
document.getElementById('q9').innerHTML = q9

domanda = "<p>Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)</p>"
document.getElementById('domanda_9').innerHTML = domanda

risposta ='<ul><li>let n = 17<br>if (n % 2 === 0) {<br>console.log("è un numero pari");<br>} else {<br>console.log(" è un numero dispari");}</li></ul>'
document.getElementById('risposta_9').innerHTML = risposta




let q10 = "<p>ESERCIZIO 10</p>"
document.getElementById('q10').innerHTML = q10


domanda = "<p>Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.</p>"
document.getElementById('domanda_10').innerHTML = domanda


risposta ='<ul><li>let val = 2;<br>if (val < 10) {<br>console.log("Meno di 10");<br>} else if (val <ul 5) {<br>console.log("Meno di 5");<br>} else {<br>console.log("Uguale a 10 o maggiore");}</li></ul>'
document.getElementById('risposta_9').innerHTML = risposta


/* SCRIVI QUI LA TUA RISPOSTA */


let q11 = "<p>ESERCIZIO 11</p>"
document.getElementById('q11').innerHTML = q11

domanda = "<p>Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.</p>"
document.getElementById('domanda_11').innerHTML = domanda

risposta ='<ul><li>num < 5 - mostra in console "Tiny"</li><li>num < 10 - mostra in console "Small"</li><li>num < 15 - mostra in console "Medium"</li><li>num < 20 - mostra in console "Large"</li><li>num >= 20 - mostra in console "Huge"</li><li>let val = 20;</li><br>if (val < 5) {<br>console.log("Tiny");<br>} else if (val < 10) {<br>console.log("Small");<br>} else if (val < 15) {<br>console.log("Medium");<br>}else if (val <ul 20) {<br>console.log("Large");<br>}else if (val >= 20) {<br>console.log("Huge");}</ul>'
document.getElementById('risposta_11').innerHTML = risposta



let q12 = "<p>ESERCIZIO 12</p>"
document.getElementById('q12').innerHTML = q12

domanda = "<p>Usa un operatore ternario per assegnare ad una variabile chiamata 'gender' i valori 'male' o 'female'.<br>La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.</p>"
document.getElementById('domanda_12').innerHTML = domanda
risposta ='<ul><li>isMale = false;</li><br>let gender = isMale ? "male" : "female";<br>console.log(gender);</ul>'
document.getElementById('risposta_12').innerHTML = risposta



let q13 = "<p>ESERCIZIO 13</p>"
document.getElementById('q13').innerHTML = q13

domanda = "<p>Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.</p>"
document.getElementById('domanda_13').innerHTML = domanda

risposta ='<ul><li>let i = 0;</li><br>while (i <= 5) {<br>console.log(i);<br>i++<br>}</ul>'
document.getElementById('risposta_13').innerHTML = risposta



let q14 = "<p>ESERCIZIO 14</p>"
document.getElementById('q14').innerHTML = q14


domanda = "<p>Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.</p>"
document.getElementById('domanda_14').innerHTML = domanda

risposta ='<ul><li>let i = 0;</li><br>for (let i = 0; i <= 10; i++){<br>console.log(i)}</ul>'
document.getElementById('risposta_14').innerHTML = risposta




let q15 = "<p>ESERCIZIO 15</p>"
document.getElementById('q15').innerHTML = q15


domanda = "<p>Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.</p>"
document.getElementById('domanda_15').innerHTML = domanda

risposta ='<ul><i>for (let i = 0; i <= 10; i++) {</i><br>if (i === 3 || i === 8) {<br>continue<br>}<br>console.log(i);}<br>or <br><li>for (let i = 0; i <= 10; i++) {</li><br>if (i !== 3 && i !== 8) {<br>console.log(i);}}</ul>'
document.getElementById('risposta_15').innerHTML = risposta



let q16 = "<p>ESERCIZIO 16</p>"
document.getElementById('q16').innerHTML = q16

domanda = "<p>Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.</p>"
document.getElementById('domanda_16').innerHTML = domanda

risposta ='<ul><li>for (let i = 0; i <= 15; i++) {</li><br>if (i % 2 === 0) {<br>console.log(i + "risulta pari");<br>} else{<br>console.log(i + "risulta dispari");}}</ul>'
document.getElementById('risposta_16').innerHTML = risposta



let q17 = "<p>ESERCIZIO 17</p>"
document.getElementById('q17').innerHTML = q17

domanda = "<p>Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola 'Fizz' e se il numero è multiplo di 5, stampa 'Buzz'. Se le condizioni si verificano entrambe, stampa 'FizzBuzz'.</p>"
document.getElementById('domanda_17').innerHTML = domanda

risposta ='<ul><li>for (let i = 1; i <= 100; i++) {</li><br>if (i % 3 === 0 && i % 5 === 0) {<br>console.log("FizzBuzz");<br>} else if (i % 3 === 0) {<br>console.log("Fizz");<br>} else if (i % 5 === 0) {<br>console.log("Buz");<br>} else{<br>console.log(i);}}</ul>'
document.getElementById('risposta_17').innerHTML = risposta






let q18 = "<p>ESERCIZIO 18</p>"
document.getElementById('q18').innerHTML = q18

domanda = "<p>Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile 8day8, che può avere un valore da 1 a 7.<br>Ad esempio, se il valore di 'day' è 1, stampa in console 'Lunedì'; se il valore fosse 3, in console dovrebbe comparire 'Mercoledì'.</p>"
document.getElementById('domanda_18').innerHTML = domanda

risposta ='<ul><li>for (let i = 1; i <= 7; i++) {</li><br>if (i === 1) {<br>console.log("Lunedi");<br>} else if (i === 3){<br>console.log("Mercoledi");<br>}console.log(i);}</ul>'
document.getElementById('risposta_18').innerHTML = risposta


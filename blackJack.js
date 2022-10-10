 //Countin Cards, me costo un huevo aprender esto.

let count = 0;

function cc(card) {

var regex = /[JQKA]/;
if (card > 1 && card < 7) {
    count++;
} else if (card === 10 || regex.test(card)) {
    count--;
}

if (count > 0) return count + " Bet";
return count + " Hold";
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
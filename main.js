import './style.css';

const cards = document.querySelectorAll('.card');
let user_returned = 0;
let game_returned = 0;
/* let flag =  ; */
let returnPossible = true ;

for (let i = 0; i < cards.length; i++) {
    if (returnPossible) {
        cards[i].addEventListener('click', ()=> {
            console.log(cards[i]);
            returningCard(cards[i]);
            if (user_returned < 2 && cards[i].dataset.id != flag) {
                
            }
            cards[i].classList.remove("returned");
            user_returned ++;
            if (user_returned = 2 ) {
                returnPossible = false;
            }
            console.log(user_returned);
        })
    }
}

/* cards[i].dataset.id */

function returningCard(cardToReturn) {
    cardToReturn.classList.add('returning');
    setTimeout(() => {
        cardToReturn.classList.remove('returning','returned');
    }, 500);
}
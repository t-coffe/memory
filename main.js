import './style.css';

const cards = document.querySelectorAll('.card');
let user_returned = 0;
let game_returned = 0;
let flag  ;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', ()=> {
        console.log(cards[i])
        /* if (user_returned < 2 && flag != cards[i].data_key) {
            
        } */
        cards[i].classList.remove("returned");
    })
}
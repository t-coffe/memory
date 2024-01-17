import './style.css';

let userReturnedCard = 0;
let gameReturnedCard = 0;
let firstCard;
let secondCard;

const cards = document.querySelectorAll('.card');
const start = document.querySelector('button');
const span = document.querySelector('span');

function shuffleArray(arr) {
    let result = [];
    while (arr.length > 0) {
        const randomIndex = Math.floor(Math.random()*arr.length);
        result.push(arr[randomIndex]);
        arr = arr.slice(0,randomIndex).concat(arr.slice(randomIndex+1));
    } 
    return result;
}

function cardsShuffle(arr) {
    
}

start.addEventListener('click', ()=>{
    userReturnedCard = 0;
    gameReturnedCard = 0;
    
    const shuffledArr = shuffleArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]);

    for (let j = 0; j < cards.length; j++) {
        cards[j].classList.remove('visible');
        cards[j].textContent = shuffledArr[j];
        cards[j].setAttribute('data-index-number', shuffledArr[j])
    }
});

for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    element.addEventListener('click', ()=> {
        if (gameReturnedCard === cards.length) {
            alert('you finished the game, good job!');
            return;
        }
        if (userReturnedCard === 0 ) {
            firstCard = element;
            element.classList.add('visible');
            userReturnedCard ++;
            return;
        }
        if (userReturnedCard === 1) {
            secondCard = element;
            if (secondCard === firstCard) {
                alert('same card clicked');
                return;
            }
            element.classList.add('visible');
            userReturnedCard ++;
            if (firstCard.dataset.indexNumber === secondCard.dataset.indexNumber) {
                console.log('+ 1 duo');
                userReturnedCard = 0;
                gameReturnedCard +=2;
            }else {
                setTimeout(() => {
                    firstCard.classList.remove('visible');
                    secondCard.classList.remove('visible');
                    userReturnedCard = 0;
                }, 1000);
                
                console.log('they are not the same');
                
            }
            return;
        }        
        
    })
}
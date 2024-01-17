import './style.css';

let userReturnedCard = 0;
let gameReturnedCard = 0;
let firstCard;
let secondCard;

const cards = document.querySelectorAll('.card');

function shuffleArray(arr) {
    let result = [];
    while (arr.length > 0) {
        randomIndex = math.floor(maths.random()*arr.length);
        result.push(arr[randomIndex]);
        arr = arr.slice(0,randomIndex).concat(arr.slice(randomIndex+1));
        return result;
    } 
}

for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    element.addEventListener('click', ()=> {
        if (gameReturnedCard === 16) {
            console.log('you finished the game, good job!');
            return;
        }
        if (userReturnedCard === 0 ) {
            firstCard = element;
            element.classList.add('visible');
            element.classList.remove('hidden');
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
            element.classList.remove('hidden');
            userReturnedCard ++;
            if (firstCard.dataset.indexNumber === secondCard.dataset.indexNumber) {
                console.log('+ 1 duo');
                userReturnedCard = 0;
                gameReturnedCard +=2;
            }else {
                setTimeout(() => {
                    firstCard.classList.remove('visible');
                    secondCard.classList.remove('visible');
                    firstCard.classList.add('hidden');
                    secondCard.classList.add('hidden');
                    userReturnedCard = 0;
                }, 1000);
                
                console.log('they are not the same');
                
            }
            return;
        }        
        
    })
}
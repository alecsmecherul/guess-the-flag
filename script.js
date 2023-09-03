import { countries, flags } from './countries.js';

const gameContainer = document.getElementById('game')

const playButton = document.getElementById('play-button');

const options = document.getElementById('options')
let buttonsCreated = false;

const score = document.querySelector('.score');
let scoreCount = 0;

let correctFlagOption = null;

function generateNewQuestion() {
    const randomCountryIndex = Math.floor(Math.random() * countries.length);

    let randomIndex1 = Math.floor(Math.random() * flags.length);
    let randomIndex2 = Math.floor(Math.random() * flags.length);
    let randomIndex3 = Math.floor(Math.random() * flags.length);

    const randomCountry = countries[randomCountryIndex];

    let randomFlag1 = flags[randomIndex1];
    let randomFlag2 = flags[randomIndex2];
    let randomFlag3 = flags[randomIndex3];

    if (randomFlag1 === randomFlag2) {
        randomIndex1 = Math.floor(Math.random() * flags.length);
        randomFlag1 = flags[randomIndex1];
    } else if (randomFlag1 === randomFlag3) {
        randomIndex1 = Math.floor(Math.random() * flags.length);
        randomFlag1 = flags[randomIndex1];
    } else if (randomFlag2 === randomFlag3) {
        randomIndex2 = Math.floor(Math.floor() * flags.length);
        randomFlag2 = flags[randomIndex2];
    }

    const correctCountry = flags[randomCountryIndex];

    const correctOption = Math.random();

    document.querySelector('.question').innerHTML = 'Choose the flag of:';

    document.querySelector('.country').innerHTML = randomCountry;

    if (!buttonsCreated) {
        options.innerHTML += '<button id="option1"></button>';
        options.innerHTML += '<button id="option2"></button>';
        options.innerHTML += '<button id="option3"></button>';
        buttonsCreated = true;
    }

    const option1 = document.getElementById('option1');
    option1.innerHTML = `<img src="${randomFlag1}"></img>`;
    
    const option2 = document.getElementById('option2');
    option2.innerHTML = `<img src="${randomFlag2}"></img>`;

    const option3 = document.getElementById('option3');
    option3.innerHTML = `<img src="${randomFlag3}"></img>`;

    if (correctOption > 0 && correctOption <= 1/3) {
        option1.innerHTML = `<img src="${correctCountry}"></img>`;
    } else if (correctOption > 1/3 && correctOption <= 1/2) {
        option2.innerHTML = `<img src="${correctCountry}"></img>`;
    } else if (correctOption > 1/2 && correctOption <= 1) {
        option3.innerHTML = `<img src="${correctCountry}"></img>`;
    }

    for(let i = 1; i < 4; ++i) {
        const option = document.getElementById(`option${i}`);
        const optionImg = option.querySelector('img');
        if(option && optionImg.getAttribute('src') === correctCountry) {
            correctFlagOption = document.getElementById(`option${i}`);
        }
    }

    gameContainer.className = 'intro-game'

    option1.addEventListener('click', () => {
        console.log('option 1 pressed');
        const option1Image = option1.querySelector('img');
        if (option1Image && option1Image.getAttribute('src') === correctCountry) {
            choseFlag('correct');
        } else {
            choseFlag('wrong');
        }
    })

    option2.addEventListener('click', () => {
        console.log('option 2 pressed');
        const option2Image = option2.querySelector('img');
        if (option2Image && option2Image.getAttribute('src') === correctCountry) {
            choseFlag('correct');
        } else {
            choseFlag('wrong');
        }
    })

    option3.addEventListener('click', () => {
        console.log('option 3 pressed');
        const option3Image = option3.querySelector('img');
        if (option3Image && option3Image.getAttribute('src') === correctCountry) {
            choseFlag('correct');
        } else {
            choseFlag('wrong');
        }
    })

    score.innerHTML = `Score: ${scoreCount}`;
}

playButton.addEventListener('click', () => {
    playButton.className = 'out-play-button'
    setTimeout(() => {
        generateNewQuestion()
        playButton.style.display = 'none'
    }, 300)
})

const message = document.getElementById('message');
const messageContainer = document.getElementById('message-container')

const correctAnswerBgColor = '#b0fb5a'
const wrongAnswerBgColor = '#ff5454'

function choseFlag(result) {
    if (result === 'correct') {
        scoreCount++;
        message.style.opacity = 1
        message.innerHTML = 'Correct!';
        messageContainer.style.opacity = 1;
        messageContainer.style.backgroundColor = correctAnswerBgColor;
        setTimeout(() => {
            gameContainer.className = 'out-game'
            messageContainer.style.opacity = 0;
            setTimeout(() => {
                options.innerHTML = '';
                buttonsCreated = false;
                message.innerHTML = '';
                generateNewQuestion();
            }, 300)
        }, 1000);
    } else {
        if(scoreCount > 0) {
            console.log('-1 point');
            --scoreCount;
            console.log(scoreCount);
            score.innerHTML = `Score: ${scoreCount}`;
        }
        message.innerHTML = 'Wrong!';
        messageContainer.style.opacity = 1;
        messageContainer.style.backgroundColor = wrongAnswerBgColor;

        setTimeout(() => {
            messageContainer.style.opacity = 0;

            setTimeout(() => {
                buttonsCreated = false;
            }, 600)
        }, 1000);

        setTimeout(() => {
            correctFlagOption.style.backgroundColor = correctAnswerBgColor
            setTimeout(() => {
                gameContainer.className = 'out-game';

                setTimeout(() => {
                    correctFlagOption.style.backgroundColor = 'white'
                    correctFlagOption = null
                    message.innerHTML = '';
                    options.innerHTML = '';
                    generateNewQuestion()
                }, 300)
            }, 1000)
        }, 1000)
    } 
}
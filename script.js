import { countries, flags } from './countries.js';

const playButton = document.querySelector('.play-button');
let buttonsCreated = false;

const score = document.querySelector('.score');
let scoreCount = 0;

function generateNewQuestion() {
    const randomCountryIndex = Math.floor(Math.random() * countries.length);

    const randomIndex1 = Math.floor(Math.random() * flags.length);
    const randomIndex2 = Math.floor(Math.random() * flags.length);
    const randomIndex3 = Math.floor(Math.random() * flags.length);

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
        document.querySelector('.options').innerHTML += '<button class="option1"></button>';
        document.querySelector('.options').innerHTML += '<button class="option2"></button>';
        document.querySelector('.options').innerHTML += '<button class="option3"></button>';
        buttonsCreated = true;
    }

    const option1 = document.querySelector('.option1');
    option1.innerHTML = `<img src="${randomFlag1}"></img>`;
    
    const option2 = document.querySelector('.option2');
    option2.innerHTML = `<img src="${randomFlag2}"></img>`;

    const option3 = document.querySelector('.option3');
    option3.innerHTML = `<img src="${randomFlag3}"></img>`;

    if (correctOption > 0 && correctOption <= 1/3) {
        option1.innerHTML = `<img src="${correctCountry}"></img>`;
    } else if (correctOption > 1/3 && correctOption <= 1/2) {
        option2.innerHTML = `<img src="${correctCountry}"></img>`;
    } else if (correctOption > 1/2 && correctOption <= 1) {
        option3.innerHTML = `<img src="${correctCountry}"></img>`;
    }

    option1.addEventListener('click', () => {
        const option1Image = option1.querySelector('img');
        if (option1Image && option1Image.getAttribute('src') === correctCountry) {
            choseFlag('correct');
        } else {
            choseFlag('wrong');
        }
    })

    option2.addEventListener('click', () => {
        const option2Image = option2.querySelector('img');
        if (option2Image && option2Image.getAttribute('src') === correctCountry) {
            choseFlag('correct');
        } else {
            choseFlag('wrong');
        }
    })

    option3.addEventListener('click', () => {
        const option3Image = option3.querySelector('img');
        if (option3Image && option3Image.getAttribute('src') === correctCountry) {
            choseFlag('correct');
        } else {
            choseFlag('wrong');
        }
    })

    score.innerHTML = `Score: ${scoreCount}`;
}

playButton.addEventListener('click', generateNewQuestion)

const message = document.querySelector('.message');
let canDisplayResult = true;

function choseFlag(result) {
    if (result === 'correct') {
        scoreCount++;
        message.innerHTML = 'Correct!';
        setTimeout(() => {
            message.innerHTML = '';
            generateNewQuestion();
        }, 1000);
    } else if (result === 'wrong') {
        message.innerHTML = 'Wrong!';
        setTimeout(() => {
            message.innerHTML = '';
        }, 1000);
    } 
}
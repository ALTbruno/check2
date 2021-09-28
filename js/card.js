import * as cardCreator from './cardCreator.js';
import * as themeSwitcher from './themeSwitcher.js';

const cardSectionUser = document.querySelector('#card-section-user');
const cardSectionAPI = document.querySelector('#card-section-api');
const botaoDark = document.getElementById('btn-dark');
const nav = document.querySelector('nav');
const a = document.getElementById('a-to-do');
const h1 = document.querySelectorAll('h1');
const sobreNos = document.getElementById('about-us');

document.querySelector(".navbar-brand").addEventListener('click', function () {
    location.href = 'index.html';
});

// User Card builder
let userCards = new Array();
userCards = userCards.concat(JSON.parse(localStorage.getItem('cardUser')));
for (const card of userCards) {
    cardSectionUser.appendChild(cardCreator.criarCardUser(card.titulo,card.descricao,card.inicio,card.fim,card.concluido));
}

// API Card builder
let apiCards = new Array();
apiCards = apiCards.concat(JSON.parse(sessionStorage.getItem('cardAPI')));
for (const card of apiCards) {
    cardSectionAPI.appendChild(cardCreator.criarCardAPI(card.userId,card.id,card.title,card.completed));
}

botaoDark.addEventListener('click', () =>
{
    if(document.querySelector('body').style.backgroundColor == "white")
    {
        themeSwitcher.darkMode(); 
    }
    else
    {
        themeSwitcher.lightMode();
    }
})
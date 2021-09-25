import * as cardCreator from './cardCreator.js';

const cardSectionUser = document.querySelector('#card-section-user');
const cardSectionAPI = document.querySelector('#card-section-api');

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

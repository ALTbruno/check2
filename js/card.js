document.querySelector(".navbar-brand").addEventListener('click', function () {
    location.href = 'index.html';
});

import { criarCardUser } from './cardCreator.js';
const cardSectionUser = document.querySelector('#card-section-user');
const cardSectionAPI = document.querySelector('#card-section-api');

let userCards = new Array();
userCards = userCards.concat(JSON.parse(localStorage.getItem('card')));
for (const card of userCards) {
    cardSectionUser.appendChild(criarCardUser(card.titulo,card.descricao,card.inicio,card.fim,card.concluido));
}

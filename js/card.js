document.querySelector(".navbar-brand").addEventListener('click', function () {
    location.href = 'index.html';
});

import generateCards from './cardCreator.js';
const cardSectionUser = document.querySelector('#card-section-user');
const cardSectionAPI = document.querySelector('#card-section-api');

let dateFormater = function (date) {
    return new Date(date).toLocaleDateString();
}

let userCards = new Array();
userCards = userCards.concat(JSON.parse(localStorage.getItem('card')));
console.log(userCards);
for (const card of userCards) {
    cardSectionUser.appendChild(generateCards(card.titulo,card.descricao,dateFormater(card.inicio),dateFormater(card.fim),card.concluido));
}

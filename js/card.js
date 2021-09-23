const cardSectionUser = document.querySelector('#card-section-user');
const cardSectionAPI = document.querySelector('#card-section-api');

document.querySelector(".navbar-brand").addEventListener('click', function () {
    location.href = 'index.html';
});

let criarCardUser = function () {
    // TO DO: Refatorar função para página card.html (remover cardSection e Append)
    // USAR LOCALSTORAGE

    // coluna de cards
    let divColCards = document.createElement('div');
    divColCards.classList.add('col-md-3', 'col-sm-12');
    divColCards.setAttribute('id', 'card-col');

    // card 
    let card = document.createElement('div');
    card.classList.add('card', 'container');

    // row de elementos do card
    let cardRow = document.createElement('div');
    cardRow.classList.add('row','justify-content-center');

    // coluna de elementos do card
    let cardCol = document.createElement('div');
    cardCol.classList.add('col-9');

    // row de datas
    let dataRow = document.createElement('div');
    dataRow.classList.add('row','justify-content-around');

    // coluna da data de criação
    let dataInicioCol = document.createElement('div');
    dataInicioCol.classList.add('col-sm-auto');

    // coluna da data de conclusão
    let dataConclusaoCol = document.createElement('div');
    dataConclusaoCol.classList.add('col-sm-auto');

    // row de botões
    let btnRow = document.createElement('div');
    btnRow.classList.add('row','justify-content-around');

    // coluna do checkbox de conclusão
    let checkCol = document.createElement('div');
    checkCol.classList.add('col-sm-auto');

    // coluna do botão de exclusão
    let btnExcluirCol = document.createElement('div');
    btnExcluirCol.classList.add('col-sm-auto');

    // elementos do card
    let cardDesc = document.createElement('div');
    cardDesc.classList.add('container','card-desc');
    // TO DO: settar conteúdo da descrição do card
    cardDesc.innerText = 'Descrição do card';
    let cardData = document.createElement('div');
    cardData.classList.add('container','card-data');
    // TO DO: settar data de criação
    cardData.innerText = 'Data de criação';
    let cardFinal = document.createElement('div');
    cardFinal.classList.add('container','card-final');
    // TO DO: settar data de conclusão
    cardFinal.innerText = 'Data de conclusão';
    let cardCheck = document.createElement('div');
    cardCheck.classList.add('form-check');
    let cardCheckInput = document.createElement('input');
    cardCheckInput.classList.add('form-check-input');
    cardCheckInput.type = 'checkbox';
    cardCheckInput.id = 'checkbox';
    let cardCheckLabel = document.createElement('label');
    cardCheckLabel.classList.add('form-check-label');
    cardCheckLabel.setAttribute('for', 'checkbox');
    cardCheckLabel.innerText = 'Concluído';
    let cardBtnExcluir = document.createElement('button');
    cardBtnExcluir.classList.add('btn','btn-danger','btn-excluir');
    cardBtnExcluir.innerText = 'Excluir';

    // adicionando elementos ao card
    card.appendChild(cardRow);
    cardRow.appendChild(cardCol);
    cardCol.appendChild(cardDesc);
    cardCol.appendChild(dataRow);
    dataRow.appendChild(dataInicioCol);
    dataRow.appendChild(dataConclusaoCol);
    dataInicioCol.appendChild(cardData);
    dataConclusaoCol.appendChild(cardFinal);
    cardCol.appendChild(btnRow);
    btnRow.appendChild(checkCol);
    checkCol.appendChild(cardCheck);
    cardCheck.appendChild(cardCheckInput);
    cardCheck.appendChild(cardCheckLabel);
    btnRow.appendChild(btnExcluirCol);
    btnExcluirCol.appendChild(cardBtnExcluir);

    // adicionando card ao container dele
    divColCards.appendChild(card);
    cardSectionUser.appendChild(divColCards);
}

criarCardUser();

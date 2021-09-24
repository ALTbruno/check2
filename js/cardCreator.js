export default function criarCardUser (titulo,descricao,dataInicio,dataFinal,concluido) {
    // coluna de cards
    let divColCards = document.createElement('div');
    divColCards.classList.add('col-sm-12','col-md-4','mt-5');
    divColCards.setAttribute('id', 'card-col');

    // card 
    let card = document.createElement('div');
    card.classList.add('card', 'container-fluid');

    // row de elementos do card
    let cardRow = document.createElement('div');
    cardRow.classList.add('row','justify-content-center');

    // coluna de elementos do card
    let cardCol = document.createElement('div');
    cardCol.classList.add('col-9');

    // row de datas
    let dataRow = document.createElement('div');
    dataRow.classList.add('row','justify-content-around');

    // coluna da data
    let dataCol = document.createElement('div');
    dataCol.classList.add('col-auto');

    // row de botões
    let btnRow = document.createElement('div');
    btnRow.classList.add('row','justify-content-around');

    // coluna do checkbox de conclusão
    let checkCol = document.createElement('div');
    checkCol.classList.add('col-6','d-flex','justify-content-center','align-items-center');

    // coluna do botão de exclusão
    let btnExcluirCol = document.createElement('div');
    btnExcluirCol.classList.add('col-6','d-flex','justify-content-center','align-items-center');

    // elementos do card
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('container','card-title','text-center');
    cardTitle.textContent = titulo;
    let cardDesc = document.createElement('div');
    cardDesc.classList.add('container','card-desc','text-center');
    cardDesc.innerText = descricao;
    let cardData = document.createElement('div');
    cardData.classList.add('container','card-data');
    cardData.innerText = dataInicio + ' - ' + dataFinal;
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
    cardCol.appendChild(cardTitle);
    cardCol.appendChild(cardDesc);
    cardCol.appendChild(dataRow);
    dataRow.appendChild(dataCol);
    dataCol.appendChild(cardData);
    cardCol.appendChild(btnRow);
    btnRow.appendChild(checkCol);
    checkCol.appendChild(cardCheck);
    cardCheck.appendChild(cardCheckInput);
    cardCheck.appendChild(cardCheckLabel);
    btnRow.appendChild(btnExcluirCol);
    btnExcluirCol.appendChild(cardBtnExcluir);
    divColCards.appendChild(card);

    return divColCards;
}
const form = document.querySelector('form');
const finalDateInput = document.querySelector('#data-conclusao');
const descInput = document.querySelector('#descricao-tarefa');
document.querySelector('#data-criacao').valueAsDate = new Date();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    criarCardUser();
    criarCardAPI();
});

form.addEventListener('input', (e) => {
    e.target.setCustomValidity('');
    e.target.checkValidity();
    if(e.target.name === 'data-conclusao'){
        checkDateRange(e.target);
    }
});

finalDateInput.addEventListener('invalid', () => {
    if (finalDateInput.validity.valueMissing) {
        finalDateInput.setCustomValidity('Por favor, preencha a data de conclusão!');
    }
});

descInput.addEventListener('invalid', () => {
    if (descInput.validity.valueMissing) {
        descInput.setCustomValidity('Por favor, preencha a descrição!');
    }
    if(descInput.validity.tooShort) {
        descInput.setCustomValidity('A descrição deve ter pelo menos 10 caracteres!');
    }
});

let criarCardUser = function () {
    // TO DO: Refatorar função para página card.html (remover cardSection e Append)
    // USAR LOCALSTORAGE

    // coluna de cards
    let cardSection = document.createElement('div');
    cardSection.classList.add('col-md-3', 'col-sm-12')

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
    cardDesc.innerText = descInput.value;
    let cardData = document.createElement('div');
    cardData.classList.add('container','card-data');
    cardData.innerText = document.querySelector('#data-criacao').value;
    let cardFinal = document.createElement('div');
    cardFinal.classList.add('container','card-final');
    cardFinal.innerText = document.querySelector('#data-conclusao').value;
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

    // adicionando card ao cardCol
    cardSection.appendChild(card);
    document.body.appendChild(cardSection);
}

let checkDateRange = function (input) {
    let dataCriacao = new Date(document.querySelector('#data-criacao').valueAsDate);
    let dataConclusao = new Date(input.valueAsDate); 
    if(dataConclusao < dataCriacao){
        input.setCustomValidity('A data de conclusão não pode ser menor que a data de criação!');
    }
}

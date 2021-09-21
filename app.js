const form = document.querySelector('form');
const finalDateInput = document.querySelector('#data-conclusao');
const descInput = document.querySelector('#descricao-tarefa');
document.querySelector('#data-criacao').valueAsDate = new Date();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    criarCard();
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

let criarCard = function () {
    // TO DO: Criar card
    // USAR LOCALSTORAGE
}

let checkDateRange = function (input) {
    let dataCriacao = new Date(document.querySelector('#data-criacao').valueAsDate);
    let dataConclusao = new Date(input.valueAsDate); 
    if(dataConclusao < dataCriacao){
        input.setCustomValidity('A data de conclusão não pode ser menor que a data de criação!');
    }
}

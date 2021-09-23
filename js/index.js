const form = document.querySelector('#card-data');
const finalDateInput = document.querySelector('#data-conclusao');
const titleInput = document.querySelector('#titulo');
const descInput = document.querySelector('#descricao-tarefa');
document.querySelector('#data-criacao').valueAsDate = new Date();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit(e);
    location.href = 'card.html';
});

form.addEventListener('input', (e) => {
    e.target.setCustomValidity('');
    e.target.checkValidity();
    if(e.target.id === 'data-conclusao'){
        checkDateRange(e.target);
    }
});

finalDateInput.addEventListener('invalid', () => {
    if (finalDateInput.validity.valueMissing) {
        finalDateInput.setCustomValidity('Por favor, preencha a data de conclusão!');
    }
});

titleInput.addEventListener('invalid',()=>{
    if (titleInput.validity.valueMissing){
        titleInput.setCustomValidity('Por favor, dê um título para a sua tarefa!');
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

let checkDateRange = function (input) {
    let dataCriacao = new Date(document.querySelector('#data-criacao').valueAsDate);
    let dataConclusao = new Date(input.valueAsDate); 
    if(dataConclusao < dataCriacao){
        input.setCustomValidity('A data de conclusão não pode ser menor que a data de criação!');
    }
}

function handleFormSubmit(event) {
    let cards = new Array();
    if(localStorage.getItem('card')!==null){
        cards = cards.concat(JSON.parse(localStorage.getItem('card')));
    }
    console.log(cards);
    let data = new FormData(event.target);
    let formJSON = Object.fromEntries(data.entries());
    formJSON.concluido = false;
    cards.push(formJSON);
    let jasonStatan = JSON.stringify(cards);
    localStorage.setItem('card', jasonStatan);
  }

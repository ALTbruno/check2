const form = document.querySelector('#card-data');
const finalDateInput = document.querySelector('#data-conclusao');
const titleInput = document.querySelector('#titulo');
const descInput = document.querySelector('#descricao-tarefa');
const botaoDark = document.getElementById('btn-dark');

import * as themeSwitcher from './themeSwitcher.js';
import * as jasonStatan from './jsonManipulator.js';

document.querySelector('#data-criacao').valueAsDate = new Date();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit(e);
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

let checkDateRange = function (input) {
    let dataCriacao = new Date(document.querySelector('#data-criacao').valueAsDate);
    let dataConclusao = new Date(input.valueAsDate); 
    if(dataConclusao < dataCriacao){
        input.setCustomValidity('A data de conclusão não pode ser menor que a data de criação!');
    }
}

async function handleFormSubmit(event) {
    // User cards
    localStorage.setItem('cardUser', jasonStatan.formJSONmaker(event.target));
    // API cards
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    if(sessionStorage.getItem('cardAPI') === null){
        try {
            let response = await jasonStatan.apiJSONmaker(url);
            sessionStorage.setItem('cardAPI', response);
            window.location.href = 'card.html'; 
        } catch (error) {
            console.log(error.messag);
            alert('Erro ao carregar os dados da API!\n\nErro ' + error.message);
        }
    }else{
        window.location.href = 'card.html';   
    }
  }

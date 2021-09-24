const form = document.querySelector('#card-data');
const finalDateInput = document.querySelector('#data-conclusao');
const titleInput = document.querySelector('#titulo');
const descInput = document.querySelector('#descricao-tarefa');
document.querySelector('#data-criacao').valueAsDate = new Date();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit(e);
    window.location.href = 'card.html';
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
    let data = new FormData(event.target);
    let formJSON = Object.fromEntries(data.entries());
    formJSON.concluido = false;
    formJSON.inicio = new Date(formJSON.inicio.replace(/-/g, '\/'));
    formJSON.fim = new Date(formJSON.fim.replace(/-/g, '\/'));
    cards.push(formJSON);
    let jasonStatan = JSON.stringify(cards);
    localStorage.setItem('card', jasonStatan);
  }

  //Implementação do Dark mode


let botaoDark = document.getElementById('btn-dark');
let nav = document.querySelector('nav');
let a = document.getElementById('a-to-do');
let h1 = document.querySelector('h1');
let sobreNos = document.getElementById('about-us');


function darkMode()
{
    document.querySelector('body').style.backgroundColor = "black";
    botaoDark.classList.remove("btn-dark");
    botaoDark.classList.add("btn-light");
    botaoDark.innerHTML = 'Light Mode';
    
    nav.classList.remove('bg-light');
    nav.classList.add('bg-black');

    a.style.color = "white";
    h1.style.color = "white";
    sobreNos.style.color = "white";

}

function lightMode()
{
    document.querySelector('body').style.backgroundColor = "white";
    botaoDark.classList.remove("btn-light");
    botaoDark.classList.add("btn-dark");
    botaoDark.innerHTML = 'Dark Mode';
    
    nav.classList.remove('bg-black');
    nav.classList.add('bg-light');


    a.style.color = "black";
    h1.style.color = "black";
    sobreNos.style.color = "black";
}

botaoDark.addEventListener('click', () =>
{
    if(document.querySelector('body').style.backgroundColor == "white")
    {
        darkMode();
    }
    else
    {
        lightMode();
    }
})

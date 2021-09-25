let dateFormater = function (dataJSON) {
    let data = new Date(dataJSON);
    data = data.getFullYear()+'/'+`${data.getMonth()+1}`+'/'+data.getDate();
    return new Date(data).toLocaleDateString();
}

export function criarCardUser (titulo,descricao,dataInicio,dataFinal,concluido) {
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
    cardTitle.classList.add('card-title','text-center','fw-bold');
    cardTitle.textContent = titulo;
    let cardDesc = document.createElement('div');
    cardDesc.classList.add('container','card-desc','text-center');
    cardDesc.innerText = descricao;
    let cardData = document.createElement('div');
    cardData.classList.add('container','card-data','text-nowrap');
    cardData.innerText = dateFormater(dataInicio) + ' - ' + dateFormater(dataFinal);
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
    if(concluido===true){
        cardCheckInput.checked = true;
        cardTitle.classList.remove('fw-bold');
    }
    let cardBtnExcluir = document.createElement('button');
    cardBtnExcluir.classList.add('btn','btn-danger','btn-excluir');
    cardBtnExcluir.innerText = 'Excluir';
    
    cardBtnExcluir.onclick = function(){
        let delConfirm = confirm("Deseja excluir a nota?")
        if (delConfirm){
        card.parentNode.removeChild(card)
        localStorage.removeItem('card')
        localStorage.removeItem('cardUser')
        }
    }  

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

export function criarCardAPI (userId,taskId,titulo,concluido) {
    // coluna de cards
    let divColCards = document.createElement('div');
    divColCards.classList.add('col-sm-12','col-md-4','mt-5','container-fluid');
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

    // elementos do card
    let cardUserId = document.createElement('h5');
    cardUserId.classList.add('cardAPI-user-id','text-center');
    cardUserId.textContent = 'User id: ' + userId;
    let cardTaskId = document.createElement('div');
    cardTaskId.classList.add('container','cardAPI-task-id');
    let taskIdParagraph = document.createElement('p');
    taskIdParagraph.classList.add('text-center');
    taskIdParagraph.textContent = 'Task ID: ' + taskId;
    cardTaskId.appendChild(taskIdParagraph);
    let cardTitle = document.createElement('div');
    cardTitle.classList.add('container','cardAPI-data');
    let titleParahraph = document.createElement('p');
    titleParahraph.classList.add('text-center','fw-bold');
    titleParahraph.textContent = 'Título: ' + titulo;
    cardTitle.appendChild(titleParahraph);
    let cardCheck = document.createElement('div');
    cardCheck.classList.add('form-check');
    let cardCheckInput = document.createElement('input');
    cardCheckInput.classList.add('form-check-input');
    cardCheckInput.type = 'checkbox';
    cardCheckInput.id = 'checkboxAPI';
    if(concluido===true){
        cardCheckInput.checked = true;
        titleParahraph.classList.remove('fw-bold');
    }
    let cardCheckLabel = document.createElement('label');
    cardCheckLabel.classList.add('form-check-label');
    cardCheckLabel.setAttribute('for', 'checkbox');
    cardCheckLabel.innerText = 'Concluído';

    // adicionando elementos ao card
    card.appendChild(cardRow);
    cardRow.appendChild(cardCol);
    cardCol.appendChild(cardUserId);
    cardCol.appendChild(cardTaskId);
    cardCol.appendChild(cardTitle);
    cardCol.appendChild(cardCheck);
    cardCheck.appendChild(cardCheckInput);
    cardCheck.appendChild(cardCheckLabel);
    divColCards.appendChild(card);

    return divColCards;
}

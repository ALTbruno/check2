export function formJSONmaker(form){
    let cards = new Array();
    if(localStorage.getItem('card')!==null){
        cards = cards.concat(JSON.parse(localStorage.getItem('card')));
    }
    let data = new FormData(form);
    let formJSON = Object.fromEntries(data.entries());
    formJSON.concluido = false;
    formJSON.inicio = new Date(formJSON.inicio.replace(/-/g, '\/'));
    formJSON.fim = new Date(formJSON.fim.replace(/-/g, '\/'));
    cards.push(formJSON);
    return JSON.stringify(cards);
}

export async function apiJSONmaker(url){
    return await fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.text()
    })
}

const botaoDark = document.getElementById('btn-dark');
const nav = document.querySelector('nav');
const a = document.getElementById('a-to-do');
const h1 = document.querySelector('h1');
const sobreNos = document.getElementById('about-us');
const apiH1 = document.getElementById('api-card');


export function darkMode() {
    document.querySelector('body').style.backgroundColor = "black";
    botaoDark.classList.remove("btn-dark");
    botaoDark.classList.add("btn-light");
    botaoDark.innerHTML = 'Light Mode';

    nav.classList.remove('bg-light');
    nav.classList.add('bg-black');

    a.style.color = "white";
    h1.style.color = "white";
    apiH1.style.color = "white";
    sobreNos.style.color = "white";

}

export function lightMode() {
    document.querySelector('body').style.backgroundColor = "white";
    botaoDark.classList.remove("btn-light");
    botaoDark.classList.add("btn-dark");
    botaoDark.innerHTML = 'Dark Mode';

    nav.classList.remove('bg-black');
    nav.classList.add('bg-light');


    a.style.color = "black";
    h1.style.color = "black";
    apiH1.style.color = "black";
    sobreNos.style.color = "black";
}

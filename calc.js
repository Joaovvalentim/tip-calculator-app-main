let individualValue = 0;
let totalValue = 0;

function calcPor(event) {
    let accountValue = document.querySelector("#account").value;
    let peopleNumber = document.querySelector('#people').value;
    let selectedTip = event.target.value;

    let porcentagem = eval((accountValue / 100) * selectedTip);

    individualValue = porcentagem;
    totalValue = eval(porcentagem * peopleNumber)

    document.querySelector('#valor-unico').innerHTML = `$ ${individualValue}`;
    document.querySelector('#valor-total').innerHTML = `$ ${totalValue}`;
}

const testingButtons = document.querySelectorAll('.button');

for (const button of testingButtons) {
    button.addEventListener("click", calcPor);
}

function resetValues(){
    individualValue = 0;
    totalValue = 0;
    document.querySelector("#account").value = '';
    document.querySelector('#people').value = '';
    document.querySelector('#valor-unico').innerHTML = '';
    document.querySelector('#valor-total').innerHTML = '';
}
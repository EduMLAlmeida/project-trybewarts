const email = document.getElementById('email');
const password = document.getElementById('password');
const formButton = document.getElementById('form-button');

function testEmail() {
    const emailValue = email.value;
    const passwordValue = password.value;

    if(email.value === 'tryber@teste.com' && password.value === '123456') {
        window.alert('Olá, Tryber!')
    } else {
        window.alert('Email ou senha inválidos.')
    };
}

formButton.addEventListener('click', testEmail)

const agreementCheckBox = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');
buttonSubmit.disabled = true;

function testSubmit(event) {
    if (buttonSubmit.disabled === true) {
        buttonSubmit.disabled = false;
    } else if (buttonSubmit.disabled === false) {
        buttonSubmit.disabled = true
    }
}

agreementCheckBox.addEventListener('click', testSubmit)

const counter = document.getElementById('textarea');

function testTextarea(event) {
    const quant = event.target.value.length;
    const quant2 = document.getElementById('counter');
    quant2.innerText = 500 - quant;
}

counter.addEventListener('keyup', testTextarea);

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email2 = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.getElementById('label-family');
const materias = document.getElementById('label-content');
const avaliacao = document.getElementById('label-rate-form');
const observacoes = document.getElementById('textarea');

const nomeli = document.getElementById('nome-li');
const emailli = document.getElementById('email-li');
const casali = document.getElementById('casa-li');
const familiali = document.getElementById('familia-li');
const materiasli = document.getElementById('materias-li');
const avaliacaoli = document.getElementById('avaliacao-li');
const observacoesli = document.getElementById('observacoes-li');

function testContent(event){
    event.preventDefault();
    nomeli.innerText = 'Nome: ' + nome.value + ' ' + sobrenome.value;
}

const buttonSubmit2 = document.getElementById('submit-btn');
buttonSubmit2.addEventListener('click', testContent);

const email = document.getElementById('email');
const password = document.getElementById('password');
const formButton = document.getElementById('form-button');

function testEmail() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

formButton.addEventListener('click', testEmail);

const agreementCheckBox = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');
buttonSubmit.disabled = true;

function testSubmit() {
  if (buttonSubmit.disabled === true) {
    buttonSubmit.disabled = false;
  } else if (buttonSubmit.disabled === false) {
    buttonSubmit.disabled = true;
  }
}

agreementCheckBox.addEventListener('click', testSubmit);

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
const familia = document.querySelectorAll('.family-radio');
const materias = document.querySelectorAll('.subject');
const avaliacao = document.querySelectorAll('.rate-radio');
const observacoes = document.getElementById('textarea');

const nomeli = document.getElementById('nome-li');
const emailli = document.getElementById('email-li');
const casali = document.getElementById('casa-li');
const familiali = document.getElementById('familia-li');
const materiasli = document.getElementById('materias-li');
const avaliacaoli = document.getElementById('avaliacao-li');
const observacoesli = document.getElementById('observacoes-li');

function testContent(event) {
  event.preventDefault();
  nomeli.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  emailli.innerText = `Email: ${email2.value}`;
  casali.innerText = `Casa: ${casa.value}`;
  for (let index = 0; index < familia.length; index += 1) {
    if (familia[index].checked) {
      familiali.innerText = `Família: ${familia[index].value}`;
    }
  }
}

function testContent2() {
  const arrayMaterias = [];
  for (let index2 = 0; index2 < materias.length; index2 += 1) {
    if (materias[index2].checked) {
      arrayMaterias.push(` ${materias[index2].value}`);
    }
  }
  materiasli.innerText = `Matérias: ${arrayMaterias.toString()}`;
}

function testContent3() {
  for (let index3 = 0; index3 < avaliacao.length; index3 += 1) {
    if (avaliacao[index3].checked) {
      avaliacaoli.innerText = `Avaliação: ${avaliacao[index3].value}`;
    }
  }
  observacoesli.innerText = `Observações: ${observacoes.value}`;
}

const buttonSubmit2 = document.getElementById('submit-btn');
buttonSubmit2.addEventListener('click', testContent);
buttonSubmit2.addEventListener('click', testContent2);
buttonSubmit2.addEventListener('click', testContent3);

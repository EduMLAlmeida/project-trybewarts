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

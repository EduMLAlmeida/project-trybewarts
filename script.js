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

    console.log(emailValue);
    console.log(typeof(emailValue));
    console.log(passwordValue);
    console.log(typeof(passwordValue));
}

formButton.addEventListener('click', testEmail)
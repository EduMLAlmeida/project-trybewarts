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

// const agreementCheckBox = document.getElementById('agreement');

// function testSubmit() {
//     // const agreementCheckBox2 = document.getElementById('agreement');
//     const agreementCheckBoxValue = agreementCheckBox.value;
    
//     console.log(agreementCheckBoxValue)
    
//     // const passwordValue = password.value;

//     // if(email.value === 'tryber@teste.com' && password.value === '123456') {
//     //     window.alert('Olá, Tryber!')
//     // } else {
//     //     window.alert('Email ou senha inválidos.')
//     // };
// }

// agreementCheckBox.addEventListener('click', testSubmit)

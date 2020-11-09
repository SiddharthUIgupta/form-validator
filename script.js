const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pass2 = document.getElementById('pass2');

//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//cehck email
function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username)
    }

    if (email.value === '') {
        showError(email, 'email is required');
    } else if (!validateEmail(email.value)) {
        showError(email, 'email is not valid');
    } else {
        showSuccess(email)
    }

    if (password.value === '') {
        showError(password, 'password is required')
    } else {
        showSuccess(password)
    }

    if (pass2.value === '' || pass2.value !== password.value) {
        showError(pass2, 'password doesnt match')
    } else {
        showSuccess(pass2)
    }
});
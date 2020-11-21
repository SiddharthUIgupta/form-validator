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
    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email id not valid');
    }
}


checkRequired = (inputArr) => {
    inputArr.forEach(element => {
        if (element.value.trim() === "") {
            return showError(element, `add your ${getFieldName(element)}`);

        } else {
            showSuccess(element);
        }
    });
}

function checkLength(element, min, max) {
    if (element.value.length < min) {
        showError(element, `${getFieldName(element)} must be at least ${min}`);
    } else if (element.value.length > max) {
        showError(element, `${getFieldName(element)} must be less than ${max}`);

    } else {
        showSuccess(element);
    }
}
function checkPassword(pas1, pas2) {
    if (pas1.value !== pas2.value) {
        showError(pas2, 'passwords do not match');
    }
}
const getFieldName = function (element) {
    return (element.id.charAt(0).toUpperCase() + element.id.slice(1));

}


form.addEventListener('submit', function (e) {
    e.preventDefault();


    checkRequired([username, email, password, pass2]);
    checkLength(username, 3, 20);
    checkLength(password, 6, 30);
    validateEmail(email);
    checkPassword(password, pass2);
});
let username = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
const form = document.querySelector('.form');
const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
//minimum 8 characters, 1 lowercase and 1 uppercase and at least 1 number

let nameWarning = document.querySelector('.name-warning');
let passWarning = document.querySelector('.pass-warning');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (password.classList.contains('valid') && username.classList.contains('valid')){
        alert("WELCOME");
        username.value = '';
        email.value = '';
        password.value = '';
    } else {
        alert("Enter a valid username and password!")
    }
})

const validate = (e) => {
    let target = e.target;

    if (target.name == "password") {
        if (pass_reg.test(target.value)) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
            passWarning.innerHTML = '';
        } else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
            passWarning.innerHTML = 'Minimum 8 characters, 1 lowercase and 1 uppercase and at least 1 number';
        }
    }

    if (target.name == 'username') {
        if (e.target.value.length > 3) {
        e.target.classList.add('valid');
            e.target.classList.remove('invalid');
            nameWarning.innerHTML = '';
        } else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
        nameWarning.innerHTML = "Username must be more than 3 characters"
        }   
    }
}

username.addEventListener('input', validate);
password.addEventListener('input', validate);

import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
const textarea = document.querySelector('.form__textarea--js');
const save = document.querySelector('.form__button--save');
const load = document.querySelector('.form__button--load');

const currentValue = localStorage.getItem('key');
if (currentValue) {
    document.querySelector('.form__button--load').innerHTML = 'Load !';
};

save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('key',textarea.value);
});

load.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem('key');
});
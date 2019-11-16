/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

var button = document.getElementById('button');
var zoekbalk = document.querySelector('.zoekbalk');

function yes() {
    zoekbalk.classList.toggle('balk');
}

button.addEventListener('click', yes);

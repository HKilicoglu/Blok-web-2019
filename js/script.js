/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
// store elements in variables
var zoekveld = document.querySelector('header form');
var zoekbutton = document.querySelector('.zoeken');

function show(){
  zoekveld.classList.toggle('header form.show');
}

zoekbutton.addEventListener('click', show);
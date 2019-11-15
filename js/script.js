var zoekveld = document.querySelector('header form');
var zoekbutton = document.querySelector('.zoeken');

function show(){
  zoekveld.classList.toggle('header form.show');
}

zoekbutton.addEventListener('click', show);
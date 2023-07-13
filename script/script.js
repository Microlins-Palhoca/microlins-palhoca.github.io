document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.getElementById('menu-button');
  var navMenu = document.querySelector('nav .menu');
  var navitens = document.querySelector('nav .menu .itens-menu');
  
  menuButton.addEventListener('click', function() {
    navMenu.classList.toggle('menu-aberto');
    navitens.classList.toggle('exibir-lista');
  });
});
let menu = document.querySelector("#IconeMenu");
let Navbar = document.querySelector(".Navbar");
let ImagemOriginal = document.getElementById('button').getAttribute('src');

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  Navbar.classList.toggle("open");
};


let Revelar = categoria =>{
  cartões = document.querySelectorAll('.Cartão')
  for(var i = 0; i<cartões.length; i++){
    cartões[i].classList.remove('Visivel')
  }
  document.getElementById('HabWeb').classList.remove("Selecionado")
  document.getElementById('Linguagem').classList.remove("Selecionado")
  document.getElementById('Ferramenta').classList.remove("Selecionado")

  document.querySelector('#' + categoria).classList.add("Selecionado")
  itens = document.querySelectorAll('.' + categoria)
  for(var i = 0; i<itens.length; i++){
    itens[i].classList.add('Visivel')
  }
}

function RevelarPython(){
  document.body.classList.toggle("PythonLigado")
}

function RevelarWeb(){
  document.body.classList.toggle("PythonLigado")
}


darkMode = localStorage.getItem("dark-mode"); 
botaoTema = document.getElementById('button');

if (darkMode === 'disabled') {
    botaoTema.src = "./Images/darkIcon.png";
} else {
    botaoTema.src = ImagemOriginal;
}

botaoTema.style.visibility = "visible";

function MudarTema() {
    var body = document.body;
    body.classList.toggle("Light-theme");

    if (botaoTema.getAttribute('src') == ImagemOriginal) {
        botaoTema.src = "./Images/darkIcon.png";
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        botaoTema.src = ImagemOriginal;
        localStorage.setItem('dark-mode', 'enabled');
    }
}
let menu = document.querySelector("#IconeMenu");
let Navbar = document.querySelector(".Navbar");
let ImagemOriginal = document.getElementById('button').getAttribute('src');

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  Navbar.classList.toggle("open");
};

let currentCategory = "HabWeb";
document.addEventListener("DOMContentLoaded", () => {
  const webCategoryCards = document.querySelectorAll('.Cartão.HabWeb');
  webCategoryCards.forEach(card => {
    card.style.display = "flex";  
    card.classList.add("VisivelEsquerda"); 
  });
});

function Revelar(categoria) {
  if (categoria === currentCategory) return;
  const buttons = document.querySelectorAll(".BotaoPortfolio");
  buttons.forEach(button => button.classList.remove("Selecionado"));
  document.getElementById(categoria).classList.add("Selecionado");

  const isGoingRight = getCategoryOrder(categoria) > getCategoryOrder(currentCategory);

  const currentCategoryCards = document.querySelectorAll(`.Cartão.${currentCategory}`);
  currentCategoryCards.forEach(card => {
    card.classList.add(isGoingRight ? "DesaparecerEsquerda" : "DesaparecerDireita");
  });

  setTimeout(() => {
    currentCategoryCards.forEach(card => {
      card.style.display = "none";
      card.classList.remove(isGoingRight ? "DesaparecerEsquerda" : "DesaparecerDireita");
    });

    currentCategory = categoria;
    const newCategoryCards = document.querySelectorAll(`.Cartão.${categoria}`);

    newCategoryCards.forEach(card => {
      card.style.display = "flex";
      card.classList.remove("DesaparecerEsquerda", "DesaparecerDireita");
      // Definir o estado inicial para a animação de entrada (fora da tela)
      card.classList.add(isGoingRight ? "IniciarDireita" : "IniciarEsquerda");
    });

    setTimeout(() => {
      newCategoryCards.forEach(card => {
        card.classList.remove(isGoingRight ? "IniciarDireita" : "IniciarEsquerda");
        card.classList.add(isGoingRight ? "VisivelDireita" : "VisivelEsquerda");
      });
    }, 50);
  }, 275);
}

function getCategoryOrder(categoria) {
  const categories = ["Web", "Mobile", "Sistemas", "BancoDeDados", "Outros"];
  return categories.indexOf(categoria);
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
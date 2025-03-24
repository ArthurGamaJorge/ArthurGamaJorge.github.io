let menu = document.querySelector("#IconeMenu");
let Navbar = document.querySelector(".Navbar");
let ImagemOriginal = document.getElementById("button").getAttribute("src");

menu.onclick = () => {
  Navbar.classList.toggle("open");
};

const paragrafo = document.getElementById("EfeitoEscrevendo");
const text = "E esse é meu portfólio pessoal de programador ";
let index = 0;

function displayText() {
  paragrafo.textContent = text.slice(0, index);
  index++;

  if (index <= text.length) {
    setTimeout(displayText, 60);
  }
}

setTimeout(displayText, 600);

darkMode = localStorage.getItem("dark-mode");
botaoTema = document.getElementById("button");

if (darkMode === "disabled") {
  botaoTema.src = "./Images/darkIcon.png";
} else {
  botaoTema.src = ImagemOriginal;
}

botaoTema.style.visibility = "visible";

function MudarTema() {
  var body = document.body;
  body.classList.toggle("Light-theme");

  if (botaoTema.getAttribute("src") == ImagemOriginal) {
    botaoTema.src = "./Images/darkIcon.png";
    localStorage.setItem("dark-mode", "disabled");
  } else {
    botaoTema.src = ImagemOriginal;
    localStorage.setItem("dark-mode", "enabled");
  }
}

let menu = document.querySelector("#IconeMenu");
let Navbar = document.querySelector(".Navbar");
let ImagemOriginal = document.getElementById('button').getAttribute('src');

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  Navbar.classList.toggle("open");
};

window.sr = ScrollReveal({
  distance: "80px",
  duration: 2600,
  delay: 450,
  reset: false,
});

sr.reveal("#Texto", { delay: 50, origin: "left" });
sr.reveal("#Corvo", { delay: 50, origin: "right" });

var tamanho = window.matchMedia("(max-width: 500px)");
if (tamanho.matches) {
  sr.reveal("#Corvo", { delay: 50, origin: "left" });
}

sr.reveal("#DivImagem", { delay: 50, origin: "left" });
sr.reveal("#SetaBaixo", { delay: 50, origin: "right" });
sr.reveal(".Container", { delay: 50, origin: "left" });
sr.reveal("#Botoes", { delay: 50, origin: "left" });
sr.reveal(".Web", { delay: 50, origin: "bottom" });

Python = document.querySelector('.ContainerPortifolio.Python')
Web = document.querySelector('.ContainerPortifolio.Web')
BtnPy = document.querySelector('#BtnPy')
BtnWeb = document.querySelector('#BtnWeb')

function RevelarPython(){
  Python.style="display:flex"
  BtnPy.style="border: 2px solid white; scale:1.2"

  BtnWeb.style = "scale:0.94; border:none"
  Web.style="display:none"
  PythonAtivado = true
}

function RevelarWeb(){
  Web.style="display:flex"
  BtnWeb.style="border: 2px solid white; scale:1.2"

  BtnPy.style="border: none; scale:0.94"
  Python.style="display:none"
  WebAtivado = true
}

function MudarTema() {
    var Corvo = document.getElementById('ImagemCentral')
    var body = document.body;
         
    body.classList.toggle("Light-theme");
    let button = document.getElementById('button');

    if (button.getAttribute('src') == ImagemOriginal) {
       button.src = "./Images/darkIcon.png";
       Corvo.style = "filter: invert(100%) drop-shadow(10px 10px 10px crimson) !important;"
       
    } else {
       button.src = ImagemOriginal
       Corvo.style = "filter: invert(-100%)"
    }
 }
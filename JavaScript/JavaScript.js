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
sr.reveal("#ContainerGeral", { delay: 50, origin: "left" });
sr.reveal(".Container", { delay: 50, origin: "left" });
sr.reveal("#Botoes", { delay: 50, origin: "left" });
sr.reveal(".ContainerPortifolio", { delay: 50, origin: "bottom" });


// SLIDER PORTIFÓLIO
container = document.querySelector('.ContainerPortifolio')

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
});

container.addEventListener('mouseup', () => {
  isDown = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walkX = (x - startX) * 0.75; 
  container.scrollLeft = scrollLeft - walkX;
});

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
window.sr = ScrollReveal({
  distance: "80px",
  duration: 2600,
  delay: 450,
  reset: false,
});

sr.reveal("#Texto", { delay: 50, origin: "left" });
sr.reveal("#imagemCorvo", { delay: 50, origin: "right" });

var tamanho = window.matchMedia("(max-width: 500px)");
if (tamanho.matches) {
  sr.reveal("#imagemCorvo", { delay: 50, origin: "left" });
}



sr.reveal("#DivImagem", { delay: 50, origin: "left" });
sr.reveal("#SetaBaixo", { delay: 50, origin: "right" });
sr.reveal("#ContainerGeral", { delay: 50, origin: "left" });
sr.reveal(".Container", { delay: 50, origin: "left" });
sr.reveal("#Botoes", { delay: 50, origin: "left" });
sr.reveal(".ContainerPortifolio", { delay: 50, origin: "bottom" });

// SLIDER PORTIFÓLIO
container = document.querySelector('.ContainerPortfolio')

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
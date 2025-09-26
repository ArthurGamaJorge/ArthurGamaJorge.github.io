window.sr = ScrollReveal({
  distance: "80px",
  duration: 2600,
  delay: 450,
  reset: false,
});

sr.reveal("#Texto", { delay: 50, origin: "left" });
if (window.matchMedia("(max-width: 730px)").matches) {
  sr.reveal("#imagemCorvo", { delay: 50, origin: "left" });
} else {
  sr.reveal("#imagemCorvo", { delay: 50, origin: "right" });
}

sr.reveal(".Container", { delay: 50, origin: "left" });
sr.reveal(".Portfolio", { delay: 50, origin: "left" });
sr.reveal(".Habilidades", { delay: 50, origin: "left" });
sr.reveal(".sobre", { delay: 50, origin: "left" });

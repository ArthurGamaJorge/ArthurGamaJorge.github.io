let menu = document.querySelector('#IconeMenu')
let ListaVertical = document.querySelector('.ListaVertical')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    ListaVertical.classList.toggle('open')
};

const sr =ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('#Texto',{delay:200, origin:'top'});
sr.reveal('#DivImagem',{delay:450, origin:'top'});
sr.reveal('#SetaBaixo',{delay:800, origin:'right'});

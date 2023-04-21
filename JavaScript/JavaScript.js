let menu = document.querySelector('#IconeMenu')
let ListaVertical = document.querySelector('.ListaVertical')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    ListaVertical.classList.toggle('open')
};


window.sr =ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true,
});

sr.reveal('#Texto',{delay:50, origin:'left',}); 
sr.reveal('#DivImagem',{delay:50, origin:'top'});
sr.reveal('#SetaBaixo',{delay:50, origin:'right'});
sr.reveal('.Container',{delay:50, origin:'left',}); 
sr.reveal('.Projeto',{delay:50, origin:'left',}); 

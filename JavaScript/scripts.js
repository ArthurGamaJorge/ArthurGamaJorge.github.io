let menu = document.querySelector("#IconeMenu");
let Navbar = document.querySelector(".Navbar");
let ImagemOriginal = document.getElementById('button').getAttribute('src');

menu.onclick = () => {
  Navbar.classList.toggle("open");
};

const paragrafo = document.getElementById('EfeitoEscrevendo');
const text = 'E esse é meu portfólio pessoal de programador ';
let index = 0;

function displayText() {
    paragrafo.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(displayText, 60 ); 
    }
}

setTimeout(displayText, 600); 

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

let categoriaAtual = "Web"; 
function RevelarPort(categoria) {
  if (categoria === categoriaAtual) return;  

  const buttons = document.querySelectorAll(".BotaoPortfolio");
  buttons.forEach(button => button.classList.remove("Selecionado"));

  document.getElementById(`Btn${categoria}`).classList.add("Selecionado");

  const projetos = document.querySelectorAll(".Projeto");
  projetos.forEach(projeto => {
    projeto.style.display = "none";  
  });

  const projetosCategoria = document.querySelectorAll(`.Projeto.${categoria}`);
  projetosCategoria.forEach(projeto => {
    projeto.style.display = "block";  
  });

  categoriaAtual = categoria;
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

document.querySelectorAll('.imgProj').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const { clientX, clientY, target } = e;
    const { offsetWidth: width, offsetHeight: height } = target;
    const { left, top } = target.getBoundingClientRect();

    // Calcular a intensidade da rotação
    const xRotation = ((clientY - top) / height - 0.5) * 30;  // Intensidade de rotação X
    const yRotation = ((clientX - left) / width - 0.5) * -30; // Intensidade de rotação Y

    // Aplicar rotação baseada na posição do mouse
    target.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  });

  item.addEventListener('mouseleave', (e) => {
    // Resetar a rotação de volta à posição original
    e.target.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projetoModal");
  const modalFundo = document.getElementById("modalFundo");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalDate = document.getElementById("modal-date");
  const closeModal = document.querySelector(".close");
  const projetos = document.querySelectorAll(".Projeto");
  let projetoAberto = null; 

  projetos.forEach(projeto => {
    projeto.addEventListener("click", () => {
      modalTitle.textContent = projeto.getAttribute("data-title")
      modalDescription.textContent = projeto.getAttribute("data-description")
      modalDate.textContent = projeto.getAttribute("data-date")
      modalImg.src = projeto.getAttribute("data-image")

      projetoAberto = projeto
      projetoAberto.classList.add("DesativarHover");
      modal.classList.add("Aberto");
      modalFundo.classList.add("Aberto");
    });
  });

  function fecharModal() {
    modal.classList.remove("Aberto");
    modalFundo.classList.remove("Aberto");
    projetoAberto.classList.remove("DesativarHover")
  }

  closeModal.addEventListener("click", fecharModal);

  modalFundo.addEventListener("click", fecharModal);
});
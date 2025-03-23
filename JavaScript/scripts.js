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

  if (categoriaAtual === "Sistemas") {
    document.getElementById("CodeDrafts").style.backgroundImage = "url('../Images/Projetos/CodeDraftsJava.png')";
} else {
    document.getElementById("CodeDrafts").style.backgroundImage = "url('../Images/Projetos/CodeDraftsDark.png')";
}
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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projetoModal");
  const modalFundo = document.getElementById("modalFundo");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalDate = document.getElementById("modal-date");
  const closeModal = document.querySelector(".close");
  const projetos = document.querySelectorAll(".Projeto");

  
  const siteLink = document.querySelector(".links a:first-of-type"); 
  const siteImg = siteLink.querySelector("img");
  const githubLink = document.querySelector(".links a:nth-of-type(2)"); 
  const aiaLink = document.querySelector(".links a:last-of-type");

  const tabsContainer = document.getElementById("tabs");
  const tabContent = document.getElementById("tab-content");

  let projetoAberto = null;

  projetos.forEach(projeto => {
    projeto.addEventListener("click", () => {
      modalTitle.textContent = projeto.getAttribute("data-title");
      modalDescription.innerHTML = projeto.getAttribute("data-description");
      modalDate.textContent = projeto.getAttribute("data-date");
      modalImg.src = projeto.getAttribute("data-image");

      // Pegando os links do projeto
      const siteUrl = projeto.getAttribute("data-site");
      const aiaUrl = projeto.getAttribute("data-aia");
      const githubUrl = projeto.getAttribute("data-github");
      const iconUrl = `./Images/Projetos/${projeto.getAttribute("data-icon")}`;

      // Atualizando o link do site se existir
      if (siteUrl) {
        siteLink.href = siteUrl;
        siteLink.style.display = "inline-flex"; 
        siteImg.src = iconUrl;
      } else {
        siteLink.style.display = "none"; 
      }
      if(githubUrl){
        githubLink.href = githubUrl;
        githubLink.style.display = "inline-flex"; 
      } else{
        githubLink.style.display = "none"
      }
      if (aiaUrl) {
        aiaLink.href = aiaUrl;
        aiaLink.style.display = "inline-flex";  
      } else {
        aiaLink.style.display = "none"; 
      }

      // Limpar as abas e conteúdos
      tabsContainer.innerHTML = '';
      tabContent.innerHTML = '';

      // Resetar a exibição das abas para evitar que fiquem escondidas ao alternar entre projetos
      tabsContainer.style.display = "flex";

      // Verifica as categorias
      const categorias = projeto.getAttribute("data-categories").split(",");
      if (categorias.includes("Mobile")) {
        modalImg.style.width = "15%"; 
      } else {
        modalImg.style.width = "40%";  
      }

      // Se o projeto tiver múltiplas categorias, exibe as abas
      if (categorias.length > 1) {
        categorias.forEach((categoria, index) => {
          const tab = document.createElement("button");
          tab.classList.add("tab");
          tab.textContent = categoria;
          tab.setAttribute("data-index", index);
          tabsContainer.appendChild(tab);

          // Descrição e imagem específicas de cada categoria
          const categoriaDesc = projeto.getAttribute(`data-${categoria.toLowerCase()}-description`);
          const categoriaImg = projeto.getAttribute(`data-${categoria.toLowerCase()}-image`);

          tab.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Atualiza a descrição e a imagem conforme a categoria
            modalDescription.innerHTML = categoriaDesc;
            modalImg.src = categoriaImg;
          });
        });

        let categoriaInicial = categoriaAtual === "Web" ? "Web" : categorias[1] || categorias[0];

        // Encontra o botão correspondente à categoria inicial e ativa ele
        const categoriaInicialTab = Array.from(tabsContainer.querySelectorAll(".tab")).find(tab => tab.textContent === categoriaInicial);
        if (categoriaInicialTab) {
            categoriaInicialTab.classList.add("active");
        }
    
        modalDescription.innerHTML = projeto.getAttribute(`data-${categoriaInicial.toLowerCase()}-description`);
        modalImg.src = projeto.getAttribute(`data-${categoriaInicial.toLowerCase()}-image`);

      } else {
        // Se tiver apenas uma categoria, exibe a descrição e a imagem normais
        modalDescription.innerHTML = projeto.getAttribute("data-description");
        modalImg.src = projeto.getAttribute("data-image");

        // Oculta os botões de navegação
        tabsContainer.style.display = "none";
      }

      projetoAberto = projeto;
      projetoAberto.classList.add("DesativarHover");
      modal.classList.add("Aberto");
      modalFundo.classList.add("Aberto");
    });
  });

  function fecharModal() {
    modal.classList.remove("Aberto");
    modalFundo.classList.remove("Aberto");
    if (projetoAberto) {
      projetoAberto.classList.remove("DesativarHover");
    }
  }

  closeModal.addEventListener("click", fecharModal);
  modalFundo.addEventListener("click", fecharModal);
});


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

let currentCategory = "HabWeb";
document.addEventListener("DOMContentLoaded", () => {
  const webCategoryCards = document.querySelectorAll(".Cartão.HabWeb");
  webCategoryCards.forEach((card) => {
    card.style.display = "flex";
    card.classList.add("VisivelEsquerda");
  });
});

function Revelar(categoria) {
  if (categoria === currentCategory) return;
  const buttons = document.querySelectorAll(".BotaoPortfolio");
  buttons.forEach((button) => button.classList.remove("Selecionado"));
  document.getElementById(categoria).classList.add("Selecionado");

  const isGoingRight =
    getCategoryOrder(categoria) > getCategoryOrder(currentCategory);

  const currentCategoryCards = document.querySelectorAll(
    `.Cartão.${currentCategory}`
  );
  currentCategoryCards.forEach((card) => {
    card.classList.add(
      isGoingRight ? "DesaparecerEsquerda" : "DesaparecerDireita"
    );
  });

  setTimeout(() => {
    currentCategoryCards.forEach((card) => {
      card.style.display = "none";
      card.classList.remove(
        isGoingRight ? "DesaparecerEsquerda" : "DesaparecerDireita"
      );
    });

    currentCategory = categoria;
    const newCategoryCards = document.querySelectorAll(`.Cartão.${categoria}`);

    newCategoryCards.forEach((card) => {
      card.style.display = "flex";
      card.classList.remove("DesaparecerEsquerda", "DesaparecerDireita");
      // Definir o estado inicial para a animação de entrada (fora da tela)
      card.classList.add(isGoingRight ? "IniciarDireita" : "IniciarEsquerda");
    });

    setTimeout(() => {
      newCategoryCards.forEach((card) => {
        card.classList.remove(
          isGoingRight ? "IniciarDireita" : "IniciarEsquerda"
        );
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
  buttons.forEach((button) => button.classList.remove("Selecionado"));

  document.getElementById(`Btn${categoria}`).classList.add("Selecionado");

  const projetos = document.querySelectorAll(".Projeto");
  projetos.forEach((projeto) => {
    projeto.style.display = "none";
  });

  const projetosCategoria = document.querySelectorAll(`.Projeto.${categoria}`);
  projetosCategoria.forEach((projeto) => {
    projeto.style.display = "block";
  });

  categoriaAtual = categoria;

  if (categoriaAtual === "Sistemas") {
    document.getElementById("CodeDrafts").style.backgroundImage =
      "url('../Images/Projetos/CodeDraftsJava.png')";
  } else {
    document.getElementById("CodeDrafts").style.backgroundImage =
      "url('../Images/Projetos/CodeDraftsDark.png')";
  }
}

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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projetoModal"),
        modalFundo = document.getElementById("modalFundo"),
        modalBody = document.querySelector(".modal-body"),
        modalImg = document.getElementById("modal-img"),
        modalTitle = document.getElementById("modal-title"),
        modalDescription = document.getElementById("modal-description"),
        modalDate = document.getElementById("modal-date"),
        closeModal = document.querySelector(".close"),
        prevButton = document.getElementById("prevProject"),
        nextButton = document.getElementById("nextProject"),
        tabsContainer = document.getElementById("tabs"),
        siteLink = document.querySelector(".links a:first-of-type"),
        siteImg = siteLink.querySelector("img"),
        githubLink = document.querySelector(".links a:nth-of-type(2)"),
        aiaLink = document.querySelector(".links a:last-of-type"),
        projetos = document.querySelectorAll(".Projeto");
        tabContent = document.getElementById("tab-content");
  let projetoAberto = null, projetoIndexAtual = 0, categorias;

  projetos.forEach((projeto) => {
    projeto.addEventListener("click", () => {
      modalTitle.textContent = projeto.getAttribute("data-title");
      modalDescription.innerHTML = projeto.getAttribute("data-description");
      modalDate.textContent = projeto.getAttribute("data-date");
      modalImg.src = projeto.getAttribute("data-image");

      const siteUrl = projeto.getAttribute("data-site"),
          aiaUrl = projeto.getAttribute("data-aia"),
          githubUrl = projeto.getAttribute("data-github"),
          iconUrl = `./Images/Projetos/${projeto.getAttribute("data-icon")}`;

      siteLink.style.display = siteUrl ? "inline-flex" : "none";
      githubLink.style.display = githubUrl ? "inline-flex" : "none";
      aiaLink.style.display = aiaUrl ? "inline-flex" : "none";
      siteLink.href = siteUrl || "#";
      githubLink.href = githubUrl || "#";
      aiaLink.href = aiaUrl || "#";
      siteImg.src = siteUrl ? iconUrl : "";

      // Limpar as abas e conteúdos
      tabsContainer.innerHTML = "";
      tabContent.innerHTML = "";

      // Resetar a exibição das abas para evitar que fiquem escondidas ao alternar entre projetos
      tabsContainer.style.display = "flex";

      // Verifica as categorias
      categorias = projeto.getAttribute("data-categories").split(",");

      // Se o projeto tiver múltiplas categorias, exibe as abas
      if (categorias.length > 1) {
        categorias.forEach((categoria, index) => {
          const tab = document.createElement("button");
          tab.classList.add("tab");
          tab.textContent = categoria;
          tab.setAttribute("data-index", index);
          tabsContainer.appendChild(tab);

          // Descrição e imagem específicas de cada categoria
          const categoriaDesc = projeto.getAttribute(
            `data-${categoria.toLowerCase()}-description`
          );
          const categoriaImg = projeto.getAttribute(
            `data-${categoria.toLowerCase()}-image`
          );

          tab.addEventListener("click", () => {
            document
              .querySelectorAll(".tab")
              .forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");

            // Atualiza a descrição e a imagem conforme a categoria
            modalDescription.innerHTML = categoriaDesc;
            modalImg.src = categoriaImg;
          });
        });

        let categoriaInicial =
          categoriaAtual === "Web" ? "Web" : categorias[1] || categorias[0];

        // Encontra o botão correspondente à categoria inicial e ativa ele
        const categoriaInicialTab = Array.from(
          tabsContainer.querySelectorAll(".tab")
        ).find((tab) => tab.textContent === categoriaInicial);
        if (categoriaInicialTab) {
          categoriaInicialTab.classList.add("active");
        }

        modalDescription.innerHTML = projeto.getAttribute(
          `data-${categoriaInicial.toLowerCase()}-description`
        );
        modalImg.src = projeto.getAttribute(
          `data-${categoriaInicial.toLowerCase()}-image`
        );
      } else {
        // Se tiver apenas uma categoria, exibe a descrição e a imagem normais
        modalDescription.innerHTML = projeto.getAttribute("data-description");
        modalImg.src = projeto.getAttribute("data-image");

        // Oculta os botões de navegação
        tabsContainer.style.display = "none";
      }
      ajustarModal();
      projetoIndexAtual = Array.from(projetos).indexOf(projeto);
      projetoAberto = projeto;
      projetoAberto.classList.add("DesativarHover");
      modal.classList.add("Aberto");
      modalFundo.classList.add("Aberto");
    });
  });

  const fecharModal = () => {
    modal.classList.remove("Aberto");
    modalFundo.classList.remove("Aberto");
    if (projetoAberto) projetoAberto.classList.remove("DesativarHover");
    if (window.innerWidth < 1040) {
      const para = modalBody.querySelectorAll("p")[2];
      if (modalBody.contains(para)) modalBody.removeChild(para);
    }
  };

  closeModal.addEventListener("click", fecharModal);
  modalFundo.addEventListener("click", fecharModal);

  const navegarProjeto = (direcao, event) => {
    event.stopPropagation();
    projetoAberto.classList.remove("DesativarHover")
    projetoIndexAtual = (projetoIndexAtual + direcao + projetos.length) % projetos.length;
    if (window.innerWidth < 1040) {
      const para = modalBody.querySelectorAll("p")[2];
      if (modalBody.contains(para)) modalBody.removeChild(para);
    }
    projetos[projetoIndexAtual].click();
  };

  prevButton.addEventListener("click", (event) => navegarProjeto(-1, event));
  nextButton.addEventListener("click", (event) => navegarProjeto(1, event));

  const ajustarModal = () => {
    let modalImgWidth = (window.innerWidth < 1040 && categorias.includes("Mobile")) ? "20%" : "100%";
    if (window.innerWidth >= 1040) {
      modalImgWidth = categorias.includes("Mobile") ? "15%" : "40%";
    }
    modalImg.style.width = modalImgWidth;

    if (categorias.includes("Mobile")) {
      const paragraphs = modalBody.querySelectorAll("p");
      if (window.innerWidth < 1040 && paragraphs.length > 2) {
        const secondParagraph = paragraphs[2];
        modalDescription.removeChild(secondParagraph);
        modalBody.appendChild(secondParagraph);
      } else if (paragraphs.length > 1) {
        const secondParagraph = paragraphs[2];
        if (!modalDescription.contains(secondParagraph)) {
          modalBody.removeChild(secondParagraph);
          modalDescription.appendChild(secondParagraph);
        }
      }
    }
  };

  window.addEventListener("resize", ajustarModal);
});

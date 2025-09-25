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
  const categories = ["Web", "Mobile", "Software", "BancoDeDados", "Outros"];
  return categories.indexOf(categoria);
}

let categoriaAtual = "Web";
function RevelarPort(categoria) {
  if (categoria === categoriaAtual) return;

  const buttons = document.querySelectorAll(".BotaoPortfolio");
  buttons.forEach((button) => button.classList.remove("Selecionado"));
  document.getElementById(`Btn${categoria}`).classList.add("Selecionado");

  const projetos = document.querySelectorAll(".Projeto");
  const isGoingRight =
    getCategoryOrder(categoria) > getCategoryOrder(categoriaAtual);
  projetos.forEach((projeto) => {
    if (projeto.style.display !== "none") {
      projeto.classList.add(
        isGoingRight ? "DesaparecerEsquerda" : "DesaparecerDireita"
      );
    }
  });

  setTimeout(() => {
    projetos.forEach((projeto) => {
      if (projeto.style.display !== "none") {
        projeto.style.display = "none";
        projeto.classList.remove("DesaparecerEsquerda", "DesaparecerDireita");
      }
    });
    categoriaAtual = categoria;

    const novosProjetos = document.querySelectorAll(`.Projeto.${categoria}`);
    novosProjetos.forEach((projeto) => {
      projeto.style.display = "block";
      projeto.classList.remove("DesaparecerEsquerda", "DesaparecerDireita");

      projeto.classList.add(
        isGoingRight ? "IniciarDireita" : "IniciarEsquerda"
      );
    });

    setTimeout(() => {
      // Finaliza a animação de entrada
      novosProjetos.forEach((projeto) => {
        projeto.classList.remove("IniciarDireita", "IniciarEsquerda");
        projeto.classList.add(
          isGoingRight ? "VisivelDireita" : "VisivelEsquerda"
        );
      });
    }, 50);
  }, 275); // Tempo de animação de desaparecimento
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
  let projetoAberto = null,
    projetoIndexAtual = 0,
    categorias;

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
    if (window.innerWidth < 730) {
      const para = modalBody.querySelectorAll("p")[2];
      if (para && para.parentElement === modalBody) {
        modalBody.removeChild(para);
      }
    }
  };

  closeModal.addEventListener("click", fecharModal);
  modalFundo.addEventListener("click", fecharModal);

  const navegarProjeto = (direcao, event) => {
    event.stopPropagation();
    projetoAberto.classList.remove("DesativarHover");
    projetoIndexAtual =
      (projetoIndexAtual + direcao + projetos.length) % projetos.length;
    if (window.innerWidth < 730) {
      const para = modalBody.querySelectorAll("p")[2];
      if (para && para.parentElement === modalBody) {
        modalBody.removeChild(para);
      }
    }
    projetos[projetoIndexAtual].click();
  };

  prevButton.addEventListener("click", (event) => navegarProjeto(-1, event));
  nextButton.addEventListener("click", (event) => navegarProjeto(1, event));

  const ajustarModal = () => {
    if (projetoAberto != null) {
      let modalImgWidth =
        window.innerWidth < 730 && categorias.includes("Mobile")
          ? "20%"
          : "100%";
      if (window.innerWidth >= 730) {
        modalImgWidth = categorias.includes("Mobile") ? "15%" : "40%";
      }
      modalImg.style.width = modalImgWidth;

      if (categorias.includes("Mobile")) {
        const paragraphs = modalBody.querySelectorAll("p");
        if (window.innerWidth < 730 && paragraphs.length > 2) {
          if (modalDescription.contains(paragraphs[2])) {
            modalDescription.removeChild(paragraphs[2]);
            modalBody.appendChild(paragraphs[2]);
          }
        } else if (paragraphs.length > 1) {
          if (!modalDescription.contains(paragraphs[2])) {
            modalBody.removeChild(paragraphs[2]);
            modalDescription.appendChild(paragraphs[2]);
          }
        }
      }
    }
  };

  window.addEventListener("resize", ajustarModal);
});

function criarCardProduto(produto) {
    const card = document.createElement("div");
    card.className = "product";
  
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" class="product__image">
      <h2 class="product__title">${produto.nome}</h2>
      <p class="product__description">${produto.descricao}</p>
      <p class="product__source">Fonte: <span>${produto.fonte}</span></p>
      <a href="${produto.link}" class="product__link" target="_blank">Ver Produto</a>
      <button class="copy-btn" data-link="${produto.link}">
        Copiar
      </button>
    `;
  
    return card;
  }
  
  // Função para copiar link ao clicar no botão
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("copy-btn")) {
      const link = event.target.getAttribute("data-link");
      navigator.clipboard.writeText(link).then(() => {
        event.target.textContent = "✅ Copiado!";
        setTimeout(() => {
          event.target.textContent = "📋 CP";
        }, 2000);
      }).catch(() => {
        event.target.textContent = "Erro";
      });
    }
  });

const grid = document.getElementById("productsGrid");

function renderizarProdutos(produtos) {
    produtos.forEach((produto) => {
      const card = criarCardProduto(produto);
      grid.appendChild(card);
    });
  }

  // Exporta apenas a função (caso você esteja usando módulos)
export default renderizarProdutos;
  
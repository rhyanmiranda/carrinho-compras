import * as servicosCarrinho from "./services/carrinho.js"
import criarProduto from "./services/produto.js"

const meuCarrinho = []
const listaFavoritos = []

console.log("Bem Vindo(a) ao seu carrinho de compras!!")

//criando produtos
const produto1 = await criarProduto("Camisa", 79.99, 2)
const produto2 = await criarProduto("Calça Jeans", 99.99, 1)
const produto3 = await criarProduto("Sapato", 199.99, 1)
const produto4 = await criarProduto("Short", 69.99, 4)

//adicionei os produtos ao carrinho
await servicosCarrinho.adicionaProduto(meuCarrinho, produto1)
await servicosCarrinho.adicionaProduto(meuCarrinho, produto2)
await servicosCarrinho.adicionaProduto(meuCarrinho, produto4)

// adicionando produto à lista de Favoritos
await servicosCarrinho.adicionaProduto(listaFavoritos, produto3)

// deletando o produto1 pelo nome => Camisa 
await servicosCarrinho.deletaProdutoDoCarrinho(meuCarrinho, produto1.nome)

// deletando o produto pelo índice da listagem do carrinho (índice-real + 1)
await servicosCarrinho.deletaProdutoPeloIndex(meuCarrinho, 1)

// removendo um produto -> diminui um na quantidade
await servicosCarrinho.removeUmProdutoQuantidade(meuCarrinho, produto4)

// Listando os produtos do carrinho
await servicosCarrinho.mostrarCarrinho(meuCarrinho)

// calculando o valor total do carrinho
await servicosCarrinho.somaTotal(meuCarrinho)

// Listando os produtos da lista de favoritos
await servicosCarrinho.mostrarListaDeFavoritos(listaFavoritos)

// calculando o valor total da lista de favoritos
await servicosCarrinho.somaTotal(listaFavoritos)
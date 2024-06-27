async function adicionaProduto(carrinho, produto){
  carrinho.push(produto)
}

async function removeUmProdutoQuantidade(carrinho, produto){
  const index = carrinho.findIndex((p) => p.nome === produto.nome)
  console.log(index)

  if(index === -1){
    "produto nao encontrado"
  }

  if(carrinho[index].quantidade > 1){
    carrinho[index].quantidade -= 1
    return
  }
  
  if (carrinho[index].quantidade == 1){
    carrinho.splice(index, 1)
    return
  }

}

async function deletaProdutoPeloIndex(carrinho, indexProduto){
  const indexParaOUsuário = indexProduto - 1
  if(indexProduto >= 0 && indexProduto < carrinho.length){
    carrinho.splice(indexParaOUsuário, 1)
  }
}

async function somaTotal(carrinho){
  const total = carrinho.reduce((total, produto) => total + produto.subtotal(), 0)
  console.log('\n🎁 TOTAL = R$ ' + total.toFixed(2))
}

async function deletaProdutoDoCarrinho(carrinho, nomeProduto){
  const index = carrinho.findIndex((produto) => produto.nome === nomeProduto)
  if(index !== -1){
    carrinho.splice(index, 1)
  }
  console.log(`Produto: ${nomeProduto} deletado`)
}

async function mostrarCarrinho(carrinho) {
  console.log('\n🛒 SEU CARRINHO DE COMPRAS')
  carrinho.forEach((produto, index) => {
    console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco} - Quantidade: ${produto.quantidade} | Subtotal = R$ ${produto.subtotal()}`)
  })
}

async function mostrarListaDeFavoritos(listaDeFavoritos){
  console.log('\n❤️  SUA LISTA DE PRODUTOS FAVORITOS!!')
  listaDeFavoritos.forEach((produto, index) => {
    console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco} - Quantidade: ${produto.quantidade} | Subtotal = R$ ${produto.subtotal()}`)
  })
}

export {
  adicionaProduto,
  deletaProdutoPeloIndex,
  deletaProdutoDoCarrinho,
  removeUmProdutoQuantidade,
  somaTotal,
  mostrarCarrinho,
  mostrarListaDeFavoritos
}
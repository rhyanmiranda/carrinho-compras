async function criarProduto(nome, preco, quantidade){
  return {
    nome,
    preco,
    quantidade,
    subtotal : () => preco * quantidade
  }
}

export default criarProduto
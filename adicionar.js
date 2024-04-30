document.addEventListener('DOMContentLoaded' , function(){

    const produtos = document.querySelectorAll('.produtos .produto');

    const itensCarrinho = document.querySelector('.itens-carrinho');

    const totalCarrinho = document.querySelector('.total span');

    let totalCompra = 0;

    produtos.forEach(produto =>{

        const adicionarProdutoBtn = produto.querySelector('.adicionar-produto');
        adicionarProdutoBtn.addEventListener('click' , () =>{

            const nomeProduto = produto.getAttribute('data-name');
            const precoProduto = parseFloat(produto.getAttribute('data-price'));
            const quantidade = parseInt(produto.querySelector('input[type="number"]') .value);
        })
    })


})
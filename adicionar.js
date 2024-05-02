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

            const itemExistente = Array.from(itensCarrinho.querySelectorAll('tr')).find
            (item => {return item.dataset.name === nomeProduto;});

            if(itemExistente)
            {
                const quantidadeAtual = parseInt(itemExistente.querySelector('.quantidade').textContent);

                const novaQuantidade = quantidadeAtual + quantidade;

                itemExistente.querySelector('.quantidade').textContent = novaQuantidade;

                const subTotal = precoProduto * novaQuantidade;

                itemExistente.querySelector('.subtotal').textContent = `R$ ${subTotal.toFixed(0)}`;
            }
            else
            {
                const subtotal = precoProduto * quantidade;

                const newRow = document.createElement('tr');

                newRow.dataset.name = nomeProduto;

                newRow.innerHTML = `

                <td>${nomeProduto}</td>
                
                <td>R$ ${precoProduto.toFixed(0)}</td>
                
                <td class = "quantidade"> ${quantidade}</td><td class = "subtotal"> R$ ${subtotal.toFixed(0)}</td>
                
                <td><button class = "remover-item">Remover</button></td>`;

                itensCarrinho.appendChild(newRow);
            }
            
            totalCompra += precoProduto * quantidade;

            totalCarrinho.textContent = `R$ ${totalCompra.toFixed(0)}`;
        })
    })


})
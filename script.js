


document.addEventListener('DOMContentLoaded',function(){

    const filtroProdutos =  document.getElementById('filtro-produtos');
    const botaoFiltrar =  document.getElementById('botao-filtrar');
    const produtos =  document.querySelectorAll('.produtos .produto');

    botaoFiltrar.addEventListener('click', function(){

        const termoBusca = filtroProdutos.value.toLowerCase();
        produtos.forEach(produto =>{

            const nomeProduto = produto.getAttribute('data-name').toLowerCase();
            const produtoElemento = produto;

            if(nomeProduto.includes(termoBusca)){
                produtoElemento.style.display = 'flex';
            }
            else{
                produtoElemento.style.display = 'none';
            }
        })
    })

})


    
var items = [];

document.querySelector('input[type=submit]').
addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    })

    /*
    

    */
        let listaProduto = document.querySelector('.lista-produto');
        let soma = 0;
        listaProduto.innerHTML="";
        items.map(function(val){
            soma+=parseFloat(val.valor);

            listaProduto.innerHTML +=`
                <div class="lista-produto-single">
                    <h3>`+val.nome+`</h3>
                    <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
                 </div>
            `;
        })

        soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$'+soma;

    document.querySelector('button[name=limpar]').
    addEventListener('click',()=>{
        items = [];
        document.querySelector('.lista-produto').innerHTML = "";
        document.querySelector('.soma-produto h1').innerHTML = "R$0";
    })
    
});
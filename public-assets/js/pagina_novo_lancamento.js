const btn = document.querySelector("#send");


btn.addEventListener("click", function(event){


    const selecionaTitulo = document.querySelector("#titulo");
    const selecionaValor = document.querySelector("#valorLancamento");
    const selecionaData = document.querySelector("#data");
 

    const titulo = selecionaTitulo.value;
    const valor = selecionaValor.value;
    const data = selecionaData.value;


    validaVazio(event, titulo, valor, data);
    validaNumero(event, valor)


})




function validaVazio(event, titulo, valor, data){
    if(titulo.length == 0 || 
        valor.length == 0 ||
        data.length == 0 ){
            event.preventDefault();
        return alert("Por favor preencha TODOS os campos antes de enviar!")
    }else { return }
}

function validaNumero(event, valor){
    if(isNaN(valor)){
             event.preventDefault();
        return valorInvalido()
    }
}

function valorInvalido(){
    const selecionaMensagem = document.querySelector('#mensagemErro');
    selecionaMensagem.innerText = ("");
    const selcionaErro = document.querySelector('#mensagemErro');
    selcionaErro.innerText = ("Valor inválido!");
}



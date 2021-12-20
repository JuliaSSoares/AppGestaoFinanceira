$(".datepicker").datepicker({ dateFormat: "dd/mm/yy" }).val();

somaValores();

mudaCorAddR$();

mudaData();

semLancamentos();

replace();

function mudaCorAddR$() {
  var table = document.getElementById("tabela");
  for (var i = 1, row; (row = table.rows[i]); i++) {
    for (var j = 1, col; (col = row.cells[j]); j += 4) {
      valor = (col.innerHTML).replace(",",".");
      if (valor >= 0) {
        row.classList.add("green");
        col.innerHTML = "R$ " + valor;
      } else {
        row.classList.add("red");
        valor = valor * -1; 
        col.innerHTML =
        "- " + "R$ " + valor;
      }
      
    }
  }
}


function mudaCorAddR$() {
  var table = document.getElementById("tabela");
  for (var i = 1, row; (row = table.rows[i]); i++) {
    for (var j = 1, col; (col = row.cells[j]); j += 4) {
      valor = (col.innerHTML).replace(",",".");
      if (valor >= 0) {
        row.classList.add("green");
        col.innerHTML = "R$ " + valor;
      } else {
        row.classList.add("red");
        valor = valor * -1; 
        col.innerHTML =
        "- " + "R$ " + valor;
      }
      
    }
  }
}

function semLancamentos(){
    let spam = document.querySelector('spam')
    let mensagem = document.querySelector(".semLancamentos");
    let table = document.querySelector('table')
    if (table.rows.length == 1){
        mensagem.innerHTML = "Você ainda não possui lançamentos!"
    }else{
        spam.classList.remove("semLancamentos");
    }
}

function somaValores(){
    var exibidor = document.querySelector('#valorTotal')
    var arrStr = [];
    var table = document.getElementById("tabela");
    for (var i = 1, row; (row = table.rows[i]); i++) {
        for (var j = 1, col; (col = row.cells[j]); j += 4) {
            valor = col.innerHTML.replace(",", ".");
            arrStr.push(valor);        
        }       
    }        
    const arrNum = arrStr.map((i) => Number(i));
    var total = arrNum.reduce(function(total, numero){
        return total + numero;
        }, 0);
    exibidor.innerHTML = total;
}


function replace(){
    var valorTotalBusca = document.querySelector("#valorTotal");
    var valorTotal = valorTotalBusca.innerHTML.replace(".", ",");
    if (valorTotal < 0){
        valorTotalBusca.classList.add("green");
    }
    valorTotal.replace('.',',');
    if(valorTotal.indexOf(',') == -1){
        valorTotalBusca.innerHTML = valorTotal + ",00";
    }else
    valorTotalBusca.innerHTML = valorTotal;
    
}

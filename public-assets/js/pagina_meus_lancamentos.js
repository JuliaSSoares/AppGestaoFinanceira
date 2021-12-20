$(".datepicker").datepicker({ dateFormat: "dd/mm/yy" }).val();

mudaCorAddR$();

mudaData();

semLancamentos();

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
        "-" + "R$ " + valor;
      }
      
    }
  }
}


function mudaData() {
  var table = document.getElementById("tabela");
  for (var i = 1, row; (row = table.rows[i]); i++) {
    for (var j = 2, col; (col = row.cells[j]); j += 4) {
      data = col.innerHTML
      let dataSeparada = data.split("/");
       ; 

        dataInvertida = dataSeparada
          .reverse()
          .toString()
          .replace(",", "/")
          .replace(",", "/");

       col.innerHTML = dataInvertida;
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



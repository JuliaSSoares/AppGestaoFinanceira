$(".datepicker").datepicker({ dateFormat: "dd/mm/yy" }).val();

mudaCorAddR$();

function mudaCorAddR$() {
  var table = document.getElementById("tabela");
  for (var i = 1, row; (row = table.rows[i]); i++) {
    for (var j = 1, col; (col = row.cells[j]); j += 4) {
      valor = col.innerHTML;
      console.log(valor);
      if (valor > 0) {
        row.classList.add("green");
      } else {
        row.classList.add("red");
      }
      col.innerHTML = "R$ " + valor;
    }
  }
}

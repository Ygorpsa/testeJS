//responsavel pelo frontend

function sendMensage() {
  let res = window.document.getElementById("res");
  let msg = window.document.getElementById("msg");

  res.innerHTML = "Status: Ativado";

  alert("AUTOMAÇÃO ATIVADA NO SLACK");
}

function offSendMensage() {
  let res = window.document.getElementById("res");
  
  let msg = window.document.getElementById("msg");

  res.innerHTML = "Status: Desativado";

  alert("A AUTOMAÇÂO DO SLACK ESTÁ SENDO DESATIVADA");

}

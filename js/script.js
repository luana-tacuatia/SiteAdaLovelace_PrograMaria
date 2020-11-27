document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

var formA = document.getElementById("nome")
var formB = document.getElementById("email")
var formC = document.getElementById("telefone")

function validaFormulario(){
  if (formA.value != "" && formB.value != "" && formC.value != ""){
      alert ("Pronto! Você receberá as novidades por e-mail.")
  }else{
      alert ("Por favor, preencha os campos nome, e-mail e telefone!")
  }
}
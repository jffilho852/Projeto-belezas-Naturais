const nome = document.getElementById("nome")
const email = document.getElementById("email")
const textoFeedback = document.getElementById("area-feedback")
const btnEnviar = document.getElementById("btn-enviar")
function confirmarEnvio(){
    if(nome.value === "" || email.value === "" || textoFeedback.value === ""){
        alert("alguns dos campos nao foi preenchido corretamente")
    }else{
        alert("mensagem enviada com sucesso!!!")
    }
    
}

btnEnviar.addEventListener('click', confirmarEnvio)

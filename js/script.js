let seuVotoPara = document.querySelector('d1left1 span')
let cargo = document.querySelector('d1left2 span')
let descriçao = document.querySelector('d1left4')
let aviso = document.querySelector('d2')
let lateral = document.querySelector('d1right')
let numeros = document.querySelector('d1left3')


let etapaAtual = 0

function começarEtapa() {
    let etapa = etapas[etapaAtual]
    seuVotoPara.style.display = "none"
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = 

}   //   CURSO EM 1 HORA E 9M

function clicou(n){
    alert("Clicou em" +n)
}

function branco(){
    alert("Clicou em BRANCO")
}

function corrige(){
    alert("Clicou em CORRIGE")
}

function confirma(){
    alert("Clicou em CONFIRMA")
}
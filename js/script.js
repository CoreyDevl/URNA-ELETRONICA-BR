let seuVotoPara = document.querySelector('.d1left1 span')
let cargo = document.querySelector('.d1left2 span')
let descriçao = document.querySelector('.d1left4')
let aviso = document.querySelector('.d2')
let lateral = document.querySelector('.d1right')
let numeros = document.querySelector('.d1left3')

let etapaAtual = 0
let numero = ``;

function começarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = `` ;
     
    for(let i = 0 ; i < etapa.numeros ; i ++){
        if(i ===0){
            numeroHtml += '<div class="numero pisca"> </div>'; 
        }else{ numeroHtml += '<div class="numero"> </div>';     
    }
}

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo; 
    descriçao.innerHTML = ``;
    aviso.style.display = 'none';
    lateral.innerHTML = ``;
    numeros.innerHTML = numeroHtml;
 }
function atualizaInterface(){ 
    let etapa = etapas[etapaAtual];
    let cadidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    })
    console.log("candidato", cadidato);
} 

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero} ${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
          elNumero.nextElementSibling.classList.add('pisca');  
        }else{
            atualizaInterface();
        }
        

    }
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

começarEtapa();

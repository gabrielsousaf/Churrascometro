// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  if(adultos < 0 || adultos == '') {
    alert("Escolha um numero valido para adultos");
  } 
  
  else if (criancas < 0) {
    alert("Escolha um numero valido para crianças");
  } 
  
  else if (duracao < 0 || duracao == '') {
    alert("Escolha um numero valido para a duração");
  } 
  
  else {
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;

    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    
    let qdtTotalBebidas =  bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;


    resultado.innerHTML = `
    <div class="result-block">
      <img src="./images/carne.svg"/>
      <p>${qdtTotalCarne / 1000} Kg de Carne</p>
    </div>`;

    resultado.innerHTML += `
    <div class="result-block">
    <img src="./images/cerveja.svg"/>
    <p>${qdtTotalCerveja / 1000} L de Cerveja</p>
    </div>`;

    resultado.innerHTML += 
    `<div class="result-block"> 
    <img src="./images/refri.svg">
    <p>${qdtTotalBebidas / 1000} L de Refri</p>
    </div>`;
  }
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

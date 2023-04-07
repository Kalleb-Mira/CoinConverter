const button = document.getElementById('button-converter');
const select = document.getElementById('select-value');
const arrow = document.getElementById('arrow')

const dolar = 5.2
const euro = 5.5
const bitcoin = 141.333


const convertValue = () => {
  const inputConvert = document.getElementById('input').value
  const realValue = document.getElementById('real-valor-text')
  const valueConvert = document.getElementById('convertido-value')

  realValue.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputConvert);


  if (select.value === 'US$ Dólar Americano') {
    valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(inputConvert / dolar);
  }

  if (select.value === '€ Euro') {
    valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputConvert / euro);
  }

  if (select.value === 'Bitcoin') {
    valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BTC',
      minimumFractionDigits: 8
    }).format(inputConvert / bitcoin);
  }

  
}

const changeCoin = () => {
  const changeName = document.getElementById('name-convert');
  const changeImg = document.getElementById('img-convert');

  if (select.value === '€ Euro') {
    changeName.innerHTML = "Euro"
    changeImg.src = "./assets/euro.png"
  }

  if (select.value === 'US$ Dólar Americano') {
    changeName.innerHTML = "Dólar"
    changeImg.src = "./assets/usa.png"
  }

  if (select.value === 'Bitcoin') {
    changeName.innerHTML = "Bitcoin"
    changeImg.src = "./assets/bitcoin.png"
  }

  convertValue()
}

const arrowAnima = () => {
  arrow.classList.add('anima');

  setTimeout(() => {
    arrow.classList.remove('anima');
  }, 1000);

}





button.addEventListener('click', convertValue);
select.addEventListener('change', changeCoin);

button.addEventListener('click', arrowAnima);



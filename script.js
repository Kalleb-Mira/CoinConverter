const button = document.getElementById('button-converter');
const select = document.getElementById('select-value');
const arrow = document.getElementById('arrow')




const convertValue = async () => {
const inputConvert = document.getElementById('input').value;
const cleanedValue = inputConvert.replace(/[^0-9]/g, '')
const inputValue = parseFloat(cleanedValue);

  const realValue = document.getElementById('real-valor-text')
  
  const valueConvert = document.getElementById('convertido-value')

  
  
  const data = await fetch ("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  

  realValue.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 3
  }).format(inputValue);


  if (select.value === 'US$ Dólar Americano') {
    valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    }).format(inputValue / dolar);
  }

  if (select.value === '€ Euro') {
    valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputValue / euro);
  }

  if (select.value === 'Bitcoin') {
    valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BTC',
      maximumFractionDigits: 2
    }).format(inputValue / bitcoin);
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



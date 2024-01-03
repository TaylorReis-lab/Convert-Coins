const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectTop = document.querySelector(".currency-select-top")


const convertValues = async ()  =>{
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    console.log(data)
    
    const dolarToday = data.USDBRL.ask
    const euroToday = data.EURBRL.ask
    const libraToday = 7.0
    const bitcoinToday = data.BTCBRL.ask
    const realToday = 1

    if(currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if(currencySelectTop.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if(currencySelectTop.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelectTop.value == "euro")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

    if(currencySelect.value == "euro")
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

    if (currencySelectTop.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: 'currency',
        currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: 'currency',
        currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelectTop.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC" 
    }).format(inputCurrencyValue / bitcoinToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC" 
    }).format(inputCurrencyValue / bitcoinToday)
    }

}

function changeCurrencyTop(){
    const currencyNameTop = document.getElementById("currency-name-top")
    const currencyImgTop = document.getElementById("bandeira1")

    if(currencySelectTop.value == "real"){
        currencyNameTop.innerHTML = "Real Brasileiro"
        currencyImgTop.src = "./assets/bandeira-brazil.png"
    }

    if(currencySelectTop.value == "dolar"){
        currencyNameTop.innerHTML = "Dolá Americano"
        currencyImgTop.src = "./assets/bandeira-estados-unidos.png"
    }
    
    if(currencySelectTop.value == "euro"){
        currencyNameTop.innerHTML = "Euro"
        currencyImgTop.src = "./assets/Euro.png"
    }

    if(currencySelectTop.value == "libra"){
        currencyNameTop.innerHTML = "Libra"
        currencyImgTop.src = "./assets/libra.png"
    }

    if(currencySelectTop.value == "bitcoin"){
        currencyNameTop.innerHTML = "Bitcoin"
        currencyImgTop.src = "./assets/bitcoin.png"
    }

    convertValues()
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("bandeira2")

    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./assets/bandeira-brazil.png"
    }

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolá Americano"
        currencyImg.src = "./assets/bandeira-estados-unidos.png"
    }
    
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}


currencySelectTop.addEventListener("change", changeCurrencyTop)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
// Request USD to BRL VALUE
const API_URL = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
fetch(API_URL).then(res=>{return res.json()}).then (json => {rate = json.rates.BRL})

// Function to Calc the Total Result |||  usdValueConverted => (usdValue * Taxes * Bank Spread * Exchange Rate)
function revealResult(){
    document.getElementById('result').style.animation = "example .3s ease-in-out 0s normal forwards";
    var usdValue = document.getElementById('inputUsd').value;
    var usdValueConverted = usdValue * 1.0638 * 1.04 * rate;
    document.getElementById('clientValue').innerHTML = "R$ " + usdValueConverted.toFixed(2) + "*";
    document.activeElement.blur();
};
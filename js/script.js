const inputBase = document.getElementById("base_input")
const inputQuote = document.getElementById("quote_input")

const selectBase = document.getElementById("currency1")
const selectQuote = document.getElementById("currency2")

const buttonConvert = document.getElementById("convert")

async function getPriceCurr(base, quote) {
    // https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT
    const apiKey = "7643a9379eac5ef74dfef2d6";
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${base}/${quote}`
    const res = await fetch(apiUrl);
    const data = await res.json();
    const price = data.conversion_rate;
    return price
}

const checkSelected = (options) => {
    for (const option of options) {
        if (option.selected) return option.value
    }
}

buttonConvert.addEventListener("click", async() => {
    const baseCurr = checkSelected(selectBase.options)
    const quoteCurr = checkSelected(selectQuote.options)
    const amount = inputBase.value;

    const res = await getPriceCurr(baseCurr, quoteCurr)
    const result = amount * res;
    inputQuote.value = result.toFixed(2);
})


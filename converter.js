let listSelect = document.querySelectorAll('.left button')
let listSelectRight = document.querySelectorAll('.rigth button')
let lefttextarea = document.querySelector('.lefttextarea')
let righttextarea = document.querySelector('.righttextarea')



let base = 'AZN'
let symbol = 'RUB'
fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`).then(response => response.json()
).then(data => {
    console.log(data.rates[symbol]);
});




listSelect.forEach(item => {
    item.addEventListener('click', () => {
        listSelect.forEach(item => {
            item.classList.remove("active")
        })
        item.classList.add("active")
        base = item.innerText
        fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`).then(response => response.json()
        ).then(data => {
            console.log(data);

            inputVal = Number(lefttextarea.value)
            rates = data.rates[symbol]
            righttextarea.value = (inputVal * rates).toFixed(2);
        })

    })
})



listSelectRight.forEach(item => {
    item.addEventListener('click', () => {
        listSelectRight.forEach(item => {
            item.classList.remove("active")
        })
        item.classList.add("active")
        symbol = item.innerText

        fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`).then(response => response.json()
        ).then(data => {
            console.log(data);
            inputVal = Number(lefttextarea.value)
            ratesCustom = data.rates[symbol]
            lefttextarea.value = (inputVal * ratesCustom).toFixed(2);

        })

    })

})





fetch('https://api.exchangerate.host/latest?base&symbols').then(response => response.json()
).then(data => {
    console.log(data)
        ;
});


fetch('https://api.exchangerate.host/latest?symbols').then(response => response.json()
).then(data => {
    console.log(data)
        ;
});

fetch('https://api.exchangerate.host/latest?base').then(response => response.json()
).then(data => {
    console.log(data)
        ;
});






let macbooks = {
    white: './img/white.png',
    spacegrey: './img/spacegrey.png',
}

let prices1 = {
    white: 1999,
    spacegrey: 2199,
}

// let basePrice = prices1.white 
// let basePrice2 = prices1.spacegrey;


// let prices2 = {
//     btn1: basePrice + 0 || basePrice2 + 0,
//     btn2: basePrice + 200 || basePrice2 + 200,
//     btn3: basePrice + 600 || basePrice2 + 600,
//     btn4: basePrice + 1200 || basePrice2 + 1200
// }

let prices2 = {
    btn1: prices1.white + 0,
    btn2: prices1.white + 200,
    btn3: prices1.white + 600,
    btn4: prices1.white + 1200,
    btn5: prices1.spacegrey + 0,
    btn6: prices1.spacegrey + 200,
    btn7: prices1.spacegrey + 600,
    btn8: prices1.spacegrey + 1200,
};



let btnColors = document.querySelectorAll('.color-change')
let img = document.querySelector('.images')

let colorTitle = document.getElementById('color-title');
let priceTitle = document.getElementById('price-title');

btnColors.forEach((btn) => {
    btn.onclick = () => {
        btnColors.forEach((item) =>{
            item.classList.remove('active')
        })

        let key = btn.getAttribute('id')
        img.src = macbooks[key]

        colorTitle.innerText = key.charAt(0).toUpperCase() + key.slice(1);
        priceTitle.innerText = prices1[key];

        btn.classList.add('active')
        
    }

    
})



let prices = document.querySelectorAll('.price')

prices.forEach((price, index)=>{
    price.onclick = () => {
        prices.forEach((item) => {
            item.classList.remove('active')

        })

        price.classList.add('active')

        let key = 'btn' + (index + 1); 
        priceTitle.innerText = prices2[key]
    }
})



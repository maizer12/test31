//звук покупки
let audio = document.querySelector('.audio')
//баланс игрока
let balance = document.querySelector('.ruletca-balance__mani') 
//количество билетов игрока
let nuberBil = document.querySelector('.card__bue-number')

//купить 10 билетов
let tovarVan = document.querySelector('.shoop-item__btn').addEventListener('click', ()=>{
    let priceBy = Number(balance.textContent)
    if(priceBy >= 1000){
        balance.textContent = priceBy - 1000
        let numberBill = Number(nuberBil.textContent)
        nuberBil.textContent = numberBill + 10
        audio.innerHTML = '<audio src="./song/bue.mp3" class="audio__start" autoplay></audio>'
        setTimeout(function() {
            alert('Вы купили 10 билетов')
        }, 500)
        
    }else{ alert('У вас не достаточно денег!')}
})



export default tovarVan
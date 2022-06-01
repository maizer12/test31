let balance = document.querySelector('.ruletca-balance__mani') 

const closeTasc = document.querySelector('.tasks__btn').addEventListener('click', ()=>{
    document.querySelector('.tasks').classList.add('tasks-close')
    document.querySelector('.history__btn-tasc').innerHTML = '<button class="history__btn history__number">Задания!</button>'
    document.querySelector('.history__btn').addEventListener('click', ()=>{
        document.querySelector('.tasks').classList.remove('tasks-close')
        document.querySelector('.history__btn-tasc').innerHTML = ''
        document.querySelector('.history__btn').style.background=''
    })
    
})
window.addEventListener('click', function(){
    document.querySelectorAll('.zabrat-nagradu').forEach(elem=>{
        elem.addEventListener('click', function(){
        if(elem.classList.contains('zabrat-nagradu')){
        document.querySelector('.exercise-yes').classList.remove('tesc-yes-active')
        let element = elem.parentNode
        let texts = element.querySelector('.tasks__wheel')
        let price = element.querySelector('.tasks__price-number')
        let progress = element.querySelector('.progres-coleso')
        let textN = Number(texts.textContent)
        let priceN = Number(price.textContent)
        let progressN = Number(progress.textContent)
        balance.textContent = Number(price.textContent) + Number(balance.textContent)
        price.textContent =  priceN * 2
        texts.textContent = textN * 2
        if(progressN <= textN){
        elem.classList.remove('zabrat-nagradu')}}
    })
    })
})
export default closeTasc
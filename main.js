let buttonGo = document.querySelector('.ruletca-inner__button')
let errow = document.querySelector('.ruletca-inner__errows')
let balance = document.querySelector('.ruletca-balance__mani') 
let nameWin = document.querySelector('.winner__ruletca') 
let awards =document.querySelector('.box-awards')
let audio = document.querySelector('.audio')
let item = document.querySelector('.box-awards__item')
let items = document.querySelector('.box-awards__items')
let body = document.querySelector('body')
let buttonHover = document.querySelector('.ruletca-inner__button')
let winnerYes = document.querySelector('.winner-yes')
let winnerAudio = document.querySelector('.winner__audio')
let history = document.querySelector('.histoty__list')
// опыт и уровень
let exp = document.querySelector('.ruletca-experience__mani')
let opitup = document.querySelector('.ruletca-experience__opit')
let lvlUser = document.querySelector('.ruletca-lvl__mani') 
//получаймый опыт
let opitVan = 150
//добавление опыта
function lvlApp(a){
    exp.textContent = Number(exp.textContent) + a
    if(Number(exp.textContent) >= Number(opitup.textContent)){
        opitup.textContent = Number(opitup.textContent)+ (Number(lvlUser.textContent) *  Number(opitup.textContent))
        document.querySelector('.new-lvl__number').textContent = lvlUser.textContent
        lvlUser.textContent = Number(lvlUser.textContent)+1 
        document.querySelector('.new-lvl__prize').textContent = 'И получили ' + (Number(lvlUser.textContent) *  Number(opitup.textContent)) + '$'
        balance.textContent = Number(balance.textContent)+ (Number(lvlUser.textContent) *  Number(opitup.textContent))
        document.querySelector('.new-lvl').style.display = ''
        setTimeout(()=>{
            document.querySelector('.new-lvl').style.display = 'none'
        }, 3000)
    }
}

//полная история наград
const historyNew = document.querySelector('.history-max__containet')

//кнопка регистрация
//import cnopRegistration from './js/cnopcaRegist.js'
import shoop from './js/shoop.js'


//ЗВУК НАВЕДЕНИЯ НА ГЛАВНУЮ КНОПКУ

buttonHover.addEventListener('mouseover', ()=>{
    audio.innerHTML = '<audio src="./song/hover.mp3" class="audio__start" autoplay></audio>'
})

let price = 300

let num = 8


let degR = [0, 45, 90, 135, 180, 225, 270,  315,  360,]
let winnerR = ['Компютер', 'Холодильник', 'Айфон', 'Чайник', 'Плазму', 'Стиралку',  'Пилосос',  'Плитку',]
let priceP = [500, 300, 400, 25, 400, 200, 25, 50,]

let nuberB = 0
//задания на количество предметов
let amountV = 0
let amountT = 0
let amountF = 0
let amountFo = 0
let amountFi = 0
let amountS = 0
let amountvan = 0

//крутить
buttonGo.addEventListener('click', function(){
    if(balance.textContent > 299){
    lvlApp(opitVan)
    let random = Math.floor(Math.random() * num)
    let priceN =  priceP[random]
    let deg = degR[random]
    let degF = deg + (720 + 360 + 360 + 360 + 360 )
    let winner = winnerR[random]
    //задания
    let numbers = nuberB += 1
    let sprob = document.querySelector('#task1')
    
    if(sprob.classList.contains('active-zadan')){
    let numbers = amountvan += 1
    let nagrad = document.querySelector('.tasks__price-number')
    let wheelObgect = document.querySelector('.tasks__wheel')
    //задания крутить колесо
    const wheel = Number(wheelObgect.textContent)
    document.querySelector('.progres-coleso').textContent = numbers
    if(wheel <= numbers){
        document.querySelector('.tasks__button').classList.add('zabrat-nagradu')
        document.querySelector('.zabrat-nagradu').addEventListener('click', function (){
            const wheel = Number(wheelObgect.textContent)
            const nagride = Number(nagrad.textContent)
            let jec = document.querySelector('.tasks__button')
            if(jec.classList.contains('zabrat-nagradu')){
            wheelObgect.textContent = wheel * 4
            let priceBy = Number(balance.textContent)
            balance.textContent = priceBy + nagride
            nagrad.textContent = 2 * nagride
            document.querySelector('.exercise-yes').classList.remove('tesc-yes-active')
            audio.innerHTML = '<audio src="./song/nagrat-zd.mp3" class="audio__start" autoplay></audio>'
            document.querySelector('.tasks__button').classList.remove('zabrat-nagradu')}
        })}
    }
    //задание на телевизоры
    
    if(winner === 'Плазму'){
        let amounts = amountV += 1
        let element = document.querySelector('#task8')
        element.querySelector('.progres-coleso').textContent = amounts
        let wheel = element.querySelector('.tasks__wheel').textContent
        let wheels = Number(wheel)
        if(amounts >= wheels){
            element.querySelector('.tasks__button').classList.add('zabrat-nagradu')
        }
    }else if(winner === 'Компютер'){
        let amounts = amountT += 1
        let element = document.querySelector('#task3')
        element.querySelector('.progres-coleso').textContent = amounts
        let wheel = element.querySelector('.tasks__wheel').textContent
        let wheels = Number(wheel)
        if(amounts >= wheels){
            element.querySelector('.tasks__button').classList.add('zabrat-nagradu')
        }
    }else if(winner === 'Холодильник'){
        let amounts = amountF += 1
        let element = document.querySelector('#task4')
        element.querySelector('.progres-coleso').textContent = amounts
        let wheel = element.querySelector('.tasks__wheel').textContent
        let wheels = Number(wheel)
        if(amounts >= wheels){
            element.querySelector('.tasks__button').classList.add('zabrat-nagradu')
        }
    }else if(winner === 'Айфон'){
        let amounts = amountFo += 1
        let element = document.querySelector('#task5')
        element.querySelector('.progres-coleso').textContent = amounts
        let wheel = element.querySelector('.tasks__wheel').textContent
        let wheels = Number(wheel)
        if(amounts >= wheels){
            element.querySelector('.tasks__button').classList.add('zabrat-nagradu')
        }
    }else if(winner === 'Чайник'){
        let amounts = amountFi += 1
        let element = document.querySelector('#task6')
        element.querySelector('.progres-coleso').textContent = amounts
        let wheel = element.querySelector('.tasks__wheel').textContent
        let wheels = Number(wheel)
        if(amounts >= wheels){
            element.querySelector('.tasks__button').classList.add('zabrat-nagradu')
        }
    }else if(winner === 'Стиралку'){
        let amounts = amountS += 1
        let element = document.querySelector('#task7')
        element.querySelector('.progres-coleso').textContent = amounts
        let wheel = element.querySelector('.tasks__wheel').textContent
        let wheels = Number(wheel)
        if(amounts >= wheels){
            element.querySelector('.tasks__button').classList.add('zabrat-nagradu')
        }
    }else{
        
    }
    // проверка на выполнение 
    document.querySelectorAll('.active-zadan').forEach(ele =>{
        let col = Number(ele.querySelector('.progres-coleso').textContent)
        let winn = Number(ele.querySelector('.tasks__wheel').textContent)
        if(col >= winn){
            document.querySelector('.exercise-yes').classList.add('tesc-yes-active')
            document.querySelector('.history__btn').style.background='#8ae216'
        }
    })

    body.style.overflow = 'hidden'
    
    
    // стрелка
    errow.style.transform = 'rotate(' +  degF + 'deg)';
    errow.style.transition = 'all 5.5s';
    // минус 300 доларов
    balance.textContent = balance.textContent - price
    // окно победы внутри
    nameWin.innerHTML = '<h3 class="winner__name"> Поздравляем Вы выйграли <span>' + winner + '</span></h3>' + '<img src="img/'+ winner +'.png" alt="" class="winner__img" />' + '<audio src="./song/winner.mp3" autoplay></audio>'+ '<button class="winner__button">Забрать</button>'
    
    // оконо победы
    setTimeout(()=>{
    nameWin.classList.add('you-winer')
    audio.innerHTML = '<audio src="./song/pobeda.mp3" class="audio__start" autoplay></audio>'
    }, 6000)

    buttonGo.classList.add('butoon-ren')
    audio.innerHTML = '<audio src="./song/go.mp3" class="audio__start" autoplay></audio>'
    
    //крутящий бордер
    document.querySelector('.ruletca-inner__wheel').classList.add('animation-rotate')
    
    
    // Получить награду
    document.querySelector('.winner__button').addEventListener('click', ()=>{
        let degF = 0
        body.style.overflow = ''
        errow.style.transition = 'all 0.0s';
        errow.style.transform = 'rotate(' + degF + 'deg)';
        nameWin.classList.remove('you-winer')
        buttonGo.classList.remove('butoon-ren')
        errow.classList.remove('animat')
        buttonGo.style.display='block'
        audio.innerHTML = '<audio src="./song/oke.mp3" class="audio__start" autoplay></audio>'
        //крутящий бордер
        document.querySelector('.ruletca-inner__wheel').classList.remove('animation-rotate')
        // вы получили награду
        if(items.getElementsByClassName('item')){
        winnerYes.classList.add('yes-item')
        audio.innerHTML = '<audio src="./song/nagrad.mp3" class="audio__start" autoplay></audio>'
        }
    })
    //добавление елемента
    setTimeout(()=>{
    items.innerHTML += '<div id = "' + numbers + '" class="box-awards__item">'+'<p class="box-awards__name">' + winner +'</p>' + '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'+ '<button'+ ' id= "' + numbers + '" class="box-awards__button">'   + priceN  + '</button> </div>'
    
    }, 6000)
    //добавление истории
    setTimeout(()=>{
    history.innerHTML += '<li class="history__item"><span>'+ numbers +'. </span><span>'+ winner +'</span><span>'+ priceN +'</span></li>'
    }, 6000)
    //добавление истории полной
    setTimeout(()=>{
        historyNew.innerHTML += '<li class="history-max__item"><span>'+ numbers +'. </span><span>'+ winner +'</span><span>'+ priceN +'</span></li>'
    }, 6000)
    if(numbers > 11 ){
        document.querySelector('.history__item').remove()
    }
    
    
    
    
    }else{
        audio.innerHTML = '<audio src="./song/eror.mp3" class="audio__start" autoplay></audio>'
    }
    
})


//загрузочное окно
let masc = document.querySelector('.masc')

 window.addEventListener('load', ()=>{
    masc.remove()
 })

// профиль
let profileLvl = document.querySelector('.profile__lvl')
let profilePrice = document.querySelector('.profile__price')

// управление страницей
let navigation = document.querySelectorAll('.menu__link')




navigation.forEach( navig =>{
    navig.addEventListener('click', ()=>{
        document.querySelector('.section-open').classList.remove('section-open')
        document.getElementById(navig.id + 'elem').classList.add('section-open')
        //получение актуальной информации в профиль
        profilePrice.textContent = 'Текущий баланс: ' + balance.textContent + '$'
        
    })
})
//про аккаунт 
 document.querySelector('.pro-accaunt__button').addEventListener('click', ()=> {
    audio.innerHTML = '<audio src="./song/prob.mp3" class="audio__start" autoplay></audio>'
    document.querySelector('.pro-accaunt__window').classList.add('pro-go')
    document.querySelector('body').style.overflow='hidden'
})
document.querySelector('#no-pro').addEventListener('click', ()=> {
    document.querySelector('body').style.overflow=''
    audio.innerHTML = '<audio src="./song/prob.mp3" class="audio__start" autoplay></audio>'
    document.querySelector('.pro-accaunt__window').classList.remove('pro-go')
})
document.querySelector('#yes-pro').addEventListener('click', ()=> {
if(balance.textContent > 10000){
    document.querySelector('body').style.overflow=''
    audio.innerHTML = '<audio src="./song/lvl.mp3" class="audio__start" autoplay></audio>'
    document.querySelector('.pro-accaunt__window').classList.remove('pro-go')
    document.querySelector('.profile__image').style.border = '4px solid red'
    document.querySelector('.profile__vip').textContent = 'Статус PRO'
    balance.textContent = balance.textContent - 10000
    document.querySelector('.pro-accaunt').remove()
    opitVan = opitVan * 2
    return opitVan
}else{
    audio.innerHTML = '<audio src="./song/eror.mp3" class="audio__start" autoplay></audio>'
    setTimeout( ()=>{alert("Вам не хватает " + (10000 - balance.textContent) + "$"  )}, 800)
}})
//vip аккаунт
document.querySelector('.vip-accaunt__button').addEventListener('click', ()=> {
    document.querySelector('body').style.overflow='hidden'
    audio.innerHTML = '<audio src="./song/prob.mp3" class="audio__start" autoplay></audio>'
    document.querySelector('.vip-accaunt__window').classList.add('pro-go')
})
document.querySelector('#no-vip').addEventListener('click', ()=> {
    document.querySelector('body').style.overflow=''
    audio.innerHTML = '<audio src="./song/prob.mp3" class="audio__start" autoplay></audio>'
    document.querySelector('.vip-accaunt__window').classList.remove('pro-go')
})
document.querySelector('#yes-vip').addEventListener('click', ()=> {
if(balance.textContent > 49999){
    document.querySelector('body').style.overflow=''
    audio.innerHTML = '<audio src="./song/vip.mp3" class="audio__start" autoplay></audio>'
    document.querySelector('.vip-accaunt__window').classList.remove('pro-go')
    //вип стили
    setTimeout( ()=>{
        document.querySelector('body').style.background = 'linear-gradient(270deg, rgb(193, 171, 54) 10%, rgb(152, 127, 0) 45%, rgb(255, 214, 2))'
        document.querySelector('.ruletca').style.background = 'linear-gradient(270deg, rgb(135, 120, 43) 10%, rgb(118, 100, 4) 45%, rgb(227, 192, 9))'
        document.querySelector('.card').style.background = 'linear-gradient(270deg, rgb(255, 135, 0) 10%, rgb(118, 79, 4) 45%, #ed8105)'
        document.querySelector('.card__title').style.background = 'linear-gradient(270deg, rgb(246, 136, 13) 10%, rgb(118, 79, 4) 45%, rgb(103, 67, 8))'
        document.querySelector('.card__title_legen').style.background = ' linear-gradient(180deg, rgb(154, 151, 147) 2%, rgb(13, 13, 12) 57%)'
        document.querySelector('.card__desc_legen').style.background = 'linear-gradient(45deg, rgb(9, 9, 9) 23%, rgb(66, 66, 66) 74%, rgb(0, 0, 0))'
        document.querySelector('.card__items_legen').style.background = 'linear-gradient(45deg, rgb(13, 13, 13) 22%, rgb(118, 115, 110) 76%, rgb(0, 0, 0))'
        document.querySelector('.card__cupon_legen').style.background = 'linear-gradient(45deg, rgb(9, 9, 9) 23%, rgb(66, 66, 66) 74%, rgb(0, 0, 0))'
        document.querySelector('.profile__image').style["boxShadow"] = "0 0 40px red"
        document.querySelector('.profile__image').style.border = '3px solid #fff'
        document.querySelector('.profile__vip').textContent = 'Статус VIP'
    }, 10000)
    balance.textContent = balance.textContent - 50000
    document.querySelector('.vip-accaunt').remove()
    opitVan = opitVan * 2
    return opitVan
}else{
    audio.innerHTML = '<audio src="./song/eror.mp3" class="audio__start" autoplay></audio>'
    setTimeout( ()=>{alert("Вам не хватает " + (50000 - balance.textContent) + "$"  )}, 800)
}})
//билет
let nuberBil = document.querySelector('.card__bue-number')
let numberBill = Number(nuberBil.textContent)
//легендарный билет
let nuberBilet = document.querySelector('.card__bue-number_legen')
let numberBilleet = Number(nuberBilet.textContent)


//карточка
let nubersBe = 0
document.querySelectorAll('.card__item').forEach( elements  =>{ 

elements.addEventListener('click', () => {
    
    let numberBilleet = Number(nuberBilet.textContent)
    let numberBill = Number(nuberBil.textContent)
    let idCard = elements.id + 'price'
    //карта-блок
     document.querySelector('.card').classList.add('body-bloc')
        setTimeout(()=>{
        document.querySelector('.card').classList.remove('body-bloc')
        document.getElementById(elements.id).classList.remove('card-open')
     }, 4000)
    //легендарны карточки
    if( numberBilleet > 0 && (idCard ===  'card-4price'  || idCard ===  'card-5price' || idCard ===  'card-6price' )){
        const randome = 11
        lvlApp(400)
        let randomCard = Math.floor(Math.random() * randome)
        document.getElementById(elements.id).classList.add('card-open')
        let numberBill = Number(nuberBilet.textContent)
        let numberBalance = Number(balance.textContent)
        nuberBilet.textContent = numberBill - 1
        audio.innerHTML = '<audio src="./song/lvl.mp3" class="audio__start" autoplay></audio>'
        //добавление дениг на баланс
        balance.textContent = numberBalance + randomCard*3000
        //Добавление дениг
        document.getElementById(elements.id + 'price').textContent= (randomCard*3000) + '$'
    }
    else if(numberBill > 0 && (idCard ===  'card-1price'  || idCard ===  'card-2price' || idCard ===  'card-3price') ){
     const randome = 11
     lvlApp(100)
     let randomCard = Math.floor(Math.random() * randome)
     document.getElementById(elements.id).classList.add('card-open')
     let numberBill = Number(nuberBil.textContent)
     nuberBil.textContent = numberBill - 1
     audio.innerHTML = '<audio src="./song/lvl.mp3" class="audio__start" autoplay></audio>'
     let numberBalance = Number(balance.textContent)
     balance.textContent = numberBalance + randomCard*100
     document.getElementById(elements.id + 'price').textContent= (randomCard*100) + '$'
      //задания
    let numbers = nubersBe += 1
    let nagrad = document.querySelector('.tasks__price-number-card')
    let wheelObgect = document.querySelector('.tasks__wheel-card')
    //задания открыть карту
    document.querySelector('.progres-card').textContent = numbers
    const wheel = Number(wheelObgect.textContent)
     if(wheel <= numbers){
         document.querySelector('.tasks__button-card').classList.add('zabrat-nagradu')
         document.querySelector('.zabrat-nagradu').addEventListener('click', function (){
             const wheel = Number(wheelObgect.textContent)
             const nagride = Number(nagrad.textContent)
             let jec = document.querySelector('.tasks__button-card')
             if(jec.classList.contains('zabrat-nagradu')){
             wheelObgect.textContent = wheel * 2
             let priceBy = Number(balance.textContent)
             balance.textContent = priceBy + nagride
             nagrad.textContent = 2 * nagride
             audio.innerHTML = '<audio src="./song/nagrat-zd.mp3" class="audio__start" autoplay></audio>'
             document.querySelector('.tasks__button-card').classList.remove('zabrat-nagradu')}
         })
     }//
     //айди карт
     }else{
        alert('У вас закочились, билеты!')
        //удаление анимации
        document.querySelector('.icards-anim').classList.remove('icards-anim')
        document.querySelector('.card__items_ainimat').classList.remove('card__items_ainimat')
    }

     
     })})

//})})
// кнопка
document.querySelector('.card__cupon').addEventListener('click', ()=>{
    if(balance.textContent > 499){
    let numberBill = Number(nuberBil.textContent)
    nuberBil.textContent = numberBill + 1
    audio.innerHTML = '<audio src="./song/prob.mp3" class="audio__start" autoplay></audio>'
    balance.textContent = balance.textContent - 500
    document.querySelector('.card__items').classList.add('icards-anim')
}else{
        alert('Не достаточно денег')
    }
})
//легендарна кнопка
document.querySelector('.card__cupon_legen').addEventListener('click', ()=>{
    if(balance.textContent > 14999){
    let numberBill = Number(nuberBilet.textContent)
    nuberBilet.textContent = numberBill + 1
    audio.innerHTML = '<audio src="./song/prob.mp3" class="audio__start" autoplay></audio>'
    balance.textContent = balance.textContent - 15000
    document.querySelector('.card__items_legen').classList.add('card__items_ainimat')
}else{
        alert('Не достаточно денег')
    }
})
//профиль баланс

    window.addEventListener('click', function(){
        this.setTimeout(function(){
        document.querySelector('.profile-user__prise-number').textContent = 'Ваш баланс: ' + balance.textContent
    }, 1000   )
    })

//прикрыть вкладку профиля
document.querySelector('.profile-user__btn').addEventListener('click', function(){
    let userProfile = document.querySelector('.profile-user__user-prof')
    if(userProfile.classList.contains('scrit')){
        document.querySelector('.profile-user__user-prof').classList.remove('scrit-none')
        audio.innerHTML = '<audio src="./song/hover.mp3" class="audio__start" autoplay></audio>'
        setTimeout(()=>{
            userProfile.classList.remove('scrit')
        }, 100)
    }else{
        userProfile.classList.add('scrit')
        audio.innerHTML = '<audio src="./song/hover.mp3" class="audio__start" autoplay></audio>'
        setTimeout(()=>{
            document.querySelector('.profile-user__user-prof').classList.add('scrit-none')}, 700
        )
    }
})
//кноки заданий
import tasc from './js/task.js'

//получить радомное задание

import tescRandom from './js/newtask.js'

//обновления профиль
window.addEventListener('click', function(){
    document.querySelector('.profile__lvl').textContent = 'Ваш уровень ' + document.querySelector('.profile-user__lvl-number').textContent
    if(document.querySelector('.box-awards__button')){
        let buttonItems = document.querySelectorAll('.box-awards__button')
    // кнопка продать предмет
    buttonItems.forEach(element => {
        element.addEventListener('click', function(){
        let productPrice = Number(element.textContent)
        if(productPrice < 600){
           document.getElementById( element.id).remove()
           let productPrice = Number(element.textContent)
           let priceBy = Number(balance.textContent)
           balance.textContent = priceBy + productPrice
           audio.innerHTML = '<audio src="./song/bue.mp3" class="audio__start" autoplay></audio>'
           if(items.getElementsByClassName('item')){
            winnerYes.classList.remove('yes-item')}
            }else{
            alert('Пошел в жопу маленький хакер!!')
        }})
    })
    }
})



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
let ruletca = document.querySelector('.lvl')
// опыт и уровень
let lvl = document.querySelector('.ruletca-lvl__mani')
let exp = document.querySelector('.ruletca-experience__mani')
let opitup = document.querySelector('.ruletca-experience__opit')
//опыт
let expInner = Number(exp.textContent)
//уровень
let lvlInner = Number(lvl.textContent)
//левел опыт



opitup.textContent = 300

//полная история наград
const historyNew = document.querySelector('.history-max__containet')

//регистрация
let nameRegistration = document.querySelector('.registration__name')
let email = document.querySelector('.registration__email')
let password = document.querySelector('.registration__password')
let buttonRegistration = document.querySelector('.registration__over')
let userLOGIN = document.querySelector('.user-login')
let userAvatar = document.querySelectorAll('.registration__img')
//данные пользователя
const user = {
    userName : nameRegistration,
    userEmail : email,
    userPassword : password,
}
//аватарка 
userAvatar.forEach(avatar =>{
    avatar.addEventListener('click', ()=>{
        document.querySelector('.images-user').classList.remove('images-user')
        let idImages = avatar.id
        document.getElementById(idImages).classList.add('images-user')
        //звук фото
        audio.innerHTML = '<audio src="./song/avatar.mp3" class="audio__start" autoplay></audio>'
        //профиль фото
        let imageLink = document.querySelector('.images-user')
        console.log(imageLink.src)
        let profileUser = document.querySelector('.profile__img')
        profileUser.innerHTML = '<img src="' + imageLink.src  + '" alt="" class="profile__image" />'
    })
})

//кнопка регистрации
buttonRegistration.addEventListener('click', ()=>{
    let numberUsern = user.userName.value.length
    let numberEmail = user.userEmail.value.length
    let numberPassw = user.userPassword.value.length
    // розкоментити
    if( numberEmail < 6 || numberPassw < 6 || numberUsern < 6 && numberEmail > 17 || numberPassw > 17 || numberUsern > 17 ){
        audio.innerHTML = '<audio src="./song/erors.mp3" class="audio__start" autoplay></audio>'
        setTimeout(()=>
        {alert('Проверьте правильность ввода данных! Правила ввода: Минимум 6 символов!! (Не больше 17 символов!!) И выбрана аватарка! Все полья должны быть заполнены!!')},
        800)
    }else{
        userLOGIN.textContent = user.userName.value
        document.querySelector('.registration').remove()
    }

})
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
//получаймый опыт
let opitVan = 15
//крутить
buttonGo.addEventListener('click', function(){
    if(balance.textContent > 299){
    let random = Math.floor(Math.random() * num)
    let priceN =  priceP[random]
    let deg = degR[random]
    let degF = deg + (720 + 360 + 360 + 360 + 360 )
    let winner = winnerR[random]
    body.style.overflow = 'hidden'
    //добавление опыта
    let expPLus = expInner += opitVan
    exp.textContent = expPLus
    
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
    let numbers = nuberB += 1
    console.log(numbers )
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
    items.innerHTML += '<div id = "' + numbers + '" class="box-awards__item">'+'<p class="box-awards__name">' + winner +'</p>' + '<img src="img/'+ winner +'.png" alt="" class="box-awards__img" />'+ '<button'+ ' id= "' + numbers + '" class="box-awards__button">'   + priceN + '</button>' +'</div>'
    let buttonItems =document.querySelectorAll('.box-awards__button')
    // кнопка продать предмет
    buttonItems.forEach(element => {
        element.addEventListener('click', function(){
        let productPrice = Number(element.textContent)
        if(productPrice < 600){
           document.getElementById( element.id).remove()
           let productPrice = Number(element.textContent)
           let priceBy = Number(balance.textContent)
           console.log(productPrice)
           balance.textContent = priceBy + productPrice
           audio.innerHTML = '<audio src="./song/bue.mp3" class="audio__start" autoplay></audio>'
           if(items.getElementsByClassName('item')){
            winnerYes.classList.remove('yes-item')}
            }else{
            alert('Пошел в жопу маленький хакер!!')
        }})
     })
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
    //новый левел 
    const opitLvl = lvlInner * 300 
    if(expInner >= opitLvl){
        setTimeout(()=>{
            let grow = Number(balance.textContent)
            let levelUp =  lvlInner += 1
            lvl.textContent = levelUp
            opitup.textContent = opitLvl + 300
            //баланс
            let jec = grow + (400 * lvlInner)
            balance.textContent = jec
            audio.innerHTML = '<audio src="./song/lvl.mp3" class="audio__start" autoplay></audio>'
            ruletca.innerHTML += '<div class="new-lvl"><h3 class="new-lvl__title">Поздравляем вы достигли</h3><h3 class="new-lvl__number">' + levelUp +'</h3><h3 class="new-lvl__title">Уровень и получаете ' + (400 * lvlInner) + '$ Приятной игры!!</h3></div>'
        setTimeout(()=>{
        document.querySelector('.new-lvl').remove()
        }, 5000)
        }, 8000)
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
let profileOcno = document.querySelector('.profile')
let profileLvl = document.querySelector('.profile__lvl')
let profilePrice = document.querySelector('.profile__price')
let profileName = document.querySelector('.profile__name')



// управление страницей
let navigation = document.querySelectorAll('.menu__link')




navigation.forEach( navig =>{
    navig.addEventListener('click', ()=>{
        document.querySelector('.section-open').classList.remove('section-open')
        document.getElementById(navig.id + 'elem').classList.add('section-open')
        //получение актуальной информации в профиль
        profilePrice.textContent = 'Текущий баланс: ' + balance.textContent + '$'
        profileLvl.textContent = 'Ваш уровень: ' + lvl.textContent
        profileName.textContent = 'Логин: ' + user.userName.value
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
    opitVan = opitVan * 3
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
    console.log(idCard)
    //легендарны карточки
    if( numberBilleet > 0 && (idCard ===  'card-4price'  || idCard ===  'card-5price' || idCard ===  'card-6price' )){
        const randome = 11
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
     let randomCard = Math.floor(Math.random() * randome)
     document.getElementById(elements.id).classList.add('card-open')
     let numberBill = Number(nuberBil.textContent)
     nuberBil.textContent = numberBill - 1
     audio.innerHTML = '<audio src="./song/lvl.mp3" class="audio__start" autoplay></audio>'
     let numberBalance = Number(balance.textContent)
     balance.textContent = numberBalance + randomCard*100
     document.getElementById(elements.id + 'price').textContent= (randomCard*100) + '$'
     //айди карт
     }else{
        alert('У вас закочились, билеты!')
        //удаление анимации
        document.querySelector('.icards-anim').classList.remove('icards-anim')
        document.querySelector('.card__items_ainimat').classList.remove('card__items_ainimat')
    }
     //опыт
     let expPLus = expInner +=   opitVan
     exp.textContent = expPLus
     const opitLvl = lvlInner * 300 
     if(expInner >= opitLvl ){
         setTimeout(()=>{
             let grow = Number(balance.textContent)
             let levelUp =  lvlInner += 1
             lvl.textContent = levelUp
             opitup.textContent = opitLvl + 300
             //баланс
             let jec = grow + (400 * lvlInner)
             balance.textContent = jec
             audio.innerHTML = '<audio src="./song/lvl.mp3" class="audio__start" autoplay></audio>'
             ruletca.innerHTML += '<div class="new-lvl"><h3 class="new-lvl__title">Поздравляем вы достигли</h3><h3 class="new-lvl__number">' + levelUp +'</h3><h3 class="new-lvl__title">Уровень и получаете ' + (400 * lvlInner) + '$ Приятной игры!!</h3></div>'
             setTimeout(()=>{
                 document.querySelector('.new-lvl').remove()
             }, 5000)
 })}})})

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

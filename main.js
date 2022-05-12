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
let expInner = Number(exp.textContent)
let lvlInner = Number(lvl.textContent)
//левел опыт
const opitLvl = [0,100, 300, 600, 1000, 1400, 1600, 2000]

opitup.textContent = opitLvl[1]

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
     розкоментити
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
//window.addEventListener('click', ()=>{document.querySelector('.registration').remove()})
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
let opitVan = 25

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
           let idButton = []
           idButton = (element.id)
           document.getElementById( idButton).remove()
           let productPrice = Number(element.textContent)
           let priceBy = Number(balance.textContent)
           balance.textContent = priceBy + productPrice
           audio.innerHTML = '<audio src="./song/bue.mp3" class="audio__start" autoplay></audio>'
           if(items.getElementsByClassName('item')){
            winnerYes.classList.remove('yes-item')}
        }) 
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
    if(expInner === opitLvl[lvlInner]){
        setTimeout(()=>{
            let levelUp =  lvlInner += 1
            let grow = Number(balance.textContent)
            let jec = grow + (1000 * lvlInner)
            balance.textContent = jec
            lvl.textContent = levelUp
            opitup.textContent = opitLvl[levelUp]
            audio.innerHTML = '<audio src="./song/lvl.mp3" class="audio__start" autoplay></audio>'
            ruletca.innerHTML += '<div class="new-lvl"><h3 class="new-lvl__title">Поздравляем вы достигли</h3><h3 class="new-lvl__number">' + levelUp +'</h3><h3 class="new-lvl__title">Уровень и получаете ' + (1000 * lvlInner) + '$ Приятной игры!!</h3></div>'
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
})
document.querySelector('#no-pro').addEventListener('click', ()=> {
    audio.innerHTML = '<audio src="./song/prob.mp3" class="audio__start" autoplay></audio>'
    document.querySelector('.pro-accaunt__window').classList.remove('pro-go')
})
document.querySelector('#yes-pro').addEventListener('click', ()=> {
if(balance.textContent > 6000){
    audio.innerHTML = '<audio src="./song/lvl.mp3" class="audio__start" autoplay></audio>'
    document.querySelector('.pro-accaunt__window').classList.remove('pro-go')
    document.querySelector('.profile__image').style.border = '4px solid red'
    document.querySelector('.profile__vip').textContent = 'Статус PRO'
    balance.textContent = balance.textContent - 6000
    document.querySelector('.pro-accaunt').remove()
    opitVan = 50
    return opitVan
}else{
    audio.innerHTML = '<audio src="./song/eror.mp3" class="audio__start" autoplay></audio>'
    setTimeout( ()=>{alert("Вам не хватает " + (6000 - balance.textContent) + "$"  )}, 800)
}})
//билет
let nuberBil = document.querySelector('.card__bue-number')
let numberBill = Number(nuberBil.textContent)
//карточка

document.querySelectorAll('.card__item').forEach( elements  =>{ 
elements.addEventListener('click', () => {
    let numberBill = Number(nuberBil.textContent)
    if(numberBill > 0 ){
    const randome = 11
    let randomCard = Math.floor(Math.random() * randome)
    document.getElementById(elements.id).classList.add('card-open')
    document.getElementById(elements.id + 'price').textContent= (randomCard*100) + '$'
    let numberBill = Number(nuberBil.textContent)
    nuberBil.textContent = numberBill - 1
    audio.innerHTML = '<audio src="./song/lvl.mp3" class="audio__start" autoplay></audio>'
    let numberBalance = Number(balance.textContent)
    balance.textContent = numberBalance + randomCard*100
    let expPLus = expInner += opitVan
    exp.textContent = expPLus
    document.querySelector('.card').classList.add('body-bloc')
    setTimeout(()=>{
        document.querySelector('.card').classList.remove('body-bloc')
        document.getElementById(elements.id).classList.remove('card-open')
    }, 4000)}else{
        alert('У вас закочились, билеты!')
        document.querySelector('.card__items').classList.remove('icards-anim')
    }
})})
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

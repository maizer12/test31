let buttonRegistration = document.querySelector('.registration__over')
let nameRegistration = document.querySelector('.registration__name')
let email = document.querySelector('.registration__email')
let password = document.querySelector('.registration__password')
let userLOGIN = document.querySelector('.user-login')
let userAvatar = document.querySelectorAll('.registration__img')
let audio = document.querySelector('.audio')
let balance = document.querySelector('.ruletca-balance__mani') 
//данные пользователя
const user = {
    userName : nameRegistration,
    userEmail : email,
    userPassword : password,
}
//аватарка 

let profileName = document.querySelector('.profile__name')
//кнопка регистрации
let cnopcaRegistration = buttonRegistration.addEventListener('click', ()=>{
    let numberUsern = user.userName.value.length
    let numberEmail = user.userEmail.value.length
    let numberPassw = user.userPassword.value.length
    // розкоментити
     //if( numberEmail < 6 || numberPassw < 6 || numberUsern < 6 && numberEmail > 17 || numberPassw > 17 || numberUsern > 17 ){
     //    audio.innerHTML = '<audio src="./song/erors.mp3" class="audio__start" autoplay></audio>'
     //    setTimeout(()=>
     //    {alert('Проверьте правильность ввода данных! Правила ввода: Минимум 6 символов!! (Не больше 17 символов!!) И выбрана аватарка! Все полья должны быть заполнены!!')},
     //    800)
     //}else{
        userLOGIN.textContent = user.userName.value
        profileName.textContent = 'Логин: ' + user.userName.value
        document.querySelector('.registration').remove()
        document.querySelector('.profile-user__name').textContent = 'Логин: ' + user.userName.value 
        document.querySelector('.profile-user__prise-number').textContent = 'Баланс: ' + balance.textContent
        //lol
       //const jsonLogin = JSON.stringify(user.userName.value)
       //console.log(jsonLogin)
    //}
})

export default cnopcaRegistration
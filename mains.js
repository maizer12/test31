var firebaseConfig = {
    apiKey: "AIzaSyA-1sSqxBad6FT2x_Nn6EaTkF7rJ-3IhKc",
  authDomain: "helical-kayak-248412.firebaseapp.com",
  databaseURL: "https://helical-kayak-248412-default-rtdb.firebaseio.com",
  projectId: "helical-kayak-248412",
  storageBucket: "helical-kayak-248412.appspot.com",
  messagingSenderId: "295269173393",
  appId: "1:295269173393:web:c40806ceaf1a53d384d730"
  };
  // initializeFirebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
   
   
  // Set up our register function
  function register () {
    // Получить все наши поля ввода
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    userLogin = document.getElementById('login').value
    // Проверка полей ввода
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Электронная почта или пароль не указаны!!')
      return
      // Не продолжать выполнение кода
    }else if (Number(userLogin.length)<= 6) {
      alert('Логин не должен быть меньше 7 символов')
      return
    }else if (Number(userLogin.length)>= 12) {
      alert('Логин не должен быть больше 12 символов')
      return
    }else if (document.querySelector('.images-user').classList.contains('avatar-yes')) {
    }else{
      alert('Аватар невыбран')
      return
    }
    
   
    // Продолжить с авторизацией
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Объявить пользовательскую переменную
      var user = auth.currentUser
  
      // Добавить этого пользователя в базу данных Firebase
      var database_ref = database.ref()
  
      // Создать данные пользователя
      var user_data = {
        email : email,
        userLogin : userLogin,
        last_login : Date.now()
      }
  
      // Отправить в базу данных Firebase
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('Вы успешно прошли регистрацию!')
      document.querySelectorAll('input').forEach(elem=>{
        elem.value = ''
      })
    })
    .catch(function(error) {
      // Firebase будет использовать это для оповещения о своих ошибках.
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Настройте нашу функцию входа
  function login () {
    // Получить все наши поля ввода
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    userLogin = document.getElementById('login').value
    userBalance = userBalance = document.querySelector('.user-balans')
    // Проверка полей ввода
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Электронная почта или пароль не указаны!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Объявить пользовательскую переменную
      var user = auth.currentUser
  
      // Добавить этого пользователя в базу данных Firebase
      var database_ref = database.ref()
  
      // Создать данные пользователя
      var user_data = {
        last_login : Date.now(),
      }
      // уровень
      window.addEventListener('click', function (){
        let jec = document.querySelector('.ruletca-lvl__mani').textContent
        let userExperience = document.querySelector('.ruletca-experience__mani').textContent
        let userProgres = document.querySelector('.ruletca-experience__opit').textContent 
        let userBalans = document.querySelector('.ruletca-balance__mani').textContent 
        let userBillet = document.querySelector('.card__bue-number').textContent 
        let userBilletVip = document.querySelector('.card__bue-number_legen').textContent 
        let userImg  =  document.querySelector('.profile__img').innerHTML
        let profilImg =  document.querySelector('.profile-user__img').innerHTML
        let UserItems =  document.querySelector('.box-awards__items').innerHTML
        var user_data = {
            userLvl : jec,
            userExperience : userExperience,
            userProgres : userProgres,
            userBalans : userBalans,
            userBillet :userBillet,
            userBilletVip: userBilletVip,
            userImg : userImg,
            profilImg : profilImg,
            UserItems: UserItems
        }
        database_ref.child('users/' + user.uid).update(user_data)
     })
      // Отправить в базу данных Firebase
      database_ref.child('users/' + user.uid).update(user_data)
      // Вошел в систему
      document.querySelector('.registration').remove()
      //получить даны с бази данных
        var uid = user.uid
        firebase.database().ref('users/' + uid).on('value', function(snapshot) {
            var userLogin = snapshot.val().userLogin;
            var userLvl = snapshot.val().userLvl;
            var userExperience = snapshot.val().userExperience;
            var userProgres = snapshot.val().userProgres;
            var userBalans = snapshot.val().userBalans;
            var userBillet = snapshot.val().userBillet
            var userBilletVip = snapshot.val().userBilletVip
            var userImg = snapshot.val().userImg
            var profilImg = snapshot.val().profilImg
            var UserItems = snapshot.val().UserItems
            //выкористоруем данные
            document.querySelector('.profile-user__name').textContent = userLogin
            document.querySelector('.profile__name').textContent = 'Ваш логи: ' + userLogin
            document.querySelector('.ruletca-experience__mani').textContent = userExperience
            if(Number(userBalans) >= 1){
            document.querySelector('.ruletca-balance__mani').textContent = userBalans
            document.querySelector('.box-awards__items').innerHTML = UserItems
          }
          if(Number(userBalans) >= 1){
            document.querySelector('.ruletca-lvl__mani').textContent = userLvl
          }
          if(Number(userBalans) >= 1){
            document.querySelector('.profile-user__lvl-number').textContent = userLvl
          }
            if(Number(userBillet) >= 1){
              document.querySelector('.card__bue-number').textContent = userBillet
            }
            if(Number(userBilletVip) >= 1){
              document.querySelector('.card__bue-number_legen').textContent = userBilletVip
            }
            if(Number(userProgres) >= 300){
            document.querySelector('.ruletca-experience__opit').textContent = userProgres}
            if(Number(userBillet) >= 1){
            document.querySelector('.profile__img').innerHTML = userImg
            document.querySelector('.profile-user__img').innerHTML = profilImg}
            
        });
    })
    .catch(function(error) {
      // Firebase будет использовать это для оповещения о своих ошибках.
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Проверка функций
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Электронная почта не подходит
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
    
 }
  // кнопка 
 document.querySelector('.registration__choice').addEventListener('click',()=>{
   document.querySelector('.registration__login').classList.toggle('login-yes')
   document.querySelector('.registration__login-btn').classList.toggle('login-yes')
   document.querySelector('.registration__over').classList.toggle('login-yes')
   let jec = document.querySelector('.registration__choice')
   jec.textContent = "Регистрация"
   document.querySelector('.registration__user-avatar').style.display ='none'
   if(document.querySelector('.registration__login-btn').classList.contains('login-yes')){
    jec.textContent = "Вход"
    document.querySelector('.registration__user-avatar').style.display =''
    document.querySelector('.registration__title').textContent = "Регистрация"
   }else{document.querySelector('.registration__title').textContent = "Вход"}
 })
// аватарка
let userAvatar = document.querySelectorAll('.registration__img')
let audio = document.querySelector('.audio')
userAvatar.forEach(avatar =>{
  avatar.addEventListener('click', ()=>{
      avatar.classList.add('avatar-yes')
      document.querySelector('.images-user').classList.remove('images-user')
      let idImages = avatar.id
      document.getElementById(idImages).classList.add('images-user')
      //звук фото
      audio.innerHTML = '<audio src="./song/avatar.mp3" class="audio__start" autoplay></audio>'
      //профиль фото
      let imageLink = document.querySelector('.images-user')
      let profileUser = document.querySelector('.profile__img')
      let profileUserMin = document.querySelector('.profile-user__img')
      profileUser.innerHTML = '<img src="' + imageLink.src  + '" alt="" class="profile__image" />'
      profileUserMin.innerHTML = '<img src="' + imageLink.src  + '" alt="" class="profile-user__img" />'

  })
})
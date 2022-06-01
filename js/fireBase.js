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
    userBalance = document.querySelector('.user-balans').textContent
    // Проверка полей ввода
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Электронная почта или пароль не указаны!!')
      return
      // Не продолжать выполнение кода
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
        userBalance : userBalance,
        last_login : Date.now()
      }
  
      // Отправить в базу данных Firebase
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('Пользователь создан!!')
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
      document.querySelector('.btn').addEventListener('click', function jec (x, y){

        let jec = document.querySelector('.user-balans').textContent
        let jecs = Number(jec) + 1
        var user_data = {
            userBalance : jecs
        }
        database_ref.child('users/' + user.uid).update(user_data)
     })
      // Отправить в базу данных Firebase
      database_ref.child('users/' + user.uid).update(user_data)
  
      // Выполнено
      alert('Пользователь вошел в систему!!')
      //получить даны с бази данных
        var uid = user.uid
        firebase.database().ref('users/' + uid).on('value', function(snapshot) {
            var userLogin = snapshot.val().userLogin;
            var userBalance = snapshot.val().userBalance;
            document.querySelector('.user-balans').textContent = userBalance
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
 export default firebaseConfig
function randoms(min, max) {
    return Math.random() * (max - min) + min;
  }
let newTask = document.querySelector('.tasks__new-tasks').addEventListener('click', ()=>{
    document.querySelectorAll('.tasks__item').forEach(element=>{
        element.classList.remove('active-zadan')
        element.querySelectorAll('.progres-coleso').forEach(element=>{element.textContent=0}) 
        if(element.querySelector('.zabrat-nagradu')){
            element.querySelector('.zabrat-nagradu').classList.remove('zabrat-nagradu')
        }
    })
    document.getElementById('task'+ Math.ceil(randoms(0,8))).classList.add('active-zadan')
    document.getElementById('task'+ Math.ceil(randoms(0,8))).classList.add('active-zadan')
})

export default newTask
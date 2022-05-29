
const closeTasc = document.querySelector('.tasks__btn').addEventListener('click', ()=>{
    document.querySelector('.tasks').classList.add('tasks-close')
    document.querySelector('.history__btn-tasc').innerHTML = '<button class="history__btn history__number">Задания!</button>'
    document.querySelector('.history__btn').addEventListener('click', ()=>{
        document.querySelector('.tasks').classList.remove('tasks-close')
        document.querySelector('.history__btn-tasc').innerHTML = ''
    })
})

export default closeTasc
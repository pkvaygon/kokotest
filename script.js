// localStorage - это объект для хранения данных в браузере
//  ======== методы localStorage ========================
// метод добавления данных
// localStorage.setItem('ключ', JSON.stringify('значение'))
// метод получения данных
// JSON.parse(localStorage.getItem('ключ'))
// метод удаления конкретных данных
// localStorage.removeItem('ключ')
// метод очистки всех данных
// localStorage.clear()
/////////////////// практика ///////////////////////

const body = document.body
// const decrement = document.getElementById('decrement')
// const number = document.getElementById('number')
// const increment = document.getElementById('increment')

// let count = 0
// number.innerHTML = count

// const getLocal = () => {
//     count = JSON.parse(localStorage.getItem('count'))
//     number.innerHTML = count ? count : 0
//     localStorage.clear()
// }
// getLocal()

// const counterInc = () => {
//     count++
//     localStorage.setItem('count', JSON.stringify(count))
//     number.innerHTML = JSON.parse(localStorage.getItem('count'))
// }
// const counterDec = () => {
//     count <= 0 ? count = 0 : count--
//     localStorage.setItem('count', JSON.stringify(count))
//     number.innerHTML = JSON.parse(localStorage.getItem('count'))
// }

// increment.addEventListener('click', counterInc)
// decrement.addEventListener('click', counterDec)

//JSON - это текстовый формат обмена данными основанный на JS


// Создание функционала типа блогера


// создать пустовый массив
// создать инпут и то что ввёл пользователь должен сохраниться
// создать функцию которая будет создавать объект с ключом
// text  и id:  id должен быть уникальным и добавить этот объект в массив
// добавить в localStorage

const blog = []
const blogPost = document.getElementById('blogPost')
const addPost = document.getElementById('addPost')
const output = document.getElementById('output')
const addLocalStorage = () => {
    const post = {
        body: blogPost.value,
    }
    blog.push(post)
    localStorage.setItem('list', JSON.stringify(blog))
    blogPost.value = ''
    getFromLocalStorage()
}

const getFromLocalStorage = () => {
    output.innerHTML = ''
    const postFromLocal = JSON.parse(localStorage.getItem('list'))
    postFromLocal.map(post => {
    const li = document.createElement('li')
        li.textContent = post.body
        output.append(li)
    })
}
addPost.addEventListener('click', addLocalStorage)





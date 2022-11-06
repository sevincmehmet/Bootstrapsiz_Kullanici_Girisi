let btnDOM = document.querySelector('#newPasswordBtn')
let formDOM = document.querySelector('#userForm')

formDOM.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault()
}


btnDOM.addEventListener('click', baglantiGonder)
function baglantiGonder() {
    
        let random = Math.floor(Math.random()*999999)

        while(random < 100000) {
            random = Math.floor(Math.random()*999999)
        }
    console.log(`Şifrenizi Değiştirmek için kodunuz : ${random}`)
}
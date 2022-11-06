let btnDOM = document.querySelector('#newPasswordBtn')
let formDOM = document.querySelector('#userForm')
let  titleDOM = document.querySelector('#title')
let  inputDOM = document.querySelector('#input')


formDOM.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault()
}

function Code(safeCode){
    this.safeCode = safeCode;
}

let code1 = new Code(baglantiGonder());

btnDOM.addEventListener('click', baglantiGonder)
function baglantiGonder() {
    
        let random = Math.floor(Math.random()*999999)

        while(random < 100000) {
            random = Math.floor(Math.random()*999999)
        }
    console.log(random)

}



function degisim() {
    btnDOM.innerHTML = "Doğrula"
    inputDOM.setAttribute("placeholder", "Güvenlik Kodunuz")  
    inputDOM.setAttribute("type", "number")
    
    console.log(inputDOM.value)
}

console.log(code1.safeCode)


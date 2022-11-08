let btnDOM = document.querySelector("#newPasswordBtn");
let newBtnDOM = document.querySelector('#newBtn');
let formDOM = document.querySelector("#userForm");
let titleDOM = document.querySelector("#title");
let inputDOM = document.querySelector("#input");

formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
}

btnDOM.addEventListener("click", baglantiGonder);
function baglantiGonder() {
  let random = Math.floor(Math.random() * 999999);

  while (random < 100000) {
    random = Math.floor(Math.random() * 999999);
  }
  console.log(`Şifrenizi Değiştirmeniz İçin Altı Haneli Güvenlik Kodunuz : ${random}`);

  btnDOM.remove();

  let newBtn = document.createElement("button");
  newBtn.setAttribute("id", "newBtn");
  newBtn.innerText = "Doğrula";
  newBtn.classList.add('btn');

  let panelBtn = document.querySelector('#panelBtn')
  panelBtn.appendChild(newBtn)

  inputDOM.remove();

  let newInp = document.createElement("input");
  newInp.setAttribute("type","text")
  newInp.setAttribute("id","newInp")
  newInp.setAttribute("placeholder","Güvenlik Kodunu Giriniz")
  newInp.setAttribute("size","31")
  newInp.classList.add('input')

  let panelInp = document.querySelector('#panelInput');
  panelInp.appendChild(newInp);

  

  document.getElementById('newBtn').addEventListener('click', control => {
     if(document.getElementById('newInp').value == random) {
      prompt("Yeni Şifrenizi Giriniz : ")
  }
  })
}





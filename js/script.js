let usernameDOM = document.querySelector('#username')
let passwordDOM = document.querySelector('#password')
let btnDOM = document.querySelector('#btn')

var User = function (username  ,password) {
    this.username = username
    this.password = password
};

let user1 = new User("admin","admin123")

btnDOM.addEventListener('click', control);

function control(kullanıcı, sifre) {
    
    kullanıcı = usernameDOM.value;
    sifre = passwordDOM.value;

    if(Boolean(kullanıcı.trim()) && Boolean(sifre)) {

        if(kullanıcı == user1.username) {
            if(sifre == user1.password) {
                alert("Giriş yapıldı")
                return true;
            }
        } else if((sifre != user1.password || kullanıcı != user1.username)) {
            alert("Kullanıcı adı veya şifreniz yanlış")
            return false;
        }

    } else {
        alert("Kullanıcı adı veya şifre girilmedi")
    }
}

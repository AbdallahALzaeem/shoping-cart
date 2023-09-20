let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#sing_up");


registerBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(username.valueOf() === "" || email.value === "" || password.value === ""){
        alert("please fill data");
    }
    else{
        localStorage.setItem('name', username.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value )
        setTimeout( () => {
            window.location= "login.html";
           } , 1500)
    }
    
});
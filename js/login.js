let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sing_in");
 
let getUser = localStorage.getItem('name')
let getPassword = localStorage.getItem('password')

loginBtn.addEventListener("click" , function(e){
    e.preventDefault();
    if(username.valueOf === "" || password.value === ""){
        alert("please fill data");
    }

    else{
        if( (getUser && getUser === username.value) && (getPassword && getPassword === password.value) ){
            window.location = "index.html";
        }else{
            console.log("erorr");
        }
        
    }
});
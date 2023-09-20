let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");


let username =localStorage.getItem('name');

if(username){
    links.remove();
    userInfo.computedStyleMap.display="block";
    console.log("ddfdf"+username);
    userDom.innerHTML=username;
}
logoutBtn.addEventListener("click", function(){
  localStorage.clear();
  setTimeout(() => {
    Window.location = "register.html";
  } , 1500
  );

});
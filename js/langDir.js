

let getLand = localStorage.getItem("langDir");

if(getLand){
  if(getLand == "rtl"){
    changeDir("rtl");
  }
  else{
    changeDir("ltr");
  }
}






let en = document.getElementById("en-lang");
  let ar = document.getElementById("ar-lang");

  en.addEventListener("click" , () => changeDir("ltr"));
  ar.addEventListener("click" , () => changeDir("rtr"));

 function changeDir(dir){
  document.documentElement.setAttribute("dir" , dir);
  localStorage.setItem("langDir" , dir);
 }
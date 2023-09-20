// chaeak there the localstorge
let cartProductDivDom = document.querySelector(" .carts-products div");
let badgeDom = document.querySelector( ".badge");
let shoopingCartIcon = document.querySelector( '.shoopingCart');
let cartProductMenu = document.querySelector(".carts-products");
shoopingCartIcon.addEventListener('click',openCartMenu)

let addedItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [];

if(addedItem){
  addedItem.map(item =>{
     cartProductDivDom.innerHTML += `<p> ${item.title} ${item.qty} </p>`
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addedItem.length
}



function openCartMenu() {
    if(cartProductDivDom.innerHTML != ""){
    
         if( cartProductMenu.style.display == "block"){
            cartProductMenu.style.display == "none";

         }
         else{
            cartProductMenu.style.display == "block";
         }

    }
 }
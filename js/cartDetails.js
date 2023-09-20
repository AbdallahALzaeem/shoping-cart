// let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productDetails = proudcts.find((item) => item.id == productId);
   
itemDom.innerHTML = `

<img src=" ${productDetails.imageUrl}" alt="">
<h2> ${productDetails.title}</h2>
<p> ${productDetails.desc}</p>
<span>size ${productDetails.size}</span> <br>
<span> quntity ${productDetails.qty}</span>
<button onclick = "editProdouct(${productId})"> edit product</button>

`;

 // edit product
 function editProduct(id){
    localStorage.setItem("editProduct" , id);
    window.location = "editProduct.html";
   }

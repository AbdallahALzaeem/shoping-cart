let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.noProducts');
 
 
function drawMyProductsUI(allProducts = []){

    let drawProductsUI;
    (  drawProductsUI = function (products){
        let myProducts = products.filter((item) =>item.isMe ==="y");
         
        if(myProducts.length != 0){ 


      let proudctsUI = myProducts.map( (item) =>{
     return `
     
        <div class="product-item" style="border:
        ${item.isMe === "y" ? "1px solid green":""
      }">
            <img src=" ${item.imageUrl} " class="product-item-img" alt=""> 
            <div class="product-item-desc">
            <a onclick='saveItemData(${item.id})'>${item.title}</a>
            <p>${item.desc}</p>
            <span>size: ${item.size}</span>

            <button class ='edite-product' onclick='editProduct(${item.id})'>edite product</button>

            <br>
            <button class ='edite-product' onclick='deleteProduct(${item.id})'>delete product</button>
        </div>
         
        
    </div> 
     
     `;
      
    });

    productsDom.innerHTML = proudctsUI.join("");
} 
else{
    noProductsDom.innerHTML = "no products";
}
     
 }) (JSON.parse(localStorage.getItem("products")) || products);
}




 // edit product
 function editProduct(id){
    localStorage.setItem("editProduct" , id);
    window.location = "editProduct.html";
   }


   function deleteProduct(){
    let products = JSON.parse(localStorage.getItem("products")) || products;

    let myProducts = products.filter((item) =>item.isMe ==="y");
    let filtered = myProducts.filter((i) => i.id !== id);
    drawMyProductsUI(filtered);
     
    let clickedItem = myProducts.find(i =>i.id === id);
    products = products.find((i) => i.id !== clickedItem.id)



    localStorage.setItem("products" , JSON.stringify(products));
   }
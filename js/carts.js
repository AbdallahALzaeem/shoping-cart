// let productsInCart = localStorage.getItem('productsInCart');
let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.noProducts');
 



function drawCartProductsUI(allProducts = []){

      if(JSON.parse(localStorage.getItem("productsInCart")).length === 0)
      noProductsDom.innerHTML = "there is no products";
    let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts;
    let proudctsUI = products.map( (item) =>{
     return `
     
        <div class="product-item">
            <img src=" ${item.imageUrl} " class="product-item-img" alt=""> 
            <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span> size ${item.size}</span><br>
            <span> quntity ${item.qty}</>
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart" id="removeItemFromCart" onclick="removeItemFromCart(${item.id})">remove from cart</button>
            

        </div>
    </div> 
     
     `;
      
    });

    productsDom.innerHTML = proudctsUI.join("");
}
drawCartProductsUI();



function removeItemFromCart (id){
    let productsInCart = localStorage.getItem('productsInCart')
  if(productsInCart){
    let items = JSON.parse(productsInCart);
     let filterdItems = items.filter( (item) => item.id !== id);
     drawCartProductsUI(filterdItems);
    localStorage.setItem("productsInCart" , JSON.stringify(filterdItems));
    drawCartProductsUI(filterdItems);
  }
}


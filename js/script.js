 
 
// JSON.parse            string to Object
// JSON.stringify        object to string
 
 
// virible
let productsDom = document.querySelector(".products");


   //display products
   let drawProductsUI;
    (  drawProductsUI = function (products){
    let proudctsUI = products.map( (item) =>{
     return `
     
        <div class="product-item" style="border:
        ${item.isMe === "y" ? "1px solid green":""
      }">
            <img src=" ${item.imageUrl} " class="product-item-img" alt=""> 
            <div class="product-item-desc">
            <a onclick='saveItemData(${item.id})'>${item.title}</a>
            <p>${item.desc}</p>
            <span>size: ${item.size}</span>
          ${item.isMe === "y" && "<button class ='edite-product' onclick='editProduct("+item.id+")'>edite product</button>"}
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart" id="addCart" onclick="addToCart(${item.id})">add to cart</button>
            <i class="favarit fa-regular fa-heart" onclick="addToVavorite(${item.id})"></i>

        </div>
    </div> 
     
     `;
      
    });

    productsDom.innerHTML = proudctsUI.join("");
     
 }) (JSON.parse(localStorage.getItem("products")) || myproducts);


 let myproducts = localStorage.getItem('products') ? JSON.parse(localStorage.getItem("products")) : products;

 drawProductsUI(myproducts);



// add to cart
 
  function addToCart(id) {
    console.log(localStorage.getItem('name'));
    if (localStorage.getItem('name')){


        let products = JSON.parse(localStorage.getItem("products")) || products;
        let product = products.find( (item) => item.id === id);
        let isProductInCart = addedItem.some((i) => i.id === product.id)
        if(isProductInCart){
          addedItem = addedItem.map(p =>{
            if(p.id === product.id) p.qty +=1;

           return p;
          });
        }else{
         addedItem.push(product);
        }
        cartProductDivDom.innerHTML = "";
         
          addedItem.forEach(item =>{
            cartProductDivDom.innerHTML += `<p> ${item.title} ${item.qty} </p>`;
          })

         //save data
        localStorage.setItem('productsInCart', JSON.stringify(addedItem));
           
        //conter of item
        let cartProductItems = document.querySelectorAll(".carts-products div p");
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItems.length;
       
    }
    
    else{
        window.location = "login.html";
    }
  
  }




   function getUniqueArr(arr , filterType){
      let unique =
       arr.map((item) => item[filterType]) 
      .map((item , i , final) =>final.indexOf(item) === i && i).filter(item => arr[item]).map(item => arr[item]);
      return unique;
   }




 function saveItemData(id){
   localStorage.setItem("productId", id);
   window.location = "cartDetails.html";
 }
 


 let input = document.getElementById("search"); 
 input.addEventListener("keyup" , function(e){
   // if(e.keyCode === 13){
      search(e.target.value , JSON.parse(localStorage.getItem("products")));
  

   if(e.target.value.trim() === "" )
   drawProductsUI(JSON.parse(localStorage.getItem("products")));
 });


 function search(title, myArray){
   let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
   drawProductsUI(arr);
 }
  




 // add to vafurit
 let favovariteItems = localStorage.getItem('productsfavovarit') ? JSON.parse(localStorage.getItem('productsfavovarit')) : [];
 
 
 function addToVavorite(id) {
    
   if (localStorage.getItem('name')){
       
       let  choosenItem = products.find( (item) => item.id === id);
       choosenItem.liked = true;
       favovariteItems = [...favovariteItems , choosenItem];
       let uniqueProducts = getUniqueArr(favovariteItems , "id");
       localStorage.setItem('productsFavovarite', JSON.stringify(uniqueProducts));
       products.map(item => { 
         if(item.id === choosenItem.id){
            item.liked =true;
         }

      })
      localStorage.setItem("products" , JSON.stringify(products));
      drawProductsUI(products);
      
   }else{
      window.location = "login.html";
   }
}





// filter products by size
 let sizeFilter = document.getElementById("size-filter");
 sizeFilter.addEventListener("change" , getProductsFilterdBySize)
 function getProductsFilterdBySize(e){
   let val = e.target.value;
   let products = JSON.parse(localStorage.getItem("products")) || products;
   if(val === "all"){
      drawProductsUI(products);
   }
   else{
      products = products.filter(i => i.size === val)
      drawProductsUI(products);
   }
 }





 // edit product
 function editProduct(id){
  localStorage.setItem("editProduct" , id);
  window.location = "editProduct.html";
 }

 
    

let products = JSON.parse(localStorage.getItem("products")) || products;
let productId = JSON.parse(localStorage.getItem("editproduct"));
let getProduct = products.find((i) => i.id === productId );







let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
 let updateForm = document.getElementById("create-form");
  let inputFile = document.getElementById("upload-image-file");
  let productSizeValue;
  let productImage;



  productName.value = getProduct.title;
  productDesc.value = getProduct.desc;
  productSizeSelect.value = getProduct.size;
  productImage = getProduct.imageUrl;

 
// let ProductSizeValue;

//   event
  productSizeSelect.addEventListener("change" , updateProductFun);
  createForm.addEventListener("submit" , createProductFun);
  inputFile.addEventListener("change" , uploadImage);

//function
function getProductSizeValue(e) {
   productSizeValue = e.target.value;
}



function updateProductFun(e){
    e.preventDefault();
    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSizeValue;
    getProduct.imageUrl = productImage;


    localStorage.setItem("products" , JSON.stringify(Products));
    setTimeout(() =>{
      window.location = "index.html";
    },500);
    }



       
    function uploadImage(){
        let file = this.files[0]
        console.log(file);
        getImageBase64(file);
        let types = ["image/jpeg" , "image/png"]
        if(types.indexOf(file.type) == -1){
        alert("type not submit");
        return;
        }
        if(file.size > 2 * 1024 * 1024){
            alert("image nnot exid");
            return;
        }


          productImage = URL.createObjectURL(file);
    }


    function getImageBase64(file){
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(){
          productImage = reader.result;
        };
        reader.onerror = function(){
            alert("erro");
        };
    }


     
 
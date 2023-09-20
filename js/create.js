let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let createForm = document.getElementById("create-form");
let inputFile = document.getElementById("upload-image-file");


 
let ProductSizeValue;

 // event
productSizeSelect.addEventListener("change" , getProductSizeValue);
createForm.addEventListener("submit" , createProductFun);
inputFile.addEventListener("change" , uploadImage);

//function
function getProductSizeValue(e) {
   productSizeValue = e.target.value;
}



function createProductFun(e){
    e.preventDefault();
    let allProduct = JSON.parse(localStorage.getItem(products)) || products;
    let nameValue = productName.value;
    let descValue = productDesc.value;
        
    if(nameValue && descValue){
        let obj = {
            id: allProduct.length ? allProduct.length + 1 : 1,
            qty: 1,
            imageUrl: productImage,
             size: productSizeValue,
             title: nameValue,
             desc: descValue,
             isMe: "y",
            };
            console.log(obj);
            let newProducts = allProduct ? [...allProduct , obj] : [obj];
            localStorage.setItem("products" , JSON.stringify(newProducts));
            console.log(newProducts);
            productName.value = ""
            productDesc.value = ""
            productSizeSelect.value = ""

            // setTimeout(() => {
            //     window.location = "index.html";
            // } , 4000);
        }
        else{
            alert("enter data");
        }
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


     
 
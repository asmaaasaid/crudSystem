var productName=document.getElementById('productNameInput');
var productPrice=document.getElementById('productPriceInput');
var productCategory=document.getElementById('productCategoryInput');
var changeButton =document.getElementById('changeButton')
var productContainer=[];

var mainindex=0;

if(localStorage.getItem('productList') != null){
    productContainer =JSON.parse(localStorage.getItem('productList'));
    displayProduct()
}

// function add product ==Create
function addProduct(){
    if(changeButton.innerHTML == "update product"){
        changeButton.innerHTML="add product";
        var products={
            poductName :productName.value,
            productPrice:productPrice.value,
            productCategory:productCategory.value
        }
        productContainer.splice(mainindex ,1 ,products)
    }
   else
   {
    var products={
        poductName :productName.value,
        productPrice:productPrice.value,
        productCategory:productCategory.value
    }
    productContainer.push(products);
   }
    
    clearProduct()
   localStorage.setItem('productList',JSON.stringify(productContainer))
   displayProduct()
    // console.log(productContainer)
}

// fnction to clear inputs
function clearProduct(){
    productName.value='';
    productPrice.value='';
    productCategory.value='';
}

// function display product == Read
function displayProduct(){
    // console.log('display product')
    var allProduct=``;
    for(var i=0 ; i<productContainer.length; i++){
        allProduct +=`
        <tr>
        <td>${i}</td>
        <td>${productContainer[i].poductName}</td>
        <td>${productContainer[i].productPrice}</td>
        <td>${productContainer[i].productCategory}</td>
        <td><button type="button" class="btn btn-success" onclick='updateProduct(${i})'>update</button></td>
        <td><button type="button" class="btn btn-danger" onclick='deletProduct(${i})'>Delete</button></td>
      </tr>
        `
    }
  document.getElementById('tableBody').innerHTML=allProduct;
  
}

// function delete product = Delete
function deletProduct(index){
    productContainer.splice(index,1)
    // console.log(productContainer)
    localStorage.setItem('productList',JSON.stringify(productContainer))
   displayProduct()
}


// function search product
function searchProduct(product){
    var allProduct=``;
    for(i=0; i<productContainer.length;i++){
        if(productContainer[i].poductName.toLowerCase().includes(product.toLowerCase())){
            allProduct +=`
            <tr>
            <td>${i}</td>
            <td>${productContainer[i].poductName}</td>
            <td>${productContainer[i].productPrice}</td>
            <td>${productContainer[i].productCategory}</td>
            <td><button type="button" class="btn btn-success">update</button></td>
            <td><button type="button" class="btn btn-danger" onclick='deletProduct(${i})'>Delete</button></td>
          </tr>
            `
        }
        document.getElementById('tableBody').innerHTML=allProduct;
    }
}

// searchProduct("tv")

// function update product
function updateProduct(index){
    productName.value=productContainer[index].poductName;
    productPrice.value=productContainer[index].productPrice;
    productCategory.value=productContainer[index].productCategory;
    changeButton.innerHTML='update product';
    mainindex=index;
}

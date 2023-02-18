// ===============================================================================================
// this is for getting specific product
let productHttp = new XMLHttpRequest();
let product ;
productHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Product/GetByIdWeb?Id=${localStorage.getItem('productdetails')}`);
productHttp.send();
productHttp.addEventListener('readystatechange' , function(){
    if(productHttp.readyState == 4 && productHttp.status == 200){
         product = JSON.parse(productHttp.response).data;
         displayproduct(product);
         displayrelatedproduct(product.relatedProducts);
         displaysimilarproduct(product.similarProducts);
         displayrelatedservices(product.relatedServices);
         displaylatest(product.relatedProducts)
    }
})
function displayproduct(theproduct){
   console.log(theproduct)
    let product = `` ;
    let stepOne = theproduct.image.replace("\\",'/');
    let two = stepOne.replace("\\",'/');
        product = `
        <div class="inner-box">
            <div class="image" >
                <img src="${localStorage.getItem('url_photo')}${two}" alt="" height="400px"/>
            </div>
            <div class="lower-content">
                <ul class="post-info">
                <li style="font-size:24px;">${theproduct.title}</li>
            </ul>
            <blockquote style="font-size:28px"><span class="quote-icon flaticon-quote-3"></span>${theproduct.description}<span class="designation">Al-Andalus Bimex</span></blockquote>
            </div>
    </div>
  `;
  document.getElementById('product').innerHTML = product; 
  let keywords = `<span class="tags">Keywords:</span>`; 
    for( var i = 0; i < theproduct.keywordsNames.length ; i++){
    keywords += `<a>${theproduct.keywordsNames[i].title}</a>`
    }
    document.getElementById('keywords').innerHTML = keywords; 
}
// ================================================================================================
// this is to get the similar products 
// ================================================================================================
function displaysimilarproduct(data){
  if( data.length == 0){document.getElementById('similarproductskey').style.display = 'none'; }
    let productsimilar = `` ;
    for(var i =0 ; i < data.length ; i++){
        let stepOne = data[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
    productsimilar = `
    <!-- Related Post -->

    <div class="news-block-three">
    <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div class="image">
        <a onclick="gotoproductdetails(${data[i].id})"><img src="${localStorage.getItem('url_photo')}${two}"  style="height:200px"  alt="" /></a>
        </div>
        <div class="lower-content">
          
            <h4>${data[i].productCategoryTitle}</h4>
            <a class="explore" onclick="gotoproductdetails(${data[i].id})">Explore More <span class="flaticon-plus"></span></a>
    
        </div>
    </div>
    </div>
    `;
     $('#similarproducts')
     .trigger('add.owl.carousel', [productsimilar])
     .trigger('refresh.owl.carousel');
}
    }
// ================================================================================================
// this is to get the related products 
// ================================================================================================
function displayrelatedproduct(data){

    if(data.length == 0){
      document.getElementById('relatedproductskey').style.display = 'none';
    }
console.log( data[0])
    let productrelated = `` ;
    for(var i =0 ; i < data.length ; i++){
        let stepOne = data[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
        productrelated = `
    
<!-- Related Post -->

<div class="news-block-three">
<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
    <div class="image">
    <a onclick="gotoproductdetails(${data[i].id})"><img src="${localStorage.getItem('url_photo')}${two}"  style="height:200px"  alt="" /></a>
    </div>
    <div class="lower-content">
        
        <h4>${data[i].productCategoryTitle}</h4>
        <a class="explore" onclick="gotoproductdetails(${data[i].id})">Explore More <span class="flaticon-plus"></span></a>

    </div>
</div>
</div>

  `;
 console.log(productrelated)
  $('#relatedproducts')
  .trigger('add.owl.carousel', [productrelated])
  .trigger('refresh.owl.carousel');
}
 
    }
// ==================================================================================================
// this is the related services 
// ==================================================================================================
function displayrelatedservices(data){
    let servicerelated = `` ;
    for(var i =0 ; i < data.length ; i++){
        let stepOne = data[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
        Datee = new Date(data[i].creationDate);
        Dateee = Datee.getFullYear() + '-' + Datee.getMonth() + '-' + Datee.getDate();
        servicerelated += `
        <!-- News Block Three -->
        <div class="news-block-three col-lg-5">
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="image">
                    <a onclick="gotoservicedetails(${data[i].id})"><img src="${localStorage.getItem('url_photo')}${two}" style="height:142px" alt="" /></a>
                </div>
                <div class="lower-content">
                    <ul class="post-info">
                        <li>${data[i].title}</li>                
                    </ul>
                    <h4><a onclick="gotoservicedetails(${data[i].id})">${data[i].title}</a></h4>
                    <a class="explore" onclick="gotoservicedetails(${data[i].id})">Explore More <span class="flaticon-plus"></span></a>
                </div>
            </div>
        </div>
  `;
  console.log(servicerelated)
  $('#servicerelated')
  .trigger('add.owl.carousel', [servicerelated])
  .trigger('refresh.owl.carousel');
}
    }
// ===============================================================================================
// this is the inserting form of the product request
// ===============================================================================================
function insertForm(){
        const name =document.getElementById("name").value;
        const email =document.getElementById("email").value;
        const mobile =document.getElementById("mobile").value;
        const message =document.getElementById("message").value;
        const organization =document.getElementById("organization").value;
        const productId = localStorage.getItem('productdetails');
        let data = {
                name: name, 
                email: email,
                mobile: mobile,
                message: message,
                productId: productId,   
                organization: organization,
        }
        console.log(data);
        fetch(`${localStorage.getItem('url')}${localStorage.getItem('language')}/ContactInquiry/Create`, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json; charset=UTF-8"} 
          }).then((response) => {
                alert('the data is sent');
                document.getElementById("name").value = '';
                document.getElementById("email").value = '';
                document.getElementById("mobile").value = '';
                document.getElementById("message").value = '';
                document.getElementById("organization").value = '';
            }).catch((error) => {
              console.error('Error:', error);
            });
    }
    function displaylatest(data) {
        if(data.length == 0){document.getElementById('latestProductkey').style.display = 'none';}
        let latestProduct = `` ;
        // console.log( data[0])
        for (var i = 0; i < 3; i++) {
            let stepOne = data[i].image.replace("\\",'/');
            let two = stepOne.replace("\\",'/');  
            latestProduct += `<article class="post" onclick="gotoproductdetails(${data[i].id})">
                    <figure class="post-thumb"><img src="${localStorage.getItem('url_photo')}${two}" alt=""><a onclick="gotoproductdetails(${data[i].id})" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                    <div class="text"><a onclick="gotoproductdetails(${data[i].id})" >${data[i].title?.slice(0,40)}...</a></div>
                    <div class="text">${data[i].productCategoryTitle.slice(0, 15 )}</div>
                     <div class="post-info">${data[i].creationDate.slice(0, 10)}</div></article>`;
    }
    document.getElementById('latestProduct').innerHTML =`<div class="sidebar-widget popular-posts">
    <div class="widget-content">
       
      ${latestProduct}
    </div>
</div>` 
    }
// ===========================================================================================================
// this function goes to product details .
// ===========================================================================================================
function gotoproductdetails(id){
     localStorage.setItem('productdetails', id);
     location.reload(); }

function gotoservicedetails(id){
    product.relatedServices.forEach(element => {
        if( id == element.id){
            localStorage.setItem('servicedetail', JSON.stringify(element));
            window.location.href = "servicedetails.html";
        }
    });
    }
//============================================================================================================    
// get the files related to this products 
//============================================================================================================
let productfileHttp = new XMLHttpRequest();
let productfiles ;
productfileHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/ProductFileLibrary/GetWeb?productId=${localStorage.getItem('productdetails')}`);
productfileHttp.send();
productfileHttp.addEventListener('readystatechange' , function(){
    if(productfileHttp.readyState == 4 && productfileHttp.status == 200){
        productfiles = JSON.parse(productfileHttp.response).data;
         displayproductfiles(productfiles); 
    }
})
function displayproductfiles(data){
    if( data.length == 0){
     document.getElementById('productfilelibrarykey').style.display = 'none';
    }
    //this is for the servic form 
    let productfileform = ``;
    for( let i = 0 ; i < data.length ; i++){
    let fileOne = data[i].file.replace("\\",'/');
    let filetwo = fileOne.replace("\\",'/');
    productfileform += `
             <div class="download-list mt-2">
            <li>
            <a href="${localStorage.getItem('url_photo')}${filetwo}" target="_blank"><span class="fileservice">Product Report</span><span class="icon flaticon-edit"></span></a>
            </li>
            </div>`;
    }
    document.getElementById('productfilelibrary').innerHTML = productfileform; 
}
// =============================================================================================================
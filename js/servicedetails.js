servicerecord = JSON.parse(localStorage.getItem('servicedetail')) ;
displayservicesdetails();
let serviceHttp = new XMLHttpRequest();
let servicedata = [];
let relatedservices = [];
serviceHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Service/GetByIdWeb?Id=${servicerecord.id}`);
serviceHttp.send();
serviceHttp.addEventListener('readystatechange', function(){
    if(serviceHttp.readyState == 4 && serviceHttp.status == 200){
        servicedata = JSON.parse(serviceHttp.response).data;
        // relatedproducts = JSON.parse(serviceHttp.response).data.relatedProducts;
        // relatedservices = JSON.parse(serviceHttp.response).data.relatedServices;
        // console.log(relatedproducts);
        // console.log(relatedservices);
        displayrelatedservices(servicedata.relatedServices)
        displayrelatedproducts(servicedata.relatedProducts)
    }
})
// ======================================================================================
// this is will display the service details 
// ======================================================================================
function displayservicesdetails(){

 
//this is for the servic form 
let fileOne = servicerecord.serviceFile.replace("\\",'/');
let filetwo = fileOne.replace("\\",'/');
let productform = `
     <div class="widget-content">
         <div class="sidebar-title">
             <h4 data-i18n="DownloadNow">Download Now</h4>
         </div>
         <ul class="download-list">
             <li><a target="_blank " href="${localStorage.getItem('url_photo')}${filetwo}"><span class="fileservice">File of the service</span> <span class="icon flaticon-edit"></span></a></li>
         </ul>
     </div>          
` ;
document.getElementById('formservice').innerHTML = productform; 
// ======================================================================================
//this is for the service details 
// ======================================================================================
    let stepOne = servicerecord.image.replace("\\",'/');
    let two = stepOne.replace("\\",'/');
    let services = `
    <div class="inner-box">
                        <div class="image">
                            <img src="${localStorage.getItem('url_photo')}${two}" alt="" />
                        </div>
                        <div class="lower-content">
                            <h3>${servicerecord.title}</h3>
                            <p>${servicerecord.description}</p>
                        </div>
                    </div>
    ` ;
  document.getElementById('servicerecord').innerHTML = services; 

  let keywords = `<span class="tags">Keyword </span>`; 
  for( var i = 0; i < servicerecord.keywordsNames.length ; i++){
  keywords += `
               <a href="#" >${servicerecord.keywordsNames[i].title}</a>  
  `
  }
  document.getElementById('keywords').innerHTML = keywords; 

  
}
// =======================================================================================
// this will display the related services
// ======================================================================================

function displayrelatedservices(data){

    if(data.length == 0){
        document.getElementById('relatedserviceskey').style.display = 'none';
        }
    let servicerelated = `` ;
    for(var i =0 ; i < data.length ; i++){
        let stepOne = data[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
        servicerelated = `
        <!-- News Block Three -->
        <div class="news-block-three  p-3">
            <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms" style="overflow: auto; height: 200;">
                <div class="image">
                    <a onclick="gotoservicedetails(${data[i].id})"><img src="${localStorage.getItem('url_photo')}${two}" alt="" /></a>
                </div>
                <div class="lower-content">
                    <ul class="post-info">
                        <li><a onclick="gotoservicedetails(${data[i].id})">${data[i].title}</a></li>                      
                    </ul>
                </div>
            </div>
        </div>
  `;
  
$('#relatedservices')
.trigger('add.owl.carousel', [servicerelated])
.trigger('refresh.owl.carousel');
}
//   document.getElementById('relatedservices').innerHTML = servicerelated; 
    }
// =======================================================================================
// this will display the related products
// ======================================================================================

function displayrelatedproducts(data){

    if(data.length == 0){
        document.getElementById('relatedproductskey').style.display = 'none';
        }

    let productrelated = `` ;
    for(var i =0 ; i < data.length ; i++){
        let stepOne = data[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
        Datee = new Date(data[i].creationDate);
        Dateee = Datee.getFullYear() + '-' + Datee.getMonth() + '-' + Datee.getDate();
        productrelated = `
        <!-- News Block Three -->
        <div class="news-block-three p-3">
            <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms" style="overflow: auto; height:300px;">
                <div class="image">
                    <a onclick="gotoproductsdetails(${data[i].id})"><img src="${localStorage.getItem('url_photo')}${two}" alt="" /></a>
                </div>
                <div class="lower-content">
                    <ul class="post-info">
                        <li><a onclick="gotoproductsdetails(${data[i].id})">${data[i].title}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
  `;
    
$('#relatedproducts')
.trigger('add.owl.carousel', [productrelated])
.trigger('refresh.owl.carousel');
}
//   document.getElementById('relatedproducts').innerHTML = productrelated; 
    }
// ======================================================================================
// this is for the form 
// ======================================================================================

function insertForm(){

	const name =document.getElementById("name").value;
	const email =document.getElementById("email").value;
	const mobile =document.getElementById("mobile").value;
	const message =document.getElementById("message").value;
	const organization =document.getElementById("organization").value;
	const serviceId = servicerecord.id;
	let data = {
		    name: name,
			email: email,
			mobile: mobile,
			message: message,
			serviceId: serviceId,
			organization: organization,
	}
	fetch(`${localStorage.getItem('url')}${localStorage.getItem('language')}/ContactInquiry/Create`, {
		method: 'POST', // or 'PUT'
		
		body: JSON.stringify(data),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	  })
		.then((response) => {
			// alert('the data is sent');
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("mobile").value = '';
            document.getElementById("message").value = '';
            document.getElementById("organization").value = '';
		})
		.catch((error) => {
		  console.error('Error:', error);
		});


}
// ===================================================================================
// this function will go toe service or product details 
// ===================================================================================

function gotoservicedetails(id){
    servicedata.relatedServices.forEach(element => {
       if( id == element.id){
           localStorage.setItem('servicedetail', JSON.stringify(element));
           window.location.href = "servicedetails.html";
       }
   });
   }
function gotoproductsdetails(id){
           localStorage.setItem('productdetails', id);
           window.location.href = "productdetails.html";
   }
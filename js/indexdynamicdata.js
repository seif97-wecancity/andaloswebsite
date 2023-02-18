// =========================================================================================================================
// the latest products in the home page 
// ====================================================================================================================================
let latestproductsHttp = new XMLHttpRequest();
let latestproducts = [];
latestproductsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Product/GetLatestWeb?takeCount=3`);
latestproductsHttp.send();
latestproductsHttp.addEventListener('readystatechange', function () {
    if (latestproductsHttp.readyState == 4 && latestproductsHttp.status == 200) {
        latestproducts = JSON.parse(latestproductsHttp.response).data;
        displayproductsdetails();
    }
})
function displayproductsdetails() {
    var lastprodu = `` ;
    for (var i = 0; i < latestproducts.length; i++) {
        let stepOne = latestproducts[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
        console.log(latestproducts[0])
        lastprodu = `
    <!-- team-block -->
 
    

    <div class="product-block">
    <div class="inner-box" onclick="productdetail(${latestproducts[i].id})">
        <div class="color-layer"></div>
        <div class="image-box">
            <div class="image">
                <a onclick="productdetail(${latestproducts[i].id})"><img  style="height: 300px;" src="${localStorage.getItem('url_photo')}${two}" alt=""/></a>
            </div>
        </div>
        <h5><a onclick="productdetail(${latestproducts[i].id})">${latestproducts[i].title}</a></h5>
    
 
        <div class="category">Drill Machine</div>
        <div class="lower-box clearfix">
            <div class="">
                <div class="price">${latestproducts[i].productCategoryTitle}</div>
            </div>
            
        </div>
        <div class="btn-box text-center">
            <a class="read-more"  onclick="productdetail(${latestproducts[i].id})" data-i18n="ReadMore">Read More <span class="flaticon-next-3"></span></a>
        </div>
    </div>
</div>
    

    
    
    ` ;
    $('#latestproducts')
    .trigger('add.owl.carousel', [lastprodu])
    .trigger('refresh.owl.carousel');
}
}
function productdetail(id){
    localStorage.setItem("productdetails", id);  
    location.href = "productdetails.html";
   }
// ====================================================================================================================================
// the latest news in the home page 
// ====================================================================================================================================
let latestnewsHttp = new XMLHttpRequest();
let latestnews = [];
latestnewsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/News/GetLatestWeb?takeCount=3 `);
latestnewsHttp.send();
latestnewsHttp.addEventListener('readystatechange', function () {
    if (latestnewsHttp.readyState == 4 && latestnewsHttp.status == 200) {
        latestnews = JSON.parse(latestnewsHttp.response).data;
        displaynewsdetails();
    }
})
function displaynewsdetails() {
    var lastnews = `` ;

    for (var i = 0; i < latestnews.length; i++) {
        let stepOne = latestnews[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
        Datee = new Date(latestnews[i].creationDate);
        creationDate = Datee.getFullYear() + '-' + Datee.getMonth()+1 + '-' + Datee.getDate();
        lastnews = `
       
       <div class="news-block " style="height:330px" onclick="newsdetails(${latestnews[i].id})">
						<div class="inner-box" >
							<div class="image" onclick="newsdetails(${latestnews[i].id})">
						
								<img src="${localStorage.getItem('url_photo')}${two}"  style="height: 300px;" alt="" />
								<div class="overlay-box">
									<div class="content">
										<ul class="post-meta">
										
											<li><span class="icon flaticon-calendar-2"></span>${creationDate} <span class="theme-color"></span></li>
										</ul>
										<h5>${latestnews[i].title}</h5>
									</div>
								</div>
								
							</div>
						</div>
					</div>                
    ` ;
    $('#latestnews')
    .trigger('add.owl.carousel', [lastnews])
    .trigger('refresh.owl.carousel');
}
}
function newsdetails(id){
    latestnews.forEach(element => {
        if(id == element.id){
            localStorage.setItem('newsdetail', JSON.stringify(element));
            location.href = "newsdetails.html";
        }
    });
}
// ====================================================================================================================================
// the clients in the home page 
// ====================================================================================================================================

var clients_http = new XMLHttpRequest();
var allclientsinaboutus = [];

clients_http.open('GET',`${localStorage.getItem('url')}${localStorage.getItem('language')}/Client/GetWeb`);
clients_http.send();
clients_http.addEventListener('readystatechange', function(){
    if(clients_http.readyState == 4 && clients_http.status == 200){
        allclientsinaboutus = JSON.parse(clients_http.response).data;
        //here the function that will show the html 
        displayclientsinaboutus();
    }
})
function displayclientsinaboutus(){  
    var clients = `` ;
    for(let client of allclientsinaboutus ){
        clients = `
        <li class="mx-3" style="height:120px;">

        <img src="https://alandalusbimexdevapi.wecancity.com/${client.image}" class="specific-image"   alt="">
  
        </li>
        
  `;

  $('#clients')
  .trigger('add.owl.carousel', [clients])
  .trigger('refresh.owl.carousel');

    }
}











// ====================================================================================================================================
// the latest events in the home page 
// ====================================================================================================================================
// let latesteventsHttp = new XMLHttpRequest();
// let latestevents = [];
// latesteventsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Event/GetLatestWeb?takeCount=3`);
// latesteventsHttp.send();
// latesteventsHttp.addEventListener('readystatechange', function () {
//     if (latesteventsHttp.readyState == 4 && latesteventsHttp.status == 200) {
//         latestevents = JSON.parse(latesteventsHttp.response).data;
//         displayeventsdetails();
//     }
// })
// function displayeventsdetails() {
//     var lastevents = `` ;
 

//     for (var i = 0; i < latestevents.length; i++) {
//         let stepOne = latestevents[i].image.replace("\\",'/');
//         let two = stepOne.replace("\\",'/');
//         Datee = new Date(latestevents[i].creationDate);
//         creationDate = Datee.getFullYear() + '-' + Datee.getMonth() + '-' + Datee.getDate();
//         lastevents = `
//         <div class="news-block ">
// 						<div class="inner-box ">
// 							<div class="image">
// 								<div class="category">${latestevents[i].title}</div>
// 								<img src="${localStorage.getItem("url_photo")}${two}" style="height: 300px;"  alt="" />
// 								<div class="overlay-box">
// 									<div class="content">
// 										<ul class="post-meta">
// 											<li><span class="icon flaticon-user-2"></span>by <span class="theme-color"></span>Admin</li>
// 											<li><span class="icon flaticon-calendar-2"></span>August 05, 2021 <span class="theme-color"></span></li>
// 										</ul>
// 										<h5>${latestevents[i].title}</h5>
// 									</div>
// 								</div>
// 								<div class="overlay-box-two">
// 									<div class="image-layer" style="background-image:url(images/resource/news-4.jpg)"></div>
// 									<span class="post-date">${creationDate}</span>
// 									<div class="overlay-inner">
// 										<div class="overlay-content">
// 											<h5><a onclick="eventsdetails(${latestevents[i].id})">${latestevents[i].title}</a></h5>
// 											<div class="text">${latestevents[i].title}</div>
// 											<a onclick="eventsdetails(${latestevents[i].id})" class="read-more">Read more <span class="flaticon-next-3"></span></a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
//     ` ;
 
//     $('#lastevents')
//     .trigger('add.owl.carousel', [lastevents])
//     .trigger('refresh.owl.carousel');
  
// // owl.trigger('insertContent.owl',lastevent)
// // console.log(lastevent)
// // console.log(owl.trigger('insertContent.owl',lastevent))
// }

// // document.getElementById('lastevents').innerHTML = lastevents;
// }

// function eventsdetails(id){
//     latestevents.forEach(element => {
//         if(id == element.id){
//             localStorage.setItem('eventdetail', JSON.stringify(element));
//             location.href = "eventdetails.html";
//         }
//     });
// }





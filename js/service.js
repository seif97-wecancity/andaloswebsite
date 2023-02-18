var serviceHttp = new XMLHttpRequest();
var allservices = [];
serviceHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Service/GetWeb`);
serviceHttp.send();
serviceHttp.addEventListener('readystatechange', function(){
    if(serviceHttp.readyState == 4 && serviceHttp.status == 200){
        allservices = JSON.parse(serviceHttp.response).data;
        displayservices();
    }
})



// function displayservic(){

//     var servicethree = ``;
//     for(var i=0; i < allservices.length; i++){

//         var stepOne = allservices[i].image.replace("\\",'/');
//         var two = stepOne.replace("\\",'/');
//         var description = allservices[i].description.slice(0, 200);


//         servicethree += `
        
//         <div class="testimonial-block-two" style="max-width:250px;float:left">
//             <div class="inner-box" onclick="servicedetails(${allservices[i].id})">
//                 <div class="author-box">
//                     <div class="author-inner">
//                         <div class="author-image" onclick="servicedetails(${allservices[i].id})">
//                             <img src="${localStorage.getItem('url_photo')}${two}" alt="" class="w-100"/>
//                         </div>
//                         <strong>${allservices[i].title}</strong>
//                     </div>
//                 </div>
//                 <div class="text">
//                 <strong>${allservices[i].title} : <br></strong>
//                 ${description}...
//                 </div>
             
//             </div>
//         </div>
     
        

//         `;

//     }
// document.getElementById('serviceeeee').innerHTML = servicethree;

// }












function displayservices(){
    
//     var services = `` ;
//     for(var i = 0; i < allservices.length; i++ ){
        
//         var stepOne = allservices[i].image.replace("\\",'/');
//         var two = stepOne.replace("\\",'/');
//         services += `
//         <!-- Service Block Four / Style Two -->
// 			<div class="service-block-four style-two col-xl-3 col-lg-4 col-md-6 col-sm-12 text-primary p-3" style="cursor:pointer;" onclick="servicedetails(${allservices[i].id})">
// 				<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="2000ms" style="height:292px">
// 					<div class="image-layer w-100"></div>
// 					<div class="post-number">${i+1}</div>
//                     <div>
// 					<img src="${localStorage.getItem('url_photo')}${two}" class="m-0 w-100" alt="" />
//                     </div>
// 					<h5><a onclick="servicedetails(${allservices[i].id})">${allservices[i].title}</a></h5>
            
// 					<a class="arrow flaticon-right-arrow-1" onclick="servicedetails(${allservices[i].id})" ></a>
               
// 				</div>
// 			</div>
//   `;
//   document.getElementById('services').innerHTML = services; 

//     }
   

    var servicetwo = ``;
    for(var i=0; i < allservices.length; i++){

        var stepOne = allservices[i].image.replace("\\",'/');
        var two = stepOne.replace("\\",'/');
    servicetwo += `	<!-- Approach Block -->
    <div class="approach-block col-lg-4 col-md-6 col-sm-12" onclick="servicedetails(${allservices[i].id})">
        <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="image">
                <a href="#"><img src="${localStorage.getItem('url_photo')}${two}" alt="service image" style="height:221px" /></a>
            </div>
            <div class="lower-content">
                <h4><a onclick="servicedetails(${allservices[i].id})">${allservices[i].title}</a></h4>
                <div class="service-explore">
                <a class="explore btn btn-primary text-white"  onclick="servicedetails(${allservices[i].id})" data-i18n="ExploreMore">Explore More <span class="fa fa-plus"></span></a>
                </div>
            </div>
        </div>
    </div>
`;

// $('#servicestwo')
// .trigger('add.owl.carousel', [servicetwo])
// .trigger('refresh.owl.carousel');

    }
    document.getElementById('servicestwo').innerHTML = servicetwo;
}

function servicedetails(id){
    allservices.forEach(element => {
        if(id == element.id){

            localStorage.setItem('servicedetail' , JSON.stringify(element));
            window.location.href = "servicedetails.html";
        }
    });
}
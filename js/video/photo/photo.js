
let allphotoes= []
let PhotoAlbum= []
async function getPhotoes( )

{
 let url =localStorage.getItem('url') 
let lan = localStorage.getItem('language')
let id =JSON.parse( localStorage.getItem('photoID'));
console.log(lan, id,url)
console.log(JSON.parse(id))

 let getByIdPhotoAlbum = await fetch(`${url}${lan}/PhotoAlbum/GetByIdWeb?Id=${id}`);
 let response = await fetch(`${url}${lan}/Photo/GetWeb?albumId=${id}`);
 

    let finalResultPhotoAlbum = await getByIdPhotoAlbum.json();
    let finalResult = await response.json();
    if(finalResult.message=="Sucess"){
        allphotoes=finalResult.data
        PhotoAlbum=finalResultPhotoAlbum.data
    // displayVadeo(videoalbum);
    }
}

(async function ()
{

    await getPhotoes();
    displayphotoalbumtitle()
    displayPhotoes()
  


})();

 function displayphotoalbumtitle(){
  document.getElementById('titlephotoalbum').innerHTML = allphotoes[0].photoAlbumTitle;

 }

function displayPhotoes(){
    console.log(allphotoes[0])
    
    
    let photoes = `` ;



    for(var i = 0; i < allphotoes.length; i++ ){
 
        photoes += `
        <div class="col-sm-4 p-2">
      <a class="lightbox" href="${localStorage.getItem('url_photo')}${allphotoes[i].image}">
        <img src="${localStorage.getItem('url_photo')}${allphotoes[i].image}" alt="Bridge">
      </a>
    </div>	
  `;


  // <div class="col-sm-3">
  //     <a class="lightbox" href="https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg">
  //       <img src="https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg" alt="Bridge">
  //     </a>
  //   </div>	


//   <div class="team-block-three col-lg-3 col-md-6 col-sm-12" >
//   <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
//   <div class="image">
//       <img src="${localStorage.getItem('url_photo')}${allphotoes[i].image}" class="w-100" style="height: 331px;width:270px;" />
//       <div class="overlay-box">
//           <h5><a href="#">${allphotoes[i].photoAlbumTitle}</a></h5>
//           <div class="designation">${allphotoes[i].title}</div>
//           <a class="arrow fa-angle-double-right" href="#"></a>
//       </div>
//   </div>
// </div>
// </div>
    }
 
    document.getElementById('photoalbum').innerHTML = photoes;
//   document.getElementById('photo').innerHTML = photoes; 
  $('.test-popup-link').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true,
      
  navigateByImgClick: true,
    },
    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
     
      
      }
  }); 

}






/* Video Popup*/
jQuery(document).ready(function ($) {
  // Define App Namespace
  var popup = {
    // Initializer
    init: function() {
      popup.popupVideo();
    },
    popupVideo : function() {

    $('.video_model').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    gallery: {
          enabled:true
        }
  });
/* Image Popup*/ 
 $('.gallery_container').magnificPopup({
      delegate: 'a',
    type: 'image',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    gallery: {
          enabled:true
        }
  });
    }
  };
  popup.init($);
});



let video= []
let videoDetails= []
async function getVideoalbum( )

{
 let url =localStorage.getItem('url') 
let lan = localStorage.getItem('language')
let id = localStorage.getItem('videodetail')
console.log(lan, id,url)
console.log(JSON.parse(id))

 let response = await fetch(`${url}${lan}/Video/GetWeb?albumId=${id}`);

 let getByIdVideo = await fetch(`${url}${lan}/VideoAlbum/GetByIdWeb?Id=${id}`);

    let finalResult = await response.json();
    let finalResultByIdVideo = await getByIdVideo.json();
    if(finalResult.message=="Sucess"){
     video=finalResult.data
     videoDetails=finalResultByIdVideo.data
    console.log(video);
    console.log(finalResultByIdVideo.data);
 
    // displayVadeo(videoalbum);

    }

}
 
(async function ()
{

    await getVideoalbum();
    displayvideoalbumtitle();
    displaycareers()
  


})();

function headtitle(){
   let title = videoDetails[0].title;
}





function displayvideoalbumtitle(){
    document.getElementById('titlevideoalbum').innerHTML = video[0].videoAlbumTitle;
  
   }
function displaycareers(){
    // console.log(video[0])
    let videos = `` ;
    for(var i = 0; i < video.length; i++ ){
        
       videoid = video[i].youtubeVideoUrl.slice(-11);
        videos += `
        <!-- Video Column -->
        <div class="video-column col-lg-4 col-md-12 col-sm-12 py-3">
            <div class="inner-column">
                <!-- Video Box -->
                <div class="video-box">
                    <figure class="video-image">
                        <img class="transition-500ms" src="https://img.youtube.com/vi/${videoid}/0.jpg" alt="">
                    </figure>
                    <a href="${video[i].youtubeVideoUrl}" class="lightbox-video overlay-box">
                    <span class="flaticon-media-play-symbol transition-900ms"><i class="ripple"></i>
                    </span>
                    </a>
                </div>
            </div>
        </div>
`;
    }
    document.getElementById('video').innerHTML= videos;
    
   $('.lightbox-video, .overlay-box').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'flaticon-media-play-symbol transition-900ms',
    removalDelay: 160,
    preloader: false,
    a:{
    //   patterns:{
    //     youtube:{
    //     href: 'https://www.youtube.com/watch?v=jYuAmonOUvU'
    //   },
    // },
    srcAction:'video-image',
  },
    fixedContentPos: false
  });

}



// $(document).ready(function () {
//   $("#OpenDialog").click(function () {
//       //$("#dialog").dialog({modal: true, height: 590, width: 1005 });
//       var w = window.open("", "popupWindow", "width=600, height=400, scrollbars=yes");
//       var $w = $(w.document.body);
//       $w.html("<textarea></textarea>");
//   });
// });



// $('.lightbox-video, .overlay-box').magnificPopup({
//   // disableOn: 700,
//   type: 'iframe',
//   mainClass: 'flaticon-media-play-symbol transition-900ms',
//   removalDelay: 160,
//   preloader: false,
//   a:{
    
//     patterns:{
//       youtube:{
//       index: 'youtube.com',
//       id: 'v=',
//       href: 'https://www.youtube.com/watch?v=jYuAmonOUvU'
//     },
//   },
//   srcAction:'video-image',
// },
//   fixedContentPos: false
// });
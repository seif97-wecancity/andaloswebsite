let videoalbum=[]
let Photoalbum=[]

async function getVideoalbum( )
{
 
 let response = await fetch(`${localStorage.getItem('url')}${localStorage.getItem('language')}/VideoAlbum/GetWeb`);


    let finalResult = await response.json();
    if(finalResult.message=="Sucess"){
     videoalbum=finalResult.data
    console.log(videoalbum);
    Photoalbum=[]
    displayVadeo(videoalbum);

    }

}
async function getPhotoalbum( )
{
 
    let response = await fetch(`${localStorage.getItem('url')}${localStorage.getItem('language')}/PhotoAlbum/GetWeb`);

    let finalResult = await response.json();
    if(finalResult.message=="Sucess"){
     Photoalbum=finalResult.data
    console.log(Photoalbum);
    videoalbum=[]
    displayVadeo(Photoalbum);
    // displayPhoto(Photoalbum);

    }

}

(async function ()
{

    await getVideoalbum();
  


})();


// display video album  &&  Photo album
 function displayVadeo(data){
 console.log(data[0])
 let video = `` ;
 for(var i = 0; i < data.length; i++ ){
      
 
     video += `
 
    
     <div class="project-block-two mix all agricultural petroleum col-lg-4 col-md-6 col-sm-12" onclick="videoAlbum(${data[i].id})">
                    <div class="inner-box">
                        <div class="image" onclick="videoAlbum(${data[i].id})" >
                            <img src="${localStorage.getItem('url_photo')}${data[i].image}" alt=""  style="height:250px;"/>
                            <div class="overlay-box">
                                <a class="plus flaticon-plus bg-transparent" onclick="videoAlbum(${data[i].id})"></a>
                                <div class="content px-3">
                                    <h4><a onclick="videoAlbum(${data[i].id})" class="text-white">${data[i].title} (${data[i].videosCount})</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     
      `;
 
 }
 
 document.getElementById('videoalbum').innerHTML=video

}

function videoAlbum(id){
 console.log(id)
 if(videoalbum.length){
  videoalbum.forEach(element => {
   if(id == element.id){
       localStorage.setItem('videodetail' , JSON.stringify(id));
       window.location.href = "video.html";
   }
});
 }
 else{
  Photoalbum.forEach(element => {
   if(id == element.id){
    console.log(element)
       localStorage.setItem('photoID' , JSON.stringify(id));

       window.location.href = "photo.html";
   }
});
 }

}

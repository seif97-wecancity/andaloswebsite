


var photoalbum_http = new XMLHttpRequest();
var allphotoesalbum = [];

photoalbum_http.open('GET',`${localStorage.getItem('url')}${localStorage.getItem('language')}/PhotoAlbum/GetWeb`);
photoalbum_http.send();
photoalbum_http.addEventListener('readystatechange', function(){
    if(photoalbum_http.readyState == 4 && photoalbum_http.status == 200){
        allphotoesalbum = JSON.parse(photoalbum_http.response).data;
        console.log(JSON.parse(photoalbum_http.response));
        //here the function that will show the html 
        displayphotoalbum();
        
    }
})


function displayphotoalbum(){
    
    var photoesalbum = `` ;

    for(var i = 0; i < allphotoesalbum.length; i++ ){
        photoesalbum += `
        
        <div class="project-block-two mix all agricultural petroleum col-lg-4 col-md-4 col-sm-12" onclick="photoAlbum(${allphotoesalbum[i].id})">
                    <div class="inner-box">
                        <div class="image" onclick="videoAlbum(${allphotoesalbum[i].id})" >
                            <img src="${localStorage.getItem('url_photo')}${allphotoesalbum[i].image}" alt=""  style="height:250px;"/>
                            <div class="overlay-box">
                                <a class="plus flaticon-plus bg-transparent" onclick="videoAlbum(${allphotoesalbum[i].id})"></a>
                                <div class="content px-3">
                                    <h4><a onclick="photoAlbum(${allphotoesalbum[i].id})" class="text-white">${allphotoesalbum[i].title}</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  `;


  document.getElementById('photoalbum').innerHTML = photoesalbum; 
    }


    
}


function photoAlbum(id){
        
    allphotoesalbum     .forEach(element => {
     if(id == element.id){
         localStorage.setItem('photoID' , JSON.stringify(id));
         window.location.href = "photo.html";
     }
  });
   
}
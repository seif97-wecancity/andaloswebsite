newsrecord = JSON.parse(localStorage.getItem('newsdetail')) ;
displaynewsdetails();
function displaynewsdetails(){
var fileOne = newsrecord.image.replace("\\",'/');
var filetwo = fileOne.replace("\\",'/');
var news = `
<!-- News Detail -->


<div class="inner-box">
<div class="image">
    <img src="${localStorage.getItem('url_photo')}${filetwo}" alt=""  style="height:350px;/>
</div>
<div class="lower-content">
    <ul class="post-info">

    <li lass="icon flaticon-calendar"> ${newsrecord.creationDate.slice(0, 10)}</li>
    <li><span class="icon flaticon-chat-1"></span> ${newsrecord.keywordsNames.length} Keywords</li>
</ul>
<h3>Best for any Industrial & Business Solution</h3>
<blockquote>
                        <span class="quote-icon flaticon-quote-3"></span>${newsrecord.description}<span class="designation">Al-Andalus</span>
                    </blockquote>
</div>
</div>


` ;
document.getElementById('newsdetail').innerHTML = news; 
var keywords = `<span class="tags">Keywords:</span>`;
    for( var i = 0; i < newsrecord.keywordsNames.length ; i++){
    keywords += `
            <a href="#">${newsrecord.keywordsNames[i].title}</a> `
    }
    document.getElementById('keywords').innerHTML = keywords; 
}
// ================================================================================================================
// this for the related news
// ================================================================================================================

let relatednewsHttp = new XMLHttpRequest();
let relatednews = [];
relatednewsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/News/GetRelatedNews?Id=${newsrecord.id}`);
relatednewsHttp.send();
relatednewsHttp.addEventListener('readystatechange', function () {
    if (relatednewsHttp.readyState == 4 && relatednewsHttp.status == 200) {
        relatednews = JSON.parse(relatednewsHttp.response).data;
        displayrelatednews(relatednews);
    }
})
function displayrelatednews(data) {

    if(data.length == 0){
    document.getElementById('relatednewskey').style.display = 'none';
    }
    var relatedevents = `` ;

    for (var i = 0; i < data.length; i++) {
        let stepOne = data[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
        creationDatee = new Date(data[i].creationDate);
        creationnDate = creationDatee.getFullYear() + '-' + creationDatee.getMonth() + '-' + creationDatee.getDate();
        relatedevents = `
                 <!-- Related Post -->

                 <div class="news-block-three">
                 <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                     <div class="image">
                     <a onclick="newsdetails(${data[i].id})"><img src="${localStorage.getItem('url_photo')}${two}"  style="height:200px"  alt="" /></a>
                     </div>
                     <div class="lower-content">
                         <ul class="post-info">
                             <li><span class="icon flaticon-calendar"></span>${data[i].creationDate.slice(0,10)}</li>
                             <li><span class="icon flaticon-chat-1"></span>${data[i].title}</li>
                         </ul>
                         <h4>${data[i].title}</h4>
                         <a class="explore" onclick="newsdetails(${data[i].id})">Explore More <span class="flaticon-plus"></span></a>
                 
                     </div>
                 </div>
                 </div>`;
    $('#relatednews')
    .trigger('add.owl.carousel', [relatedevents])
    .trigger('refresh.owl.carousel');
}
}
// ================================================================================================================
// this is for the latest news
// ================================================================================================================

let latestnewsHttp = new XMLHttpRequest();
    let latestnews = [];
    latestnewsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/News/GetLatestWeb?takeCount=3`);
    latestnewsHttp.send();
    latestnewsHttp.addEventListener('readystatechange', function () {
        if (latestnewsHttp.readyState == 4 && latestnewsHttp.status == 200) {
            latestnews = JSON.parse(latestnewsHttp.response).data;
            displaylatest(latestnews);
        }
    })
    function displaylatest(data) {
        var latestnews = `` ;
    
        for (var i = 0; i < data.length; i++) {
            let stepOne = data[i].image.replace("\\",'/');
            let two = stepOne.replace("\\",'/');
            Datee = new Date(data[i].creationDate);
            Dateee = Datee.getFullYear() + '-' + Datee.getMonth() + '-' + Datee.getDate();
          
            
            latestnews += `
                               <article class="post" onclick="newsdetails(${data[i].id})">
                                    <figure class="post-thumb"><img src="${localStorage.getItem('url_photo')}${two}" alt=""><a onclick="newsdetails(${data[i].id})" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                                    <div class="text"><a onclick="newsdetails(${data[i].id})">${data[i].title}</a></div>
                                    <div class="post-info">${Dateee}</div>
                                </article>
        ` ;
    }
    document.getElementById('latestnews').innerHTML = latestnews;
    
    }
// ==================================================================================================================
// this is to go to the news details 
// ==================================================================================================================
function newsdetails(id){
    relatednews.forEach(element => {
        if(id == element.id){
        localStorage.setItem('newsdetail', JSON.stringify(element));
        window.location.href = "newsdetails.html";
        }
    });
    latestnews.forEach(element => {
        if(id == element.id){
            localStorage.setItem('newsdetail', JSON.stringify(element));
            window.location.href = "newsdetails.html";
            }
    });
}
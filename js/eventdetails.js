eventrecord = JSON.parse(localStorage.getItem('eventdetail')) ;
displayeventdetails();
// =================================================================================================
// this is the selected event details 
// =================================================================================================
function displayeventdetails(){
let fileOne = eventrecord.image.replace("\\",'/');
    var filetwo = fileOne.replace("\\",'/');
        let event = `
<!-- News Detail -->
<div class="inner-box">
<div class="image">
    <img src="${localStorage.getItem('url_photo')}${filetwo}" alt=""  style="height:350px;"/>
</div>
<div class="lower-content">
    <ul class="post-info">
    
    <li><span class="icon flaticon-calendar"></span>${eventrecord.dateFrom.slice(0, 10)}</li>
    <li><span class="icon flaticon-calendar"></span>${eventrecord.dateTo.slice(0, 10)}</li>
    <li><span class="icon flaticon-chat-1"></span> ${eventrecord.keywordsNames.length} Keywords</li>
</ul>

<blockquote style="font-size:16px">
                        <span class="quote-icon flaticon-quote-3"></span>${eventrecord.description}				<span class="designation">Al-Asndalus</span>
                    </blockquote>
</div>
</div>`;
document.getElementById('eventdetail').innerHTML = event; 
  var keywords = `<span class="tags">Keywords:</span>`; 
    for( var i = 0; i < eventrecord.keywordsNames.length ; i++){
    keywords += `
                 <a href="#">${eventrecord.keywordsNames[i].title}</a>  
    `
    }
    document.getElementById('keywords').innerHTML = keywords; 
}
// =======================================================================================================
// this is the latest events
// =======================================================================================================
let latesteventsHttp = new XMLHttpRequest();
let latestevents = [];
latesteventsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Event/GetLatestWeb?takeCount=3`);
latesteventsHttp.send();
latesteventsHttp.addEventListener('readystatechange', function () {
    if (latesteventsHttp.readyState == 4 && latesteventsHttp.status == 200) {
        latestevents = JSON.parse(latesteventsHttp.response).data;
        displaylatest(latestevents);
    }
})
function displaylatest(data) {
    var latestevents = `` ;
    for (var i = 0; i < data.length; i++) {
        let stepOne = data[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
        Datee = new Date(data[i].dateFrom);
        Dateee = Datee.getFullYear() + '-' + Datee.getMonth() + '-' + Datee.getDate();
      
        
        latestevents += `
                           <article class="post" onclick="eventdetails(${data[i].id})">
                                <figure class="post-thumb"><img src="${localStorage.getItem('url_photo')}${two}" alt=""><a onclick="eventdetails(${data[i].id})" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                                <div class="text"><a onclick="eventdetails(${data[i].id})">${data[i].title}</a></div>
                                <div class="post-info">${Dateee}</div>
                            </article>
    ` ;}
document.getElementById('latestevents').innerHTML = latestevents;
}
// ================================================================================================================
// this is the related events
// ================================================================================================================

let relatedeventsHttp = new XMLHttpRequest();
let relatedevents = [];
relatedeventsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Event/GetRelatedEvents?Id=${eventrecord.id}`);
relatedeventsHttp.send();
relatedeventsHttp.addEventListener('readystatechange', function () {
    if (relatedeventsHttp.readyState == 4 && relatedeventsHttp.status == 200) {
        relatedevents = JSON.parse(relatedeventsHttp.response).data;
        displayrelatedeventsdetails(relatedevents);
    }


})

function displayrelatedeventsdetails(data) {

    if(data.length == 0){
     document.getElementById('relatedeventskey').style.display = 'none';
    }
    let relatedevents = `` ;

    for (var i = 0; i < data.length; i++) {
        let stepOne = data[i].image.replace("\\",'/');
        let two = stepOne.replace("\\",'/');
        
        relatedevents = `
        <!-- News Block Three -->
                            <div class="news-block-three">
                            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="image">
                                <a onclick="eventdetails(${data[i].id})"><img src="${localStorage.getItem('url_photo')}${two}"  style="height:200px"  alt="" /></a>
                                </div>
                                <div class="lower-content">
                                  
                                    <h4 class="my-1">${data[i].location}</h4>
                                    <a class="explore" onclick="eventdetails(${data[i].id})">Read More <span class="flaticon-plus"></span></a>
                            
                                </div>
                            </div>
                            </div>`;
    $('#relatedevents')
    .trigger('add.owl.carousel', [relatedevents])
    .trigger('refresh.owl.carousel');
}

}

// ================================================================================================================
// this is the event details
// ================================================================================================================

function eventdetails(id){
 
    relatedevents.forEach(element => {
        if(id == element.id){
        localStorage.setItem('eventdetail', JSON.stringify(element));
        window.location.href = "eventdetails.html";
        }
    });
    latestevents.forEach(element => {
        if(id == element.id){
            localStorage.setItem('eventdetail', JSON.stringify(element));
            window.location.href = "eventdetails.html";
            }
    });
}

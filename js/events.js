// let eventsHttp = new XMLHttpRequest();
let allevents = [];
// // let allkeywords = localStorage.getItem('Keywords').split(',');
// eventsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Event/GetWeb`);
// eventsHttp.send();
// eventsHttp.addEventListener('readystatechange' , function(){
//     if(eventsHttp.readyState == 4 && eventsHttp.status == 200){
// allevents = JSON.parse(eventsHttp.response).data;
// displaycareers();
//     }
// })

async function getEvent( )
{
    let response = await fetch(`${localStorage.getItem('url')}${localStorage.getItem('language')}/Event/GetWeb`);

    let finalResult = await response.json();
    if(finalResult.message=="Sucess"){
        allevents=finalResult.data
    console.log(finalResult);
    }

}

(async function ()
{

    await getEvent();
    displaycareers();
 


})();

function displaycareers(){

    if(allevents.length == 0){
     document.getElementById('eventtkey').style.display = 'none';
     Swal.fire('Their is no events now a days')
    }
    let events = `` ;
    for(var i = 0; i < allevents.length; i++ ){
        var stepOne = allevents[i].image.replace("\\",'/');
        var two = stepOne.replace("\\",'/');
        Datee = new Date(allevents[i].dateFrom);
        Dateeto = new Date(allevents[i].dateTo);
        fromDate = Datee.getFullYear() + '-' + Datee.getMonth() + '-' + Datee.getDate();
        toDate = Dateeto.getFullYear() + '-' + Dateeto.getMonth() + '-' + Dateeto.getDate();
        events = `
        <div class="news-block-three">
        <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div class="image">
            <a onclick="eventdetails(${allevents[i].id})"><img src="${localStorage.getItem('url_photo')}${two}"  style="height:200px"  alt="" /></a>
            </div>
            <div class="lower-content">
                <ul class="post-info py-1" style="height:50px;">
                    <li><span class="icon flaticon-calendar mx-0"></span>${allevents[i].dateFrom.slice(0,10)}</li>
                    <li><span class="icon flaticon-calendar mx-0"></span>${allevents[i].dateTo.slice(0,10)}</li>
                    <li><span class="icon flaticon-location"></span>${allevents[i].location}</li>
                </ul>
                <h4>${allevents[i].title}</h4>
                <a class="explore" onclick="eventdetails(${allevents[i].id})">Read More <span class="flaticon-plus"></span></a>
        
            </div>
        </div>
        </div>
         `;
  $('#eventt')
     .trigger('add.owl.carousel', [events])
     .trigger('refresh.owl.carousel');
    }
}
// ====================================================================================================================
// this is the selected event details 
// ====================================================================================================================
function displayeventdetails(){
    var fileOne = eventrecord.image.replace("\\",'/');
        var filetwo = fileOne.replace("\\",'/');
        Datee = new Date(eventrecord.dateFrom);
            Dateeto = new Date(eventrecord.dateTo);
            fromDate = Datee.getFullYear() + '-' + Datee.getMonth() + '-' + Datee.getDate();
            toDate = Dateeto.getFullYear() + '-' + Dateeto.getMonth() + '-' + Dateeto.getDate();
    var event = `
    
    <!-- News Detail -->
    <div class="news-detail">
        <div class="inner-box">
            <div class="image">
                <img src="${localStorage.getItem('url_photo')}${filetwo}" alt="" /> 
            </div>
            <div class="lower-content">
                <ul class="post-info">
                    <li>${eventrecord.title}</li>
                    <li>from date : <span class="icon flaticon-calendar"></span>${fromDate}</li>
                    <li>to date : <span class="icon flaticon-calendar"></span>${toDate}</li>
                    
                </ul>
                <h3>${eventrecord.title}</h3>
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Quis Ipsum Suspendisse Ultrices Gravida. Risus Commodo Viverra Maecenas Accumsan Lacus Vel Facilisis. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Quis Ipsum Suspendisse Ultrices Gravida. Risus Commodo Viverra Maecenas Accumsan Lacus Vel Facilisis.</p>
                <p>${eventrecord.description}</p>
                
                
            </div>
            
            <!-- Post Share Options-->
            <div class="post-share-options">
                <div class="post-share-inner clearfix">
                    <div class="tags"><span class="tags">Keywords:</span>
                    <a href="#">Factory</a>
                     <a href="#">Industry </a>
                     <a href="#">Logistics</a></div>
                  
                </div>
            </div>
            <!-- End Post Share Options-->
            
        </div>
    </div>               
    ` ;
    
    document.getElementById('eventdetail').innerHTML = event; 
        
    }
    
    
    // ================================================================================================================
    // this is the latest events
    // ================================================================================================================
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

        if(data.length == 0){
    document.getElementById('latesteventskey').style.display = 'none';
        }
        let latestevents = `` ;
     
        for (var i = 0; i < 3; i++) {
            let stepOne = data[i].image.replace("\\",'/');
            let two = stepOne.replace("\\",'/');
            Datee = new Date(data[i].dateFrom);
            Dateee = Datee.getFullYear() + '-' + Datee.getMonth() + '-' + Datee.getDate();
            latestevents += `
                                <article class="post" onclick="eventdetails(${data[i].id})">
                                <figure class="post-thumb"><img src="${localStorage.getItem('url_photo')}${two}" alt=""><a onclick="eventdetails(${data[i].id})" class="overlay-box"><span class="icon fa fa-link"></span></a></figure>
                                <div class="text"><a onclick="eventdetails(${data[i].id})" >${data[i].title}</a></div>
                                <div class="post-info">${data[i].dateFrom.slice(0, 10)}</div>
                                <div class="post-info">${data[i].dateTo.slice(0, 10)}</div>
                            </article>
        ` ;
    }
    document.getElementById('latestevents').innerHTML =`
    <div class="widget-content">
       
      ${latestevents}
    </div>` 
    
    }
// =====================================================================================================================
// this is to go to event details
// =====================================================================================================================
function eventdetails(id){
    allevents.forEach(element => {
        if(id == element.id){
            localStorage.setItem('eventdetail' , JSON.stringify(element));
            window.location.href = "eventdetails.html";
        }
    });
}



 

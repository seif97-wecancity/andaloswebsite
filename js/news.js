// =====================================================================================================================
// this for getting all the news
// =====================================================================================================================
var newsHttp = new XMLHttpRequest();
var allnews = [];

newsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/News/GetWeb`);
newsHttp.send();
newsHttp.addEventListener('readystatechange' , function(){
    if(newsHttp.readyState == 4 && newsHttp.status == 200){
        allnews = JSON.parse(newsHttp.response).data;
displaynews();
    }
})


function displaynews(){
    if(allnews.length == 0){
        document.getElementById('newskey').style.display = 'none';
        Swal.fire('Their is no news now a days')
    }
    var news = `` ;
    for(var i = 0; i < allnews.length; i++ ){
        var stepOne = allnews[i].image.replace("\\",'/');
        var two = stepOne.replace("\\",'/');
        Datee = new Date(allnews[i].creationDate);
        Dateee = Datee.getFullYear() + '-' + Datee.getMonth()+1 + '-' + Datee.getDate();
        debugger
        news += `
        <!-- News Block Four -->
        <div class="news-block-four">
            <div class="inner-box">
                <div class="image">
                    <a  onclick="newsdetails(${allnews[i].id})"><img src="${localStorage.getItem('url_photo')}${two}" alt="" /></a>
                </div>
                <div class="lower-content">
                 
                    <h3><a onclick="newsdetails(${allnews[i].id})">${allnews[i].title}</a></h3>
                    <ul class="post-info mb-0 pb-0" style="border-bottom:0 !important">
                    <li class="my-3"><a class="text-white" onclick="newsdetails(${allnews[i].id})">${Dateee}</a></li>
                </ul>
                    <a class="explore clickbtn" style="margin-top: -20px;" onclick="newsdetails(${allnews[i].id})">Read More <span class="flaticon-plus"></span></a>
                </div>
            </div>
        </div>         
           
  `;


  document.getElementById('news').innerHTML = news; 
    }
}
// ========================================================================================================================================
// this is for the latest news
// ========================================================================================================================================
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
        if(data.length == 0){
        document.getElementById('latestnewskey').style.display = 'none';
        }
        var latestnews = `` ;
        for (var i = 0; i < data.length; i++) {
            debugger
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

// ===========================================================================================
// this is selecting specific record 
// ===========================================================================================
function newsdetails(id){
    allnews.forEach(element => {
        if(id == element.id){
            localStorage.setItem('newsdetail' , JSON.stringify(element));
            window.location.href = "newsdetails.html";
        }
    });
}
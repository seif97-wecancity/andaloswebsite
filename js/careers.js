var careerHttp = new XMLHttpRequest();
var allcareers = [];
careerHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Career/GetWeb`);
careerHttp.send();
careerHttp.addEventListener('readystatechange', function () {
    if (careerHttp.readyState == 4 && careerHttp.status == 200) {
        allcareers = JSON.parse(careerHttp.response).data;
        displaycareers();
    }
})







var departmetHttp = new XMLHttpRequest();
var alldepartmet = [];
  
departmetHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Department/GetWeb`);
departmetHttp.send();
departmetHttp.addEventListener('readystatechange', function(){
    if(departmetHttp.readyState == 4 && departmetHttp.status == 200){
        
        alldepartmet = JSON.parse(departmetHttp.response).data;
       displaydepartments();
    }
})


function displaydepartments(){

   let departments = ``;
    for(var i = 0; i < alldepartmet.length; i++ ){
        
        departments += `
        <li class="filter" data-role="button"  data-filter="petroleum"  >${alldepartmet[i].title}</li>    
  `;
  document.getElementById('departments').innerHTML = departments;   
    }

}

function displaydata(id){
    var productdetailsHttp = new XMLHttpRequest();
    var allproduct = [];
    productdetailsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Product/GetWeb?categoryId=${id}`);
    productdetailsHttp.send();
    productdetailsHttp.addEventListener('readystatechange' , function(){
        if(productdetailsHttp.readyState == 4 && productdetailsHttp.status == 200){
            allproduct = JSON.parse(productdetailsHttp.response).data;
            console.log(allproduct);
    displayproductdetails();
 
        }
    })
    
    
    function displayproductdetails(){
        
        var product = `` ;
        for(var i = 0; i < allproduct.length; i++ ){
            var stepOne = allproduct[i].image.replace("\\",'/');
            var two = stepOne.replace("\\",'/');
            product += ` 
            <div class="project-block-two mix all agricultural petroleum col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
                <div class="image"  onclick="requestproduct(${allproduct[i].id})">
                    <img src="${localStorage.getItem('url_photo')}${two}" style="height:250px" />
                    <div class="overlay-box">
                        <a class="plus flaticon-plus"  onclick="requestproduct(${allproduct[i].id})"> </a>
                        <div class="content">
                            <div class="title">${allproduct[i].title}</div> 
                            <h4><a onclick="requestproduct(${allproduct[i].id})">${allproduct[i].productCategoryTitle}</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
      `;
    
    
      document.getElementById('categorydata').innerHTML = product; 
        }
    }
}

function displaycareers() {
    if(allcareers.length == 0){
        document.getElementById('careerskey').style.display = 'none';
        Swal.fire('Their is no careers now a days')
       }
    let careers = ``;
    for (var i = 0; i < allcareers.length; i++) {
        careers = `
        <!-- News Block Three -->
        <div class="news-block-three">
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms" onclick="careerdetails(${allcareers[i].id})"> 
                <div class="image">
                    <a onclick="careerdetails(${allcareers[i].id})"><img src="${localStorage.getItem('url_photo')}${allcareers[i].image}" alt="" /></a>
                </div>
                <div class="lower-content">
                    <ul class="post-info">
                        <li><span class="icon flaticon-chat-1"></span>Department : ${allcareers[i].departmentTitle}</li>
                      
                    </ul>
                    <h4><a href="#">${allcareers[i].title}</a></h4>
                    <a class="explore pull-right" style="margin-top: -20px;" onclick="careerdetails(${allcareers[i].id})">Explore More <span class="flaticon-plus"></span></a>
                </div>
            </div>
        </div>
     `;
      
  $('#careeeer')
  .trigger('add.owl.carousel', [careers])
  .trigger('refresh.owl.carousel');


    }
   

}

function careerdetails(id){
 allcareers.forEach(element => {
    if(id == element.id){
          localStorage.setItem('careerdetails', JSON.stringify(element));
         window.location.href = 'careerdetails.html';
    }
 });
}


{/* <div class="project-block-two mix all agricultural petroleum col-lg-4 col-md-6 col-sm-12">
<div class="inner-box">
    <div class="image"  onclick="careerdetails(${allcareers[i].id})">
        <img src="${localStorage.getItem('url_photo')}${allcareers[i].image}" style="height:250px" />
        <div class="overlay-box">
            <a class="plus flaticon-plus"  onclick="careerdetails(${allcareers[i].id})"> </a>
            <div class="content">
                <div class="title">${allcareers[i].title}</div> 
                <h4><a onclick="careerdetails(${allcareers[i].id})">${allcareers[i].departmentTitle}</a></h4>
            </div>
        </div>
    </div>
</div>
</div> */}

// for product category

    var categoryHttp = new XMLHttpRequest();
    var allproductcategory = [];
      
    categoryHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/ProductCategory/GetWeb`);
    categoryHttp.send();
    categoryHttp.addEventListener('readystatechange', function(){
        if(categoryHttp.readyState == 4 && categoryHttp.status == 200){
            allproductcategory = JSON.parse(categoryHttp.response).data;
            displayproductcategory();
            // allcategories();
            displaydata(allproductcategory[0].id)
        }
    })
    function displayproductcategory(){
    
        var productcategory = `` ;
        for(var i = 0; i < allproductcategory.length; i++ ){
            var stepOne = allproductcategory[i].image.replace("\\",'/');
        var two = stepOne.replace("\\",'/');
            productcategory += `
            <li class="filter" data-role="button" id="${allproductcategory[i].id}"  data-filter="petroleum"  onclick="displaydata(${allproductcategory[i].id})">${allproductcategory[i].title}</li>
      `;
      console.log(allproductcategory[i].id)
      document.getElementById('category').innerHTML = productcategory; 
        }
    }
    function allcategories(){
        var productdetailsHttp = new XMLHttpRequest();
        var allproduct = [];
        productdetailsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Product/GetWeb`);
        productdetailsHttp.send();
        productdetailsHttp.addEventListener('readystatechange' , function(){
            if(productdetailsHttp.readyState == 4 && productdetailsHttp.status == 200){
                allproduct = JSON.parse(productdetailsHttp.response).data;
        displayproductdetails();
        allproduct = [];
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
                        <img src="${localStorage.getItem('url_photo')}${two}" style="max-height: 400px;" />
                        <div class="overlay-box">
                            <a class="plus flaticon-plus bg-transparent"  onclick="requestproduct(${allproduct[i].id})"> </a>
                            <div class="content">
                                <div class="title text-white">${allproduct[i].title}</div> 
                                <h4><a onclick="requestproduct(${allproduct[i].id})" class="text-white">${allproduct[i].productCategoryTitle}</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
          `;
            }
          document.getElementById('categorydata').innerHTML = product; 
        }        
    }
    function displaydata(id){
        
        allproductcategory.forEach(element => {
            if( id == element.id){
                document.getElementById(`${id}`).style.backgroundColor = '#49BDD1';
                document.getElementById(`${id}`).style.color = 'white';
            }else {
                document.getElementById(`${element.id}`).style.backgroundColor = 'var(--color-fiftyfour)';
                document.getElementById(`${element.id}`).style.color = 'black';
            }
        });

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
                        <img src="${localStorage.getItem('url_photo')}${two}" style="height: 500px ;  aspect-ratio: auto " />
                        <div class="overlay-box">
                            <a class="plus flaticon-plus bg-transparent"  onclick="requestproduct(${allproduct[i].id})"> </a>
                            <div class="content">
                                <div class="title text-white">${allproduct[i].title}</div> 
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


    function requestproduct(id){
        localStorage.setItem('productdetails', id);
        window.location.href = "productdetails.html";    
    }
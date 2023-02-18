


var clients_http = new XMLHttpRequest();
var allclients = [];

clients_http.open('GET',`${localStorage.getItem('url')}${localStorage.getItem('language')}/Client/GetWeb`);
clients_http.send();
clients_http.addEventListener('readystatechange', function(){
    if(clients_http.readyState == 4 && clients_http.status == 200){
        allclients = JSON.parse(clients_http.response).data;
        //here the function that will show the html 
        displayclients();
    }
})
function displayclients(){  
    var clients = `` ;
    for(let client of allclients ){
        clients += `
        <div class="team-block-three  col-lg-3 col-md-6 col-sm-12" >
        <div class="" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div class="image">
            <img src="https://alandalusbimexdevapi.wecancity.com/${client.image}" alt="" />
            <div class="overlay-box">
                <h5 class="text-white">${client.title}</h5>
            </div>
        </div>
    </div>      
    </div>  
  `;
  document.getElementById('client').innerHTML = clients; 
    }
}

// inner-box wow fadeInLeft
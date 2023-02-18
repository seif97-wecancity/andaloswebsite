


var clients_http = new XMLHttpRequest();
var allclientsinaboutus = [];

clients_http.open('GET',`${localStorage.getItem('url')}${localStorage.getItem('language')}/Client/GetWeb`);
clients_http.send();
clients_http.addEventListener('readystatechange', function(){
    if(clients_http.readyState == 4 && clients_http.status == 200){
        allclientsinaboutus = JSON.parse(clients_http.response).data;
        //here the function that will show the html 
        displayclientsinaboutus();
    }
})
function displayclientsinaboutus(){  
    var clients = `` ;
    for(let client of allclientsinaboutus ){
        clients = `
        <li class="mx-3" style="height:120px;">

        <img src="https://alandalusbimexdevapi.wecancity.com/${client.image}" class="specific-image"   alt="">
  
        </li>
        
  `;

  $('#clients')
  .trigger('add.owl.carousel', [clients])
  .trigger('refresh.owl.carousel');


//   document.getElementById('client').innerHTML = clients; 
    }
}
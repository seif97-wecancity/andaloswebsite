var inquiryHttp = new XMLHttpRequest();
var allinquiries = [];
inquiryHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/InquiryType/GetWeb`);
inquiryHttp.send();
inquiryHttp.addEventListener('readystatechange', function(){
    if(inquiryHttp.readyState == 4 && inquiryHttp.status == 200){
        allinquiries = JSON.parse(inquiryHttp.response).data;
        displayinquiry();
    }
})

function displayinquiry(){
    
    var inquiries = `` ;
    for(var i = 0; i < allinquiries.length; i++ ){
        
        inquiries += `
        
        <option value=  ${allinquiries[i].id}>${allinquiries[i].title}</option>
       
  `;


  document.getElementById('inquiry').innerHTML = inquiries; 

    }

}

// var contactHttp = new XMLHttpRequest();
// var allcareers = [];
// careerHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Career/GetWeb`);
// careerHttp.send();
// careerHttp.addEventListener('readystatechange', function () {
//     if (careerHttp.readyState == 4 && careerHttp.status == 200) {
//         allcareers = JSON.parse(careerHttp.response).data;
//         displaycareers();
//     }
// })


function insertForm(){

	const name =document.getElementById("name").value;
	const email =document.getElementById("email").value;
	const mobile =document.getElementById("mobile").value;
	const message =document.getElementById("message").value;
	const organization =document.getElementById("organization").value;
	let data = {
		    name: name,
			email: email,
			mobile: mobile,
			message: message,
			inquiryTypeId: parseInt(document.getElementById("inquiry").value),
			organization: organization,
	}
	fetch(`${localStorage.getItem('url')}${localStorage.getItem('language')}/ContactInquiry/Create`, {
        
		method: 'POST', 
		
		body: JSON.stringify(data),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	  })
		.then((response) => {
			// alert('the data is sent');
			document.getElementById("name").value = '';
			document.getElementById("email").value = '';
			document.getElementById("mobile").value = '';
			document.getElementById("message").value = '';
			document.getElementById("organization").value = '';

		})
		.catch((error) => {
		  console.error('Error:', error);
		});


}

const arr_false = []
const arr_true = []
data.forEach((obj$)=>{

	Object.keys(obj$).forEach((key) => {
		if (obj$[key] == true) {
			arr_true.push(obj$)
				// delete   this.insertForm.value[key] ;
		}
		else {
			arr_false.push(obj$)
		
				
		}
	});
})



 
 
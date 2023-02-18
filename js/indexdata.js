

function datasend(){
	formValue()
	// alert('wowo');
	const form = document.querySelector('form');
 
form.addEventListener("submit", (e) => {
	insertForm();
})
};

function formValue(){
	const name =document.getElementById("name").value;
	const email =document.getElementById("email").value;
	const mobile =document.getElementById("mobile").value;
	console.log(name  , email , mobile);

	return name  , email , mobile;
}

function insertForm(){
	const name =document.getElementById("name").value;
	const email =document.getElementById("email").value;
	const mobile =document.getElementById("mobile").value;
	const message =document.getElementById("message").value;
	const organization =document.getElementById("organization").value;
	const productId =document.getElementById("product").value;
	const serviceId =document.getElementById("service").value;
	const inquiryTypeId =document.getElementById("inquiryType").value;
	
	let data = {
		    name: name,
			email: email,
			mobile: mobile,
			message: message,
			inquiryTypeId:1,
			organization: organization,
			inquiryTypeId : 1,
	}
	fetch(`${localStorage.getItem('url')}${localStorage.getItem('language')}/ContactInquiry/Create`, {
		method: 'POST', // or 'PUT'
		
		body: JSON.stringify(data),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	  })
		.then((response) => {
			alert('the data is sent')
		})
		.catch((error) => {
		  console.error('Error:', error);
		});


}






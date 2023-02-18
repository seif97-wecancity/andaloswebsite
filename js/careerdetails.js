careerrecord = JSON.parse(localStorage.getItem('careerdetails')) ;
displaycareerdetails();

// =================================================================================================
// this is the selected event details 
// =================================================================================================

function displaycareerdetails(){
let fileOne = careerrecord.image.replace("\\",'/');
    var filetwo = fileOne.replace("\\",'/');
    Datee = new Date(careerrecord.dateFrom);
        Dateeto = new Date(careerrecord.dateTo);
        fromDate = Datee.getFullYear() + '-' + Datee.getMonth() + '-' + Datee.getDate();
        toDate = Dateeto.getFullYear() + '-' + Dateeto.getMonth() + '-' + Dateeto.getDate();
        let career = `


<div class="news-detail">

<div class="inner-box">
<div class="image"></div>
				<img src="${localStorage.getItem('url_photo')}${filetwo}" alt=""  style="height:500px;/>
</div>
<div class="lower-content">
				<ul class="post-info">
				<li style="margin:5px 5px;">
				<span class="icon flaticon-calendar m-1"></span>
				${careerrecord.creationDate.slice(0, 10)}
				</li>
				
</ul>
<h3>${careerrecord.departmentTitle}</h3>
<blockquote>
<span class="quote-icon flaticon-quote-3"></span>${careerrecord.title}<span class="designation">Al-Andalus Bimex</span></br>
<span class="quote-icon flaticon-quote-3"></span>${careerrecord.departmentTitle}<span class="designation">Al-Andalus Department</span>
</blockquote>
</div>
</div>
                    
` ;

document.getElementById('careerdetail').innerHTML = career; 
   
}

function insertForm(){
	const formData = new FormData();
	const name =document.getElementById("name").value;
	const email =document.getElementById("email").value;
	const mobile =document.getElementById("mobile").value;
	const comment =document.getElementById("comment").value;
	const resume =document.getElementById("imagefile");
	formData.append("ResumeFile", resume.files[0], resume.files[0].name);
	formData.append("Comment", comment);
	formData.append("CareerId", careerrecord.id); 	
	formData.append("Name", name);
	formData.append("Mobile", mobile);
	formData.append("Email", email);
    console.log(resume);
console.log(formData);
	fetch(`${localStorage.getItem('url')}${localStorage.getItem('language')}/CareerApply/Create`, {
		method: 'POST',
		body: formData,
	  })
		.then((response) => {
			document.getElementById("buttontocareer").disabled = true;
			alert('the data is sent');
			document.getElementById("name").value = '';
			document.getElementById("email").value = '';
			document.getElementById("mobile").value = '';
			document.getElementById("comment").value = '';
			document.getElementById("imagefile").value = '';
		})
		.catch((error) => {
			document.getElementById("buttontocareer").disabled = false;
		  console.error('Error:', error);
		});


}



let departmentsHttp = new XMLHttpRequest();
let departmentsdata = [];	
departmentsHttp.open('GET', `${localStorage.getItem('url')}${localStorage.getItem('language')}/Department/GetWeb`);
departmentsHttp.send();
departmentsHttp.addEventListener('readystatechange', function(){
    if(departmentsHttp.readyState == 4 && departmentsHttp.status == 200){
        departmentsdata = JSON.parse(departmentsHttp.response).data;
		departmentsdisplaydata(departmentsdata);
		
    }
});

function departmentsdisplaydata(data) {
	debugger
	let deparments = `` ;
	// console.log( data[0])
	for (var i = 0; i < data.length; i++) { 
		deparments += `	
		<ul class="service-list-two">
		<li class="p-1"><a>${data[i].title}</a></li>
								</ul>
		`;
}
document.getElementById('Departments').innerHTML = deparments; 
}
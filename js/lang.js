







jQuery(function ($) {
 'use strict'; // 1. preloader
 
  var cssId =false 
  $("#lang").click(function(){
    changetoenglish()
  });
  // localStorage.setItem('language', 'ar');
function changetoenglish(){
  cssId=!cssId
  var head  = document.getElementsByTagName('head')[0];

  if (cssId)
{ 
  
  document.getElementById("false").remove();
    localStorage.setItem('language', 'ar');
    localStorage.setItem('check', true);
 
    let link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    // link.href = 'assets/css/main-rtl.css';
    link.href = 'css/css/app.css';
    link.media = 'all';
    head.appendChild(link);
  
}else{
	localStorage.setItem('language', 'en');
  localStorage.setItem('check', false);

 
  document.getElementById("true").remove();
  let link  = document.createElement('link');
  link.id   = cssId;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/css/app.css';
  link.media = 'all';
  head.appendChild(link);
}
	localStorage.setItem('language', 'en');
	const language = localStorage.getItem('language');
	setLanguage(cssId);
	
}
 

const translations = {
  en:{
    lang:'English',

  home:'home',
  news:'news',
  about:'about',
  aboutus:'about us',
  clients:'clients',
  mediacenter:'media center',
  services:'services',
  events:'events',
  careers:'careers',
  contactus:'contact us',
  productsmanagment:'products managments',
  productcategory:'product category',
  products:'products',
  productfilelibrary:'product file library',
  productrequest:'product request',
  BestQualityTeamMembers:'Best & Quality Team Members',
  MailUs:'Mail Us',
  ourteam:"our team",
  CallUsforhelp:'call us for help',
  TheBestIndustryservices:'The Best Industry services',
  english:'english',
  arabic:'arabic',
  selectlanguage:'select a language',
  welcometoourandaluswebsite:'| welcome to our Andalus Website',
  AlAndalosProvideServicesForYourBusiness:'Al-Andalos Provide Services For Your Business',
  ProductDetails:'Product Details',
  Products:'Products',
  ProductDescription:'Product Description',
  WehavethebestqualityAndalusCompany:'We have the best quality Andalus Company',
  Populatproducts:'Populat products',
  numberofvacancies:'number of vacancies',
  departments:'Departments',
  Photoes:'photoes',
  Photoesalbum:'Photoes album',
  Locationonmap:'Location On Map',
  Orderaproductrequest:'Order A Product Request',
  Learnsomethingfromblog:'Learn something from blog',
  Latestblog:'Latest Blog',
  NeedATechnicalRequest:'Need A Technical Request ?',
  SendRequest:'Send Request',
  Officialinfo:'Official info',
  CEOMessage:'CEO Message',
  Ourhistory:'Our History',
  CEOname:'CEO Name',
  OurLatestevents:'Our Latest events',
  Viewallcategories:'View all categories'
},
  ar:{
    lang:'عربي ',

  home:'الرئيسية',
  news:'الاخبار',
  about:'من نحن',
  aboutus:'من نحن ',
  clients:'العملاء',
  mediacenter:'مركز الاعلام',
  services:'الخدمات',
  events:'الاحداث',
  careers:'الوظائف',
  contactus:'اتصل بنا',
  BestQualityTeamMembers:'افضل خدمة مع افضل فريق',
  ourteam:'فريقنا',
  CallUsforhelp:'اتصل بنا للمتابعة',
  MailUs:'ارسل لنا',
  arabic:'العربية',
  english:'الانجليزية',
  productsmanagment:'ادارة المنتجات',
  productcategory:'تصنيف المنتجات',
  products:'المنتجات',
  productfilelibrary:'ملفات المنتجات',
  productrequest:'طلب منتج',
  selectlanguage:'اختر لغة للموقع',
  welcometoourandaluswebsite:'اهلا بك في موقع الاندلس |',
  TheBestIndustryservices:'نقدم احسن الخدمات الصناعية',
  AlAndalosProvideServicesForYourBusiness:'الاندلس تقدم الخدمات الخاصة بعملك',
  ProductDetails:'تفاصيل المنتجات',
  Products:'المنتجات',
  ProductDescription:' تعريف بالمنتجات',
  WehavethebestqualityAndalusCompany:'نحن لدينا افضل جودة في شركة الأندلس',
  Populatproducts:'اشهر المنتجات',
  numberofvacancies:'عدد الاماكن المتاحة',
  departments:'الأقسام',
  Photoes:'الصور',
  Photoesalbum:'البوم الصور',
  Locationonmap:'الموقع على الخريطة',
  Orderaproductrequest:'اطلب طلب لمنتج',
  Learnsomethingfromblog:'تعلم شئ من البلوج ',
  Latestblog:'اخر بلوج',
  NeedATechnicalRequest:'هل تحتاج الدعم ؟',
  SendRequest:'ارسل الطلب',
  Officialinfo:'معلومات عامة',
  CEOMessage:'رسالة رئيس مجلس الادارة',
  Ourhistory:'تاريخ المؤسسة',
  CEOname:'اسم رئيس مجلس الإدارة',
  OurLatestevents:'اخر احداثنا',
  Viewallcategories:'عرض جميع الفئات'
}
};

const setLanguage = (language) => {
  const lang =  language==true?'ar':'en';
  console.log(lang)
	const elements = document.querySelectorAll("[data-i18n]");	
	elements.forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        console.log(translationKey)
        element.textContent = translations[lang][translationKey];
	});
	 
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(2)
	const language = localStorage.getItem('language');
	setLanguage(language);
})



	// const language = localStorage.getItem('language');
  console.log(localStorage.getItem('check'))
	const language = "en";
  if  (localStorage.getItem('check')=='true'){
    setLanguage(true);
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = true;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/css/app.css';
    link.media = 'all';
    head.appendChild(link)
    
  }else if(localStorage.getItem('check')== 'false'){
    setLanguage(false);
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = false;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/css/app.css';
    link.media = 'all';
    head.appendChild(link);

  }
   else if(language=='ar')
{
	setLanguage(true);

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = true;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/css/app.css';
    link.media = 'all';
    head.appendChild(link);
}else{
	setLanguage(false);
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = false;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/css/app.css';
  link.media = 'all';
  head.appendChild(link);
}
}); // JQuery end


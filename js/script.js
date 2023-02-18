document.getElementById("year").innerHTML = new Date().getFullYear();
localStorage.setItem('url','https://alandalusbimexdevapi.wecancity.com/api/');
localStorage.setItem('url_photo','https://alandalusbimexdevapi.wecancity.com/');
const translations = {
    en:{
		lang:'عربي',
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
		product:'product',
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
		welcometoourandaluswebsite:'AL-Andalus BIMEX Official Website',
		AlAndalosProvideServicesForYourBusiness:'Al-Andalos Provide Services For Your Business',
		services:'services',
		ProductDetails:'Product Details',
		ProductDetail:'Product Details',
		Products:'Products',
		ProductDescription:'Product Description',
		WehavethebestqualityAndalusCompany:'We have the best quality Andalus Company',
		Populatproducts:'Populat products',
		numberofvacancies:'number of vacancies',
		departments:'Departments',
		Photoes:'photoes',
		Photoesalbum:'Photoes album',
		Locationonmap:'OFFICE LOCATION',
		FactoryLocation:'FACTORY LOCATION',
		Orderaproductrequest:'Order A Product Request',
		Learnsomethingfromblog:'Learn something from blog',
		Latestblog:'Latest Blog',
		NeedATechnicalRequest:'Need A Technical Request ?',
		SendRequest:'Send Request',
		contactdetails:'CONTACT INFORMATION',
		CEOMessage:'CEO Message',
		Ourhistory:'Our History',
		inourworkitis:'In Our Work It Is Essential For Us To Fullfill All Our Core Value',
		CEOname:'CEO Name',
		ProductRequest:'PRODUCT REQUEST',
		OurLatestEvents:'Our Latest events',
		LatestEvents:'Latest Events',
		Relatednews:'Related News',
		Eventdetails:'Event details',
		News:'News',
		quality:'QUALITY',
		compatitiveprice:'COMPATITIVE PRICE',
		aftersalessupport:'AFTER SALES SUPPORT',
		workinghours:'Working Hours: Sat - Thursday 9:00 am - 5:00 pm ',
		LatestNews:'Latest News',
		Similarproducts:'Similar Products',
		OurLatestNews:'Our Latest news',
		Viewallcategories:'View all categories',
		OurAwesomeServices:'Our Awesome Services',
		OfficeNearYou:"OFFICE NEAR YOU .",
		ReadMore:'Read More',
		otherproducts:'OTHER PRODUCTS',
		newsdetails:'news details',
		products:'Products',
		PRODUCTS:'PRODUCTS',
		CompleteRangeOfProducts:'Complete Range Of Products',
		ourlatestproducts:'OUR LATEST PRODUCTS',
		operatedcountires:'OPERATED COUNTRIES',
		activeprojects:'PROJECTS',
		Qualityandprecision:'QUALITY & PRECISION',
		Committedtotheoutmostinternationalqualitystandards:'COMMITED TO THE OUT MOST INTERNATIONAL QUALITY STANDARDS .',
		Contacttoourexperts:'CONTACT OUR PROFESSIONAL',
		Innovationandcreativity:'INNOVATION & CREATIVITY',
		Smartsolutionsfortheindustryeverydayproblems:'SMART SOLUTIONS FOR THE INDUSTRY EVERY DAY PROBLEMS',
		Ontimedeliveryandsupport:'ON TIME DELIVERY & SUPPORT',
		Stockavailableallyearroundanddedicatedaftersalessupport:'STOCK AVAILABLE ALL YEAR ROUND & DEDICATED AFTER SALES SUPPORT .',
		History:'History',
		OurHistory:'Our History',
		RecentIndustryProject:'Recent Industry Project',
		OurCareers:'Our Careers',
		CareerDetails:'Career Details',
		WhatWeDo:'What We Do',
		wefostercustomerconfidencethroughclarity:'We foster customer confidence through clarity, honesty, and transparency in all communications and work to educate our customers, partners, and employees on the issues pertinent to responsible water and wastewater resources management',
		ourcompanyisthestewardofpublic:'Our company is the steward of public and private projects aimed to provide a defined services and products. We manage these projects responsibly, fairly and with integrity and believe that our customers are best served through continuous improvement and value enhancement. We support our customers efforts to manage and improve the water quality for their clients.',
		TheBestIndustryservices:'The Best Industry services',
		AndalosProvideServicesForYourBusiness:'AL-ANDALUS BIMEX SERVICES',
		ServiceDetails:'Service Details',
		DownloadNow:'Download Now',
		ourcorepurpose:'Our core purpose is to provide our customers with safe and reliable water and wastewater services, in compliance with regulatory requirements.We strive to treat every customer fairly and respectfully, and to address their needs quickly and effectively.',
		ContacttoExpertiseinthe:'CONTACT TO EXPERTISE IN THE',
		manufacturingindustry:'IN THE MANUFACTURING INDUSTRY',
		VideoAlbum:'Video Album',
		latestproducts:'Latest Products',
		PhotoAlbum:'Photo Album',
		ExploreMore:'Explore More',
		EmailAddress:'Email Address',
		Email:'Email : info@alandalusbimex.com',
		Sentmailasapanytime:'Sent mail asap anytime',
		PhoneNumber:'Phone Number',
		callusasapanytime:'call us asap anytime',
		alandalusbimexcorevalue:'AL-ANDALUS BIMEX CORE VALUE',
		alandalusbimexhistory:'AL-ANDALUS BIMEX HISTORY',
		OfficeAddress:'Office Address',
		FactoryAddress:'Factory Address',
		officeaddressdetailed:'31 El-Fareek Ali Ali Amer St. Makaram Abead Nasr Ciy, Cairo, Egypt',
		factoryaddressdetailed:'Block 20035, 4th Zone, Industrial Area, Al-Obur City  Cairo, Egypt',
		officeaddressdetailedfooter:'HQ : 31 El-Fareek Ali Ali Amer St. Makaram Abead Nasr Ciy, Cairo, Egypt',
		Factorylocation:'Factory : Block 20035, 4th Zone, Industrial Area,Al-Obour City, Egypt',
		Phone:'Phone : +2.02.2270.6035 - +2.02.2274.8846',
		Fax:'Fax : +2.02.2274.1210',
		SubmitQuestion:'Submit Question',
		werespectandvaluethecontributionsofallourpersonnel:'We respect and value the contributions of all our personnel. We encourage employees to increase their professional value through personal growth, expanding their knowledge base and gaining experience within their field. We proactively build a competent, effective, and loyal staff.',
		NeedsHelp:'Needs Help? Let’s Get in Touch',
		sendmessage:'Send Message',
		Videos:'Videos',
		services:'SERVICES',
		servicesnav:'Services',
		Service:'Service',
		Accountability:'Accountability',
		CustomerConfidence:'Customer Confidence',
		LongRangePlanningandPreparation:'Long Range Planning and Preparation',
		EnvironmentalStewardship:'Environmental Stewardship',
		PersonnelDedication:'Personnel Dedication',
		LeadershipandContinuousImprovement:'Leadership and Continuous Improvement',
		sergeprotectiontreatment:'SERGE PROTECTION TREATMENT',
		completewastetreatmentplant:'COMPLETE WASTE TREATMENT PLANT',
		RequestNow:'Request Now',
		Jobsinal:'Jobs In Al-AndalusBimex',
		Alandalusbimex:'AL-ANDALUS BIMEX',
		assessments:'Assessments',
		servicerequest:'SERVICE REQUEST',
		Relatedevents:'Related Events',
		Buildingamorecompetitivebusinesssectors:'Building a more competitive business sectors',
		Newanalytictoolscanhelpmanufacturersinlaborintensivesectors:'New analytic tools can help manufacturers in labor-intensive sectors boost productivity and earnings by double-digit on It is a secure and simple on-demand, the total percentages',
		werecognizeandtakeseriouslytheresponsibility:'We recognize and take seriously the responsibility of managing limited and precious environmental resources that are vital to human life and the economic health of the communities. We are committed to safely complying with all applicable regulations to preserve the environmental, aesthetic beauty, and economical targets of our clients.',
		wechampionorganizationalinitiativesthatsupportourvision:'We champion organizational initiatives that support our vision, set a higher standard for excellence, and are consistently aligned with our values. ',
		wechallengeourselvestomeettheevolvingneedsofthefuturethroughforesight:'We challenge ourselves to meet the evolving needs of the future through foresight, solid and specific planning efforts, and maintenance of organizational flexibility. We prepare for the unforeseen through commitment to safety, security, and emergency preparedness.',
		Ourclients:'Our Clients',
		Photoalbums:'Photo Albums',
		careerrequest:'Career Request',
		Relatedproducts:'Related Products',
		Relatedservices:'Related Services',
		ONLINESUPPORT:'24/7 ONLINE SUPPORT',
		Getimmediatequotes:'Get immediate quotes',
		LatestPost:'Latest Post',
		aboutusclients:'Clients',
		ourmajorclients:'OUR MAJOR CLIENTS',
		ELRehabCity:'EL Rehab City',
		MadintyCity:'Madinty City',
		MarsaAlamCity:'Marsa Alam City',
		Valves:'Valves',
		valve:'VALVE',
		Firehydrants:'Fire hydrants',
		Antiwaterhammersystems:'Anti-water hammer systems',
		Compactwastewatertreatmentplants:'Compact waste water treatment plants',
		Biomedia:'Bio media',
		MetallicTanks:'Metallic Tanks',
		AlAndalusBIMEXhasanextensiveline:'Al-Andalus BIMEX +25 YEARS OF SUCCESS STORY .',
		AboutUS:'About Us',
		Careers:'Careers',
		Events:'Events',
		AlAndalusBIMEXisamajorindustrialcompanyheadquarteredinCairo:'Al-Andalus BIMEX is a major industrial company headquartered in Cairo, Egypt. Since its foundation 25+ years ago, it has been a powerhouse in the sectors of manufacturing valves, fire hydrants, anti-water hammer systems, compact wastewater treatment plants, bio media and metallic tanks .',
		footerdescription:'At Al Andalus Group - BIMEX, We focus on meeting the needs of our local and worldwide customers for Valves, fire hydrant, Anti-water hammer systems, ductile iron fitting, compact waste water treatment plants, RO sea water desalination Plants & Potable and sewage water networks and stations. After about 20 years in business, owning the Highest Productivity Factory in Egypt and selling more than 6 million valves, our customers remain our first priority.',
		andaloshistory1:'Al-Andalus BIMEX was started with an aim to tackle persistent issues in Egypt’s  potable water and wastewater infrastructure. The company first project was the  design and supply of El-Rehab City potable water and wastewater infrastructure.  ',
		andaloshistory2:'The project designs and supplies were at the edge of technology, and negated the traditional issues found in old and outdated designs, with significantly lower costs.',
		andaloshistory3:'	The same approach was applied to other projects like Madinty city, Dream Land city, Marsa Alam city and other huge governmental infrastructure projects. Al-Andalus BIMX has also grown its manufacturing capabilities from valves and fire hydrants to the full design and manufacturing  of anti-water hammer systems, compact wastewater treatment plants, bio media and metallic tanks.',
		Ourmissionistoincreaseglobal:'Our mission is to increase global access to safe drinking water, sanitation, and hygiene services, engaging high end technologies, resources, and expertise. And to provide efficient, effective, and reliable water and wastewater utility supplies and services in a manner that respects the environment. We serve governments and private contractors with smart designs and high-end products that meet their needs and put us at the top of the industry.',
		WelcomeTo:'Welcome to',
		AlAndalusBimexDepartments:'Al-Andalus Bimex Departments',
		potablewaterandwastewaterinfrastructure:'potable water and waste water infrastructure',
		Hugegovernmentalinfrastructureprojects:'Huge governmental infrastructure projects',
		Ourvision:'Our Vision',
		Ourmission:'Our Mission',
		envisionsaworldwhereallpeople:'Al-Andalus BIMEX envisions a world where all people have access to safe drinking water and sanitation, a world free of suffering from water and sanitation related diseases and insecurity.'

	},
    ar:{
					lang:'English',

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
		CallUsforhelp:'اتصل بنا للمساعدة',
		MailUs:'ارسل لنا',
		arabic:'العربية',
		english:'الانجليزية',
		productsmanagment:'ادارة المنتجات',
		productcategory:'تصنيف المنتجات',
		products:'المنتجات',
		PRODUCTS:'المنتجات',
		quality:'الجودة',
		compatitiveprice:'اسعار تنافسية',
		aftersalessupport:'خدمات ما بعد البيع',
		productfilelibrary:'ملفات المنتجات',
		productrequest:'طلب منتج',
		selectlanguage:'اختر لغة للموقع',
		ourcompanyisthestewardofpublic:'شركتنا هي الجهة المسؤولة عن المشاريع العامة والخاصة التي تهدف إلى تقديم خدمات ومنتجات محددة. نحن ندير هذه المشاريع بمسؤولية ونزاهة ونزاهة ونعتقد أن أفضل خدمة لعملائنا من خلال التحسين المستمر وتعزيز القيمة. نحن ندعم جهود عملائنا لإدارة وتحسين جودة المياه لعملائهم.',
		wefostercustomerconfidencethroughclarity:'نحن نعزز ثقة العملاء من خلال الوضوح والأمانة والشفافية في جميع الاتصالات ونعمل على تثقيف عملائنا وشركائنا وموظفينا حول القضايا المتعلقة بإدارة موارد المياه والصرف الصحي المسؤولة',
		werecognizeandtakeseriouslytheresponsibility:'نحن ندرك ونأخذ على محمل الجد مسؤولية إدارة الموارد البيئية المحدودة والثمينة والتي تعتبر حيوية لحياة الإنسان والصحة الاقتصادية للمجتمعات. نحن ملتزمون بالامتثال الآمن لجميع اللوائح المعمول بها للحفاظ على البيئة والجمال الجمالي والأهداف الاقتصادية لعملائنا.',
		welcometoourandaluswebsite:'موقع الاندلس بيمكس',
		TheBestIndustryservices:'نقدم احسن الخدمات الصناعية',
		AlAndalosProvideServicesForYourBusiness:'الاندلس تقدم الخدمات الخاصة بعملك',
		ProductDetails:'تفاصيل المنتجات',
		ProductDetail:'تفاصيل المنتج',
		Products:'المنتجات',
		AlAndalusBimexDepartments:'اقسام الاندلس بيمكس',
		ProductDescription:' تعريف بالمنتجات',
		WehavethebestqualityAndalusCompany:'نحن لدينا افضل جودة في شركة الأندلس',
		Populatproducts:'اشهر المنتجات',
		numberofvacancies:'عدد الاماكن المتاحة',
		departments:'الأقسام',
		Photoes:'الصور',
		werespectandvaluethecontributionsofallourpersonnel:'نحن نحترم ونقدر مساهمات جميع موظفينا. نحن نشجع الموظفين على زيادة قيمتهم المهنية من خلال النمو الشخصي ، وتوسيع قاعدة معارفهم واكتساب الخبرة في مجال عملهم. نحن نبني بشكل استباقي فريق عمل كفؤ وفعال ومخلص',
		wechampionorganizationalinitiativesthatsupportourvision:'نحن ندعم المبادرات التنظيمية التي تدعم رؤيتنا ، وتضع معيارًا أعلى للتميز ، وتتوافق باستمرار مع قيمنا.',
		wechallengeourselvestomeettheevolvingneedsofthefuturethroughforesight:'نتحدى أنفسنا لتلبية الاحتياجات المتطورة للمستقبل من خلال التبصر وجهود التخطيط القوية والمحددة والحفاظ على المرونة التنظيمية. نستعد لما هو غير متوقع من خلال الالتزام بالسلامة والأمن والاستعداد للطوارئ.',
		Photoesalbum:'البوم الصور',
		Locationonmap:'موقع المكتب',
		FactoryLocation:'موقع المصنع',
		ProductRequest:'طلب منتج',
		Orderaproductrequest:'اطلب طلب لمنتج',
		Learnsomethingfromblog:'تعلم شئ من البلوج ',
		Latestblog:'اخر بلوج',
		NeedATechnicalRequest:'هل تحتاج الدعم ؟',
		SendRequest:'ارسل الطلب',
		contactdetails:'معلومات التواصل',
		CEOMessage:'رسالة رئيس مجلس الادارة',
		Ourhistory:'تاريخ المؤسسة',
		CEOname:'اسم رئيس مجلس الإدارة',
		News:'الاخبار',
		Contacttoourexperts:'تواصل مع خبرائنا المحترفين',
		OurLatestNews:'اخر الاخبار',
		Viewallcategories:'عرض جميع الفئات',
		OurAwesomeServices:'خدماتنا الرائعة',
		OurLatestEvents:'اخر احداثنا',
		LatestEvents:"اخر الاحداث",
		OfficeNearYou:"المكتب بجوارك .",
		ReadMore:'اقرأ المزيد',
		Accountability:'المسؤولية',
		CustomerConfidence:'ثقة العملاء',
		LeadershipandContinuousImprovement:'القيادة والتحسين المستمر',
		LongRangePlanningandPreparation:'التخطيط طويل المدى والتحضير',
		EnvironmentalStewardship:'الاشراف البيئي',
		PersonnelDedication:'تفاني الموظفين',
		latestproducts:'اخر المنتجات',
		products:'المنتجات',
		CompleteRangeOfProducts:'مجموعة كاملة من المنتجات',
		servicesnav:'الخدمات',
		services:'الخدمات',
		servicerequest:'طلب خدمة',
		workinghours:'مواعيد العمل : من السبت الى الخميس 9 صباحا الى 5 مساءا',
		ourlatestproducts:'اخر منتجاتنا الحالية',
		operatedcountires:'البلدان التي نعمل بها',
		activeprojects:'المشاريع',
		Qualityandprecision:'الجودة و الدقة',
		Committedtotheoutmostinternationalqualitystandards:'ملتزمون باعلى معايير الجودة العالمية',
		Innovationandcreativity:'الابتكار و الابداع',
		Smartsolutionsfortheindustryeverydayproblems:'حلول ذكية لمشاكل الصناعة اليومية',
		Ontimedeliveryandsupport:'التسليم في الوقت المحدد والدعم',
		Stockavailableallyearroundanddedicatedaftersalessupport:'مخزون متاح طوال العام ومخصص لدعم ما بعد البيع',
		History:'تاريخنا',
		OurHistory:'تاريخنا',
		otherproducts:'منتجات اخرى',
		RecentIndustryProject:'مشروع الصناعة الاخير',
		Similarproducts:'منتجات متشابها',
		OurCareers:'الوظائف',
		CareerDetails:'تفاصيل الوظائف',
		WhatWeDo:'ماذا نفعل',
		ourcorepurpose:'هدفنا الأساسي هو تزويد عملائنا بخدمات مياه وصرف صحي آمنة وموثوقة ، بما يتوافق مع المتطلبات التنظيمية.	نسعى جاهدين للتعامل مع كل عميل بإنصاف واحترام ، وتلبية احتياجاته بسرعة وفعالية.',
		alandalusbimexcorevalue:'القيمة الأساسية في الاندلس بيمكس',
		Relatedevents:'احداث ذات صلة',
		alandalusbimexhistory:'تاريخ الاندلس بيمكس',
		TheBestIndustryservices:'افضل خدمات الصناعة',
		AndalosProvideServicesForYourBusiness:'خدمات الاندلس بيمكس',
		ServiceDetails:'تفاصيل الخدمات',
		DownloadNow:'حمل الان',
		Service:'الخدمات',
		ContacttoExpertiseinthe:'اتصل بالخبرة في الصناعة التحويلية',
		VideoAlbum:'مجلد المقاطع',
		PhotoAlbum:'مجلد الصور',
		newsdetails:'تفاصيل الاخبار',
		inourworkitis:'من الضروري في عملنا أن نحقق جميع قيمنا الأساسية',
		ExploreMore:'المزيد من التفاصيل',
		EmailAddress:'البريد الالكتروني',
		manufacturingindustry:'في المجال الصناعي',
		Email:'البريد الالكتروني : info@alandalusbimex.com',
		Sentmailasapanytime:' راسلنا في اسرع وقت',
		PhoneNumber:'رقم الهاتف',
		careerrequest:'طلب وظيفة',
		callusasapanytime:'اتصل بنا في اسرع وقت',
		OfficeAddress:'موقع المكتب',
		FactoryAddress:'عنوان المصنع',
		officeaddressdetailed:'31 شارع الفريق علي علي عامر ،مكرم عبيد ،مدينة نصر ، القاهره',
		factoryaddressdetailed:'بلوك 20035 المنطقة الرابعة ،المنطقة الصناعية ،مدينة العبور ،القاهره',
		Phone:'الهاتف : 2.02.2270.6035+ - 2.02.2274.8846+',
		Fax:'الفاكس :+2.02.2274.1210',
		Factorylocation:'المصنع : بلوك 20035 المنطقة الرابعة مدينة العبور القاهره',
		officeaddressdetailedfooter:'الشركة : 31 شارع الفريق علي علي عامر ،مكرم عبيد ،مدينة نصر ، القاهره',
		SubmitQuestion:'ارسل سؤال',
		NeedsHelp:'تحتاج للمساعده؟ دعونا على ارائكم',
		sendmessage:'ارسل الان',
		Videos:'المقاطع',
		RequestNow:'ارسل الان',
		Jobsinal:'الوظائف لدى الاندلس بيمكس',
		Alandalusbimex:'الاندلس بيمكس',
		assessments:'التقييمات',
		Buildingamorecompetitivebusinesssectors:'بناء قطاعات أعمال أكثر تنافسية',
		Newanalytictoolscanhelpmanufacturersinlaborintensivesectors:'يمكن للأدوات التحليلية الجديدة أن تساعد المصنّعين في القطاعات كثيفة العمالة زيادة الإنتاجية والأرباح من خلال رقم مزدوج على أنها آمنة وبسيطة عند الطلب ، إجمالي النسب المئوية',
		Ourclients:'عملائنا',
		Photoalbums:'مجلد الصور',
		Relatedproducts:'المنتجات ذات صلة',
		sergeprotectiontreatment:'علاج حماية الطفرة',
		completewastetreatmentplant:'مصنع كامل لمعالجة النفايات',
		Relatedservices:'خدمات ذات صلة',
		Relatednews:'اخبار ذات صلة',
		ONLINESUPPORT:'24/7 دعم فني',
		Getimmediatequotes:'احصل على الدعم الفوري',
        LatestPost:'اخر المنشورات',
		aboutusclients:'العملاء',
		ourmajorclients:'عملائنا الرئيسين',
		ELRehabCity:'مدينة الرحاب',
		MadintyCity:'مدينتي',
		MarsaAlamCity:'مدينة مرسى علم',
		Valves:'محابس',
		valve:'صمام',
		Firehydrants:'صنابير إطفاء الحرائق',
		Antiwaterhammersystems:'أنظمة المطرقة المضادة للماء',
		Compactwastewatertreatmentplants:'محطات معالجة مياه الصرف الصحي المدمجة',
		Biomedia:'الوسائط الحيوية',
		MetallicTanks:'خزانات معدنية',
		AlAndalusBIMEXhasanextensiveline:'تمتلك Al-Andalus BIMEX مجموعة واسعة من الصمامات المناسبة للمياه والهواء ومياه الصرف الصحي',
		AboutUS:'من نحن',
		Careers:'الوظائف',
		Events:'الاحداث',
		AlAndalusBIMEXisamajorindustrialcompanyheadquarteredinCairo:'الأندلس بيمكس هي شركة صناعية كبرى مقرها في القاهرة ، مصر. منذ تأسيسها قبل أكثر من 25 عامًا ، كانت مركزًا قويًا في قطاعات تصنيع الصمامات ، وحنفيات مكافحة الحرائق ، وأنظمة المطرقة المضادة للماء ، ومحطات معالجة مياه الصرف الصحي المدمجة ، والوسائط الحيوية ، والخزانات المعدنية',
		footerdescription:'نركز على تلبية احتياجات عملائنا المحليين والعالميين من الصمامات ، وحنفيات الحريق ، وأنظمة المطرقة المضادة للماء ، وتركيب حديد الدكتايل ، ومحطات معالجة مياه الصرف المدمجة ، ومحطات تحلية مياه البحر RO ، وماء الشرب والصرف الصحي شبكات ومحطات المياه. بعد حوالي 20 عامًا من العمل ، وامتلاك المصنع الأعلى إنتاجية في مصر وبيع أكثر من 6 ملايين صمام ، يظل عملاؤنا على رأس أولوياتنا.',
		LatestNews:'اخر الاخبار',
        andaloshistory1:'بدأت Al-Andalus BIMEX بهدف معالجة المشكلات المستمرة في البنية التحتية لمياه الشرب والصرف الصحي في مصر. كان أول مشروع للشركة هو تصميم وتوريد البنية التحتية لمياه الشرب والصرف الصحي بمدينة الرحاب.',
        andaloshistory2:'كانت تصميمات وإمدادات المشروع على حافة التكنولوجيا ، وألغت المشكلات التقليدية الموجودة في التصميمات القديمة والقديمة ، مع انخفاض التكاليف بشكل ملحوظ.',
        andaloshistory3:'تم تطبيق نفس النهج على مشاريع أخرى مثل مدينة مدينتي ومدينة دريم لاند ومدينة مرسى علم وغيرها من مشاريع البنية التحتية الحكومية الضخمة. طورت Al-Andalus BIMX أيضًا قدراتها التصنيعية من الصمامات وصنابير إطفاء الحرائق إلى التصميم والتصنيع الكاملين لأنظمة المطرقة المائية ومحطات معالجة مياه الصرف الصحي المدمجة والوسائط الحيوية والخزانات المعدنية.',
		Ourmissionistoincreaseglobal:'مهمتنا هي زيادة الوصول العالمي إلى مياه الشرب المأمونة وخدمات الصرف الصحي والنظافة ، واستخدام التقنيات والموارد والخبرات المتطورة. ولتوفير إمدادات وخدمات مرافق المياه والصرف الصحي التي تتسم بالكفاءة والفعالية والموثوقية بطريقة تحترم البيئة. نحن نخدم الحكومات والمقاولين الخاصين بتصميمات ذكية ومنتجات راقية تلبي احتياجاتهم وتضعنا في قمة الصناعة.',
		andalosstartedwithspecific:'بدأت Al-Andalus BIMEX بهدف محدد',
		WelcomeTo:'اهلاً بك في',
		potablewaterandwastewaterinfrastructure:'البنية التحتية لمياه الشرب ومياه الصرف الصحي',
		Hugegovernmentalinfrastructureprojects:'مشاريع بنية تحتية حكومية ضخمة',
		Ourvision:'رؤيتنا',
		Ourmission:'مهمتنا',
		envisionsaworldwhereallpeople:'تتصور Al-Andalus BIMEX عالماً يتمتع فيه جميع الناس بإمكانية الوصول إلى مياه الشرب المأمونة والصرف الصحي ، عالمًا خالٍ من المعاناة من الأمراض المرتبطة بالمياه والصرف الصحي وانعدام الأمن.',
		Eventdetails:'تفاصيل الاحداث'
	}
};



const setLanguage = (language) => {
	const elements = document.querySelectorAll("[data-i18n]");	
	elements.forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationKey];
	});
	if(language === 'en' ){
   document.dir = 'ltr';
//    var head  = document.getElementsByTagName('head')[0];
//     var link  = document.createElement('link');
//     link.id   = 'lnk';
// 	link.type = 'text/css';
// 	link.href = 'css/style.css';
//     link.rel  = 'stylesheet';
//     link.media = 'all';
//     head.append(link);
document.getElementById('lnk').innerHTML = '<link id="lnk" type="text/css" href="css/style.css" rel="stylesheet" media="all">';
	}else {
		document.dir = 'rtl';
	// 	var head  = document.getElementsByTagName('head')[0];
    // var link  = document.createElement('link');
    // link.id   = 'lnk';
	// link.type = 'text/css';
	// link.href = 'css/stylertl.css';
    // link.rel  = 'stylesheet';
    // link.media = 'all';
    // head.append(link);
	document.getElementById('lnk').innerHTML = '<link id="lnk" type="text/css" href="css/stylertl.css" rel="stylesheet" media="all">';

	}
}

if(localStorage.getItem('language') === null){
	localStorage.setItem('language', 'en');
}else{
	const language = localStorage.getItem('language');
	setLanguage(language);
}

function changetoenglish(){
	localStorage.setItem('language', 'en');
	const language = localStorage.getItem('language');
	setLanguage(language);
	location.reload();	
}
function changetoarabic(){
	localStorage.setItem('language', 'ar');
	const language = localStorage.getItem('language');
	setLanguage(language);
	location.reload();
}

function changelang(){
	localStorage.getItem('language');
	// alert(localStorage.getItem('language'));
	if(localStorage.getItem('language') == 'en'){
		changetoarabic()
	}else{
		changetoenglish()
	}
}

(function($) {
	
	"use strict";
	
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }
	
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}
	
	headerStyle();
	
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
	}
	
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu, .header-style-five .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
	}
	
	
	//Header Search
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}
	
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	
	
	
	
	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	
	
	
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	
	// Product Tabs
	if($('.project-tab').length){
		$('.project-tab .project-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .project-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	
	// Sponsors Item Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:4
				}
			}
		});    		
	}
	
	
	
	// Project Carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			//autoplayHoverPause: true, // Stops autoplay
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	
	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	
	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}
	
	
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	
	//Single Image Vertical Carousel
	if($('.single-verticle-carousel').length){
		$('.single-verticle-carousel').slick({
        dots: true,
		autoplay: true,
		loop:true,
		autoplaySpeed: 5000,
        infinite: true,
		responsive: true,
        slidesToShow: 1,
		vertical:true,
        slidesToScroll: 1
      });
	}
	
	
	
	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}
	
	
	
	// Related Post Carousel
	if ($('.related-post-carousel').length) {
		$('.related-post-carousel').owlCarousel({
			loop:false,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				}
			}
		});    		
	}
	
	
	
	// Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}
	
	
	
	// Three Item Carousel
	console.log($('.three-item-carousel').length)
	if ($('.three-item-carousel-two').length) {
		$('.three-item-carousel-two').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}
	
	
	
	// Products Carousel
	if ($('.products-carousel').length) {
		$('.products-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				},
				1500:{
					items:4
				}
			}
		});
	}
	
	
	// Team Carousel
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			loop:false,
			margin:15,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				},
				1500:{
					items:4
				}
			}
		});    		
	}
	
	
	
	//LightBox Image
	if($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	}

	//LightBox Video
	if($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
	      // disableOn: 700,
	      type: 'iframe',
	      mainClass: 'mfp-fade',
	      removalDelay: 160,
	      preloader: false,
	      iframe:{
	        patterns:{
	          youtube:{
	          index: 'youtube.com',
	          id: 'v=',
	          src: 'https://www.youtube.com/embed/%id%'
	        },
	      },
	      srcAction:'iframe_src',
	    },
	      fixedContentPos: false
	    });
	}
	
	
	// Odometer
	if ($(".odometer").length) {
		$('.odometer').appear();
		$('.odometer').appear(function(){
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.odometerOptions = {
				format: 'd',
			};
		});
	}
	
	
	//Client Testimonial Carousel
	if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

		var $sync3 = $(".client-testimonial-carousel"),
			$sync4 = $(".client-thumbs-carousel"),
			flag = false,
			duration = 500;

			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: true,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					dots: true,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin:20,
					items: 1,
					nav: false,
					navText: [ '<span class="icon flaticon-left-arrow-2"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
					dots: false,
					center: true,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:1,
							margin:5,
				            autoWidth: false
				        },
				        400:{
				            items:1,
				            autoWidth: false
				        },
				        600:{
				            items:1,
				            autoWidth: false
				        },
				        1000:{
				            items:1,
				            autoWidth: false
				        },
						1200:{
				            items:1,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});
	}
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);
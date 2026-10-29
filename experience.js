const A = '/assets/';
const COMPANY = {
  en: 'Qimam Al-Intaj Contracting Co. Ltd.',
  ar: 'شركة قمم الإنتاج للمقاولات المحدودة'
};

const CEO = {
  name: { en: 'Sinhat bin Zaid Al-Otaibi', ar: 'صنهات بن زيد العتيبي' },
  role: {
    en: 'Owner & Chairman | Qimam Al-Intaj Contracting Co. Ltd.',
    ar: 'المالك ورئيس مجلس الإدارة | شركة قمم الإنتاج للمقاولات المحدودة'
  },
  paragraphs: {
    en: [
      'Sinhat bin Zaid Al-Otaibi is the Owner and Chairman of Qimam Al-Intaj Contracting Co. Ltd., a Saudi company specializing in earthworks, excavation, backfilling, and infrastructure-related subcontracting services. A visionary entrepreneur with a forward-thinking approach to business, he leads the company’s strategic direction with a strong emphasis on operational excellence, sustainable growth, and long-term partnerships.',
      'Under his leadership, Qimam Al-Intaj continues to strengthen its position as a reliable subcontracting partner for major infrastructure and development projects across Saudi Arabia. His vision is driven by a commitment to quality, innovation, and contributing to the Kingdom’s transformation under Saudi Vision 2030.'
    ],
    ar: [
      'صنهات بن زيد العتيبي هو المالك ورئيس مجلس إدارة شركة قمم الإنتاج للمقاولات المحدودة، وهي شركة سعودية متخصصة في أعمال الحفر والردم والتسويات الترابية وخدمات المقاولات المرتبطة بمشاريع البنية التحتية. وبصفته رائد أعمال يتمتع برؤية طموحة وتوجه استراتيجي نحو المستقبل، يقود التوجهات الاستراتيجية للشركة مع التركيز على التميز التشغيلي والنمو المستدام وبناء شراكات طويلة الأمد.',
      'وتحت قيادته، تواصل شركة قمم الإنتاج تعزيز مكانتها كشريك موثوق في تنفيذ أعمال المقاولات للمشاريع الكبرى في قطاعات البنية التحتية والتطوير العمراني بمختلف أنحاء المملكة العربية السعودية. وترتكز رؤيته على الالتزام بالجودة والابتكار والمساهمة الفاعلة في مسيرة التحول والتطوير التي تشهدها المملكة، بما يتماشى مع مستهدفات رؤية السعودية 2030.'
    ]
  }
};

const services = [
  { slug:'site-preparation', en:'Site preparation', ar:'تهيئة المواقع', descEn:'Clearing, grading and preparing land for construction.', descAr:'تجهيز الأرض وتسويتها وتهيئتها لأعمال البناء.', image:'actual-qiddiya-grading.jpeg', tag:'01' },
  { slug:'excavation-rock-cutting', en:'Excavation & rock cutting', ar:'الحفر والقطع الصخري', descEn:'Ground excavation and rock cutting for complex sites.', descAr:'أعمال الحفر والقطع الصخري للمواقع المعقدة.', image:'actual-night-tunnels.jpeg', tag:'02' },
  { slug:'bulk-backfilling', en:'Backfilling & grading', ar:'الردم والتسويات الترابية', descEn:'Earthmoving, backfilling and precise ground shaping.', descAr:'نقل التربة والردم وتشكيل الأرض بدقة.', image:'actual-backfilling.jpeg', tag:'03' },
  { slug:'roads-asphalting', en:'Roads & asphalting', ar:'الطرق والسفلتة', descEn:'Road preparation, paving and associated works.', descAr:'تجهيز الطرق والسفلتة والأعمال المرتبطة بها.', image:'actual-roadworks.jpeg', tag:'04' },
  { slug:'sewer-systems', en:'Sewer systems', ar:'شبكات الصرف الصحي', descEn:'Sewer networks, disposal plants and pumping stations.', descAr:'شبكات الصرف الصحي ومحطات المعالجة والضخ.', image:'actual-nri-site.jpeg', tag:'05' },
  { slug:'storm-drainage', en:'Storm drainage', ar:'تصريف مياه الأمطار', descEn:'Drainage corridors and surface water infrastructure.', descAr:'مسارات التصريف والبنية التحتية لمياه الأمطار.', image:'actual-salman-park.jpeg', tag:'06' },
  { slug:'pipelines-power', en:'Pipelines & utilities', ar:'خطوط الأنابيب والمرافق', descEn:'Pipeline, communications and power line corridors.', descAr:'مسارات الأنابيب والاتصالات وخطوط الطاقة.', image:'actual-excavator.jpeg', tag:'07' },
  { slug:'landscape-irrigation', en:'Landscape & irrigation', ar:'تنسيق المواقع والري', descEn:'Landscape preparation and irrigation works.', descAr:'تهيئة المساحات الخارجية وأعمال الري.', image:'actual-salman-park.jpeg', tag:'08' },
  { slug:'mining-quarry', en:'Quarry & materials', ar:'المحاجر والمواد الخام', descEn:'Quarrying and supply of construction raw materials.', descAr:'أعمال المحاجر وتوريد المواد الخام للبناء.', image:'actual-qiddiya-grading.jpeg', tag:'09' },
  { slug:'demolition', en:'Demolition', ar:'الهدم والإزالة', descEn:'Site clearance, demolition and responsible disposal.', descAr:'إخلاء المواقع والهدم والتخلص من المخلفات.', image:'actual-night-earthworks.jpeg', tag:'10' },
  { slug:'fencing-hoarding', en:'Fencing & hoarding', ar:'الأسوار والحواجز', descEn:'Site fencing and secure work boundaries.', descAr:'تسييج المواقع وتأمين حدود مناطق العمل.', image:'actual-crew.jpeg', tag:'11' },
  { slug:'refurbishment', en:'Refurbishment', ar:'التجديد والتأهيل', descEn:'Renovation and refurbishment of built assets.', descAr:'تجديد الأصول والمنشآت القائمة وتأهيلها.', image:'actual-exit4.jpeg', tag:'12' }
];

const serviceOrder = ['site-preparation','roads-asphalting','excavation-rock-cutting','mining-quarry','pipelines-power','landscape-irrigation','sewer-systems','fencing-hoarding','demolition','bulk-backfilling','storm-drainage','refurbishment'];
const serviceNames = {
  'site-preparation':['Site Preparation & Earthworks','تهيئة المواقع والأعمال الترابية'],
  'roads-asphalting':['Roads & Asphalt Paving','الطرق والرصف الأسفلتي'],
  'excavation-rock-cutting':['Excavation, Rock Cutting & Blasting','الحفر وقطع الصخور والتفجير'],
  'mining-quarry':['Crushing, Quarry & Backfill','التكسير والمحاجر والردم'],
  'pipelines-power':['Utilities, Pipelines & Stormwater','المرافق وخطوط الأنابيب وتصريف مياه الأمطار'],
  'landscape-irrigation':['Landscaping & Irrigation Networks','تنسيق المواقع وشبكات الري'],
  'sewer-systems':['Sewer Systems & Pumping Stations','شبكات الصرف الصحي ومحطات الضخ'],
  'fencing-hoarding':['Site Security Fencing & Project Hoarding','الأسوار الأمنية وحواجز المشاريع'],
  'demolition':['Controlled Demolition & Site Clearance','الهدم المنظم وإخلاء المواقع'],
  'bulk-backfilling':['Bulk Backfilling & Compaction','الردم الشامل والدمك'],
  'storm-drainage':['Storm Drainage Systems & Box Culverts','شبكات تصريف الأمطار والعبارات الصندوقية'],
  'refurbishment':['Refurbishment, Upgrades & Renovation','التأهيل والتطوير والتجديد']
};
services.sort((a,b)=>serviceOrder.indexOf(a.slug)-serviceOrder.indexOf(b.slug));
services.forEach((service,index)=>{ service.en=serviceNames[service.slug][0]; service.ar=serviceNames[service.slug][1]; service.tag=String(index+1).padStart(2,'0'); });

const projects = [
  { slug:'king-salman-park-alyamama', en:'King Salman Park', ar:'حديقة الملك سلمان', placeEn:'Riyadh', placeAr:'الرياض', scopeEn:'Site preparation · excavation · backfilling', scopeAr:'تهيئة الموقع · الحفر · الردم', year:'2022–2025', image:'actual-salman-park.jpeg' },
  { slug:'qiddiya-uptown', en:'Qiddiya Uptown Mass Grading', ar:'أعمال التسوية الشاملة في القدية', placeEn:'Qiddiya', placeAr:'القدية', scopeEn:'Mass grading · rock cutting · backfilling', scopeAr:'التسويات الترابية · القطع الصخري · الردم', year:'2023–2024', image:'actual-qiddiya-grading.jpeg' },
  { slug:'dg02-gyratory-tunnels', en:'DG02 Gyratory Tunnels', ar:'مشروع أنفاق DG02', placeEn:'Riyadh', placeAr:'الرياض', scopeEn:'Site preparation · excavation · disposal', scopeAr:'تهيئة الموقع · الحفر · إزالة المخلفات', year:'2024', image:'actual-night-tunnels.jpeg' },
  { slug:'dg01-event-parking', en:'DG01 Event District Parking', ar:'مواقف منطقة الفعاليات DG01', placeEn:'Riyadh', placeAr:'الرياض', scopeEn:'Site preparation · excavation · disposal', scopeAr:'تهيئة الموقع · الحفر · إزالة المخلفات', year:'2024', image:'actual-night-earthworks.jpeg' },
  { slug:'nri-king-salman-park', en:'NRI King Salman Park', ar:'مشروع NRI في حديقة الملك سلمان', placeEn:'Riyadh', placeAr:'الرياض', scopeEn:'Site preparation · excavation · crushing', scopeAr:'تهيئة الموقع · الحفر · التكسير', year:'2024', image:'actual-nri-site.jpeg' },
  { slug:'exit-4-hospital', en:'Exit 4 Hospital Earthworks', ar:'الأعمال الترابية لمستشفى مخرج ٤', placeEn:'Riyadh', placeAr:'الرياض', scopeEn:'Excavation · crushing · disposal', scopeAr:'الحفر · التكسير · إزالة المخلفات', year:'2017–2018', image:'actual-exit4.jpeg' },
  { slug:'qiddiya-city-center', en:'Qiddiya City Center & Culverts', ar:'وسط مدينة القدية والعبارات', placeEn:'Qiddiya', placeAr:'القدية', scopeEn:'Grading · culverts · excavation', scopeAr:'التسويات · العبارات · الحفر', year:'2019–2021', image:'actual-qiddiya-grading.jpeg' },
  { slug:'neom-luxury-mansion', en:'NEOM Luxury Mansion Early Works', ar:'الأعمال التمهيدية لفلل نيوم', placeEn:'NEOM', placeAr:'نيوم', scopeEn:'Site preparation · excavation · roads', scopeAr:'تهيئة الموقع · الحفر · الطرق', year:'2021–2022', image:'actual-neom-site.jpeg' },
  { slug:'king-salman-air-base', en:'King Salman Air Base', ar:'قاعدة الملك سلمان الجوية', placeEn:'Derab', placeAr:'ديراب', scopeEn:'Rock cutting · crushing · site clearance', scopeAr:'القطع الصخري · التكسير · إخلاء الموقع', year:'2021', image:'actual-qiddiya-grading.jpeg' },
  { slug:'camel-festival', en:'King Abdulaziz Camel Festival', ar:'مهرجان الملك عبدالعزيز للإبل', placeEn:'Rumah', placeAr:'رماح', scopeEn:'Site clearance · backfilling · asphalt', scopeAr:'إخلاء الموقع · الردم · السفلتة', year:'2019', image:'actual-roadworks.jpeg' },
  { slug:'hittin-project', en:'Hittin Project', ar:'مشروع حطين', placeEn:'Riyadh', placeAr:'الرياض', scopeEn:'Site preparation · excavation · crushing', scopeAr:'تهيئة الموقع · الحفر · التكسير', year:'2021–2022', image:'actual-excavator.jpeg' },
  { slug:'kkr-diversion', en:'KKR Diversion Project', ar:'مشروع تحويل مسار KKR', placeEn:'Riyadh', placeAr:'الرياض', scopeEn:'Site preparation · excavation · backfilling', scopeAr:'تهيئة الموقع · الحفر · الردم', year:'2024', image:'actual-nri-site.jpeg' }
];

const equipment = [
  { en:'Excavator', ar:'حفارة', image:'equipment-sany-excavator.jpg', source:'https://www.sanyglobal.com/product/excavator/large_excavator/' },
  { en:'Bulldozer', ar:'جرافة' },
  { en:'Wheel loader', ar:'لودر بعجلات', image:'equipment-sany-wheel-loader.jpg', source:'https://www.sanyglobal.com/product/loader/wheel_loader_new/' },
  { en:'Grader', ar:'ممهدة طرق', image:'equipment-sany-grader.png', source:'https://www.sanyglobal.com/product/road_machinery/motor_grader/' },
  { en:'Dump trucks', ar:'شاحنات قلاب', image:'equipment-sany-dump-truck.png', source:'https://www.sanyglobal.com/product/truck/dump_truck/' },
  { en:'Diesel tanker', ar:'ناقلة ديزل' },
  { en:'Water tanker', ar:'صهريج مياه', image:'equipment-sany-water-tanker.png', source:'https://www.sanyglobal.com/product/sanitation_equipment/sprinkler_truck/' },
  { en:'Asphalt paver', ar:'آلة رصف الأسفلت', image:'equipment-sany-asphalt-paver.png', source:'https://www.sanyglobal.com/product/road_machinery/paver/' },
  { en:'Asphalt milling machine', ar:'آلة كشط الأسفلت', image:'equipment-sany-asphalt-milling.png', source:'https://www.sanyglobal.com/product/road_machinery/milling_machine/' },
  { en:'Roller compactor', ar:'مدحلة دمك', image:'equipment-sany-roller.png', source:'https://www.sanyglobal.com/product/road_machinery/roller/' },
  { en:'Crusher', ar:'كسارة', image:'equipment-sany-crusher.jpg', source:'https://www.sanyglobal.com/product/mobile_crusher/mobilejawcrusher/' },
  { en:'Backhoe loader', ar:'حفار لودر', image:'equipment-sany-backhoe.jpg', source:'https://www.sanyglobal.com/product/loader/backhoe_loader_new/' },
  { en:'Mobile crane', ar:'رافعة متحركة', image:'equipment-sany-mobile-crane.jpg', source:'https://www.sanyglobal.com/product/crane/truck_crane/' }
];

const clients = [
  ['MASCO Group','client-masco.png'],
  ['BSS Joint Venture','client-bss.png'],
  ['Camel Club','client-camel-club.png'],
  ['FMSCO','client-fmsco.png'],
  ['Riyadh Road Contracting Co.','client-riyadh-roads.png'],
  ['Qiddiya','client-qiddiya.png'],
  ['Al Yamama','client-alyamama.png'],
  ['Nesma & Partners','client-nesma.png'],
  ['King Khaled International Airport','client-kkia.png'],
  ['Al Ajmi','client-al-ajmi.png'],
  ['Diriyah Gate Development Authority','client-diriyah.png'],
  ['Naif Alrajhi Investment','client-naif.png'],
  ['UNIMAC','client-unimac.png']
];

const copy = {
  en: {
    home:'Home', about:'About', services:'Services', projects:'Projects', equipment:'Equipment', gallery:'In the field', contact:'Contact',
    talk:'Start a conversation', viewProjects:'Explore projects', explore:'Explore', allProjects:'All projects', allServices:'All services',
    heroEyebrow:'SAUDI ARABIA  /  EARTHWORKS & INFRASTRUCTURE', heroTitle:'Groundwork for <em>what comes next.</em>',
    heroBody:'We prepare the land beneath national ambition. From complex excavation to critical infrastructure, our work creates the conditions for progress.',
    heroCaption:'Earthworks vision · Riyadh',
    stripOne:'Established in Riyadh', stripTwo:'First-degree classified contractor', stripThree:'Built for lasting partnerships',
    capabilitiesEyebrow:'OUR SERVICES', capabilitiesTitle:'From first cut to final formation.', capabilitiesBody:'Explore our services and the steps and safety measures behind each scope of work.',
    workEyebrow:'SELECTED WORK', workTitle:'Proof is built on site.', workBody:'Real projects from the company profile, delivered across the Kingdom.',
    chairmanEyebrow:'LEADERSHIP', chairmanTitle:'A clear vision for responsible growth.', chairmanBody:'Operational excellence, sustainable growth and long-term partnerships guide our direction.', chairmanLink:'Meet the Chairman',
    equipmentEyebrow:'OUR EQUIPMENT', equipmentTitle:'Ready for the demands of the ground.', equipmentBody:'A diverse fleet supports earthmoving, paving, transport and site operations. Explore the types of equipment behind our work.', equipmentLink:'Explore equipment',
    endTitle:'The next project starts with a conversation.', endBody:'Tell us what you are building. We will help define the groundwork.',
    aboutEyebrow:'ABOUT QIMAM', aboutTitle:'Built to move ambitious projects forward.', aboutBody:'Founded in Saudi Arabia in 2017, Qimam Al-Intaj is a first-degree classified contractor working across earthworks, infrastructure, buildings and electromechanical projects.',
    storyTitle:'A partner for complex ground conditions.', storyBody:'Our work brings together site preparation, excavation, grading, backfilling and infrastructure-related subcontracting. We focus on clear planning, dependable delivery and lasting client relationships.',
    visionTitle:'Our vision', visionBody:'To be an esteemed, valued and respected construction company in Saudi Arabia, trusted by employees, clients, partners and communities.',
    missionTitle:'Our commitment', missionBody:'To deliver on our commitments through value engineering, effective construction practices, integrity and a professional work ethic.',
    ceoEyebrow:'OWNER & CHAIRMAN',
    servicesTitle:'Groundworks, executed with purpose.', servicesBody:'Explore the specialist capabilities listed in the company profile.',
    equipmentTitlePage:'Equipment for every phase of the work.', equipmentBodyPage:'From excavation and grading to transport, paving and support operations, our equipment enables disciplined site delivery.',
    projectsTitle:'A record written into the landscape.', projectsBody:'Selected projects documented in the Qimam Al-Intaj company profile.',
    galleryTitle:'Work in action.', galleryBody:'A closer look at the environments, people and equipment behind our projects.',
    contactTitle:'Let’s build from here.', contactBody:'Bring us your site challenge or infrastructure ambition. Our team is ready to talk.',
    call:'Call us', email:'Email us', location:'Riyadh, Kingdom of Saudi Arabia', scope:'Scope of work', back:'Back to projects', related:'More projects',
    serviceDetailBody:'Part of our integrated earthworks and infrastructure capability.', serviceDetailCTA:'Discuss this capability', footerLine:'Grounded in expertise. Focused on what comes next.'
  },
  ar: {
    home:'الرئيسية', about:'من نحن', services:'الخدمات', projects:'المشاريع', equipment:'المعدات', gallery:'في الميدان', contact:'تواصل معنا',
    talk:'ابدأ الحوار معنا', viewProjects:'استكشف المشاريع', explore:'استكشف', allProjects:'جميع المشاريع', allServices:'جميع الخدمات',
    heroEyebrow:'المملكة العربية السعودية / الأعمال الترابية والبنية التحتية', heroTitle:'نؤسس الأرض <em>لما هو قادم.</em>',
    heroBody:'نهيئ الأرض التي تقوم عليها الطموحات الوطنية. من أعمال الحفر المعقدة إلى البنية التحتية الحيوية، نضع أسس التقدم.',
    heroCaption:'رؤية للأعمال الترابية · الرياض',
    stripOne:'تأسست في الرياض', stripTwo:'مقاول مصنف بالدرجة الأولى', stripThree:'شراكات راسخة ومستدامة',
    capabilitiesEyebrow:'خدماتنا', capabilitiesTitle:'من أول خطوة حتى اكتمال الموقع.', capabilitiesBody:'استكشف خدماتنا وخطوات العمل وإجراءات السلامة لكل نطاق من أعمالنا.',
    workEyebrow:'مشاريع مختارة', workTitle:'إنجازات تتحدث على أرض الواقع.', workBody:'مشاريع حقيقية موثقة في الملف التعريفي للشركة ومنفذة في أنحاء المملكة.',
    chairmanEyebrow:'القيادة', chairmanTitle:'رؤية واضحة لنمو مسؤول.', chairmanBody:'التميز التشغيلي والنمو المستدام والشراكات طويلة الأمد توجه مسيرتنا.', chairmanLink:'تعرف على رئيس مجلس الإدارة',
    equipmentEyebrow:'معداتنا', equipmentTitle:'جاهزون لتحديات العمل الميداني.', equipmentBody:'تدعم معداتنا المتنوعة أعمال الحفر والرصف والنقل وتشغيل المواقع. تعرف على أنواع المعدات التي تقف خلف أعمالنا.', equipmentLink:'استكشف المعدات',
    endTitle:'يبدأ مشروعك القادم بحوار.', endBody:'حدثنا عما تخطط لبنائه، وسنساعدك في وضع الأسس المناسبة.',
    aboutEyebrow:'عن قمم الإنتاج', aboutTitle:'نبني الأساس لتقدم المشاريع الطموحة.', aboutBody:'تأسست شركة قمم الإنتاج في المملكة العربية السعودية عام ٢٠١٧، وهي مقاول مصنف بالدرجة الأولى يعمل في الأعمال الترابية والبنية التحتية والمباني والأعمال الكهروميكانيكية.',
    storyTitle:'شريك للمواقع ذات التحديات المعقدة.', storyBody:'نجمع بين تهيئة المواقع والحفر والتسويات الترابية والردم وخدمات المقاولات المرتبطة بالبنية التحتية. ونركز على التخطيط الواضح والتنفيذ الموثوق والعلاقات المستدامة مع العملاء.',
    visionTitle:'رؤيتنا', visionBody:'أن نكون شركة مقاولات مرموقة وموثوقة ومحترمة في المملكة العربية السعودية لدى موظفينا وعملائنا وشركائنا ومجتمعنا.',
    missionTitle:'التزامنا', missionBody:'الوفاء بالتزاماتنا من خلال الهندسة القيمية وممارسات البناء الفعالة والنزاهة وأخلاقيات العمل المهنية.',
    ceoEyebrow:'المالك ورئيس مجلس الإدارة',
    servicesTitle:'أعمال ترابية تنفذ بهدف واضح.', servicesBody:'استكشف القدرات المتخصصة الواردة في الملف التعريفي للشركة.',
    equipmentTitlePage:'معدات لكل مرحلة من مراحل العمل.', equipmentBodyPage:'من الحفر والتسويات إلى النقل والرصف والأعمال المساندة، تدعم معداتنا التنفيذ المنضبط في الموقع.',
    projectsTitle:'سجل من الإنجازات على أرض الواقع.', projectsBody:'مشاريع مختارة موثقة في الملف التعريفي لشركة قمم الإنتاج.',
    galleryTitle:'العمل في الميدان.', galleryBody:'نظرة أقرب إلى المواقع والفرق والمعدات التي تقف خلف مشاريعنا.',
    contactTitle:'لنبدأ البناء من هنا.', contactBody:'شاركنا تحديات موقعك أو طموحات مشروعك. فريقنا مستعد للتواصل.',
    call:'اتصل بنا', email:'راسلنا', location:'الرياض، المملكة العربية السعودية', scope:'نطاق الأعمال', back:'العودة إلى المشاريع', related:'مشاريع أخرى',
    serviceDetailBody:'إحدى قدراتنا المتكاملة في الأعمال الترابية والبنية التحتية.', serviceDetailCTA:'ناقش هذه الخدمة', footerLine:'خبرة راسخة. ورؤية للمستقبل.'
  }
};

let lang = localStorage.getItem('qimam-language') === 'ar' ? 'ar' : 'en';
let route = location.pathname.replace(/\/+$/, '') || '/';
const t = key => copy[lang][key];
const l = item => item[lang];
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
const pin = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
const logo = `<img src="${A}qimam-official-logo.png" alt="QIMAM official logo" width="186" height="67">`;

function nav() {
  const items = [['/',t('home')],['/about/',t('about')],['/services/',t('services')],['/projects/',t('projects')],['/equipments/',t('equipment')],['/work-in-action/',t('gallery')],['/contact/',t('contact')]];
  return `<header class="site-header" id="site-header"><div class="shell header-inner">
    <a class="site-brand" href="/" aria-label="${l(COMPANY)}">${logo}<span>${l(COMPANY)}</span></a>
    <nav class="site-nav" id="site-nav" aria-label="${lang === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}">${items.map(([url,label]) => `<a href="${url}" class="${route === url.replace(/\/$/,'') || route === url ? 'active' : ''}">${label}</a>`).join('')}</nav>
    <div class="header-actions"><button class="language-button" id="language-button" type="button" aria-label="${lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}">${lang === 'ar' ? 'EN' : 'العربية'}</button><a class="header-cta" href="/contact/">${t('talk')} ${arrow}</a><button class="menu-button" id="menu-button" type="button" aria-label="${lang === 'ar' ? 'فتح القائمة' : 'Open menu'}" aria-expanded="false"><span></span><span></span></button></div>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="shell footer-grid"><div><a href="/" class="footer-logo">${logo}</a><p class="footer-company">${l(COMPANY)}</p><p>${t('footerLine')}</p></div><div><span class="eyebrow">${t('explore')}</span><a href="/about/">${t('about')}</a><a href="/services/">${t('services')}</a><a href="/projects/">${t('projects')}</a><a href="/equipments/">${t('equipment')}</a></div><div><span class="eyebrow">${t('contact')}</span><a href="tel:+966505606116" dir="ltr">+966 50 560 6116</a><a href="tel:+966509234001" dir="ltr">+966 50 923 4001</a><a href="mailto:info@qemam-alentaj.sa">info@qemam-alentaj.sa</a><span>${t('location')}</span></div></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} ${l(COMPANY)}</span><span>${t('footerLine')}</span></div></footer>`;
}

function intro() {
  return `<div class="intro" id="intro" role="status" aria-live="polite"><div class="intro-lines"></div><div class="intro-center">${logo}<span class="intro-company">${l(COMPANY)}</span><div class="intro-progress"><div id="intro-progress-fill"></div></div><div class="intro-count"><span>${lang === 'ar' ? 'جاري التحميل' : 'PREPARING THE EXPERIENCE'}</span><strong id="intro-number">0%</strong></div></div></div>`;
}

function sectionHeading(eyebrow,title,body,light=false) {
  return `<div class="section-heading reveal"><div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2></div><p>${body}</p></div>`;
}

function serviceCard(service, i) {
  return `<a class="capability-card reveal" style="--delay:${i * 75}ms" href="/services/${service.slug}/"><div class="capability-image"><img src="${A}${service.image}" alt="" loading="lazy"><span>${service.tag}</span></div><div class="capability-copy"><h3>${l(service)}</h3><p>${lang === 'ar' ? service.descAr : service.descEn}</p><span class="round-arrow">${arrow}</span></div></a>`;
}

function projectCard(project, i=0) {
  return `<a class="project-card reveal" style="--delay:${i * 80}ms" href="/projects/${project.slug}/"><div class="project-image"><img src="${A}${project.image}" alt="${l(project)}" loading="lazy"><span>${lang === 'ar' ? project.placeAr : project.placeEn}</span></div><div class="project-copy"><div class="project-meta"><span>${project.year}</span><span>${t('scope')}</span></div><h3>${l(project)}</h3><p>${lang === 'ar' ? project.scopeAr : project.scopeEn}</p><span class="text-link">${t('explore')} ${arrow}</span></div></a>`;
}

function clientsSection() {
  const cards = clients.map(([name,image])=>`<div class="client-logo"><img src="${A}${image}" alt="${name}" loading="lazy"></div>`).join('');
  return `<section class="clients-section" aria-labelledby="clients-heading"><div class="shell clients-heading reveal"><span class="eyebrow">${lang === 'ar' ? 'عملاؤنا' : 'OUR CLIENTS'}</span><h2 id="clients-heading">${lang === 'ar' ? 'ثقة تبني المستقبل.' : 'Trusted to help build what comes next.'}</h2><p>${lang === 'ar' ? 'شعارات العملاء الواردة في الملف التعريفي للشركة.' : 'Clients featured in the Qimam Al-Intaj company profile.'}</p></div><div class="clients-window" aria-label="${lang === 'ar' ? 'شعارات العملاء' : 'Client logos'}"><div class="clients-track"><div class="clients-set">${cards}</div><div class="clients-set" aria-hidden="true">${cards}</div></div></div></section>`;
}

function home() {
  return `<section class="home-hero"><div class="hero-grid shell"><div class="hero-copy"><span class="eyebrow reveal">${t('heroEyebrow')}</span><h1 class="reveal">${t('heroTitle')}</h1><p class="reveal">${t('heroBody')}</p><div class="hero-buttons reveal"><a class="button button-sky" href="/projects/">${t('viewProjects')} ${arrow}</a><a class="button button-outline" href="/about/">${t('about')} ${arrow}</a></div><div class="hero-index"><span>QIMAM / 01</span><span>${t('location')}</span></div></div><div class="hero-visual"><img src="${A}hero-earthworks-v2.png" alt="${t('heroCaption')}" fetchpriority="high"><div class="hero-visual-shade"></div><div class="hero-image-caption"><span>${pin}</span>${t('heroCaption')}</div><span class="hero-vertical">QIMAM AL-INTAJ</span></div></div><div class="hero-trace" aria-hidden="true"></div></section>
  <div class="credentials"><div class="shell credentials-inner"><span>${t('stripOne')}</span><span>${t('stripTwo')}</span><span>${t('stripThree')}</span></div></div>
  <section class="section capabilities-section"><div class="shell">${sectionHeading(t('capabilitiesEyebrow'),t('capabilitiesTitle'),t('capabilitiesBody'))}<div class="capability-grid">${services.slice(0,4).map(serviceCard).join('')}</div><a class="under-link" href="/services/">${t('allServices')} ${arrow}</a></div></section>
  <section class="section projects-section"><div class="shell">${sectionHeading(t('workEyebrow'),t('workTitle'),t('workBody'))}<div class="featured-grid">${projects.slice(0,3).map(projectCard).join('')}</div><a class="under-link light" href="/projects/">${t('allProjects')} ${arrow}</a></div></section>
  <section class="leadership-section"><div class="shell leadership-grid"><div class="leadership-image reveal"><img src="${A}chairman-final.jpeg" alt="${l(CEO.name)}" loading="lazy"></div><div class="leadership-copy reveal"><span class="eyebrow">${t('chairmanEyebrow')}</span><h2>${t('chairmanTitle')}</h2><p>${t('chairmanBody')}</p><div class="signature"><strong>${l(CEO.name)}</strong><span>${l(CEO.role)}</span></div><a class="under-link" href="/about/#chairman">${t('chairmanLink')} ${arrow}</a></div></div></section>
  <section class="equipment-feature"><div class="shell equipment-feature-grid"><div class="equipment-feature-copy reveal"><span class="eyebrow">${t('equipmentEyebrow')}</span><h2>${t('equipmentTitle')}</h2><p>${t('equipmentBody')}</p><a class="button button-sky" href="/equipments/">${t('equipmentLink')} ${arrow}</a></div><div class="equipment-feature-image reveal"><img src="${A}equipment-sany-excavator.jpg" alt="${lang === 'ar' ? 'حفارة ساني' : 'SANY excavator'}" loading="lazy"></div></div></section>
  ${clientsSection()}
  ${contactBanner()}`;
}

function pageHero(eyebrow,title,body,image) {
  return `<section class="page-hero-new"><div class="page-hero-image"><img src="${A}${image}" alt="" fetchpriority="high"></div><div class="shell page-hero-content reveal"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${body}</p></div><div class="page-hero-number">QIMAM / ${route.replaceAll('/','').toUpperCase().slice(0,16)}</div></section>`;
}

function about() {
  return `${pageHero(t('aboutEyebrow'),t('aboutTitle'),t('aboutBody'),'actual-salman-park.jpeg')}
  <section class="section story-section"><div class="shell story-grid"><div class="story-label reveal"><span class="eyebrow">QIMAM AL-INTAJ</span><span class="story-rule"></span></div><div class="reveal"><h2>${t('storyTitle')}</h2><p>${t('storyBody')}</p><div class="value-pair"><div><h3>${t('visionTitle')}</h3><p>${t('visionBody')}</p></div><div><h3>${t('missionTitle')}</h3><p>${t('missionBody')}</p></div></div></div></div></section>
  <section class="chairman-section" id="chairman"><div class="shell chairman-grid"><div class="chairman-photo reveal"><img src="${A}chairman-final.jpeg" alt="${l(CEO.name)}" loading="lazy"></div><div class="chairman-text reveal"><span class="eyebrow">${t('ceoEyebrow')}</span><h2>${l(CEO.name)}</h2><h3>${l(CEO.role)}</h3>${CEO.paragraphs[lang].map(p=>`<p>${p}</p>`).join('')}</div></div></section>${contactBanner()}`;
}

function servicesPage() {
  return `${pageHero(t('services'),t('servicesTitle'),t('servicesBody'),'actual-night-earthworks.jpeg')}<section class="section all-services"><div class="shell"><div class="capability-grid">${services.map(serviceCard).join('')}</div></div></section>${contactBanner()}`;
}

function serviceDetail(service) {
  const workflow = serviceWorkflows[service.slug];
  const steps = lang === 'ar' ? workflow.stepsAr : workflow.steps;
  const safety = lang === 'ar' ? workflow.safetyAr : workflow.safety;
  const note = lang === 'ar'
    ? 'توضح هذه الخطوات الممارسات العامة. يخضع التنفيذ في الموقع لبيانات الطريقة وتقييمات المخاطر المعتمدة ومتطلبات السلامة المعمول بها في المشروع بالمملكة العربية السعودية.'
    : 'These steps describe general practice. Site execution follows approved method statements, risk assessments and applicable Saudi project safety requirements.';
  return `${pageHero(t('services'),l(service),lang === 'ar' ? service.descAr : service.descEn,service.image)}
  <section class="section service-workflow-section"><div class="shell"><div class="workflow-intro reveal"><span class="eyebrow">${t('services')} / ${service.tag}</span><h2>${l(service)}</h2><p>${lang === 'ar' ? service.descAr : service.descEn}</p></div>
  <div class="workflow-columns"><article class="workflow-panel reveal"><div class="workflow-panel-heading"><span>01</span><h3>${lang === 'ar' ? 'خطوات العمل الرئيسية' : 'Main steps'}</h3></div><ol>${steps.map(step=>`<li>${step}</li>`).join('')}</ol></article>
  <article class="workflow-panel workflow-panel-dark reveal"><div class="workflow-panel-heading"><span>02</span><h3>${lang === 'ar' ? 'إجراءات السلامة' : 'Safety measures'}</h3></div><ul>${safety.map(item=>`<li>${item}</li>`).join('')}</ul></article></div>
  <p class="workflow-note reveal">${note}</p><div class="workflow-actions"><a class="under-link" href="/services/">${t('allServices')} ${arrow}</a><a class="button button-dark" href="/contact/">${t('serviceDetailCTA')} ${arrow}</a></div></div></section>`;
}

function projectsPage() {
  return `${pageHero(t('projects'),t('projectsTitle'),t('projectsBody'),'actual-qiddiya-grading.jpeg')}<section class="section all-projects"><div class="shell"><div class="projects-grid">${projects.map(projectCard).join('')}</div></div></section>${contactBanner()}`;
}

function projectDetail(project) {
  return `${pageHero(lang === 'ar' ? project.placeAr : project.placeEn,l(project),lang === 'ar' ? project.scopeAr : project.scopeEn,project.image)}<section class="section detail-body"><div class="shell detail-grid"><div><span class="eyebrow">${t('scope')}</span><h2>${l(project)}</h2><p>${lang === 'ar' ? project.scopeAr : project.scopeEn}</p><div class="detail-facts"><div><small>${t('location')}</small><strong>${lang === 'ar' ? project.placeAr : project.placeEn}</strong></div><div><small>${lang === 'ar' ? 'الفترة' : 'PERIOD'}</small><strong>${project.year}</strong></div></div><a class="under-link" href="/projects/">${t('back')} ${arrow}</a></div><div class="detail-image"><img src="${A}${project.image}" alt="${l(project)}"></div></div></section><section class="section related-section"><div class="shell">${sectionHeading(t('projects'),t('related'),'')}<div class="featured-grid">${projects.filter(p=>p.slug!==project.slug).slice(0,3).map(projectCard).join('')}</div></div></section>`;
}

function equipmentPage() {
  const conceptNote = lang === 'ar' ? 'فئات المعدات المذكورة في الملف التعريفي للشركة. الصور المتاحة من كتالوج SANY الرسمي وتمثل فئات المعدات، وليست توثيقاً لمعدات مملوكة للشركة.' : 'Equipment types from the company profile. Available photos are from the official SANY catalogue and represent equipment categories; they do not document ownership of specific machines.';
  return `${pageHero(t('equipment'),t('equipmentTitlePage'),t('equipmentBodyPage'),'equipment-sany-excavator.jpg')}
  <section class="section equipment-page"><div class="shell"><div class="equipment-intro reveal"><span class="eyebrow">${t('equipmentEyebrow')}</span><p>${conceptNote}</p></div>
  <div class="equipment-list">${equipment.map((item,index)=>`<article class="equipment-item reveal" style="--delay:${(index%3)*70}ms"><div class="equipment-item-image">${item.image ? `<img src="${A}${item.image}" alt="${lang === 'ar' ? item.ar : item.en} — SANY product image" loading="lazy">` : `<div class="equipment-image-pending"><span>${lang === 'ar' ? 'صورة المنتج قيد التحقق' : 'Product photo under review'}</span></div>`}<img class="equipment-qimam-mark" src="${A}qimam-official-logo.png" alt="${COMPANY[lang]}"></div><div class="equipment-item-content"><span class="eyebrow">${t('equipment')}</span><h2>${lang === 'ar' ? item.ar : item.en}</h2>${item.source ? `<a href="${item.source}" target="_blank" rel="noopener noreferrer">${lang === 'ar' ? 'المصدر: SANY الرسمية' : 'Official SANY source'} ${arrow}</a>` : ''}</div></article>`).join('')}</div></div></section>${contactBanner()}`;
}

function galleryPage() {
  const images = [
    ['actual-salman-park.jpeg',projects[0]],['actual-qiddiya-grading.jpeg',projects[1]],['actual-night-tunnels.jpeg',projects[2]],
    ['actual-excavator.jpeg',services[1]],['actual-roadworks.jpeg',services[3]],['actual-crew.jpeg',services[0]],
    ['actual-nri-site.jpeg',projects[4]],['actual-night-earthworks.jpeg',projects[3]]
  ];
  return `${pageHero(t('gallery'),t('galleryTitle'),t('galleryBody'),'actual-night-tunnels.jpeg')}<section class="section gallery-section"><div class="shell gallery-grid">${images.map(([src,item],i)=>`<figure class="gallery-item reveal" style="--delay:${(i%3)*75}ms"><img src="${A}${src}" alt="${l(item)}" loading="lazy"><figcaption>${l(item)}</figcaption></figure>`).join('')}</div></section>${contactBanner()}`;
}

function contactBanner() {
  return `<section class="contact-banner"><div class="shell contact-banner-inner reveal"><div><span class="eyebrow">${t('contact')}</span><h2>${t('endTitle')}</h2><p>${t('endBody')}</p></div><a class="button button-sky" href="/contact/">${t('talk')} ${arrow}</a></div></section>`;
}

function contactPage() {
  return `${pageHero(t('contact'),t('contactTitle'),t('contactBody'),'actual-crew.jpeg')}<section class="section contact-page"><div class="shell contact-grid"><div class="contact-lead reveal"><span class="eyebrow">${l(COMPANY)}</span><h2>${t('endTitle')}</h2><p>${t('endBody')}</p><div class="contact-line"></div><span class="contact-place">${pin} ${t('location')}</span></div><div class="contact-options reveal"><a href="tel:+966505606116"><span>${t('call')}</span><strong dir="ltr">+966 50 560 6116</strong>${arrow}</a><a href="tel:+966509234001"><span>${t('call')}</span><strong dir="ltr">+966 50 923 4001</strong>${arrow}</a><a href="mailto:info@qemam-alentaj.sa"><span>${t('email')}</span><strong>info@qemam-alentaj.sa</strong>${arrow}</a></div></div></section>`;
}

function content() {
  if (route === '/') return home();
  if (route === '/about') return about();
  if (route === '/services') return servicesPage();
  if (route.startsWith('/services/')) {
    const service = services.find(s=>'/services/'+s.slug===route);
    return service ? serviceDetail(service) : servicesPage();
  }
  if (route === '/projects') return projectsPage();
  if (route.startsWith('/projects/')) {
    const project = projects.find(p=>'/projects/'+p.slug===route);
    return project ? projectDetail(project) : projectsPage();
  }
  if (route === '/equipments') return equipmentPage();
  if (route === '/work-in-action') return galleryPage();
  if (route === '/contact') return contactPage();
  return home();
}

let revealObserver;
function bind() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('language-button').addEventListener('click', () => {
    lang = lang === 'en' ? 'ar' : 'en';
    localStorage.setItem('qimam-language',lang);
    render(false);
  });
  const menu = document.getElementById('menu-button');
  menu.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open ? (lang === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (lang === 'ar' ? 'فتح القائمة' : 'Open menu'));
  });
  if (revealObserver) revealObserver.disconnect();
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el=>el.classList.add('visible'));
  } else {
    revealObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    }),{threshold:.08,rootMargin:'0px 0px -35px 0px'});
    reveals.forEach(el=>revealObserver.observe(el));
  }
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled',scrollY>24);
  addEventListener('scroll',onScroll,{passive:true});
  onScroll();
  if (location.hash) requestAnimationFrame(()=>document.querySelector(location.hash)?.scrollIntoView());
}

function runIntro() {
  const el = document.getElementById('intro');
  if (sessionStorage.getItem('qimam-intro-seen') === '1') { el.remove(); return; }
  const fill = document.getElementById('intro-progress-fill');
  const value = document.getElementById('intro-number');
  const start = performance.now();
  const duration = matchMedia('(prefers-reduced-motion: reduce)').matches ? 350 : 1600;
  function frame(now) {
    const n = Math.min(100,Math.round((now-start)/duration*100));
    fill.style.width = `${n}%`;
    value.textContent = `${n}%`;
    if (n < 100) requestAnimationFrame(frame);
    else setTimeout(()=>{ el.classList.add('done'); sessionStorage.setItem('qimam-intro-seen','1'); setTimeout(()=>el.remove(),550); },220);
  }
  requestAnimationFrame(frame);
}

function render(withIntro=true) {
  document.body.classList.remove('menu-open');
  document.title = `${l(COMPANY)} | ${t('home')}`;
  document.querySelector('meta[name="description"]').content = lang === 'ar' ? 'شركة قمم الإنتاج للمقاولات المحدودة: أعمال الحفر والردم والتسويات الترابية والبنية التحتية في المملكة العربية السعودية.' : 'Qimam Al-Intaj Contracting Co. Ltd. specializes in earthworks, excavation, backfilling and infrastructure-related contracting in Saudi Arabia.';
  document.getElementById('app').innerHTML = (withIntro ? intro() : '') + nav() + `<main id="main-content">${content()}</main>` + footer();
  bind();
  if (withIntro) runIntro();
}

document.addEventListener('click',event=>{
  const a = event.target.closest('a[href^="/"]');
  if (!a || a.hasAttribute('download') || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const next = new URL(a.href,location.href);
  if (next.origin !== location.origin) return;
  event.preventDefault();
  history.pushState({},'',next.pathname+next.hash);
  route = next.pathname.replace(/\/+$/,'') || '/';
  render(false);
  if (!next.hash) scrollTo({top:0,behavior:'instant'});
});
addEventListener('popstate',()=>{ route = location.pathname.replace(/\/+$/,'') || '/'; render(false); });
render();

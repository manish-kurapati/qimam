// ==========================================================================
// QMAM CORPORATE PLATFORM — ULTRA-SHARP IMAGERY & MIDNIGHT BLUE + SAND GOLD
// ==========================================================================

const A = '/assets/';
let currentPath = location.pathname.replace(/\/+$/, '') || '/';
let lang = localStorage.getItem('qimam-lang') === 'ar' ? 'ar' : 'en';

const ar = () => lang === 'ar';
const L = (en, arabic) => (ar() ? arabic : en);
const asset = (n) => (n.includes('.') ? A + n : A + n + '.png');

// Scope of Works (12 Core Capabilities with Phased Workflows & Safety Standards)
const servicesData = [
  {
    slug: 'site-preparation',
    titleEn: 'Site Preparation & Earthworks',
    titleAr: 'تهيئة المواقع والأعمال الترابية',
    summaryEn: 'Comprehensive site clearance, topographic grading, levelling, and bulk enabling works for mega infrastructure.',
    summaryAr: 'أعمال تنظيف المواقع، والتسوية الطبوغرافية الدقيقة، وتجهيز الأرضيات الإنشائية للمشاريع الكبرى.',
    image: 'uae-mass-earthworks.jpg',
    icon: '🚜',
    specsEn: 'Laser-guided grading, site clearance, subgrade preparation, cut-and-fill balancing.',
    specsAr: 'تسوية بالليزر، إخلاء وتنظيف الموقع، تجهيز التربة التأسيسية، وموازنة أعمال الحفر والردم.',
    stepsEn: [
      'Site Survey & Boundary Marking',
      'Site Clearing & Obstacle Removal',
      'Soil Cutting, Filling & Grading',
      'Final Ground Leveling & Compaction'
    ],
    stepsAr: [
      'الرفع المساحي وتحديد حدود الموقع',
      'إخلاء الموقع وإزالة العوائق والمنشآت',
      'قطع وردم التربة والتسوية الهندسية',
      'التسوية النهائية والدمك الميكانيكي'
    ],
    safetyEn: [
      'PPE & Safety Barricades',
      'Underground Utility Identification',
      'Heavy Machinery Safety & Exclusion Zones',
      'Dust Control & Ground Stability Checks'
    ],
    safetyAr: [
      'معدات الوقاية الشخصية والحواجز الأمنية',
      'الكشف عن الخدمات والمرافق تحت الأرض',
      'مناطق حظر اقتراب وحرم المعدات الثقيلة',
      'السيطرة على الغبار وفحص ثبات التربة'
    ]
  },
  {
    slug: 'roads-asphalting',
    titleEn: 'Roads & Asphalt Paving',
    titleAr: 'سفلتة وإنشاء شبكات الطرق',
    summaryEn: 'Sub-base construction, precision asphalt laying, compaction, and highway corridor execution.',
    summaryAr: 'تنفيذ طبقات الأساس والأساس المساعد، ورصف الأسفلت عالي الجودة والدمك، وإنشاء مسارات الطرق السريعة.',
    image: 'uae-highway-paving.jpg',
    icon: '🛣️',
    specsEn: 'Base-course laying, MC1/RC2 prime coat, asphalt concrete wearing courses, density compaction testing.',
    specsAr: 'طبقات الأساس الحجري، رش مستحلبات البرايم كوت، فرش الطبقات الأسفلتية واختبارات الكثافة والدمك.',
    stepsEn: [
      'Roadbed Preparation & Grading',
      'Subbase & Base Layer Installation',
      'Asphalt Laying Using Paving Machines',
      'Roller Compaction & Final Inspection'
    ],
    stepsAr: [
      'تسوية وتجهيز طبقة المسار الأرضي',
      'توريد وتركيب طبقات الأساس والأساس المساعد',
      'فرش الأسفلت بفرادات الرصف الآلية',
      'الدمك بالمداحل والفحص الهندسي النهائي'
    ],
    safetyEn: [
      'Traffic Control & Warning Barricades',
      'Hot Asphalt & Burn Protection',
      'Safe Machinery Movement',
      'PPE & Heat-Stress Prevention'
    ],
    safetyAr: [
      'إدارة حركة المرور والحواجز التحذيرية',
      'الوقاية من حروق الأسفلت الساخن',
      'توجيه حركة الآليات والشاحنات بأمان',
      'معدات الحماية والوقاية من الإجهاد الحراري'
    ]
  },
  {
    slug: 'excavation-rock-cutting',
    titleEn: 'Excavation, Rock Cutting & Blasting',
    titleAr: 'الحفر العام وقطع الصخور والتكسير',
    summaryEn: 'Mass earthworks, deep foundation excavations, cliff cutting, and controlled hydraulic rock breaking.',
    summaryAr: 'أعمال الحفر الكبرى، حفر القواعد العميقة، قطع الصخور والمنحدرات الجبلية باستخدام أحدث الكسارات الهيدروليكية.',
    image: 'service-rock-blasting.jpg',
    icon: '⛰️',
    specsEn: 'Heavy 50-ton hydraulic excavators with rock breakers, bench cutting, trench shoring.',
    specsAr: 'حفارات هيدروليكية عملاقة أوزان 50 طن مع دكاكات ومطارق صخرية، وتدعيم جوانب الحفر.',
    stepsEn: [
      'Site Survey & Excavation Marking',
      'Soil & Sand Excavation',
      'Limestone & Hard Rock Cutting / Breaking',
      'Controlled Blasting (If Required & Approved)',
      'Rock Removal & Final Leveling'
    ],
    stepsAr: [
      'المسح الهندسي وتحديد خطوط الحفر',
      'حفر ونقل التربة والرمال',
      'تكسير وقطع الصخور والحجر الجيري',
      'التفجير الصخري المتحكم فيه (عند الاعتماد)',
      'ترحيل الصخور والتسوية النهائية للقاع'
    ],
    safetyEn: [
      'PPE & Excavation Edge Protection',
      'Slope Stability & Trench Shoring',
      'Blasting Exclusion Zones & Warning Systems',
      'Licensed Blasting Personnel & Safety Clearance',
      'Dust Suppression & Machinery Safety'
    ],
    safetyAr: [
      'حماية حواف الحفريات ومعدات الوقاية',
      'تدعيم الميول وتثبيت جوانب الحفر',
      'منطقة الإخلاء وصفارات الإنذار للتفجير',
      'تصاريح معتمدة وفريق تفجير مرخص',
      'إخماد الأتربة وسلامة المعدات الثقيلة'
    ]
  },
  {
    slug: 'mining-quarry',
    titleEn: 'Crushing, Quarry & Backfill',
    titleAr: 'التكسير والمحاجر والردم الهندسي',
    summaryEn: 'Quarry operations, mobile jaw aggregate crushing, screening, and certified sub-base material supply.',
    summaryAr: 'تشغيل المحاجر الصخرية، تكسير وفرز الركام الإنشائي، وتوريد مواد الأساس والأساس المساعد وصخور الردم.',
    image: 'equipment-crusher.jpg',
    icon: '🪨',
    specsEn: 'Mobile screening plants, calibrated aggregate gradation (Class A/B), rip-rap boulders, bulk hauling fleet.',
    specsAr: 'محطات غربلة وفرز متحركة، تدرج ركام معتمد فئة A و B، صخور حماية وتثبيت، وأسطول نقل ثقيل.',
    stepsEn: [
      'Rock Extraction & Collection',
      'Rock Crushing Using Crushing Machines',
      'Material Screening & Grading',
      'Crushed Material Transportation & Backfilling',
      'Layer Compaction & Quality Inspection'
    ],
    stepsAr: [
      'استخراج وجمع الصخور من المحجر',
      'تكسير الصخور بمحطات الكسارات',
      'غربلة وفرز الركام حسب المقاسات',
      'نقل الركام ومواد الردم لموقع المشروع',
      'الدمك الطبقي واختبارات الجودة'
    ],
    safetyEn: [
      'Crusher Safety Guards & Restricted Access',
      'Dust Suppression & Noise Protection',
      'Safe Material Loading & Transportation',
      'PPE & Quarry Slope Stability Monitoring'
    ],
    safetyAr: [
      'حواجز أمان الكسارة وتقييد الدخول',
      'منظومة إخماد الغبار وواقيات الضوضاء',
      'التحميل الآمن والنقل السليم للمواد',
      'مراقبة ثبات ميول المحجر ومعدات الوقاية'
    ]
  },
  {
    slug: 'pipelines-power',
    titleEn: 'Utilities, Pipelines & Stormwater',
    titleAr: 'خطوط الأنابيب وشبكات تصريف السيول',
    summaryEn: 'Cross-country trenching, storm box culverts, retention basins, and subterranean utility corridors.',
    summaryAr: 'حفر المسارات الطويلة لخطوط المياه والغاز، تمديد خطوط الكهرباء والاتصالات، وعبارات السيول.',
    image: 'service-pipeline-utility.jpg',
    icon: '⚡',
    specsEn: 'Carbon steel & ductile iron pipelines, cable trenching, sand bedding, warning tape & backfill.',
    specsAr: 'أنابيب الدكتايل والصلب الكربوني، حفر قنوات الكابلات، فرشة الرمل الناعم، وأشرطة التحذير والردم.',
    stepsEn: [
      'Site Survey & Underground Utility Marking',
      'Trench Excavation & Bedding Preparation',
      'Pipeline Installation & Joint Connections',
      'Inspection, Testing & Backfilling',
      'Final Ground Restoration'
    ],
    stepsAr: [
      'الرفع المساحي وتحديد مسارات الخدمات',
      'حفر الخنادق وتجهيز فرشة التأسيس',
      'تركيب خطوط الأنابيب والوصلات الهندسية',
      'فحص الضغط واختبار التسريب والردم',
      'إعادة وتأهيل سطح الموقع لحالته الأصلية'
    ],
    safetyEn: [
      'Underground Utility Detection',
      'Trench Shoring & Collapse Prevention',
      'Safe Pipe Lifting & Installation',
      'PPE & Confined Space Precautions Where Required'
    ],
    safetyAr: [
      'أجهزة كشف المرافق والخطوط القائمة',
      'تدعيم الخنادق لمنع الانهيارات الترابية',
      'رافعات معتمدة وإنزال آمن للأنابيب',
      'احتياطات الأماكن المغلقة ومعدات الوقاية'
    ]
  },
  {
    slug: 'landscape-irrigation',
    titleEn: 'Landscaping & Irrigation Networks',
    titleAr: 'تنسيق المواقع وشبكات الري الحديثة',
    summaryEn: 'Integrated softscape, hardscape leveling, automated irrigation mains, and soil enhancement.',
    summaryAr: 'أعمال التشجير والمساحات الخضراء، شبكات الري الآلية والخطوط الرئيسية، وتعديل خواص التربة الزراعية.',
    image: 'service-landscape-earthworks.jpg',
    icon: '🌴',
    specsEn: 'HDPE irrigation piping, solenoid valve manifolds, organic topsoil supply, drainage gravel layers.',
    specsAr: 'أنابيب ري بولي إيثيلين HDPE، غرف محابس كهرومغناطيسية، توريد التربة الزراعية والطبقات الحصوية.',
    stepsEn: [
      'Site Clearing & Soil Preparation',
      'Ground Leveling & Landscape Formation',
      'Irrigation Pipeline Installation',
      'Tree, Grass & Plant Installation',
      'Irrigation Testing & Final Inspection'
    ],
    stepsAr: [
      'تنظيف الموقع وتجهيز التربة الزراعية',
      'تسوية الأرض وتشكيل تضاريس المساحات الخضراء',
      'تمديد شبكات وخراطيم ومحابس الري',
      'غرس الأشجار وزراعة المسطحات الخضراء',
      'تشغيل وتجربة شبكة الري والفحص النهائي'
    ],
    safetyEn: [
      'PPE & Safe Equipment Handling',
      'Underground Utility Checks',
      'Safe Excavation & Machinery Movement',
      'Heat-Stress Protection & Hydration'
    ],
    safetyAr: [
      'التعامل الآمن مع المعدات ومعدات الوقاية',
      'فحص خطوط الخدمات الممتدة تحت الأرض',
      'حركة آمنة للمعدات الخفيفة وتأمين الحفر',
      'توفير السوائل والحماية من الإجهاد الحراري'
    ]
  },
  {
    slug: 'sewer-systems',
    titleEn: 'Sewer Systems & Pumping Stations',
    titleAr: 'شبكات الصرف الصحي ومحطات المعالجة والضخ',
    summaryEn: 'Gravity sewer mains, deep manholes, lift stations, and wastewater treatment infrastructure.',
    summaryAr: 'تمديد خطوط الصرف الصحي الانحدارية، وغرف التفتيش العميقة، ومحطات الضخ وخطوط الطرد.',
    image: 'event-parking.png',
    icon: '🚰',
    specsEn: 'VCP & GRP pipe laying, micro-tunneling support, precast manholes, wet-well lifting stations.',
    specsAr: 'تمديد أنابيب الفخار المزجج وألياف الزجاج GRP، غرف تفتيش خرسانية مسبقة الصب، ومحطات رفع متكاملة.',
    stepsEn: [
      'Site Survey & Trench Excavation',
      'Sewer Pipeline & Manhole Installation',
      'Pumping Station Structure & Equipment Installation',
      'Pipeline Connections & System Testing',
      'Backfilling & Site Restoration'
    ],
    stepsAr: [
      'الرفع المساحي وحفر مسارات شبكات الصرف',
      'تركيب أنابيب الصرف والمناهل وغرف التفتيش',
      'إنشاء مبنى محطة الضخ وتركيب المضخات',
      'ربط الخطوط واختبار التدفق والانحدار',
      'الردم الهندسي واستعادة تأهيل الموقع'
    ],
    safetyEn: [
      'Trench Shoring & Excavation Protection',
      'Confined Space Gas Testing & Rescue Arrangements',
      'Electrical Isolation & Pump Equipment Safety',
      'PPE, Hygiene & Safe Lifting Procedures'
    ],
    safetyAr: [
      'تدعيم جوانب الحفريات العميقة',
      'فحص الغازات وخطط الإنقاذ في الأماكن المغلقة',
      'العزل الكهربائي وتأمين معدات الرفع',
      'معايير النظافة ومعدات الوقاية والسلامة'
    ]
  },
  {
    slug: 'fencing-hoarding',
    titleEn: 'Site Security Fencing & Project Hoarding',
    titleAr: 'الأسوار الأمنية والحواجز الإنشائية للمشاريع',
    summaryEn: 'High-security perimeter fencing, corrugated galvanized hoarding, access control gates, and boundary markers.',
    summaryAr: 'تنفيذ الأسوار المحيطة بالمشاريع الكبرى، حواجز الشينكو المجلفنة، بوابات الدخول ونقاط المراقبة.',
    image: 'exit-hospital.png',
    icon: '🚧',
    specsEn: 'Crash-rated perimeter fences, concrete continuous footings, anti-climb mesh, hoarding signage panels.',
    specsAr: 'أسوار معتمدة مقاومة للصدمات، قواعد خرسانية شريطية مستمرة، شبك أمني مجلفن، ولوحات حجب الرؤية.',
    stepsEn: [
      'Site Boundary Survey & Marking',
      'Post Foundation Excavation & Preparation',
      'Security Fencing / Hoarding Installation',
      'Access Gate & Safety Signage Installation',
      'Final Alignment & Stability Inspection'
    ],
    stepsAr: [
      'مسح الحدود العقارية وتحديد نقاط السور',
      'حفر وصب القواعد الخرسانية للأعمدة',
      'تثبيت شبك الحماية وألواح الشينكو المجلفنة',
      'تركيب بوابات الدخول ولوحات السلامة الإرشادية',
      'فحص استقامة السور وثباته ومقاومة الرياح'
    ],
    safetyEn: [
      'PPE & Work Zone Barricades',
      'Underground Utility Clearance',
      'Safe Lifting & Equipment Operation',
      'Working-at-Height Protection Where Required'
    ],
    safetyAr: [
      'حواجز مناطق العمل ومعدات السلامة الشخصية',
      'التأكد من خلو مواقع القواعد من الخدمات',
      'رفع وتركيب الألواح والمقاطع بأمان',
      'حزام الأمان والعمل الآمن على ارتفاعات'
    ]
  },
  {
    slug: 'demolition',
    titleEn: 'Controlled Demolition & Site Clearance',
    titleAr: 'الهدم المنظم وإزالة العوائق والمنشآت',
    summaryEn: 'Safe structural dismantling, concrete crushing, sorting, and hazardous material site clearance.',
    summaryAr: 'إزالة وهدم المباني والمنشآت الخرسانية وفق أعلى معايير السلامة، وتكسير وفرز الخرسانة وترحيل المخلفات.',
    image: 'camel-festival.png',
    icon: '💥',
    specsEn: 'High-reach demolition shears, dust suppression misting systems, steel rebar recycling.',
    specsAr: 'مقصات ومطارق هدم متقدمة، منظومات رش الضباب لخفض الغبار، وفرز حديد التسليح وإعادة التدوير.',
    stepsEn: [
      'Structural Inspection & Site Preparation',
      'Utility Disconnection & Controlled Demolition',
      'Concrete Breaking & Debris Separation',
      'Debris Loading & Transportation',
      'Final Site Clearing & Leveling'
    ],
    stepsAr: [
      'الفحص الإنشائي للمبنى وتجهيز الموقع',
      'فصل كافة الخدمات وبدء الهدم المنظم',
      'تكسير الخرسانة وفرز الركام وحديد التسليح',
      'تحميل مخلفات الهدم ونقلها للمقالب المعتمدة',
      'تنظيف وتسوية أرضية الموقع بالكامل'
    ],
    safetyEn: [
      'Structural Stability Assessment',
      'Demolition Exclusion Zones',
      'Dust Suppression & Falling Debris Protection',
      'PPE & Hazardous Material Checks',
      'Safe Machinery Operation'
    ],
    safetyAr: [
      'تقييم الثبات الإنشائي ومخاطر الانهيار',
      'تحديد منطقة حظر دخول حول نطاق الهدم',
      'رش الضباب لمنع الغبار والحماية من الشظايا',
      'فحص المواد الخطرة ومعدات الحماية التنفسية',
      'تشغيل آمن لمعدات ومطارق الهدم الهيدروليكية'
    ]
  },
  {
    slug: 'bulk-backfilling',
    titleEn: 'Bulk Backfilling & Compaction',
    titleAr: 'الردم الهندسي والدمك الطبقي المعتمد',
    summaryEn: 'Layer-by-layer engineered fill, moisture conditioning, and heavy roller vibratory compaction.',
    summaryAr: 'تنفيذ أعمال الردم الهندسي على طبقات محددة السماكة، وضبط نسبة الرطوبة والدمك بالمداحل الثقيلة.',
    image: 'salman-park-aerial.png',
    icon: '🧱',
    specsEn: 'Compaction to 95-100% Modified Proctor density, field density tests, nuclear gauge verification.',
    specsAr: 'تحقيق كثافة دمك 95-100% بروكتور المعدل، واختبارات الكثافة الحقلية بالموقع واعتماد المختبرات.',
    stepsEn: [
      'Site Preparation & Ground Inspection',
      'Approved Backfill Material Transportation',
      'Layer-by-Layer Material Spreading',
      'Soil Compaction Using Rollers',
      'Final Leveling & Compaction Testing'
    ],
    stepsAr: [
      'تجهيز الموقع وفحص طبقة التأسيس الأصلية',
      'توريد مواد الردم المعتمدة ونقلها بالشاحنات',
      'فرش المواد على طبقات متساوية السماكة',
      'دمك التربة بالمداحل الاهتزازية الثقيلة',
      'ضبط المناسيب واختبار الكثافة بالمختبر'
    ],
    safetyEn: [
      'PPE & Machinery Exclusion Zones',
      'Stable Ground & Excavation Edge Protection',
      'Dust Control & Moisture Management',
      'Safe Roller Operation & Traffic Control'
    ],
    safetyAr: [
      'مناطق أمان حول المداحل والشاحنات القلابة',
      'حماية وتأمين حواف الردم والمنحدرات',
      'رش المياه لضبط الرطوبة وتثبيت الغبار',
      'إدارة حركة المداحل وتنظيم سير الشاحنات'
    ]
  },
  {
    slug: 'storm-drainage',
    titleEn: 'Storm Drainage Systems & Box Culverts',
    titleAr: 'شبكات تصريف مياه الأمطار والسيول والعبارات',
    summaryEn: 'Precast and cast-in-place box culverts, retention basins, storm channels, and outfall discharge structures.',
    summaryAr: 'تنفيذ العبارات الصندوقية الخرسانية، قنوات تصريف مياه السيول، بحيرات التهدئة ومصبات المياه.',
    image: 'qiddiya-culverts.png',
    icon: '🌊',
    specsEn: 'Heavy reinforced box culverts, rip-rap energy dissipators, geotextile lining, inlet/outlet headwalls.',
    specsAr: 'عبارات صندوقية خرسانية مسلحة، أحواض تشتيت الطاقة بالدبش الحجري، وأقمشة العزل الجيوتكستايل.',
    stepsEn: [
      'Site Survey & Drainage Excavation',
      'Foundation & Bedding Preparation',
      'Box Culvert Installation / Concrete Construction',
      'Drainage Connections & Waterproofing',
      'Backfilling, Compaction & Final Inspection'
    ],
    stepsAr: [
      'الرفع المساحي وحفر مسار العبارة ومجاري السيول',
      'صب خرسانة النظافة وتجهيز طبقة الفرشة',
      'تركيب العبارات الصندوقية الخرسانية',
      'عزل الفواصل وربط مصبات وقنوات التصريف',
      'الردم والدمك المتدرج والفحص النهائي'
    ],
    safetyEn: [
      'Excavation Shoring & Edge Protection',
      'Safe Crane Lifting & Culvert Placement',
      'Flooding & Groundwater Control',
      'PPE & Confined Space Safety Where Required'
    ],
    safetyAr: [
      'تدعيم حواف الحفر العميق والحواجز',
      'رافعات معتمدة لإنزال القطع الخرسانية',
      'خطة تصريف المياه الجوفية والسيول',
      'معايير السلامة في الأماكن المغلقة ومعدات الوقاية'
    ]
  },
  {
    slug: 'refurbishment',
    titleEn: 'Refurbishment, Upgrades & Renovation',
    titleAr: 'الترميم والتجديد والتأهيل الإنشائي للمرافق',
    summaryEn: 'Structural rehabilitation, surface leveling, paving renewals, and facility upgrades for operating campuses.',
    summaryAr: 'أعمال التأهيل والترميم الإنشائي، إعادة رصف وتجديد الساحات، وتطوير البنية التحتية للمنشآت القائمة.',
    image: 'hittin.png',
    icon: '🏗️',
    specsEn: 'Concrete repairs, asphalt milling & overlay, curbstone replacement, utility re-routing.',
    specsAr: 'معالجة الخرسانات، قشط وإعادة سفلتة الطرق، استبدال البردورات والأرصفة، وتحويل مسارات الخدمات.',
    stepsEn: [
      'Existing Structure & Site Inspection',
      'Damaged Structure / Surface Removal',
      'Structural Repairs & Infrastructure Upgrades',
      'Surface Restoration & Finishing',
      'Final Quality & Safety Inspection'
    ],
    stepsAr: [
      'الفحص الشامل للمنشأة وتحديد أماكن التلف',
      'قشط وإزالة الأجزاء التالفة والخرسانات المتآكلة',
      'تدعيم العناصر الإنشائية وتحديث شبكات الخدمات',
      'معالجة الأسطح وإعادة الرصف والتشطيبات النهائية',
      'الفحص الهندسي النهائي وضمان الجودة'
    ],
    safetyEn: [
      'Structural Stability & Hazard Assessment',
      'Utility Isolation Before Repair Work',
      'PPE & Work Area Barricading',
      'Safe Machinery & Tool Operation',
      'Dust Control & Working-at-Height Protection'
    ],
    safetyAr: [
      'تقييم الأحمال وتأمين المنشأة قبل العمل',
      'عزل خطوط الكهرباء والمياه قبل الترميم',
      'تطويق منطقة العمل ومعدات الوقاية',
      'الاستخدام الآمن للمعدات الكهربائية والأدوات',
      'شبكات منع الغبار ومعدات الحماية من السقوط'
    ]
  }
];

// Equipment Fleet (378 Total Units from PDF Page 6)
const equipmentData = [
  {
    id: 'excavator',
    nameEn: 'Hydraulic Excavators',
    nameAr: 'حفارات هيدروليكية ثقيلة',
    count: 180,
    category: 'earthmoving',
    image: 'equipment-excavator.jpg',
    specsEn: 'CAT 336 / 349 / Volvo EC480 | Rock Breakers'
  },
  {
    id: 'dump-truck-8',
    nameEn: 'Dump Trucks (Size 8 / 8x4)',
    nameAr: 'قلابات وتريلات ثقيلة (مقاس 8)',
    count: 82,
    category: 'haulage',
    image: 'equipment-dump-truck-8.jpg',
    specsEn: 'Mercedes-Benz Actros 8x4 Heavy Tipper'
  },
  {
    id: 'dump-truck-6',
    nameEn: 'Dump Trucks (Size 6 / 6x4)',
    nameAr: 'قلابات موقعية (مقاس 6)',
    count: 55,
    category: 'haulage',
    image: 'equipment-dump-truck-6.jpg',
    specsEn: 'Mercedes-Benz 6x4 Agile Site Tippers'
  },
  {
    id: 'bulldozer',
    nameEn: 'Heavy Crawler Dozers',
    nameAr: 'بلدوزرات مجنزرة ثقيلة',
    count: 15,
    category: 'earthmoving',
    image: 'equipment-bulldozer.jpg',
    specsEn: 'CAT D8R / D9T | Giant Single-Shank Rippers'
  },
  {
    id: 'wheel-loader',
    nameEn: 'Wheel Loaders',
    nameAr: 'شيولات / لوادر ذات عجلات',
    count: 12,
    category: 'earthmoving',
    image: 'equipment-loader.jpg',
    specsEn: 'CAT 966H / 980H | 4.0m³ - 5.5m³ Buckets'
  },
  {
    id: 'crusher',
    nameEn: 'Mobile Crushing Plants',
    nameAr: 'محطات كسارات وغربلة متنقلة',
    count: 9,
    category: 'crushing',
    image: 'equipment-crusher.jpg',
    specsEn: 'Track-Mounted Jaw & Cone Crushers (450t/h)'
  },
  {
    id: 'grader',
    nameEn: 'Motor Graders',
    nameAr: 'جريدرات تسوية دقيقة',
    count: 6,
    category: 'earthmoving',
    image: 'equipment-grader.jpg',
    specsEn: 'CAT 140K / 160M with 3D GPS Laser Grading'
  },
  {
    id: 'water-tanker',
    nameEn: 'Water Tanker Trucks',
    nameAr: 'تناكر وسيارات رش مياه',
    count: 6,
    category: 'support',
    image: 'equipment-water-tanker.jpg',
    specsEn: 'Mercedes 6,000 Gallon Water Bowsers'
  },
  {
    id: 'roller-compactor',
    nameEn: 'Roller Compactors',
    nameAr: 'مداحل ورصاصات دمك',
    count: 5,
    category: 'paving',
    image: 'equipment-roller-compactor.jpg',
    specsEn: 'Dynapac / Hamm 12t - 20t Single Drum'
  },
  {
    id: 'diesel-tanker',
    nameEn: 'Diesel Service Tankers',
    nameAr: 'تناكر وقود وديزل ميدانية',
    count: 5,
    category: 'support',
    image: 'equipment-diesel-tanker.jpg',
    specsEn: 'Mobile 24/7 Field Refueling Units'
  },
  {
    id: 'jcb',
    nameEn: 'Backhoe Loaders (JCB)',
    nameAr: 'حفارات وجرافات بوبكات وجي سي بي',
    count: 3,
    category: 'earthmoving',
    image: 'equipment-jcb.jpg',
    specsEn: 'JCB 3DX 4WD Multipurpose Backhoes'
  },
  {
    id: 'asphalt-milling',
    nameEn: 'Cold Milling Planers',
    nameAr: 'قشاطات أسفلت هيدروليكية',
    count: 2,
    category: 'paving',
    image: 'equipment-asphalt-milling.jpg',
    specsEn: 'Wirtgen W210Fi 2.0m Milling Drums'
  },
  {
    id: 'asphalt-paver',
    nameEn: 'Asphalt Pavers',
    nameAr: 'فرادات أسفلت مجنزرة حديثة',
    count: 2,
    category: 'paving',
    image: 'equipment-asphalt-paver.jpg',
    specsEn: 'CAT AP655F Heavy Duty Paving Screeds'
  },
  {
    id: 'mobile-crane',
    nameEn: 'All-Terrain Mobile Crane',
    nameAr: 'كرين ورافعة متنقلة للأعمال الشاقة',
    count: 1,
    category: 'support',
    image: 'equipment-mobile-crane.jpg',
    specsEn: 'Liebherr 160-Ton Telescopic Crane'
  }
];

// Project Portfolio
const projectsData = [
  {
    slug: 'king-salman-park-alyamama',
    titleEn: 'King Salman Park Al Yamama',
    titleAr: 'حديقة الملك سلمان · اليمامة',
    year: '2022–2025',
    location: 'Riyadh, Kingdom of Saudi Arabia',
    locationAr: 'الرياض، المملكة العربية السعودية',
    client: 'Al Yamama Company',
    clientAr: 'شركة اليمامة للمقاولات',
    scopeEn: 'Site Preparation – Excavation – Backfilling – Disposal',
    scopeAr: 'تهيئة الموقع – الحفر والتسوية المعمارية – الردم – ترحيل المخلفات',
    twoLineDescEn: 'Large-scale earthworks and infrastructure development for King Salman Park, one of the most significant urban projects in the Kingdom.',
    twoLineDescAr: 'تنفيذ أعمال ترابية وبنية تحتية عملاقة لحديقة الملك سلمان، إحدى أهم مشاريع التطوير الحضري الاستراتيجية في المملكة.',
    image: 'project-featured-park.jpg',
    hasCustomImage: true,
    metricA: '10M+ Cubic Meters',
    metricB: '2022 – 2025 Duration',
    metricC: 'Major Project Phase'
  },
  {
    slug: 'qiddiya-uptown',
    titleEn: 'Qiddiya Uptown Mass Grading',
    titleAr: 'تسوية أبتاون بالقدية',
    year: '2023–2024',
    location: 'Qiddiya, KSA',
    locationAr: 'القدية، المملكة العربية السعودية',
    client: 'MASCO / Qiddiya Investment Co.',
    clientAr: 'مجموعة محمد العلي السويلم (ماسكو) / القدية',
    scopeEn: 'Site Preparation – Excavation – Crushing – Cliffs and general backfilling',
    scopeAr: 'تهيئة المواقع – الحفر الصخري – التكسير الميداني – تسوية المنحدرات والردم العام',
    twoLineDescEn: 'Mass grading package cutting severe cliff edges, crushing aggregates, and delivering building pads for Qiddiya Uptown.',
    twoLineDescAr: 'أعمال تسوية كبرى شملت قطع حواف الجبال الصخرية وتكسير الركام وردم المناطق المنخفضة لأبتاون القدية.',
    image: 'project-qiddiya-cut.jpg',
    hasCustomImage: true,
    metricA: '8M+ m³ Rock Cut',
    metricB: '2023 – 2024 Duration',
    metricC: 'Mountain Enabling'
  },
  {
    slug: 'nri-king-salman-park',
    titleEn: 'NRI King Salman Park',
    titleAr: 'حديقة الملك سلمان · نايف الراجحي',
    year: '2024 Up to Now',
    location: 'Riyadh, KSA',
    locationAr: 'الرياض، المملكة العربية السعودية',
    client: 'Naif Alrajhi Investment',
    clientAr: 'نايف الراجحي للاستثمار',
    scopeEn: 'Site Preparation – Excavation – Crushing – Disposal',
    scopeAr: 'تهيئة الموقع – الحفر الصخري – تكسير المخلفات – الترحيل',
    twoLineDescEn: 'Deep foundation earthworks and rock crushing package operating a high-intensity fleet of 50t excavators and tippers.',
    twoLineDescAr: 'حزمة أعمال ترابية وصخرية نشطة تنفذها قمم الإنتاج بأعلى كفاءة لأسطول الحفارات والشاحنات الثقيلة.',
    image: 'project-nri-foundation.jpg',
    hasCustomImage: true,
    metricA: '4.5M+ m³ Moved',
    metricB: '2024 – Active',
    metricC: 'Deep Excavation'
  },
  {
    slug: 'neom-luxury-mansion',
    titleEn: 'NEOM Luxury Mansion Early Works',
    titleAr: 'الأعمال الأولية لفلل نيوم الفاخرة',
    year: '2021–2022',
    location: 'NEOM, KSA',
    locationAr: 'نيوم، المملكة العربية السعودية',
    client: 'NEOM Development Partner',
    clientAr: 'شركاء التطوير بنيوم',
    scopeEn: 'Site Preparation – Excavation – Backfilling – Roads Asphalt',
    scopeAr: 'تهيئة المواقع – الحفر العميق – الردم الهندسي – سفلتة وإنشاء الطرق',
    twoLineDescEn: 'Pioneering early civil infrastructure across three zones in NEOM, executing rugged topography excavation and private access roads.',
    twoLineDescAr: 'تنفيذ الأعمال التمهيدية لثلاث مناطق بمدينة نيوم شملت الحفر في تضاريس جبلية صعبة وشق وسفلتة الطرق الداخلية.',
    image: 'project-neom-zone.jpg',
    hasCustomImage: true,
    metricA: '3 Development Zones',
    metricB: '2021 – 2022',
    metricC: 'Pioneering Works'
  },
  {
    slug: 'exit-4-hospital',
    titleEn: 'Earth Works for Exit 4 Hospital',
    titleAr: 'الأعمال الترابية لمستشفى مخرج 4',
    year: '2017–2018',
    location: 'Riyadh, KSA',
    locationAr: 'الرياض',
    client: 'Hospital Project Administration',
    clientAr: 'إدارة مشروع المستشفى',
    scopeEn: 'Site Preparation – Excavation – Crushing – Disposal',
    scopeAr: 'تهيئة الموقع – أعمال الحفر – التكسير – التخلص من المخلفات',
    twoLineDescEn: 'Execution of complete bulk excavation and foundation site leveling for a major specialized medical facility at Exit 4 Riyadh.',
    twoLineDescAr: 'تنفيذ أعمال الحفر الشامل وتسوية أرضيات التأسيس لمشروع صرح طبي متكامل بمخرج 4 بالرياض.',
    image: 'exit-hospital.png',
    hasCustomImage: true,
    metricA: 'Foundations & Grading',
    metricB: '2017 – 2018',
    metricC: 'Turnkey Civil'
  },
  {
    slug: 'qiddiya-city-center',
    titleEn: 'Earth Works for City Center and Culverts',
    titleAr: 'أعمال التسوية والعبارات لمركز مدينة القدية',
    year: '2019–2021',
    location: 'Qiddiya, KSA',
    locationAr: 'القدية',
    client: 'Qiddiya Investment Company',
    clientAr: 'شركة القدية للاستثمار',
    scopeEn: 'Grading – Culverts and General Excavation – Disposal – Backfilling',
    scopeAr: 'التسوية الطبوغرافية – تنفيذ العبارات والحفر العام – الترحيل – الردم الهندسي',
    twoLineDescEn: 'Extensive civil engineering package executing mountain cut-and-fill, mass grading, and box culverts across Qiddiya City Center.',
    twoLineDescAr: 'تنفيذ أعمال القطع الصخري والتسوية الشاملة وإنشاء العبارات الصندوقية لمركز مدينة القدية الترفيهية العالمية.',
    image: 'qiddiya-culverts.png',
    hasCustomImage: true,
    metricA: 'Box Culverts & Cut',
    metricB: '2019 – 2021',
    metricC: 'Infrastructure'
  },
  {
    slug: 'camel-festival',
    titleEn: 'King Abdulaziz Camel Festival',
    titleAr: 'مشروع مهرجان الملك عبدالعزيز للإبل',
    year: '2019',
    location: 'Rumah, KSA',
    locationAr: 'رماح',
    client: 'Camel Club',
    clientAr: 'نادي الإبل',
    scopeEn: 'Demolition – Disposal – Site Clearance – Backfilling – Asphalt – Landscape',
    scopeAr: 'الهدم والإزالة – التخلص من المخلفات – تسوية الموقع – الردم – السفلتة – تنسيق الموقع',
    twoLineDescEn: 'Comprehensive site preparation, VIP access asphalt corridors, earth levelling, and infrastructure for the national camel festival.',
    twoLineDescAr: 'تجهيز وتسوية الموقع العام للمهرجان الوطني، وسفلتة مسارات وطرق الزوار وكبار الشخصيات وأعمال الردم والتنسيق.',
    image: 'camel-festival.png',
    hasCustomImage: true,
    metricA: 'VIP Corridors & Asphalt',
    metricB: '2019',
    metricC: 'Rapid Delivery'
  },
  {
    slug: 'dg01-event-parking',
    titleEn: 'DG01 Event District Parking Project',
    titleAr: 'مشروع مواقف منطقة الفعاليات DG01 — الدرعية',
    year: '2024',
    location: 'Riyadh / Diriyah Gate',
    locationAr: 'الرياض / بوابة الدرعية',
    client: 'Nesma & Partners / DGDA',
    clientAr: 'نسما وشركاهم / هيئة تطوير بوابة الدرعية',
    scopeEn: 'Site Preparation – Excavation – Disposal',
    scopeAr: 'تهيئة الموقع – الحفر العميق – ترحيل المخلفات',
    twoLineDescEn: 'Deep basement parking excavation and rapid night-time haulage for Diriyah Gate Development Authority with Nesma & Partners.',
    twoLineDescAr: 'حفر وتجهيز مواقف السيارات متعددة الأدوار وترحيل المواد ليلاً لصالح هيئة تطوير بوابة الدرعية وشركة نسما.',
    image: 'event-parking.png',
    hasCustomImage: true,
    metricA: 'Deep Basement Dig',
    metricB: '2024',
    metricC: 'Night Haulage'
  },
  {
    slug: 'dg02-gyratory-tunnels',
    titleEn: 'DG02 Gyratory Tunnels Project',
    titleAr: 'مشروع أنفاق الدوران DG02 — بوابة الدرعية',
    year: '2024',
    location: 'Riyadh / Diriyah Gate',
    locationAr: 'الرياض / بوابة الدرعية',
    client: 'DGDA / Main Contractor',
    clientAr: 'هيئة تطوير بوابة الدرعية / المقاول الرئيسي',
    scopeEn: 'Site Preparation – Excavation – Disposal',
    scopeAr: 'تهيئة الموقع – الحفر الصخري للأنفاق – ترحيل المخلفات',
    twoLineDescEn: 'Strategic vehicular tunnel trench excavation and subterranean roadway enabling works connecting the historic Diriyah precinct.',
    twoLineDescAr: 'حفر مسارات الأنفاق الدائرية تحت السطحية وتجهيز البنية التحتية لشبكة الطرق الرابطة لمشروع بوابة الدرعية التاريخي.',
    image: 'gyratory-tunnels.png',
    hasCustomImage: true,
    metricA: 'Tunnel Trenches',
    metricB: '2024',
    metricC: 'Urban Enabling'
  },
  {
    slug: 'kkr-diversion',
    titleEn: 'KKR Diversion Project',
    titleAr: 'مشروع تحويل مسار طريق الملك خالد (KKR)',
    year: '2024 Up to Now',
    location: 'Riyadh, KSA',
    locationAr: 'الرياض',
    client: 'UNIMAC',
    clientAr: 'شركة يونيماك للمقاولات',
    scopeEn: 'Site Preparation – Excavation – Backfilling – Disposal',
    scopeAr: 'تهيئة الموقع – الحفر والقطع – الردم الهندسي – ترحيل المخلفات',
    twoLineDescEn: 'Arterial traffic road corridor diversion, sub-base compaction, and multi-tier utility trenching on King Khalid Road with UNIMAC.',
    twoLineDescAr: 'تنفيذ أعمال تحويل مسار طريق الملك خالد الحيوي، ودمك طبقات الأساس ومد الخدمات بالتعاون مع شركة يونيماك.',
    image: 'kkr-diversion.png',
    hasCustomImage: true,
    metricA: 'Highway Diversion',
    metricB: '2024 – Active',
    metricC: 'Sub-base Paving'
  }
];

// Strategic Clients
const clientsList = [
  { id: 'masco', name: 'Mohammed Ali Alswailem Group (MASCO)' },
  { id: 'bss', name: 'BSS Joint Venture' },
  { id: 'camel-club', name: 'Camel Club' },
  { id: 'qiddiya', name: 'Qiddiya Investment Company' },
  { id: 'alyamama', name: 'Al Yamama Company' },
  { id: 'riyadh-roads', name: 'Riyadh Road Contracting Co.' },
  { id: 'nesma', name: 'Nesma & Partners' },
  { id: 'kkia', name: 'King Khaled International Airport' },
  { id: 'unimac', name: 'UNIMAC' },
  { id: 'fmsco', name: 'FMSCO' },
  { id: 'naif', name: 'Naif Alrajhi Investment' }
];

// Master Translations
const T = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      capabilities: 'Services & Scope',
      fleet: 'Equipments',
      projects: 'Projects',
      action: 'Work in Action',
      contact: 'Contact Us'
    },
    startProject: 'Start a Project',
    heroEyebrow: 'INFRASTRUCTURE FOR A STRONGER TOMORROW',
    heroTitle: 'Building What <span class="highlight-gold">Moves Nations.</span>',
    heroSubtitle: 'Delivering complex earthworks and infrastructure projects through engineering excellence, precision, and performance across the Kingdom.',
    exploreProjects: 'Explore Our Projects',
    ourCapabilities: 'Our Capabilities',
    scrollToExplore: 'Scroll to explore',
    // Metrics
    metricValue: '253,858,478',
    metricValueLabel: 'Total Listed Value (SAR)',
    metricFleet: '378+',
    metricFleetLabel: 'Heavy Machines in Fleet',
    metricClass: '1st Degree',
    metricClassLabel: 'Contractor Classification (KSA)',
    metricProjects: '27+',
    metricProjectsLabel: 'Strategic Mega Projects',
    // About
    aboutEyebrow: 'ABOUT QIMAM',
    aboutHeading: 'Built for the Scale of<br>National Ambition.',
    aboutText: 'Established in Riyadh in 2017, Qimam Al-Intaj (QMAM) is classified at the highest 1st Degree category in Saudi Arabia. We deliver large-scale earthworks, road networks, rock blasting, and civil infrastructure for governmental authorities, municipalities, and global contractors.',
    readMoreAbout: 'Read More About Us',
    ourVision: 'Our Vision',
    visionText: 'To be the most esteemed, valued, and respected construction and earthworks contractor in the Kingdom of Saudi Arabia.',
    // Capabilities
    capEyebrow: 'OUR CAPABILITIES',
    capHeading: 'The Scope to Make<br>Progress Possible.',
    capDesc: 'From massive cut-and-fill earthworks to critical infrastructure networks, we deliver turnkey solutions backed by our 378+ equipment fleet.',
    viewAllCap: 'View All Capabilities',
    // Featured Project
    featEyebrow: 'FEATURED PROJECT',
    viewProjectDetails: 'View Project Details',
    // Fleet
    fleetEyebrow: 'OUR FLEET',
    fleetHeading: 'The Right Fleet.<br>Ready for the Work.',
    fleetDesc: 'A modern and well-maintained fleet of 378+ heavy machines, operated by certified professionals, enables us to deliver projects of any scale with efficiency and reliability.',
    viewOurFleet: 'View Our Fleet',
    // Projects
    projectsEyebrow: 'OUR PROJECTS',
    projectsHeading: 'Work on the Ground.',
    projectsDesc: 'A selection of our key infrastructure and earthworks projects demonstrating our execution capacity across the Kingdom.',
    viewAllProjects: 'View All Projects',
    // Partners & Certifications
    partnersEyebrow: 'OUR PARTNERS',
    partnersHeading: 'Partners in Progress.',
    certEyebrow: 'STANDARDS & CERTIFICATIONS',
    certHeading: 'Standards Behind<br>Every Delivery.',
    certDesc: 'Our operations strictly comply with internationally certified quality, environmental, and occupational safety frameworks.',
    viewAllCert: 'View All Certificates',
    // Pre-Footer CTA
    ctaEyebrow: "LET'S BUILD TOGETHER",
    ctaHeading: "Let's Build<br>Something Lasting.",
    ctaSubtitle: "Have a project in mind? Let's discuss how QMAM can help deliver it with engineering expertise, commitment, and excellence.",
    discussProject: 'Start a Project',
    // Footer
    footerMotto: 'Delivering reliable, large-scale earthworks and sustainable infrastructure solutions for a better tomorrow.',
    quickLinks: 'Quick Links',
    ourServices: 'Services & Scope',
    contactUs: 'Contact Us',
    rightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    backToProjects: '← Back to All Projects',
    backToServices: '← Back to All Services',
    expandPhotoPrompt: 'Click to expand photo full screen',
    clientSlotTitle: 'Client High-Resolution Media Slot',
    clientSlotDesc: 'High-resolution photography and on-site documentation will be populated directly through backend integration.'
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      capabilities: 'الخدمات ونطاق العمل',
      fleet: 'المعدات والأسطول',
      projects: 'المشاريع',
      action: 'أعمالنا في الميدان',
      contact: 'تواصل معنا'
    },
    startProject: 'ابدأ مشروعك',
    heroEyebrow: 'بنية تحتية لمستقبل مشرق',
    heroTitle: 'نبني ما يقود <span class="highlight-gold">نهضة الأوطان.</span>',
    heroSubtitle: 'تنفيذ كبرى مشاريع الأعمال الترابية والبنية التحتية برؤية هندسية راسخة، ودقة متناهية، والتزام تام بالأداء في كافة أنحاء المملكة.',
    exploreProjects: 'استكشف مشاريعنا',
    ourCapabilities: 'خدماتنا وقدراتنا',
    scrollToExplore: 'مرر للاستكشاف',
    // Metrics
    metricValue: '253,858,478',
    metricValueLabel: 'القيمة الإجمالية للعقود (ريال)',
    metricFleet: '+378',
    metricFleetLabel: 'معدة وآلية في أسطولنا',
    metricClass: 'الدرجة الأولى',
    metricClassLabel: 'تصنيف المقاولات الحكومي (المملكة)',
    metricProjects: '+27',
    metricProjectsLabel: 'مشروعاً وطنياً استراتيجياً',
    // About
    aboutEyebrow: 'عن قمم الإنتاج',
    aboutHeading: 'إمكانات تواكب حجم<br>الطموح الوطني.',
    aboutText: 'تأسست شركة قمم الإنتاج للمقاولات العامة في الرياض عام 2017، وهي حاصلة على تصنيف الدرجة الأولى بالمملكة. نختص في تنفيذ أعمال الحفر والردم والقطع الصخري وتسوية المواقع، وسفلتة الطرق، وتمديد شبكات البنية التحتية لكبرى الهيئات والجهات الحكومية والشركات العالمية.',
    readMoreAbout: 'المزيد عن الشركة',
    ourVision: 'رؤيتنا',
    visionText: 'أن نكون شركة المقاولات والإنشاءات الأكثر تقديراً وقيمة واحتراماً في المملكة العربية السعودية.',
    // Capabilities
    capEyebrow: 'قدراتنا ونطاق أعمالنا',
    capHeading: 'نطاق عمل يصنع<br>التقدم والإنجاز.',
    capDesc: 'من الأعمال الترابية الكبرى إلى شبكات البنية التحتية الحيوية، نقدم حلولاً إنشائية متكاملة مدعومة بأسطولنا الضخم الذي يضم 378 معدة وآلية ثقيلة.',
    viewAllCap: 'عرض كافة القدرات',
    // Featured Project
    featEyebrow: 'مشروع مميز',
    viewProjectDetails: 'عرض تفاصيل المشروع',
    // Fleet
    fleetEyebrow: 'أسطول المعدات',
    fleetHeading: 'الأسطول المناسب.<br>جاهزية تامة للتنفيذ.',
    fleetDesc: 'أسطول حديث يضم أكثر من 378 معدة ثقيلة، يعمل بكفاءة بإشراف كوادر احترافية متخصصة لتمكيننا من إنجاز المشاريع الكبرى بأعلى موثوقية.',
    viewOurFleet: 'استعرض أسطولنا',
    // Projects
    projectsEyebrow: 'مشاريعنا الوطنية',
    projectsHeading: 'أعمالنا على أرض الواقع.',
    projectsDesc: 'مختارات من كبرى مشاريعنا الإنشائية والترابية التي تجسد قدراتنا العالية والتزامنا الراسخ في المملكة.',
    viewAllProjects: 'تصفح جميع المشاريع',
    // Partners & Certifications
    partnersEyebrow: 'شركاؤنا',
    partnersHeading: 'شركاء في مسيرة البناء.',
    certEyebrow: 'المعايير والشهادات',
    certHeading: 'معايير عالمية تدعم<br>كل مرحلة تنفيذ.',
    certDesc: 'تلتزم كافة أعمالنا بمعايير عالمية معتمدة تضمن أعلى مستويات الجودة والسلامة المهنية والاستدامة البيئية.',
    viewAllCert: 'عرض كافة الشهادات',
    // Pre-Footer CTA
    ctaEyebrow: 'لنبنِ معاً',
    ctaHeading: 'لنبنِ معاً<br>إنجازاً يدوم.',
    ctaSubtitle: 'هل لديك مشروع قيد التخطيط؟ يسعدنا مناقشة سبل التعاون وكيف تساهم قمم الإنتاج في تنفيذه باحترافية وتميز.',
    discussProject: 'ابدأ مشروعك الآن',
    // Footer
    footerMotto: 'تقديم حلول إنشائية وترابية موثوقة ومستدامة لمستقبل أفضل.',
    quickLinks: 'روابط سريعة',
    ourServices: 'الخدمات ونطاق العمل',
    contactUs: 'تواصل معنا',
    rightsReserved: 'جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    backToProjects: '← العودة إلى كافة المشاريع',
    backToServices: '← العودة إلى كافة الخدمات',
    expandPhotoPrompt: 'اضغط لتكبير الصورة ملء الشاشة',
    clientSlotTitle: 'مساحة صور ومستندات العميل عالية الدقة',
    clientSlotDesc: 'سيتم ربط الصور الفوتوغرافية الإضافية تلقائياً من خلال النظام الخلفي.'
  }
};

const t = () => T[lang];

// ==========================================================================
// HEADER COMPONENT (Transparent over Hero -> Solid Midnight Blue on Scroll)
// ==========================================================================
function renderHeader() {
  const navItems = [
    { href: '/', label: t().nav.home },
    { href: '/about/', label: t().nav.about },
    { href: '/services/', label: t().nav.capabilities },
    { href: '/equipments/', label: t().nav.fleet },
    { href: '/projects/', label: t().nav.projects },
    { href: '/work-in-action/', label: t().nav.action, isSpecial: true },
    { href: '/contact/', label: t().nav.contact }
  ];

  return `
    <header class="site-header" id="site-header">
      <div class="wrap nav-shell">
        <a class="brand" href="/" aria-label="QMAM Contracting">
          <img class="brand-mark" src="${A}qimam-mark.png" alt="QMAM Logo" width="42" height="46">
          <div class="brand-type">
            <strong>QMAM</strong>
            <small>BUILDING INFRASTRUCTURE</small>
          </div>
        </a>

        <nav class="main-nav" id="main-nav-menu" aria-label="Main Navigation">
          ${navItems
            .map((item) => {
              const active = item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href.replace(/\/$/, ''));
              const cls = `${active ? 'active' : ''} ${item.isSpecial ? 'highlight-nav' : ''}`;
              return `<a href="${item.href}" class="${cls.trim()}">${item.label}</a>`;
            })
            .join('')}
          <div class="mobile-nav-footer">
            <a class="btn-gold" href="/contact/" style="width: 100%; justify-content: center; text-align: center; margin-top: 6px;">
              ${t().startProject} <span>↗</span>
            </a>
          </div>
        </nav>
        <div class="menu-backdrop" id="menu-backdrop"></div>

        <div class="nav-actions">
          <button class="lang-switch" id="lang-toggle-btn" type="button" aria-label="Toggle language">
            ${ar() ? 'EN' : 'عربي'}
          </button>
          <a class="btn-gold" href="/contact/">
            ${t().startProject} <span>↗</span>
          </a>
          <button class="menu-toggle" id="menu-toggle-btn" type="button" aria-label="Open Navigation Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

// ==========================================================================
// FOOTER COMPONENT
// ==========================================================================
function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-columns-grid">
          <div class="footer-brand-info">
            <a class="brand" href="/" style="display: inline-flex;">
              <img class="brand-mark" src="${A}qimam-mark.png" alt="QMAM Logo" width="42" height="46">
              <div class="brand-type">
                <strong>QMAM</strong>
                <small>BUILDING INFRASTRUCTURE</small>
              </div>
            </a>
            <p>${t().footerMotto}</p>
            <div class="footer-socials">
              <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
              <a href="#" class="social-icon" aria-label="YouTube">▶</a>
              <a href="#" class="social-icon" aria-label="Twitter">𝕏</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>${t().quickLinks}</h4>
            <div class="footer-nav-list">
              <a href="/">${t().nav.home}</a>
              <a href="/about/">${t().nav.about}</a>
              <a href="/services/">${t().nav.capabilities}</a>
              <a href="/equipments/">${t().nav.fleet}</a>
              <a href="/projects/">${t().nav.projects}</a>
              <a href="/work-in-action/">${t().nav.action}</a>
              <a href="/contact/">${t().nav.contact}</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>${t().ourServices}</h4>
            <div class="footer-nav-list">
              <a href="/services/site-preparation/">${L('Site Preparation & Earthworks', 'تهيئة المواقع والحفر')}</a>
              <a href="/services/roads-asphalting/">${L('Roads & Asphalt Paving', 'سفلتة وإنشاء الطرق')}</a>
              <a href="/services/excavation-rock-cutting/">${L('Excavation & Rock Cutting', 'القطع الصخري والتكسير')}</a>
              <a href="/services/mining-quarry/">${L('Crushing, Quarry & Backfill', 'المحاجر والردم')}</a>
              <a href="/services/pipelines-power/">${L('Utilities & Stormwater', 'الشبكات وتصريف السيول')}</a>
              <a href="/services/landscape-irrigation/">${L('Landscaping & Irrigation', 'تنسيق المواقع والري')}</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>${t().contactUs}</h4>
            <div class="footer-contact-details">
              <p>📍 ${L('Riyadh, Kingdom of Saudi Arabia', 'الرياض، المملكة العربية السعودية')}</p>
              <p>📞 <a href="tel:+966505606116" dir="ltr">+966 50 560 6116</a></p>
              <p>📞 <a href="tel:+966509234001" dir="ltr">+966 50 923 4001</a></p>
              <p>✉️ <a href="mailto:info@qemam-alentaj.sa">info@qemam-alentaj.sa</a></p>
              <a class="btn-gold" href="/contact/" style="margin-top: 10px; width: fit-content; padding: 10px 22px;">
                ${t().startProject} <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-legal-bar">
          <span>© ${new Date().getFullYear()} QMAM (Qimam Al-Intaj Contracting Co. Ltd.) · ${t().rightsReserved}</span>
          <div style="display: flex; gap: 20px;">
            <a href="#">${t().privacyPolicy}</a>
            <a href="#">${t().termsOfService}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ==========================================================================
// 1. MASTER HOMEPAGE IMPLEMENTATION
// ==========================================================================
function renderHomePage() {
  const featured = projectsData[0]; // King Salman Park Al Yamama

  return `
    <!-- SECTION 1: CINEMATIC HERO (Full-Resolution 1920x1080 Photography with 3 Auto-scrolling Showcase Screens) -->
    <section class="hero-cinematic">
      <div class="hero-cinematic-bg">
        <img 
          src="${A}hero-cinematic.jpg" 
          alt="Cinematic Earthmoving and Heavy Excavators at Golden Hour" 
          width="1920" 
          height="1080" 
          loading="eager" 
          fetchpriority="high"
        >
      </div>
      <div class="hero-cinematic-overlay"></div>
      
      <div class="wrap" style="position: relative; z-index: 2;">
        <div class="hero-cinematic-grid">
          <div class="hero-cinematic-content">
            <div class="eyebrow">${t().heroEyebrow}</div>
            <h1>${t().heroTitle}</h1>
            <p>${t().heroSubtitle}</p>
            <div class="hero-cinematic-actions">
              <a class="btn-gold" href="/projects/">
                ${t().exploreProjects} <span>↗</span>
              </a>
              <a class="btn-ghost-white" href="/services/">
                ${t().ourCapabilities} <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-bottom-bar">
        <div class="wrap hero-bottom-inner">
          <div class="scroll-indicator">
            <span>↓</span> ${t().scrollToExplore}
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- SECTION 2: COMPANY IMPACT AND STATISTICS STRIP -->
    <section class="metrics-strip reveal-on-scroll">
      <div class="wrap">
        <div class="metrics-grid">
          <div class="metric-item">
            <div class="metric-icon">🚜</div>
            <div class="metric-number">${t().metricFleet}</div>
            <div class="metric-label">${t().metricFleetLabel}</div>
          </div>
          <div class="metric-item">
            <div class="metric-icon">👑</div>
            <div class="metric-number">${t().metricClass}</div>
            <div class="metric-label">${t().metricClassLabel}</div>
          </div>
          <div class="metric-item">
            <div class="metric-icon">🇸🇦</div>
            <div class="metric-number">2017</div>
            <div class="metric-label">${L('Established in Riyadh', 'سنة التأسيس بالرياض')}</div>
          </div>
          <div class="metric-item">
            <div class="metric-icon">🏗️</div>
            <div class="metric-number">${t().metricProjects}</div>
            <div class="metric-label">${t().metricProjectsLabel}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: COMPANY OVERVIEW ("Built for the Scale of Ambition.") -->
    <section class="section">
      <div class="wrap">
        <div class="about-hero-grid reveal-on-scroll">
          <div class="about-hero-text">
            <div class="eyebrow">${t().aboutEyebrow}</div>
            <h2>${t().aboutHeading}</h2>
            <p>${t().aboutText}</p>
            <a class="btn-gold" href="/about/">
              ${t().readMoreAbout} <span>↗</span>
            </a>
          </div>

          <div class="about-hero-media">
            <img 
              src="${A}about-civil-earthworks.jpg" 
              alt="QMAM Mega Earthworks and Civil Infrastructure Operations" 
              loading="lazy" 
              width="1618" 
              height="1080"
            >
            <div class="vision-card-overlay">
              <div>
                <h4>${t().ourVision}</h4>
                <p>${t().visionText}</p>
              </div>
              <a class="btn-circle-gold" href="/about/" aria-label="View Vision">↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: SERVICES AND SCOPE (Midnight Blue Background — 3 Columns) -->
    <section class="section section-midnight">
      <div class="wrap">
        <div class="section-head-split">
          <div class="left-col">
            <div class="eyebrow">${t().capEyebrow}</div>
            <h2 class="section-title">${t().capHeading}</h2>
          </div>
          <div class="right-col">
            <p class="section-desc">${t().capDesc}</p>
            <a class="btn-gold" href="/services/">
              ${t().viewAllCap} <span>↗</span>
            </a>
          </div>
        </div>

        <div class="capabilities-grid reveal-on-scroll">
          ${servicesData.slice(0, 6).map((s) => `
            <a class="capability-card" href="/services/${s.slug}/">
              <div class="capability-media">
                <img 
                  src="${asset(s.image)}" 
                  alt="${L(s.titleEn, s.titleAr)}" 
                  loading="lazy" 
                  width="800" 
                  height="500"
                >
              </div>
              <div class="capability-content">
                <div class="capability-info">
                  <span class="capability-icon">${s.icon}</span>
                  <h3>${L(s.titleEn, s.titleAr)}</h3>
                </div>
                <div class="btn-circle-gold">↗</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 5: FEATURED PROJECT SHOWCASE -->
    <section class="section">
      <div class="wrap">
        <div class="featured-project-card reveal-on-scroll">
          <div class="featured-project-media">
            <img 
              src="${asset(featured.image)}" 
              alt="${L(featured.titleEn, featured.titleAr)}" 
              loading="lazy" 
              width="1600" 
              height="1000"
            >
            <span class="featured-badge">${t().featEyebrow}</span>
            <a class="play-video-trigger" href="/work-in-action/" aria-label="Play site video">▶</a>
          </div>

          <div class="featured-project-details">
            <div class="eyebrow">${t().featEyebrow}</div>
            <h3>${L(featured.titleEn, featured.titleAr)}</h3>
            <div class="featured-project-loc">📍 ${L(featured.location, featured.locationAr)}</div>
            <p>${L(featured.twoLineDescEn, featured.twoLineDescAr)}</p>

            <div class="featured-stats-row">
              <div class="featured-stat">
                <strong>${featured.metricA}</strong>
                <span>${L('Cubic Meters', 'أمتار مكعبة')}</span>
              </div>
              <div class="featured-stat">
                <strong>${featured.metricB}</strong>
                <span>${L('Duration', 'المدة')}</span>
              </div>
              <div class="featured-stat">
                <strong>${featured.metricC}</strong>
                <span>${L('Scope', 'المرحلة')}</span>
              </div>
            </div>

            <div class="featured-actions">
              <a class="btn-gold" href="/projects/${featured.slug}/">
                ${t().viewProjectDetails} <span>↗</span>
              </a>
              <div class="carousel-controls-group">
                <button class="carousel-btn" aria-label="Previous project">←</button>
                <button class="carousel-btn" aria-label="Next project">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: HEAVY EQUIPMENT FLEET -->
    <section class="section section-warm-sand">
      <div class="wrap">
        <div class="section-head-split">
          <div class="left-col">
            <div class="eyebrow">${t().fleetEyebrow}</div>
            <h2 class="section-title">${t().fleetHeading}</h2>
          </div>
          <div class="right-col">
            <p class="section-desc">${t().fleetDesc}</p>
            <a class="btn-outline-dark" href="/equipments/">
              ${t().viewOurFleet} <span>↗</span>
            </a>
          </div>
        </div>

        <div class="equipment-showcase-grid reveal-on-scroll">
          ${[equipmentData[0], equipmentData[6], equipmentData[4], equipmentData[3]].map((eq) => `
            <div class="fleet-unit-card">
              <div class="fleet-unit-media">
                <span class="unit-tag">${eq.count} ${L('Units', 'آلية')}</span>
                <img 
                  src="${asset(eq.image)}" 
                  alt="${L(eq.nameEn, eq.nameAr)}" 
                  loading="lazy" 
                  width="600" 
                  height="400"
                >
              </div>
              <div class="fleet-unit-body">
                <h4>${L(eq.nameEn, eq.nameAr)}</h4>
                <a class="btn-circle-gold" href="/equipments/" aria-label="Equipment fleet">↗</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 7: PROJECT PORTFOLIO ("Work on the Ground.") -->
    <section class="section">
      <div class="wrap">
        <div class="section-head-split">
          <div class="left-col">
            <div class="eyebrow">${t().projectsEyebrow}</div>
            <h2 class="section-title">${t().projectsHeading}</h2>
          </div>
          <div class="right-col">
            <p class="section-desc">${t().projectsDesc}</p>
            <a class="btn-gold" href="/projects/">
              ${t().viewAllProjects} <span>↗</span>
            </a>
          </div>
        </div>

        <div class="projects-portfolio-grid reveal-on-scroll">
          ${projectsData.slice(0, 4).map((p) => `
            <a class="portfolio-card" href="/projects/${p.slug}/">
              <div class="portfolio-media">
                <img 
                  src="${asset(p.image)}" 
                  alt="${L(p.titleEn, p.titleAr)}" 
                  loading="lazy" 
                  width="800" 
                  height="500"
                >
              </div>
              <div class="portfolio-body">
                <h4>${L(p.titleEn, p.titleAr)}</h4>
                <span class="portfolio-loc">📍 ${L(p.location, p.locationAr)}</span>
                <div class="portfolio-footer">
                  <span>${p.year}</span>
                  <div class="btn-circle-gold">↗</div>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 8: PARTNERS AND CERTIFICATIONS -->
    <section class="section" style="padding-top: 40px; padding-bottom: 90px; background: var(--warm-white);">
      <div class="wrap">
        <!-- Partners in Progress -->
        <div class="section-head center">
          <div class="eyebrow">${t().partnersEyebrow}</div>
          <h2 class="section-title">${t().partnersHeading}</h2>
        </div>

        <div class="partners-grid-row">
          ${clientsList.slice(0, 6).map((c) => `
            <div class="partner-logo-box" title="${c.name}">
              <img src="${A}client-${c.id}.png" alt="${c.name}" loading="lazy" width="160" height="70">
            </div>
          `).join('')}
        </div>

        <!-- Standards Behind Every Delivery (Certifications) -->
        <div class="certifications-split">
          <div>
            <div class="eyebrow">${t().certEyebrow}</div>
            <h2 class="section-title">${t().certHeading}</h2>
            <p class="section-desc">${t().certDesc}</p>
            <a class="btn-gold" href="/about/" style="margin-top: 24px;">
              ${t().viewAllCert} <span>↗</span>
            </a>
          </div>

          <div class="cert-cards-row">
            <div class="cert-badge-card">
              <img src="${A}iso-9001.png" alt="ISO 9001 Certificate" loading="lazy" width="400" height="500">
              <h4>ISO 9001:2015</h4>
              <p>${L('Quality Management', 'إدارة الجودة الشاملة')}</p>
            </div>
            <div class="cert-badge-card">
              <img src="${A}iso-14001.png" alt="ISO 14001 Certificate" loading="lazy" width="400" height="500">
              <h4>ISO 14001:2015</h4>
              <p>${L('Environmental Management', 'الإدارة البيئية المعتمدة')}</p>
            </div>
            <div class="cert-badge-card">
              <img src="${A}iso-45001.png" alt="ISO 45001 Certificate" loading="lazy" width="400" height="500">
              <h4>ISO 45001:2018</h4>
              <p>${L('Occupational Health & Safety', 'الصحة والسلامة المهنية')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: PRE-FOOTER CTA ("Let's Build Something Lasting.") -->
    <section class="pre-footer-cta">
      <div class="cta-bg-image">
        <img 
          src="${A}action-night-shift.jpg" 
          alt="Active 24/7 Mega Earthworks" 
          loading="lazy" 
          width="1920" 
          height="1080"
        >
      </div>
      <div class="cta-overlay-gradient"></div>

      <div class="wrap">
        <div class="cta-content-box">
          <div class="eyebrow" style="color: var(--sand-gold);">${t().ctaEyebrow}</div>
          <h2>${t().ctaHeading}</h2>
          <p>${t().ctaSubtitle}</p>
          <a class="btn-gold" href="/contact/">
            ${t().discussProject} <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 2. ABOUT US PAGE
// ==========================================================================
function renderAboutPage() {
  return `
    <section class="page-hero">
      <div class="page-hero-image">
        <img src="${A}salman-park.png" alt="About QMAM" width="1600" height="900">
      </div>
      <div class="page-hero-shade"></div>
      <div class="wrap page-hero-inner">
        <div class="eyebrow">${t().nav.about}</div>
        <h1>${L('Built for the Scale of National Ambition', 'إمكانات تواكب حجم الطموح الوطني')}</h1>
        <p>${L('Founded in Riyadh in 2017, QMAM is a 1st-degree classified general contractor executing mega earthworks, infrastructure, and engineering projects across Saudi Arabia.', 'تأسست شركة قمم الإنتاج في الرياض عام 2017 وهي مقاول مصنف بالدرجة الأولى ينفذ كبرى الأعمال الترابية ومشاريع البنية التحتية بالمملكة.')}</p>
      </div>
    </section>

    <!-- Executive Leadership & CEO Profile -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">EXECUTIVE LEADERSHIP</div>
          <h2 class="section-title">${L('Visionary Guidance & Strategic Delivery', 'القيادة التنفيذية والرؤية المستقبلية')}</h2>
        </div>

        <div class="ceo-card-premium">
          <div class="ceo-photo-container">
            <img src="${A}chairman.jpg" alt="Sanahat bin Zaid Al-Otaibi" width="800" height="1000">
          </div>
          <div class="ceo-narrative-container">
            <div class="eyebrow">${L('Owner & Chairman', 'المالك ورئيس مجلس الإدارة')}</div>
            <h2>${L('Sanahat bin Zaid Al-Otaibi', 'صنهات بن زيد العتيبي')}</h2>
            <div class="ceo-role-title">${L('Owner & Chairman | QMAM Contracting Co. Ltd.', 'المالك ورئيس مجلس الإدارة | شركة قمم الإنتاج للمقاولات المحدودة')}</div>
            <p>${L('Sanahat bin Zaid Al-Otaibi is the Owner and Chairman of QMAM Contracting Co. Ltd., a Saudi company specializing in earthworks, excavation, backfilling, and infrastructure-related subcontracting services across the Kingdom.', 'صنهات بن زيد العتيبي هو المالك ورئيس مجلس إدارة شركة قمم الإنتاج للمقاولات المحدودة، وهي شركة سعودية متخصصة في أعمال الحفر والردم والتسويات الترابية وخدمات المقاولات المرتبطة بمشاريع البنية التحتية.')}</p>
            <p>${L('A visionary entrepreneur with a forward-thinking approach to business, he leads the company’s strategic direction with a strong emphasis on operational excellence, sustainable growth, and long-term public and private partnerships.', 'وبصفته رائد أعمال يتمتع برؤية طموحة وتوجه استراتيجي نحو المستقبل، يقود التوجهات الاستراتيجية للشركة مع التركيز على التميز التشغيلي والنمو المستدام وبناء شراكات طويلة الأمد.')}</p>
            <p>${L('Under his leadership, QMAM continues to strengthen its position as a reliable subcontracting partner for major infrastructure and gigaprojects, actively contributing to Saudi Vision 2030.', 'وتحت قيادته، تواصل قمم الإنتاج تعزيز مكانتها كشريك موثوق لتنفيذ كبرى مشاريع البنية التحتية في المملكة، مساهمة في تحقيق مستهدفات رؤية 2030.')}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Standards & ISO -->
    <section class="section section-warm-sand">
      <div class="wrap">
        <div class="section-head center">
          <div class="eyebrow">${t().certEyebrow}</div>
          <h2 class="section-title">${t().certHeading}</h2>
          <p class="section-desc">${t().certDesc}</p>
        </div>

        <div class="cert-cards-row" style="margin-top: 40px;">
          <div class="cert-badge-card">
            <img src="${A}iso-9001.png" alt="ISO 9001" loading="lazy" width="400" height="500">
            <h4>ISO 9001:2015</h4>
            <p>${L('Quality Management System', 'نظام إدارة الجودة المعتمد')}</p>
          </div>
          <div class="cert-badge-card">
            <img src="${A}iso-14001.png" alt="ISO 14001" loading="lazy" width="400" height="500">
            <h4>ISO 14001:2015</h4>
            <p>${L('Environmental Management System', 'نظام الإدارة البيئية المعتمد')}</p>
          </div>
          <div class="cert-badge-card">
            <img src="${A}iso-45001.png" alt="ISO 45001" loading="lazy" width="400" height="500">
            <h4>ISO 45001:2018</h4>
            <p>${L('Occupational Health & Safety', 'نظام الصحة والسلامة المهنية')}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pre-Footer CTA -->
    <section class="pre-footer-cta">
      <div class="cta-bg-image"><img src="${A}action-night-shift.jpg" alt="" width="1920" height="1080"></div>
      <div class="cta-overlay-gradient"></div>
      <div class="wrap">
        <div class="cta-content-box">
          <div class="eyebrow" style="color: var(--sand-gold);">${t().ctaEyebrow}</div>
          <h2>${t().ctaHeading}</h2>
          <p>${t().ctaSubtitle}</p>
          <a class="btn-gold" href="/contact/">
            ${t().discussProject} <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 3. CAPABILITIES / SERVICES PAGE
// ==========================================================================
function renderServicesPage() {
  return `
    <section class="page-hero">
      <div class="page-hero-image">
        <img src="${A}uae-highway-paving.jpg" alt="Capabilities" width="1600" height="900">
      </div>
      <div class="page-hero-shade"></div>
      <div class="wrap page-hero-inner">
        <div class="eyebrow">${t().nav.capabilities}</div>
        <h1>${t().capHeading}</h1>
        <p>${t().capDesc}</p>
      </div>
    </section>

    <section class="section section-midnight">
      <div class="wrap">
        <div class="capabilities-grid">
          ${servicesData.map((s) => `
            <a class="capability-card" href="/services/${s.slug}/">
              <div class="capability-media">
                <img src="${asset(s.image)}" alt="${L(s.titleEn, s.titleAr)}" loading="lazy" width="800" height="500">
              </div>
              <div class="capability-content">
                <div class="capability-info">
                  <span class="capability-icon">${s.icon}</span>
                  <div>
                    <h3>${L(s.titleEn, s.titleAr)}</h3>
                    <p style="font-size: 13px; color: #9bb1c2; margin-top: 4px;">${L(s.summaryEn, s.summaryAr)}</p>
                  </div>
                </div>
                <div class="btn-circle-gold">↗</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Pre-Footer CTA -->
    <section class="pre-footer-cta">
      <div class="cta-bg-image"><img src="${A}action-night-shift.jpg" alt="" width="1920" height="1080"></div>
      <div class="cta-overlay-gradient"></div>
      <div class="wrap">
        <div class="cta-content-box">
          <div class="eyebrow">${t().ctaEyebrow}</div>
          <h2>${t().ctaHeading}</h2>
          <p>${t().ctaSubtitle}</p>
          <a class="btn-gold" href="/contact/">${t().discussProject} <span>↗</span></a>
        </div>
      </div>
    </section>
  `;
}

// Service Detail Page with Main Execution Steps and Safety Measures
function renderServiceDetailPage(service) {
  const steps = ar() ? service.stepsAr : service.stepsEn;
  const safety = ar() ? service.safetyAr : service.safetyEn;

  return `
    <!-- 1. Service Hero -->
    <section class="page-hero">
      <div class="page-hero-image">
        <img src="${asset(service.image)}" alt="${L(service.titleEn, service.titleAr)}" width="1600" height="900">
      </div>
      <div class="page-hero-shade"></div>
      <div class="wrap page-hero-inner">
        <div class="action-breadcrumb" style="margin-bottom: 14px;">
          <a href="/" style="color: var(--sand-gold); text-decoration: none;">${t().nav.home}</a>
          <span style="color: rgba(255,255,255,0.4); margin: 0 8px;">/</span>
          <a href="/services/" style="color: rgba(255,255,255,0.7); text-decoration: none;">${t().nav.capabilities}</a>
          <span style="color: rgba(255,255,255,0.4); margin: 0 8px;">/</span>
          <span style="color: var(--pure-white);">${L(service.titleEn, service.titleAr)}</span>
        </div>
        <div class="eyebrow" style="color: var(--sand-gold);">${L('SPECIALIZED CAPABILITY', 'القدرات الهندسية المتخصصة')}</div>
        <h1>${L(service.titleEn, service.titleAr)}</h1>
        <p>${L(service.summaryEn, service.summaryAr)}</p>
      </div>
    </section>

    <!-- 2. Overview & Engineering Scope -->
    <section class="section">
      <div class="wrap">
        <div style="margin-bottom: 28px;">
          <a class="btn-outline-dark" href="/services/">${t().backToServices}</a>
        </div>

        <div class="service-overview-split">
          <div class="service-overview-info">
            <div class="eyebrow">${L('ENGINEERING METHODOLOGY', 'المنهجية الهندسية والمعايير')}</div>
            <h2 class="section-title">${L(service.titleEn, service.titleAr)}</h2>
            <p class="section-desc" style="margin-bottom: 24px;">${L(service.summaryEn, service.summaryAr)}</p>

            <div class="service-specs-box">
              <div class="service-specs-header">
                <span style="font-size: 22px;">📐</span>
                <strong>${L('Technical Execution Standards', 'معايير التنفيذ الهندسي المعتمدة')}</strong>
              </div>
              <p>${L(service.specsEn, service.specsAr)}</p>
            </div>

            <div style="margin-top: 28px; display: flex; gap: 14px; flex-wrap: wrap;">
              <a class="btn-gold" href="/contact/">${t().discussProject} <span>↗</span></a>
              <a class="btn-outline-dark" href="/equipments/">${t().nav.fleet} (378+) <span>↗</span></a>
            </div>
          </div>

          <div class="service-overview-media">
            <img src="${asset(service.image)}" alt="${L(service.titleEn, service.titleAr)}" loading="eager" width="800" height="500">
            <div class="service-media-badge">
              <span>${service.icon}</span> ${L(service.titleEn, service.titleAr)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. MAIN STEPS (Sequential Phased Methodology) -->
    <section class="section service-workflow-section">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow">${L('EXECUTION WORKFLOW', 'مراحل وخطوات التنفيذ الميداني')}</div>
          <h2 class="section-title">${L('Main Execution Steps', 'الخطوات الرئيسية لتنفيذ الخدمة')}</h2>
          <p class="section-desc">
            ${L('Structured step-by-step phased methodology deployed by our project managers, survey teams, and equipment operators.',
                'تسلسل هندسي تنفيذي معتمد يُشرف عليه مهندسونا ومساحونا الميدانيون وفق أعلى المواصفات.')}
          </p>
        </div>

        <div class="service-steps-grid">
          ${steps.map((st, i) => `
            <div class="service-step-card">
              <div class="step-card-header">
                <div class="step-num-badge">0${i + 1}</div>
                <span class="step-phase-label">${L(`PHASE 0${i + 1}`, `المرحلة 0${i + 1}`)}</span>
              </div>
              <h4>${st}</h4>
              <div class="step-card-footer">
                <span class="step-check">✓</span>
                <small>${L('Approved Site Workflow', 'إجراء تنفيذي معتمد')}</small>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 4. SAFETY MEASURES (Health, Safety & Environment - HSE) -->
    <section class="section service-safety-section">
      <div class="wrap">
        <div class="section-head">
          <div class="eyebrow" style="color: var(--sand-gold);">${L('HEALTH, SAFETY & ENVIRONMENT (HSE)', 'السلامة والصحة المهنية والبيئة')}</div>
          <h2 class="section-title" style="color: var(--pure-white);">${L('Safety Measures & Site Protocols', 'تدابير السلامة وإدارة المخاطر بالموقع')}</h2>
          <p class="section-desc" style="color: #9bb1c2;">
            ${L('Comprehensive risk mitigation and safety protocols in full alignment with Saudi Vision 2030 project standards and ISO 45001:2018.',
                'إجراءات وقائية صارمة متوافقة مع متطلبات كبرى المشاريع بالمملكة ومعايير الأيزو 45001 لإدارة السلامة والصحة المهنية.')}
          </p>
        </div>

        <div class="service-safety-grid">
          ${safety.map((sf) => `
            <div class="service-safety-card">
              <div class="safety-card-icon">🛡️</div>
              <div class="safety-card-content">
                <h4>${sf}</h4>
                <span>${L('Mandatory Safety Measure', 'إجراء وقائي إلزامي')}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 5. Pre-Footer Consultation CTA -->
    <section class="pre-footer-cta">
      <div class="cta-bg-image"><img src="${A}action-night-shift.jpg" alt="" width="1920" height="1080"></div>
      <div class="cta-overlay-gradient"></div>
      <div class="wrap">
        <div class="cta-content-box">
          <div class="eyebrow">${t().ctaEyebrow}</div>
          <h2>${t().ctaHeading}</h2>
          <p>${t().ctaSubtitle}</p>
          <a class="btn-gold" href="/contact/">${t().discussProject} <span>↗</span></a>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 4. FLEET / EQUIPMENTS PAGE (All 14 Types, 378 Units)
// ==========================================================================
function renderEquipmentsPage() {
  return `
    <section class="page-hero">
      <div class="page-hero-image"><img src="${A}hero-cinematic.jpg" alt="" width="1920" height="1080"></div>
      <div class="page-hero-shade"></div>
      <div class="wrap page-hero-inner">
        <div class="eyebrow">${t().nav.fleet}</div>
        <h1>${t().fleetHeading} · 378+ ${L('Units', 'آلية')}</h1>
        <p>${t().fleetDesc}</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="fleet-filter-bar" id="fleet-filter-bar">
          <button class="fleet-filter-btn active" data-filter="all">${L('All Equipment (378)', 'كافة الأسطول (378)')}</button>
          <button class="fleet-filter-btn" data-filter="earthmoving">${L('Excavation & Earthmoving', 'الحفر والأعمال الترابية')}</button>
          <button class="fleet-filter-btn" data-filter="haulage">${L('Haulage & Dump Trucks', 'القلابات والنقل')}</button>
          <button class="fleet-filter-btn" data-filter="paving">${L('Road Paving & Milling', 'السفلتة والرصف')}</button>
          <button class="fleet-filter-btn" data-filter="crushing">${L('Crushing & Processing', 'الكسارات والمحاجر')}</button>
          <button class="fleet-filter-btn" data-filter="support">${L('Support & Logistics', 'المساندة والتناكر')}</button>
        </div>

        <div class="equipment-grid-full" id="fleet-units-grid">
          ${equipmentData.map((eq) => `
            <div class="equipment-card-full" data-category="${eq.category}">
              <div class="equipment-media-full">
                <span class="unit-tag">${eq.count} ${L('Units', 'آلية')}</span>
                <img src="${asset(eq.image)}" alt="${L(eq.nameEn, eq.nameAr)}" loading="lazy" width="600" height="400">
              </div>
              <div class="equipment-body-full">
                <h3>${L(eq.nameEn, eq.nameAr)}</h3>
                <div class="equipment-specs-full">${L(eq.specsEn, eq.specsAr)}</div>
                <p>${L('Maintained under strict OEM standards for 99% jobsite uptime.', 'صيانة دورية معتمدة وفق أعلى مواصفات المصنع لضمان الجاهزية القصوى.')}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// 5. WORK IN ACTION PAGE
// ==========================================================================
function renderWorkInActionPage() {
  const playlistItems = [
    {
      id: 'pl-1',
      active: true,
      videoImg: `${A}action-night-shift.jpg`,
      thumbImg: `${A}project-featured-park.jpg`,
      titleEn: 'Large Scale Earthworks in Riyadh',
      titleAr: 'أعمال ترابية واسعة النطاق في الرياض',
      duration: '02:36',
      locationEn: '📍 Riyadh, KSA',
      locationAr: '📍 الرياض، المملكة العربية السعودية'
    },
    {
      id: 'pl-2',
      active: false,
      videoImg: `${A}uae-highway-paving.jpg`,
      thumbImg: `${A}uae-highway-paving.jpg`,
      titleEn: 'Asphalt Paving Operations',
      titleAr: 'عمليات فرش وسفلتة الطرق السريعة',
      duration: '01:48',
      locationEn: '📍 Riyadh, KSA',
      locationAr: '📍 الرياض، المملكة العربية السعودية'
    },
    {
      id: 'pl-3',
      active: false,
      videoImg: `${A}cta-sunset.jpg`,
      thumbImg: `${A}cta-sunset.jpg`,
      titleEn: 'Material Loading & Haulage',
      titleAr: 'تحميل المواد ونقل الأتربة بالقلابات',
      duration: '02:10',
      locationEn: '📍 Riyadh, KSA',
      locationAr: '📍 الرياض، المملكة العربية السعودية'
    }
  ];

  const categories = [
    { id: 'all', labelEn: 'All', labelAr: 'الكل' },
    { id: 'earthworks', labelEn: 'Earthworks', labelAr: 'الأعمال الترابية' },
    { id: 'roads', labelEn: 'Roads & Asphalt', labelAr: 'الطرق والأسفلت' },
    { id: 'excavation', labelEn: 'Excavation & Rock Cutting', labelAr: 'الحفر وقطع الصخور' },
    { id: 'infrastructure', labelEn: 'Infrastructure', labelAr: 'البنية التحتية' },
    { id: 'utilities', labelEn: 'Utilities & Pipelines', labelAr: 'شبكات الأنابيب والمرافق' },
    { id: 'landscaping', labelEn: 'Landscaping', labelAr: 'تنسيق المواقع' },
    { id: 'equipment', labelEn: 'Equipment Operations', labelAr: 'تشغيل المعدات' }
  ];

  const operationsGallery = [
    {
      img: 'project-qiddiya-cut.jpg',
      category: 'excavation',
      categoryEn: 'EXCAVATION & ROCK CUTTING',
      categoryAr: 'الحفر وقطع الصخور',
      titleEn: 'Excavation & Rock Cutting at Qiddiya',
      titleAr: 'حفر وقطع الصخور بمشروع القدية',
      locationEn: '📍 Riyadh, KSA',
      locationAr: '📍 القدية، الرياض'
    },
    {
      img: 'uae-highway-paving.jpg',
      category: 'roads',
      categoryEn: 'ROADS & ASPHALT',
      categoryAr: 'الطرق والأسفلت',
      titleEn: 'Asphalt Paving with Multi-Unit Operation',
      titleAr: 'فرش الأسفلت بواسطة قطار رصف متكامل',
      locationEn: '📍 Riyadh, KSA',
      locationAr: '📍 الرياض، المملكة العربية السعودية'
    },
    {
      img: 'action-night-shift.jpg',
      category: 'earthworks',
      categoryEn: 'EARTHWORKS',
      categoryAr: 'الأعمال الترابية',
      titleEn: 'Night Shift Operations under Floodlights',
      titleAr: 'عمليات الوردية الليلية تحت كشافات الإضاءة',
      locationEn: '📍 Riyadh, KSA',
      locationAr: '📍 الرياض، المملكة العربية السعودية'
    },
    {
      img: 'salman-park.png',
      category: 'landscaping',
      categoryEn: 'LANDSCAPING',
      categoryAr: 'تنسيق المواقع والتسوية',
      titleEn: 'Landscaping & Grading at King Salman Park',
      titleAr: 'تسوية وتشكيل تضاريس حديقة الملك سلمان',
      locationEn: '📍 Riyadh, KSA',
      locationAr: '📍 حديقة الملك سلمان، الرياض'
    },
    {
      img: 'service-pipeline-utility.jpg',
      category: 'utilities',
      categoryEn: 'UTILITIES & PIPELINES',
      categoryAr: 'شبكات الأنابيب والمرافق',
      titleEn: 'Utilities & Pipeline Installation',
      titleAr: 'تركيب وتمديد خطوط الأنابيب والمرافق',
      locationEn: '📍 Riyadh, KSA',
      locationAr: '📍 الرياض، المملكة العربية السعودية'
    },
    {
      img: 'cta-sunset.jpg',
      category: 'equipment',
      categoryEn: 'EQUIPMENT OPERATIONS',
      categoryAr: 'تشغيل المعدات والنقل',
      titleEn: 'Material Loading & Haulage Operations',
      titleAr: 'عمليات تحميل ونقل وتفريغ نواتج الحفر',
      locationEn: '📍 Riyadh, KSA',
      locationAr: '📍 الرياض، المملكة العربية السعودية'
    }
  ];

  return `
    <!-- 1. Cinematic Hero Section -->
    <section class="action-hero">
      <div class="action-hero-image">
        <img src="${A}action-night-shift.jpg" alt="QMAM Field Operations" width="1920" height="1080">
      </div>
      <div class="action-hero-shade"></div>
      <div class="wrap action-hero-inner">
        <div class="eyebrow" style="color: var(--sand-gold); letter-spacing: 0.16em; font-weight: 800; font-size: 13px; text-transform: uppercase; margin-bottom: 12px;">
          ${L('WORK IN ACTION', 'نبض العمل الميداني والعمليات')}
        </div>
        <h1 style="font-family: var(--font-heading); font-size: clamp(38px, 4.6vw, 64px); font-weight: 800; line-height: 1.1; color: var(--pure-white); margin-bottom: 18px;">
          ${L('Inside Our', 'داخل')} <br><span style="color: var(--sand-gold);">${L('Field Operations.', 'عملياتنا الميدانية.')}</span>
        </h1>
        <p style="font-size: clamp(15.5px, 1.25vw, 18px); color: rgba(255, 255, 255, 0.88); line-height: 1.65; max-width: 680px; margin-bottom: 0;">
          ${L("Experience our machinery, people, and processes in action, delivering real progress across the Kingdom's major infrastructure projects.", 'شاهد آلياتنا ومعداتنا وكوادرنا في الميدان، وهم يصنعون فارقاً حقيقياً وينجزون أضخم مشاريع البنية التحتية بالمملكة.')}
        </p>
        <div class="action-breadcrumb">
          <a href="/">${L('Home', 'الرئيسية')}</a>
          <span>›</span>
          <span style="color: rgba(255,255,255,0.9); font-weight: 600;">${L('Work in Action', 'العمل الميداني')}</span>
        </div>
      </div>
    </section>

    <!-- Main Content Container with Warm White Background -->
    <div style="background: var(--warm-white); padding-top: 50px; padding-bottom: 60px;">
      <div class="wrap">

        <!-- 2. Rebuilt Video Experience (70% / 30% Balanced Grid) -->
        <div class="video-showcase-split">
          <!-- Left Column (70%): Featured Video Display -->
          <div class="video-main-display">
            <img id="action-main-video-img" src="${A}action-night-shift.jpg" alt="Featured Field Operation" width="1280" height="720">
            <span class="video-live-pill">● LIVE SITE CAM</span>

            <!-- Center Play Trigger -->
            <button class="video-center-cta" id="action-main-play-btn" aria-label="Play Featured Video">
              <span class="video-main-play-btn">▶</span>
              <div class="video-center-cta-text">
                <h3 id="action-center-title">${L('Watch Our Operations', 'شاهد عملياتنا')}</h3>
                <span id="action-center-duration">02:36</span>
              </div>
            </button>

            <!-- Bottom Video Info Overlay -->
            <div class="video-overlay-info">
              <div>
                <h3 class="video-overlay-title" id="action-main-video-title">${L('Large Scale Earthworks in Riyadh', 'أعمال ترابية واسعة النطاق في الرياض')}</h3>
                <div class="video-overlay-meta" id="action-main-video-meta">${L('📍 Riyadh, KSA · 4K UHD Feed', '📍 الرياض، المملكة العربية السعودية · بث 4K')}</div>
              </div>
              <span style="background: rgba(0,0,0,0.65); padding: 6px 14px; border-radius: 20px; font-size: 13px; color: #fff; font-weight: 700; border: 1px solid rgba(255,255,255,0.18);" id="action-main-video-duration">02:36</span>
            </div>
          </div>

          <!-- Right Column (30%): Stacked Video Playlist -->
          <div class="video-playlist-column">
            ${playlistItems.map((item) => `
              <div class="video-playlist-card ${item.active ? 'active' : ''}"
                   data-video-img="${item.videoImg}"
                   data-title="${L(item.titleEn, item.titleAr)}"
                   data-duration="${item.duration}"
                   data-location="${L(item.locationEn, item.locationAr)}"
                   role="button"
                   tabindex="0"
                   aria-label="${L(item.titleEn, item.titleAr)}">
                <img src="${item.thumbImg}" alt="${L(item.titleEn, item.titleAr)}" loading="lazy" width="400" height="225">
                <div class="video-playlist-card-play">▶</div>
                <div class="video-playlist-card-overlay">
                  <div class="video-playlist-card-content">
                    <h4>${L(item.titleEn, item.titleAr)}</h4>
                    <span>${item.duration}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Featured Operations Introduction -->
        <div class="operations-intro">
          <div style="color: var(--sand-gold); font-size: 12px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">
            ${L('FEATURED OPERATIONS', 'العمليات الميدانية المميزة')}
          </div>
          <div style="display: grid; grid-template-columns: 1.25fr 1fr; gap: 40px; align-items: flex-end;">
            <h2 style="font-family: var(--font-heading); font-size: clamp(30px, 3.2vw, 44px); font-weight: 800; color: var(--midnight-blue); line-height: 1.2; margin: 0;">
              ${L('On-Ground Machinery in Action.', 'آلياتنا ومعداتنا في الميدان.')}
            </h2>
            <p style="font-size: 15.5px; color: var(--muted-text); line-height: 1.65; margin: 0;">
              ${L('A closer look at our heavy equipment, skilled operators, and ongoing construction activities across major projects in the Kingdom.', 'نظرة مقربة على أسطول معداتنا الثقيلة، ومشغلينا المهرة، وأعمال المقاولات والإنشاءات المتواصلة في كبرى مشاريع المملكة.')}
            </p>
          </div>
        </div>

        <!-- 4. Category Filter Bar -->
        <div class="operations-filter-bar" id="operations-filter-bar">
          ${categories.map((c, i) => `
            <button class="op-filter-pill ${i === 0 ? 'active' : ''}" data-category="${c.id}">
              ${L(c.labelEn, c.labelAr)}
            </button>
          `).join('')}
        </div>

        <!-- 5. Premium Operations Gallery Grid (3 Columns) -->
        <div class="operations-gallery-grid" id="operations-gallery-grid">
          ${operationsGallery.map((item) => `
            <div class="op-gallery-card lightbox-trigger"
                 data-category="${item.category}"
                 data-full-img="${A}${item.img}"
                 data-caption="${L(item.titleEn, item.titleAr)} · ${L(item.locationEn, item.locationAr)}"
                 role="button"
                 tabindex="0">
              <div class="op-gallery-media">
                <img src="${A}${item.img}" alt="${L(item.titleEn, item.titleAr)}" loading="lazy" width="600" height="400">
              </div>
              <div class="op-gallery-body">
                <div class="op-category-tag">${L(item.categoryEn, item.categoryAr)}</div>
                <h3>${L(item.titleEn, item.titleAr)}</h3>
                <div class="op-gallery-footer">
                  <span class="op-location-badge">${L(item.locationEn, item.locationAr)}</span>
                  <div style="width: 36px; height: 36px; border-radius: 50%; background: #f4ede1; display: flex; align-items: center; justify-content: center; color: var(--midnight-blue); font-weight: 800; font-size: 15px; transition: all 0.2s ease;">→</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- 6. Operational Impact Section (Pre-Footer Feature) -->
        <div class="operational-impact-section">
          <div class="operational-impact-grid">
            <div class="operational-impact-text">
              <div style="color: var(--sand-gold); font-size: 11px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase;">
                ${L('SEE OUR CAPABILITIES IN ACTION', 'قدراتنا التشغيلية على أرض الواقع')}
              </div>
              <h2>${L('Turning Plans into Real Progress.', 'نحول المخططات إلى إنجازات واقعية.')}</h2>
              <p>${L('From earthworks and infrastructure to utilities and roads, our teams and machines deliver measurable results on the ground.', 'من الأعمال الترابية وتجهيز البنى التحتية إلى تمديد الشبكات ورصف الطرق، تقدم كوادرنا وآلياتنا نتائج ملموسة ودقيقة في الميدان.')}</p>

              <div class="operational-impact-actions">
                <a href="/projects/" class="btn" style="background: var(--sand-gold); color: var(--midnight-blue); font-weight: 800; padding: 14px 28px; border-radius: var(--radius-pill); text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease; box-shadow: 0 4px 14px rgba(198,165,107,0.35);">
                  ${L('Explore Our Projects', 'استكشف مشاريعنا')} <span>→</span>
                </a>
                <a href="/contact/" class="btn" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.3); color: var(--pure-white); font-weight: 700; padding: 14px 28px; border-radius: var(--radius-pill); text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease;">
                  <span style="font-size: 14px;">📞</span> ${L('Contact Our Team', 'تواصل مع فريقنا')}
                </a>
              </div>

              <div class="operational-impact-metrics">
                <div class="impact-metric-item">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 22px;">🚜</span>
                    <strong>378+</strong>
                  </div>
                  <span>${L('Heavy Machines in Fleet', 'آلية ومعدة ثقيلة بالأسطول')}</span>
                </div>
                <div class="impact-metric-item">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 22px;">🏗️</span>
                    <strong>50+</strong>
                  </div>
                  <span>${L('Ongoing & Completed Projects', 'مشروع قيد التنفيذ ومنجز')}</span>
                </div>
                <div class="impact-metric-item">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 22px;">🏛️</span>
                    <strong>27+</strong>
                  </div>
                  <span>${L('Strategic Mega Projects', 'مشروع عملاق واستراتيجي')}</span>
                </div>
              </div>
            </div>
            <div class="operational-impact-media">
              <img src="${A}cta-sunset.jpg" alt="QMAM Heavy Fleet at Sunset" width="1200" height="800">
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Floating Back-to-Top Button -->
    <button class="back-to-top-btn" id="action-back-to-top" aria-label="${L('Back to Top', 'العودة للأعلى')}">↑</button>

    <!-- Accessible Lightbox Modal -->
    <div class="lightbox-modal" id="site-lightbox-modal" role="dialog" aria-modal="true" aria-hidden="true">
      <div class="lightbox-content-box">
        <button class="lightbox-close-btn" id="site-lightbox-close" aria-label="${L('Close Modal', 'إغلاق النافذة')}">✕</button>
        <img id="site-lightbox-target-img" src="" alt="QMAM Full Resolution View">
        <div class="lightbox-caption-bar">
          <h4 id="site-lightbox-caption-text"></h4>
          <span style="color: var(--sand-gold); font-size: 12px; font-weight: 800; letter-spacing: 0.1em;">QMAM OFFICIAL ARCHIVE</span>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 6. PROJECTS PORTFOLIO PAGE
// ==========================================================================
function renderProjectsPage() {
  return `
    <section class="page-hero">
      <div class="page-hero-image"><img src="${A}salman-park-aerial.png" alt="" width="1600" height="900"></div>
      <div class="page-hero-shade"></div>
      <div class="wrap page-hero-inner">
        <div class="eyebrow">${t().nav.projects}</div>
        <h1>${t().projectsHeading}</h1>
        <p>${t().projectsDesc}</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="projects-portfolio-grid">
          ${projectsData.map((p) => `
            <a class="portfolio-card" href="/projects/${p.slug}/">
              <div class="portfolio-media">
                <img src="${asset(p.image)}" alt="${L(p.titleEn, p.titleAr)}" loading="lazy" width="800" height="500">
              </div>
              <div class="portfolio-body">
                <h4>${L(p.titleEn, p.titleAr)}</h4>
                <span class="portfolio-loc">📍 ${L(p.location, p.locationAr)}</span>
                <p style="font-size: 13.5px; color: var(--muted-text); margin-bottom: 14px; line-height: 1.6;">${L(p.twoLineDescEn, p.twoLineDescAr)}</p>
                <div class="portfolio-footer">
                  <span>${p.year}</span>
                  <div class="btn-circle-gold">↗</div>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 7. DEDICATED PROJECT DETAIL PAGE
function renderProjectDetailPage(project) {
  return `
    <section class="section" style="padding-top: 130px; padding-bottom: 90px;">
      <div class="wrap">
        <div style="margin-bottom: 24px;">
          <a class="btn-outline-dark" href="/projects/">${t().backToProjects}</a>
        </div>

        <div class="project-expanded-hero-photo lightbox-trigger" data-full-img="${asset(project.image)}" data-caption="${L(project.titleEn, project.titleAr)}">
          <img src="${asset(project.image)}" alt="${L(project.titleEn, project.titleAr)}" width="1600" height="900">
          <span class="expand-hint-chip">🔍 ${t().expandPhotoPrompt}</span>
        </div>

        <div style="padding: 30px 0 20px; border-bottom: 1px solid var(--subtle-border);">
          <span style="display: inline-block; background: var(--warm-sand); color: var(--midnight-blue); padding: 6px 16px; border-radius: var(--radius-pill); font-size: 13px; font-weight: 800; margin-bottom: 12px;">
            📅 ${project.year}
          </span>
          <h1 style="font-family: var(--font-heading); font-size: clamp(34px, 4.4vw, 54px); font-weight: 800; color: var(--midnight-blue); margin-bottom: 14px;">
            ${L(project.titleEn, project.titleAr)}
          </h1>

          <p style="font-size: 18px; color: var(--muted-text); line-height: 1.7; max-width: 800px;">
            ${L(project.twoLineDescEn, project.twoLineDescAr)}
          </p>
        </div>

        <div class="project-specs-table-row">
          <div>
            <small>${L('Location', 'الموقع')}</small>
            <strong>📍 ${L(project.location, project.locationAr)}</strong>
          </div>
          <div>
            <small>${L('Client / Partner', 'العميل / الشريك')}</small>
            <strong>🏢 ${L(project.client, project.clientAr)}</strong>
          </div>
          <div>
            <small>${L('Timeline', 'الفترة')}</small>
            <strong>⏱ ${project.year}</strong>
          </div>
          <div>
            <small>${L('Contractor Status', 'درجة التصنيف')}</small>
            <strong>👑 1st Degree (KSA)</strong>
          </div>
        </div>

        <div style="background: var(--pure-white); border: 1px solid var(--subtle-border); border-radius: var(--radius-md); padding: 34px; margin-bottom: 40px;">
          <div class="eyebrow">${L('Scope of Works', 'نطاق الأعمال المعتمد')}</div>
          <h3 style="font-family: var(--font-heading); font-size: 22px; color: var(--midnight-blue); margin: 8px 0 12px;">
            ${L(project.scopeEn, project.scopeAr)}
          </h3>
          <p style="color: var(--muted-text); font-size: 15px; line-height: 1.7;">
            ${L('Executed in accordance with Ministry of Municipalities and Housing standards, ISO 9001 certified QA/QC protocols, and Aramco-grade environmental controls.', 'تم التنفيذ وفقاً لأعلى اشتراطات وزارة البلديات والإسكان، وبروتوكولات الجودة ISO 9001، ومعايير السلامة البيئية المعتمدة.')}
          </p>
        </div>

        <div class="client-dropzone-box">
          <div style="font-size: 34px; margin-bottom: 10px;">📥</div>
          <strong style="font-size: 17px; color: var(--midnight-blue); display: block; margin-bottom: 6px;">${t().clientSlotTitle}</strong>
          <p style="font-size: 13.5px; color: var(--muted-text);">${t().clientSlotDesc}</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div class="lightbox-modal" id="site-lightbox-modal" aria-hidden="true">
      <div class="lightbox-content-box">
        <button class="lightbox-close-btn" id="site-lightbox-close">✕</button>
        <img id="site-lightbox-target-img" src="" alt="">
        <div class="lightbox-caption-bar">
          <h4 id="site-lightbox-caption-text">${L(project.titleEn, project.titleAr)}</h4>
          <span style="color: var(--sand-gold); font-size: 12px; font-weight: 800;">${project.year}</span>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 8. CONTACT PAGE
// ==========================================================================
function renderContactPage() {
  return `
    <section class="page-hero">
      <div class="page-hero-image"><img src="${A}uae-mass-earthworks.jpg" alt="" width="1600" height="900"></div>
      <div class="page-hero-shade"></div>
      <div class="wrap page-hero-inner">
        <div class="eyebrow">${t().nav.contact}</div>
        <h1>${t().contactUs}</h1>
        <p>${L('Connect with our engineering and equipment logistics leadership at our Riyadh Headquarters.', 'تواصل مباشرة مع إدارتنا الهندسية واللوجستية في مقرنا الرئيسي بالرياض.')}</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap contact-form-grid">
        <div>
          <div class="eyebrow">${L('Head Office', 'المقر الرئيسي')}</div>
          <h2 class="section-title" style="margin-bottom: 24px;">${L('Riyadh Headquarters', 'المقر الرئيسي بالرياض')}</h2>

          <div class="contact-card-tile">
            <span style="font-size: 24px;">📍</span>
            <div>
              <small style="color: var(--sand-gold); font-weight: 800; font-size: 11px; text-transform: uppercase;">Location</small>
              <strong>${L('Riyadh, Al Yarmouk District, Al Najah Street, KSA', 'المملكة العربية السعودية، الرياض، حي اليرموك، شارع النجاح')}</strong>
            </div>
          </div>

          <div class="contact-card-tile">
            <span style="font-size: 24px;">📞</span>
            <div>
              <small style="color: var(--sand-gold); font-weight: 800; font-size: 11px; text-transform: uppercase;">Direct Lines</small>
              <strong>
                <a href="tel:+966505606116" dir="ltr">+966 50 560 6116</a><br>
                <a href="tel:+966509234001" dir="ltr">+966 50 923 4001</a>
              </strong>
            </div>
          </div>

          <div class="contact-card-tile">
            <span style="font-size: 24px;">✉️</span>
            <div>
              <small style="color: var(--sand-gold); font-weight: 800; font-size: 11px; text-transform: uppercase;">Official Email</small>
              <strong>
                <a href="mailto:info@qemam-alentaj.sa">info@qemam-alentaj.sa</a><br>
                <a href="mailto:qemamalentaj@gmail.com">qemamalentaj@gmail.com</a>
              </strong>
            </div>
          </div>
        </div>

        <div class="form-styled-card">
          <h3 style="font-family: var(--font-heading); font-size: 24px; color: var(--midnight-blue); margin-bottom: 20px;">
            ${L('Discuss Your Project', 'ناقش تفاصيل مشروعك')}
          </h3>
          <form id="contact-rfq-form">
            <input type="text" name="name" required placeholder="${L('Full Name / Representative', 'الاسم الكريم / ممثل الجهة')}">
            <input type="email" name="email" required placeholder="${L('Business Email', 'البريد الإلكتروني للعمل')}">
            <input type="tel" name="phone" required placeholder="${L('Phone Number', 'رقم الجوال')}">
            <select name="scope">
              <option value="Earthworks & Grading">Earthworks & Mass Grading (الحفر والردم والتسوية)</option>
              <option value="Roads & Asphalting">Roads & Asphalting (سفلتة وإنشاء الطرق)</option>
              <option value="Fleet Mobilization">Equipment Fleet Mobilization (استنفار وتأجير المعدات)</option>
              <option value="Pipelines & Drainage">Infrastructure, Pipelines & Drainage (البنية التحتية والشبكات)</option>
              <option value="General EPC">General Contracting & Subcontracting (مقاولات عامة)</option>
            </select>
            <textarea name="message" rows="5" required placeholder="${L('Project details, location, quantities...', 'تفاصيل المشروع، الموقع، الكميات التقديرية...')}"></textarea>
            <button class="btn-gold" type="submit">${t().startProject} <span>↗</span></button>
          </form>
        </div>
      </div>
    </section>
  `;
}

// ==========================================================================
// ROUTER & NAVIGATION ENGINE
// ==========================================================================
function renderRoute() {
  document.documentElement.lang = lang;
  document.documentElement.dir = ar() ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', ar());

  const app = document.getElementById('app');
  let mainContent = '';

  const p = currentPath.replace(/\/+$/, '') || '/';

  if (p === '/') {
    mainContent = renderHomePage();
  } else if (p === '/about') {
    mainContent = renderAboutPage();
  } else if (p === '/services') {
    mainContent = renderServicesPage();
  } else if (p.startsWith('/services/')) {
    const slug = p.replace('/services/', '');
    const service = servicesData.find((s) => s.slug === slug);
    mainContent = service ? renderServiceDetailPage(service) : renderServicesPage();
  } else if (p === '/equipments') {
    mainContent = renderEquipmentsPage();
  } else if (p === '/work-in-action') {
    mainContent = renderWorkInActionPage();
  } else if (p === '/projects') {
    mainContent = renderProjectsPage();
  } else if (p.startsWith('/projects/')) {
    const slug = p.replace('/projects/', '');
    const project = projectsData.find((pr) => pr.slug === slug);
    mainContent = project ? renderProjectDetailPage(project) : renderProjectsPage();
  } else if (p === '/contact') {
    mainContent = renderContactPage();
  } else {
    mainContent = renderHomePage();
  }

  app.innerHTML = renderHeader() + `<main id="main-content">${mainContent}</main>` + renderFooter();

  bindEventListeners();
}

function bindEventListeners() {
  // 1. Language Toggle
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.onclick = () => {
      lang = ar() ? 'en' : 'ar';
      localStorage.setItem('qimam-lang', lang);
      renderRoute();
    };
  }

  // 2. Mobile Menu Toggle & Backdrop
  const menuBtn = document.getElementById('menu-toggle-btn');
  const menuBackdrop = document.getElementById('menu-backdrop');
  if (menuBtn) {
    menuBtn.onclick = () => {
      document.body.classList.toggle('menu-open');
    };
  }
  if (menuBackdrop) {
    menuBackdrop.onclick = () => {
      document.body.classList.remove('menu-open');
    };
  }

  // 3. Scroll Header Transition
  const header = document.getElementById('site-header');
  window.onscroll = () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  // 4. Equipment Category Filters
  const fleetFilterBtns = document.querySelectorAll('#fleet-filter-bar .fleet-filter-btn');
  if (fleetFilterBtns.length > 0) {
    fleetFilterBtns.forEach((btn) => {
      btn.onclick = () => {
        fleetFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        const cards = document.querySelectorAll('#fleet-units-grid .equipment-card-full');
        cards.forEach((card) => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      };
    });
  }

  // 5. Lightbox Modal
  const lightboxModal = document.getElementById('site-lightbox-modal');
  const lightboxTargetImg = document.getElementById('site-lightbox-target-img');
  const lightboxCaption = document.getElementById('site-lightbox-caption-text');
  const lightboxClose = document.getElementById('site-lightbox-close');

  document.querySelectorAll('.lightbox-trigger').forEach((trig) => {
    trig.onclick = () => {
      if (lightboxModal && lightboxTargetImg) {
        lightboxTargetImg.src = trig.dataset.fullImg;
        if (lightboxCaption) lightboxCaption.textContent = trig.dataset.caption || '';
        lightboxModal.classList.add('open');
      }
    };
  });

  if (lightboxClose && lightboxModal) {
    lightboxClose.onclick = () => lightboxModal.classList.remove('open');
    lightboxModal.onclick = (e) => {
      if (e.target === lightboxModal) lightboxModal.classList.remove('open');
    };
  }

  // Keyboard navigation for Lightbox (Escape key)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('open')) {
      lightboxModal.classList.remove('open');
    }
  });

  // 5b. Work in Action Video Showcase Switcher & Play Interaction
  const playlistCards = document.querySelectorAll('.video-playlist-card');
  const mainVideoImg = document.getElementById('action-main-video-img');
  const centerTitle = document.getElementById('action-center-title');
  const centerDuration = document.getElementById('action-center-duration');
  const overlayTitle = document.getElementById('action-main-video-title');
  const overlayDuration = document.getElementById('action-main-video-duration');
  const overlayMeta = document.getElementById('action-main-video-meta');
  const playBtn = document.getElementById('action-main-play-btn');

  playlistCards.forEach((card) => {
    card.onclick = () => {
      playlistCards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
      const videoImg = card.dataset.videoImg;
      const title = card.dataset.title;
      const duration = card.dataset.duration;
      const location = card.dataset.location;
      if (mainVideoImg && videoImg) mainVideoImg.src = videoImg;
      if (centerTitle && title) centerTitle.textContent = title;
      if (centerDuration && duration) centerDuration.textContent = duration;
      if (overlayTitle && title) overlayTitle.textContent = title;
      if (overlayDuration && duration) overlayDuration.textContent = duration;
      if (overlayMeta && location) overlayMeta.textContent = `${location} · 4K UHD Feed`;
    };
  });

  if (playBtn && mainVideoImg) {
    playBtn.onclick = () => {
      if (lightboxModal && lightboxTargetImg) {
        lightboxTargetImg.src = mainVideoImg.src;
        if (lightboxCaption) {
          lightboxCaption.textContent = `${overlayTitle ? overlayTitle.textContent : 'Field Operation'} · 4K UHD Feed`;
        }
        lightboxModal.classList.add('open');
      }
    };
  }

  // 5c. Work in Action Category Filter System
  const opFilterPills = document.querySelectorAll('#operations-filter-bar .op-filter-pill');
  if (opFilterPills.length > 0) {
    opFilterPills.forEach((pill) => {
      pill.onclick = () => {
        opFilterPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.dataset.category;
        const cards = document.querySelectorAll('#operations-gallery-grid .op-gallery-card');
        cards.forEach((card) => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      };
    });
  }

  // 5d. Back to Top Button
  const bttBtn = document.getElementById('action-back-to-top');
  if (bttBtn) {
    bttBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // 6. Contact RFQ Form
  const rfqForm = document.getElementById('contact-rfq-form');
  if (rfqForm) {
    rfqForm.onsubmit = (e) => {
      e.preventDefault();
      const fd = new FormData(rfqForm);
      const subject = encodeURIComponent(`Project Enquiry: ${fd.get('scope')} - ${fd.get('name')}`);
      const body = encodeURIComponent(
        `Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\nPhone: ${fd.get('phone')}\nScope: ${fd.get('scope')}\n\nMessage:\n${fd.get('message')}`
      );
      location.href = `mailto:info@qemam-alentaj.sa?subject=${subject}&body=${body}`;
    };
  }

  // 7. Hero Screens Auto-Scroll Widget
  const heroWidget = document.getElementById('hero-screens-widget');
  if (heroWidget) {
    const cards = heroWidget.querySelectorAll('.hero-screen-card');
    const tabs = document.querySelectorAll('#hero-screens-tabs .hero-tab-pill');
    const indexDisplay = document.getElementById('hero-screen-index');
    const bottomCounter = document.getElementById('hero-bottom-counter');
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');
    let currentScreen = 0;
    let timer = null;
    let isHovered = false;

    function showScreen(idx) {
      currentScreen = (idx + cards.length) % cards.length;
      cards.forEach((c, i) => c.classList.toggle('active', i === currentScreen));
      tabs.forEach((t, i) => t.classList.toggle('active', i === currentScreen));
      const str = `0${currentScreen + 1}`;
      if (indexDisplay) indexDisplay.textContent = str;
      if (bottomCounter) bottomCounter.textContent = `${str} / 03`;
    }

    function nextScreen() {
      showScreen(currentScreen + 1);
    }

    function prevScreen() {
      showScreen(currentScreen - 1);
    }

    function startTimer() {
      stopTimer();
      timer = setInterval(() => {
        if (!isHovered) nextScreen();
      }, 4000);
    }

    function stopTimer() {
      if (timer) clearInterval(timer);
    }

    tabs.forEach((tab) => {
      tab.onclick = () => {
        showScreen(parseInt(tab.dataset.tab, 10));
        startTimer();
      };
    });

    if (prevBtn) {
      prevBtn.onclick = () => {
        prevScreen();
        startTimer();
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        nextScreen();
        startTimer();
      };
    }

    heroWidget.onmouseenter = () => { isHovered = true; };
    heroWidget.onmouseleave = () => { isHovered = false; };

    startTimer();
  }

  // 8. Scroll Reveal Observer While Moving Down
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-revealed'));
  }
}

// Global SPA Click Interceptor
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (href && href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/assets/')) {
    e.preventDefault();
    document.body.classList.remove('menu-open');
    if (location.pathname !== href) {
      history.pushState(null, '', href);
    }
    currentPath = href;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderRoute();
  }
});

window.addEventListener('popstate', () => {
  currentPath = location.pathname.replace(/\/+$/, '') || '/';
  renderRoute();
});

// Boot
renderRoute();

// Service workflows supplied by the client. Lists describe general practice; site work follows approved plans.
const serviceWorkflows = {
  'site-preparation': {
    steps: ['Site Survey & Boundary Marking','Site Clearing & Obstacle Removal','Soil Cutting, Filling & Grading','Final Ground Leveling & Compaction'],
    safety: ['PPE & Safety Barricades','Underground Utility Identification','Heavy Machinery Safety & Exclusion Zones','Dust Control & Ground Stability Checks'],
    stepsAr: ['مسح الموقع وتحديد الحدود','تنظيف الموقع وإزالة العوائق','قطع التربة والردم والتسوية','التسوية النهائية للأرض والدمك'],
    safetyAr: ['معدات الوقاية الشخصية وحواجز السلامة','تحديد المرافق تحت الأرض','سلامة المعدات الثقيلة ومناطق العزل','التحكم بالغبار وفحص استقرار الأرض']
  },
  'roads-asphalting': {
    steps: ['Roadbed Preparation & Grading','Subbase & Base Layer Installation','Asphalt Laying Using Paving Machines','Roller Compaction & Final Inspection'],
    safety: ['Traffic Control & Warning Barricades','Hot Asphalt & Burn Protection','Safe Machinery Movement','PPE & Heat-Stress Prevention'],
    stepsAr: ['تجهيز طبقة الطريق وتسويتها','تنفيذ طبقات ما تحت الأساس والأساس','فرش الأسفلت باستخدام آلات الرصف','الدمك بالمداحل والفحص النهائي'],
    safetyAr: ['تنظيم المرور والحواجز التحذيرية','الوقاية من الأسفلت الساخن والحروق','الحركة الآمنة للمعدات','معدات الوقاية والوقاية من الإجهاد الحراري']
  },
  'excavation-rock-cutting': {
    steps: ['Site Survey & Excavation Marking','Soil & Sand Excavation','Limestone & Hard Rock Cutting / Breaking','Controlled Blasting (If Required & Approved)','Rock Removal & Final Leveling'],
    safety: ['PPE & Excavation Edge Protection','Slope Stability & Trench Shoring','Blasting Exclusion Zones & Warning Systems','Licensed Blasting Personnel & Safety Clearance','Dust Suppression & Machinery Safety'],
    stepsAr: ['مسح الموقع وتحديد مناطق الحفر','حفر التربة والرمال','قطع الحجر الجيري والصخور الصلبة وتكسيرها','التفجير المنضبط عند الحاجة وبعد الموافقة','إزالة الصخور والتسوية النهائية'],
    safetyAr: ['معدات الوقاية وحماية حواف الحفر','استقرار المنحدرات وتدعيم الخنادق','مناطق عزل التفجير وأنظمة التحذير','كوادر تفجير مرخصة وتصاريح السلامة','كبح الغبار وسلامة المعدات']
  },
  'mining-quarry': {
    steps: ['Rock Extraction & Collection','Rock Crushing Using Crushing Machines','Material Screening & Grading','Crushed Material Transportation & Backfilling','Layer Compaction & Quality Inspection'],
    safety: ['Crusher Safety Guards & Restricted Access','Dust Suppression & Noise Protection','Safe Material Loading & Transportation','PPE & Quarry Slope Stability Monitoring'],
    stepsAr: ['استخراج الصخور وجمعها','تكسير الصخور باستخدام الكسارات','غربلة المواد وفرزها','نقل المواد المكسرة والردم بها','دمك الطبقات وفحص الجودة'],
    safetyAr: ['حواجز حماية الكسارات وتقييد الدخول','كبح الغبار والوقاية من الضوضاء','التحميل والنقل الآمن للمواد','معدات الوقاية ومراقبة استقرار منحدرات المحجر']
  },
  'pipelines-power': {
    steps: ['Site Survey & Underground Utility Marking','Trench Excavation & Bedding Preparation','Pipeline Installation & Joint Connections','Inspection, Testing & Backfilling','Final Ground Restoration'],
    safety: ['Underground Utility Detection','Trench Shoring & Collapse Prevention','Safe Pipe Lifting & Installation','PPE & Confined Space Precautions Where Required'],
    stepsAr: ['مسح الموقع وتحديد المرافق تحت الأرض','حفر الخنادق وتجهيز طبقة التأسيس','تركيب خطوط الأنابيب ووصلاتها','الفحص والاختبار والردم','إعادة تأهيل الأرض نهائياً'],
    safetyAr: ['الكشف عن المرافق تحت الأرض','تدعيم الخنادق ومنع الانهيار','رفع الأنابيب وتركيبها بأمان','معدات الوقاية واحتياطات الأماكن المغلقة عند الحاجة']
  },
  'landscape-irrigation': {
    steps: ['Site Clearing & Soil Preparation','Ground Leveling & Landscape Formation','Irrigation Pipeline Installation','Tree, Grass & Plant Installation','Irrigation Testing & Final Inspection'],
    safety: ['PPE & Safe Equipment Handling','Underground Utility Checks','Safe Excavation & Machinery Movement','Heat-Stress Protection & Hydration'],
    stepsAr: ['تنظيف الموقع وتجهيز التربة','تسوية الأرض وتشكيل المساحات الخارجية','تركيب أنابيب الري','زراعة الأشجار والأعشاب والنباتات','اختبار الري والفحص النهائي'],
    safetyAr: ['معدات الوقاية والتعامل الآمن مع المعدات','فحص المرافق تحت الأرض','الحفر والحركة الآمنة للمعدات','الوقاية من الإجهاد الحراري وتوفير المياه']
  },
  'sewer-systems': {
    steps: ['Site Survey & Trench Excavation','Sewer Pipeline & Manhole Installation','Pumping Station Structure & Equipment Installation','Pipeline Connections & System Testing','Backfilling & Site Restoration'],
    safety: ['Trench Shoring & Excavation Protection','Confined Space Gas Testing & Rescue Arrangements','Electrical Isolation & Pump Equipment Safety','PPE, Hygiene & Safe Lifting Procedures'],
    stepsAr: ['مسح الموقع وحفر الخنادق','تركيب أنابيب الصرف الصحي وغرف التفتيش','إنشاء محطة الضخ وتركيب معداتها','توصيل الأنابيب واختبار النظام','الردم وإعادة تأهيل الموقع'],
    safetyAr: ['تدعيم الخنادق وحماية الحفر','فحص الغازات في الأماكن المغلقة وتجهيزات الإنقاذ','العزل الكهربائي وسلامة معدات الضخ','معدات الوقاية والنظافة وإجراءات الرفع الآمن']
  },
  'fencing-hoarding': {
    steps: ['Site Boundary Survey & Marking','Post Foundation Excavation & Preparation','Security Fencing / Hoarding Installation','Access Gate & Safety Signage Installation','Final Alignment & Stability Inspection'],
    safety: ['PPE & Work Zone Barricades','Underground Utility Clearance','Safe Lifting & Equipment Operation','Working-at-Height Protection Where Required'],
    stepsAr: ['مسح حدود الموقع وتحديدها','حفر وتجهيز قواعد الأعمدة','تركيب الأسوار الأمنية وحواجز الموقع','تركيب بوابات الدخول ولوحات السلامة','فحص الاستقامة والاستقرار النهائي'],
    safetyAr: ['معدات الوقاية وحواجز مناطق العمل','التحقق من خلو الموقع من المرافق تحت الأرض','الرفع الآمن وتشغيل المعدات','الحماية عند العمل على ارتفاع عند الحاجة']
  },
  'demolition': {
    steps: ['Structural Inspection & Site Preparation','Utility Disconnection & Controlled Demolition','Concrete Breaking & Debris Separation','Debris Loading & Transportation','Final Site Clearing & Leveling'],
    safety: ['Structural Stability Assessment','Demolition Exclusion Zones','Dust Suppression & Falling Debris Protection','PPE & Hazardous Material Checks','Safe Machinery Operation'],
    stepsAr: ['فحص المنشآت وتجهيز الموقع','فصل المرافق وتنفيذ الهدم المنضبط','تكسير الخرسانة وفرز المخلفات','تحميل الأنقاض ونقلها','تنظيف الموقع وتسويته نهائياً'],
    safetyAr: ['تقييم الاستقرار الإنشائي','مناطق عزل أعمال الهدم','كبح الغبار والحماية من سقوط الأنقاض','معدات الوقاية وفحص المواد الخطرة','التشغيل الآمن للمعدات']
  },
  'bulk-backfilling': {
    steps: ['Site Preparation & Ground Inspection','Approved Backfill Material Transportation','Layer-by-Layer Material Spreading','Soil Compaction Using Rollers','Final Leveling & Compaction Testing'],
    safety: ['PPE & Machinery Exclusion Zones','Stable Ground & Excavation Edge Protection','Dust Control & Moisture Management','Safe Roller Operation & Traffic Control'],
    stepsAr: ['تجهيز الموقع وفحص الأرض','نقل مواد الردم المعتمدة','فرد المواد طبقة بعد طبقة','دمك التربة باستخدام المداحل','التسوية النهائية واختبار الدمك'],
    safetyAr: ['معدات الوقاية ومناطق عزل المعدات','استقرار الأرض وحماية حواف الحفر','التحكم بالغبار وإدارة الرطوبة','التشغيل الآمن للمداحل وتنظيم الحركة']
  },
  'storm-drainage': {
    steps: ['Site Survey & Drainage Excavation','Foundation & Bedding Preparation','Box Culvert Installation / Concrete Construction','Drainage Connections & Waterproofing','Backfilling, Compaction & Final Inspection'],
    safety: ['Excavation Shoring & Edge Protection','Safe Crane Lifting & Culvert Placement','Flooding & Groundwater Control','PPE & Confined Space Safety Where Required'],
    stepsAr: ['مسح الموقع والحفر لشبكات التصريف','تجهيز الأساسات وطبقة التأسيس','تركيب العبارات الصندوقية أو صب الخرسانة','توصيل شبكات التصريف والعزل المائي','الردم والدمك والفحص النهائي'],
    safetyAr: ['تدعيم الحفر وحماية الحواف','الرفع الآمن بالرافعة ووضع العبارات','التحكم بالفيضانات والمياه الجوفية','معدات الوقاية وسلامة الأماكن المغلقة عند الحاجة']
  },
  'refurbishment': {
    steps: ['Existing Structure & Site Inspection','Damaged Structure / Surface Removal','Structural Repairs & Infrastructure Upgrades','Surface Restoration & Finishing','Final Quality & Safety Inspection'],
    safety: ['Structural Stability & Hazard Assessment','Utility Isolation Before Repair Work','PPE & Work Area Barricading','Safe Machinery & Tool Operation','Dust Control & Working-at-Height Protection'],
    stepsAr: ['فحص المنشآت القائمة والموقع','إزالة الأجزاء أو الأسطح المتضررة','الإصلاحات الإنشائية وتطوير البنية التحتية','إعادة تأهيل الأسطح والتشطيبات','فحص الجودة والسلامة النهائي'],
    safetyAr: ['تقييم الاستقرار الإنشائي والمخاطر','عزل المرافق قبل أعمال الإصلاح','معدات الوقاية وحواجز مناطق العمل','التشغيل الآمن للمعدات والأدوات','التحكم بالغبار والحماية عند العمل على ارتفاع']
  }
};

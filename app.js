
// ==========================================================================
// CINEMATIC INTRODUCTION PRELOADER (0-100% LOADING PROGRESSION)
// ==========================================================================
function renderIntroPreloader() {
  return `
    <div id="intro-preloader" class="intro-preloader" aria-label="Loading Qemam Al-Entaj">
      <div class="intro-backdrop">
        <div class="intro-glow"></div>
        <div class="intro-grid-mesh"></div>
      </div>
      <div class="intro-content">
        <div class="intro-logo-wrap">
          <img src="${A}qimam-logo.png" alt="Qemam Al-Entaj Contracting Co." class="intro-logo-img" width="312" height="130">
          <div class="intro-logo-flare"></div>
        </div>
        <div class="intro-brand-title">
          <span class="intro-brand-en">QEMAM AL-ENTAJ</span>
          <span class="intro-brand-ar">قمم الإنتاج</span>
        </div>
        <p class="intro-tagline">${L('BUILDING THE FOUNDATIONS OF A STRONGER SAUDI ARABIA', 'أعمال الأرض - لبناء مستقبل سعودي أقوى')}</p>

        <!-- 0 to 100 Progress Bar System -->
        <div class="intro-progress-container">
          <div class="intro-progress-track">
            <div class="intro-progress-fill" id="intro-progress-bar">
              <div class="intro-progress-spark"></div>
            </div>
          </div>
          <div class="intro-progress-meta">
            <div class="intro-status-text" id="intro-status-text">INITIALIZING FLEET TELEMETRY</div>
            <div class="intro-counter-box">
              <span class="intro-counter-val" id="intro-counter-number">0</span><span class="intro-counter-sym">%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// QMAM CORPORATE PLATFORM — ULTRA-SHARP IMAGERY & MIDNIGHT BLUE + SAND GOLD
// ==========================================================================

const A = '/assets/';

// ==========================================================================
// PURE VECTOR SVG ICONS — STRICTLY NO EMOJIS (ARCHITECTURAL PRECISION)
// ==========================================================================
const ICONS = {
  excavator: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 17h16M2 21h16M4 17a2 2 0 1 0 0 4M16 17a2 2 0 1 0 0 4M9 17v-6h5l4 6M14 11l4-5 3 2-3 5M6 11l3-5"/></svg>',
  roads: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19L9 5M20 19l-5-14M12 5v3M12 11v3M12 17v3"/></svg>',
  rock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 20 8 4 14 10 19 6 22 20 3 20"/></svg>',
  quarry: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  pipeline: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h6v4H3zM9 8h6M15 6h6v4h-6zM3 14h6v4H3zM9 16h6M15 14h6v4h-6zM6 10v4M18 10v4"/></svg>',
  landscape: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M12 6a7 7 0 0 1 7 7M12 10a7 7 0 0 0-7 7M12 2a5 5 0 0 1 5 5M12 2a5 5 0 0 0-5 5"/></svg>',
  sewer: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  fencing: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16M8 4v16M12 4v16M16 4v16M20 4v16M2 8h20M2 16h20"/></svg>',
  demolition: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2l4 4-8 8H6v-4l8-8zM18 6l2 2M2 22h20M7 17l-3 3M17 7l3-3"/></svg>',
  backfilling: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 18h14M1 14h10l3-5h5v9M17 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>',
  drainage: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c2.5-3 5.5-3 8 0s5.5 3 8 0M2 17c2.5-3 5.5-3 8 0s5.5 3 8 0M2 7c2.5-3 5.5-3 8 0s5.5 3 8 0"/></svg>',
  refurbishment: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3M9 9h1M9 13h1M9 17h1"/></svg>',
  pin: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  check: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
  arrowUpRight: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>',
  shield: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  diamond: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M10 3l-2 6 4 12 4-12-2-6"/></svg>',
  users: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  leaf: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13C4 7 12 2 20 2c0 8-5 16-11 16z"/><path d="M5 19l6-6"/></svg>',
  play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  crown: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M4 20h16"/></svg>',
  crosshair: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>',
  bulldozer: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h16M3 14h6v4H3zM9 11l4-4h4v7H9zM19 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M21 7v11M13 14h8"/></svg>',
  loader: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 17h16M4 17a2 2 0 1 0 0 4M16 17a2 2 0 1 0 0 4M14 11l5-5 3 2-2 6M6 17v-6h8"/></svg>',
  truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  cog: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  subcontracting: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  saudiPalm: '<svg width="34" height="34" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 58V20M32 20C24 14 16 22 12 28M32 20C40 14 48 22 52 28M32 14C22 8 14 14 10 20M32 14C42 8 50 14 54 20M32 8C24 4 18 8 14 14M32 8C40 4 46 8 50 14M16 50l32-12M48 50L16 38"/></svg>',
  vision2030: '<svg width="130" height="42" viewBox="0 0 180 60" fill="currentColor"><text x="6" y="20" font-family="sans-serif" font-weight="700" font-size="12" letter-spacing="2" fill="#c59b3f">VISION رؤية</text><text x="6" y="52" font-family="sans-serif" font-weight="900" font-size="30" letter-spacing="3" fill="#ffffff">2030</text><circle cx="150" cy="35" r="13" fill="none" stroke="#c59b3f" stroke-width="2"/><path d="M150 25v20M140 35h20" stroke="#c59b3f" stroke-width="2"/></svg>',
  saudiMap: '<svg width="68" height="68" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M25 22 L45 18 L68 25 L88 38 L92 55 L82 72 L65 85 L48 88 L32 82 L20 68 L15 50 L18 35 Z" fill="rgba(197, 155, 63, 0.08)" stroke="#c59b3f"/><circle cx="58" cy="48" r="3" fill="#c59b3f"/></svg>'
};

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
    icon: ICONS.excavator,
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
    icon: ICONS.roads,
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
    icon: ICONS.rock,
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
    icon: ICONS.quarry,
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
    icon: ICONS.pipeline,
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
    icon: ICONS.landscape,
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
    icon: ICONS.sewer,
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
    icon: ICONS.fencing,
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
    icon: ICONS.demolition,
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
    icon: ICONS.backfilling,
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
    icon: ICONS.drainage,
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
    icon: ICONS.refurbishment,
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
    heroEyebrow: 'THE LIVING CONSTRUCTION LANDSCAPE',
    heroTitle: 'We Shape the Ground.<br><span class="highlight-gold">We Move Progress.</span>',
    heroSubtitle: 'Delivering Saudi Arabia\'s largest earthmoving, grading, and infrastructure enabling works with precision engineering and an active 378+ equipment fleet.',
    exploreProjects: 'Explore Our Projects',
    ourCapabilities: 'Our Capabilities',
    scrollToExplore: 'Scroll to explore terrain',
    livingTelemetry: 'TOPOGRAPHIC SURVEY ENGINE · RIYADH PROVINCE [24.7136° N, 46.6753° E]',
    transEyebrow: 'SCALE WITHOUT COMPROMISE',
    transStatement: 'From multi-million cubic meter cut-and-fill excavations to precision highway infrastructure, QMAM executes Saudi Arabia\'s most demanding groundworks.',
    edEyebrow: 'ENGINEERING CAPABILITIES',
    edTitle: 'Engineering at the Scale of Saudi Ambition.',
    edLead: 'Founded in Riyadh in 2017, QMAM is a MOMRA 1st-Degree classified general contractor. Backed by 378+ heavy machines and 253M+ SAR in executed infrastructure packages, we transform rugged Saudi topography into build-ready foundations for national giga-projects.',
    edPillar1Title: 'Mega Cut, Fill & Deep Excavation',
    edPillar1Metric: '25M+ m³ Moved',
    edPillar1Desc: 'Topographic bench grading, controlled hard-rock breaking, terrace stabilization, and heavy enabling packages for national infrastructure.',
    edPillar2Title: 'Arterial Highways & Paving Infrastructure',
    edPillar2Metric: '180+ KM Completed',
    edPillar2Desc: 'Multi-layered roadbed preparation, subbase compaction, precision asphalt paving, and complete stormwater drainage corridors.',
    edPillar3Title: 'Plant Muscle & On-Site Fleet Logistics',
    edPillar3Metric: '378 Active Units',
    edPillar3Desc: 'Self-owned fleet of CAT excavators, articulated dump trucks, pavers, crushers, and 24/7 dedicated mobile field maintenance units.',
    edExploreAll: 'Explore All 12 Engineering Disciplines',
    edViewProjects: 'View Landmark Projects',
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
    heroEyebrow: 'المشهد الإنشائي الحي ثلاثي الأبعاد',
    heroTitle: 'نمهّد الأرض..<br><span class="highlight-gold">ونقود مسيرة الإنجاز.</span>',
    heroSubtitle: 'تنفيذ أضخم مشاريع تسوية وتجهيز المواقع والأعمال الترابية والبنية التحتية في المملكة بدقة هندسية عالية وبأسطول يتجاوز 378 معدة ثقيلة.',
    exploreProjects: 'استكشف مشاريعنا',
    ourCapabilities: 'خدماتنا وقدراتنا',
    scrollToExplore: 'مرر لاستكشاف التضاريس',
    livingTelemetry: 'محاكاة طبوغرافية حية · منطقة الرياض [24.7136° N, 46.6753° E]',
    transEyebrow: 'إمكانات تواكب التحدي',
    transStatement: 'من أعمال القطع والردم بملايين الأمتار المكعبة إلى إنشاء شبكات الطرق السريعة المتطورة، تنفذ قمم الإنتاج أضخم مشاريع البنية التحتية في المملكة.',
    edEyebrow: 'القدرات الهندسية ونطاق العمل',
    edTitle: 'هندسة ترتقي لحجم الطموح الوطني.',
    edLead: 'تأسست شركة قمم الإنتاج في الرياض عام 2017، وهي مقاول معتمد بالدرجة الأولى من وزارة الشؤون البلدية والقروية والإسكان. بأسطول يتجاوز 378 آلية ثقيلة وأكثر من 253 مليون ريال من العقود المنجزة، نحول التضاريس الصخرية إلى بنية تحتية جاهزة لكبرى المشاريع الوطنية.',
    edPillar1Title: 'أعمال الحفر والردم والقطع الصخري العميق',
    edPillar1Metric: '+25 مليون م³ منجز',
    edPillar1Desc: 'تسوية المنحدرات الجبلية، القطع الصخري الدقيق، تدعيم المصاطب، وحزم التمكين الضخمة للمشاريع الوطنية الكبرى.',
    edPillar2Title: 'سفلتة الطرق السريعة وشبكات البنية التحتية',
    edPillar2Metric: '+180 كم طرق منفذة',
    edPillar2Desc: 'تجهيز طبقات الأساس وما تحت الأساس، رصف الأسفلت بمعدات حديثة، وإنشاء شبكات تصريف السيول وتصريف مياه الأمطار.',
    edPillar3Title: 'قوة الأسطول والدعم اللوجستي الميداني',
    edPillar3Metric: '378 معدة نشطة',
    edPillar3Desc: 'أسطول مملوك بالكامل من حفارات كاتربيلر، شاحنات قلاب، قواطع صخور، خلاطات أسفلت، وفرق صيانة ميدانية على مدار الساعة.',
    edExploreAll: 'استكشف جميع الخدمات الـ 12',
    edViewProjects: 'استعراض المشاريع الكبرى',
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

// ==========================================================================
// SITE HEADER COMPONENT (REFERENCE LAYOUT: GOLD BORDER BUTTON & CLEAN NAV)
// ==========================================================================

// ==========================================================================
// SITE HEADER COMPONENT (REFERENCE LAYOUT: GOLD BORDER BUTTON & CLEAN NAV)
// ==========================================================================
function renderHeader() {
  const navItems = [
    { href: '/', label: L('Home', 'الرئيسية') },
    { href: '/about/', label: L('About Us', 'من نحن') },
    { href: '/services/', label: L('Our Services', 'خدماتنا') },
    { href: '/projects/', label: L('Projects', 'مشاريعنا') },
    { href: '/equipments/', label: L('Equipment', 'المعدات') },
    { href: '/work-in-action/', label: L('Work in Action', 'الاستدامة') },
    { href: '/contact/', label: L('Contact', 'اتصل بنا') }
  ];

  return `
    <header class="site-header" id="site-header">
      <div class="wrap nav-shell">
        <a class="brand" href="/" aria-label="Qemam Al-Entaj">
          <img class="brand-mark" src="${A}qimam-mark.png" alt="Qemam Al-Entaj" width="40" height="44">
          <div class="brand-type">
            <strong class="brand-name-en">QEMAM AL-ENTAJ</strong>
            <span class="brand-name-ar">قمم الإنتاج</span>
          </div>
        </a>

        <nav class="main-nav" id="main-nav-menu" aria-label="Main Navigation">
          ${navItems
            .map((item) => {
              const active = item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href.replace(/\/$/, ''));
              return `<a href="${item.href}" class="${active ? 'active' : ''}">${item.label}</a>`;
            })
            .join('')}
          <div class="mobile-nav-footer">
            <a class="btn-quote-header" href="/contact/" style="width: 100%; justify-content: center; text-align: center; margin-top: 8px;">
              <span>${L('Get a Quote', 'طلب عرض سعر')}</span> ${ICONS.arrowRight}
            </a>
          </div>
        </nav>
        <div class="menu-backdrop" id="menu-backdrop"></div>

        <div class="nav-actions">
          <button class="lang-switch-toggle" id="lang-toggle-btn" type="button" aria-label="Toggle language">
            ${ar() ? '<span class="lang-active">العربية</span> | <span class="lang-alt">EN</span>' : '<span class="lang-alt">العربية</span> | <span class="lang-active">EN</span>'}
          </button>
          <a class="btn-quote-header" href="/contact/">
            <span>${L('Get a Quote', 'طلب عرض سعر')}</span> ${ICONS.arrowRight}
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
              <a href="#" class="social-icon" aria-label="YouTube">PLAY</a>
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
              <p><span class="svg-inline-pin">${ICONS.pin}</span> ${L('Riyadh, Kingdom of Saudi Arabia', 'الرياض، المملكة العربية السعودية')}</p>
              <p><span class="svg-inline-phone">${ICONS.phone}</span> <a href="tel:+966505606116" dir="ltr">+966 50 560 6116</a></p>
              <p><span class="svg-inline-phone">${ICONS.phone}</span> <a href="tel:+966509234001" dir="ltr">+966 50 923 4001</a></p>
              <p><span class="svg-inline-mail">${ICONS.mail}</span> <a href="mailto:info@qemam-alentaj.sa">info@qemam-alentaj.sa</a></p>
              <a class="btn-gold" href="/contact/" style="margin-top: 10px; width: fit-content; padding: 10px 22px;">
                ${t().startProject} <span class="svg-arrow-up">${ICONS.arrowUpRight}</span>
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

// ==========================================================================
// 1. MASTER HOMEPAGE (MATCHING USER REFERENCE DESIGN EXACTLY)
// ==========================================================================

// ==========================================================================
// 1. MASTER HOMEPAGE (MATCHING USER REFERENCE DESIGN EXACTLY)
// ==========================================================================
function renderHomePage() {
  return `
    <!-- SECTION 1: HERO (DARK CHARCOAL & DISPLAY SERIF TYPOGRAPHY) -->
    <section class="hero-earthworks-ref" id="hero-earthworks">
      <div class="hero-bg-layer" aria-hidden="true">
        <img 
          src="${A}hero-cinematic.jpg" 
          alt="Qemam Al-Entaj Heavy Earthworks Fleet" 
          class="hero-bg-img"
          fetchpriority="high"
          loading="eager"
        >
        <div class="hero-dust-overlay"></div>
        <div class="hero-vignette-overlay"></div>
      </div>

      <div class="wrap hero-ref-container">
        <!-- Left Hero Content Column -->
        <div class="hero-ref-content">
          <div class="hero-tagline-eyebrow">
            ${L('BUILDING THE FOUNDATIONS OF A STRONGER SAUDI ARABIA', 'بناء أسس تنموية راسخة لمستقبل سعودي أقوى')}
          </div>
          
          <h1 class="hero-title-serif">
            <span>EARTHWORKS</span>
            <span>TODAY</span>
            <span>A STRONGER</span>
            <span>TOMORROW</span>
          </h1>

          <p class="hero-desc-lead">
            ${L(
              "Comprehensive excavation, backfilling and infrastructure solutions powering Saudi Arabia's progress.",
              'حلول متكاملة في الأعمال الترابية والحفر والردم الهندسي وشبكات البنية التحتية الدافعة لنهضة المملكة.'
            )}
          </p>

          <div class="hero-action-row">
            <a class="btn-pill-services" href="/services/">
              <span class="btn-pill-circle">${ICONS.arrowRight}</span>
              <span class="btn-pill-text">${L('Our Services', 'خدماتنا')}</span>
            </a>
          </div>

          <!-- Hero Count-Up Stats Row -->
          <div class="hero-stats-trio">
            <div class="hero-stat-block">
              <div class="stat-number-wrap">
                <span class="stat-value count-up" data-counter="250" data-prefix="+">+250</span>
              </div>
              <span class="stat-label">${L('Projects Delivered', 'مشروع منجز')}</span>
            </div>

            <div class="hero-stat-divider"></div>

            <div class="hero-stat-block">
              <div class="stat-number-wrap">
                <span class="stat-value count-up" data-counter="378" data-prefix="+">+378</span>
              </div>
              <span class="stat-label">${L('Heavy Equipment', 'معدة ثقيلة متطورة')}</span>
            </div>

            <div class="hero-stat-divider"></div>

            <div class="hero-stat-block">
              <div class="stat-number-wrap">
                <span class="stat-value count-up" data-counter="15" data-prefix="+">+15</span>
              </div>
              <span class="stat-label">${L('Years of Experience', 'عاماً من الخبرة')}</span>
            </div>
          </div>
        </div>

        <!-- Right Hero Floating Telemetry Column -->
        <div class="hero-ref-telemetry">
          <div class="telemetry-card">
            <div class="telemetry-map-wrap">
              ${ICONS.saudiMap}
            </div>
            <div class="telemetry-title">${L('SAUDI ARABIA', 'المملكة العربية السعودية')}</div>
            <div class="telemetry-sub">${L('A NATION IN PROGRESS', 'وطن طموح نحو القمة')}</div>

            <button class="btn-watch-story" id="hero-watch-story-btn" type="button" aria-label="Watch Our Story">
              <span class="watch-icon-circle">${ICONS.play}</span>
              <span class="watch-text">${L('Watch Our Story', 'شاهد قصة نجاحنا')}</span>
            </button>

            <div class="telemetry-divider-line"></div>

            <div class="telemetry-motto">
              <span>SHAPING LAND</span>
              <span>CONNECTING PEOPLE</span>
            </div>

            <div class="telemetry-coords-row">
              <div class="coords-reticle">${ICONS.crosshair}</div>
              <div class="coords-text">
                <span class="coord-lat">24.7136° N</span>
                <span class="coord-lng">46.6753° E</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WAVY DIVIDER 1: DARK HERO TO SANDSTONE CREAM -->
    <div class="wave-divider wave-dark-to-cream" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path class="wave-contour" d="M0,32 C280,95 480,10 720,60 C960,110 1180,20 1440,75 L1440,120 L0,120 Z" fill="rgba(245, 240, 230, 0.4)"/>
        <path class="wave-contour-2" d="M0,50 C320,110 520,30 760,80 C1000,130 1220,40 1440,90 L1440,120 L0,120 Z" fill="rgba(245, 240, 230, 0.7)"/>
        <path class="wave-main" d="M0,64 C360,130 600,45 840,95 C1080,145 1260,60 1440,100 L1440,120 L0,120 Z" fill="#f5f0e6"/>
      </svg>
    </div>

    <!-- SECTION 2: OUR SERVICES (SANDSTONE CREAM QUAD CARDS) -->
    <section class="section-services-quad" id="services-quad">
      <div class="wrap">
        <div class="services-quad-header reveal-on-scroll">
          <div class="services-head-text">
            <span class="section-gold-eyebrow">${L('OUR SERVICES', 'خدماتنا الهندسية')}</span>
            <h2 class="section-serif-title">${L('FROM THE GROUND UP TO A BRIGHTER TOMORROW', 'من عمق الأرض نحو مستقبل أكثر إشراقاً')}</h2>
            <p class="section-lead-desc">
              ${L(
                'Integrated earthworks and infrastructure solutions delivered with precision, capability and commitment.',
                'حلول متكاملة في الأعمال الترابية والبنية التحتية، تُنفذ بأعلى درجات الدقة والجاهزية والالتزام.'
              )}
            </p>
          </div>

          <div class="services-ambition-badge">
            <div class="ambition-palm-icon">${ICONS.saudiPalm}</div>
            <div class="ambition-text">
              <strong>${L("SUPPORTING SAUDI ARABIA'S", 'داعمون لطموحات')}</strong>
              <span>${L('INFRASTRUCTURE AMBITION', 'البنية التحتية للمملكة')}</span>
            </div>
          </div>
        </div>

        <!-- 4 Grid Cards: 01 Excavation, 02 Backfilling, 03 Infrastructure, 04 Subcontracting -->
        <div class="services-quad-grid reveal-on-scroll">
          <!-- Card 01: Excavation Works -->
          <a class="service-quad-card" href="/services/excavation-rock-cutting/">
            <div class="quad-card-num">01</div>
            <div class="quad-card-media">
              <img src="${A}equipment-excavator.jpg" alt="Excavator carrying out earthworks" loading="lazy" width="600" height="400">
            </div>
            <div class="quad-card-body">
              <div class="quad-card-icon">${ICONS.excavator}</div>
              <h3 class="quad-card-title-en">Excavation Works</h3>
              <h4 class="quad-card-title-ar">أعمال الحفر</h4>
              <div class="quad-card-btn">${ICONS.arrowRight}</div>
            </div>
          </a>

          <!-- Card 02: Backfilling Works -->
          <a class="service-quad-card" href="/services/bulk-backfilling/">
            <div class="quad-card-num">02</div>
            <div class="quad-card-media">
              <img src="${A}qiddiya-grading.png" alt="Earthmoving fleet preparing a graded site" loading="lazy" width="600" height="400">
            </div>
            <div class="quad-card-body">
              <div class="quad-card-icon">${ICONS.backfilling}</div>
              <h3 class="quad-card-title-en">Backfilling Works</h3>
              <h4 class="quad-card-title-ar">أعمال الردم</h4>
              <div class="quad-card-btn">${ICONS.arrowRight}</div>
            </div>
          </a>

          <!-- Card 03: Infrastructure Support -->
          <a class="service-quad-card" href="/services/pipelines-power/">
            <div class="quad-card-num">03</div>
            <div class="quad-card-media">
              <img src="${A}activity-roads.png" alt="Road infrastructure works in progress" loading="lazy" width="600" height="400">
            </div>
            <div class="quad-card-body">
              <div class="quad-card-icon">${ICONS.pipeline}</div>
              <h3 class="quad-card-title-en">Infrastructure Support</h3>
              <h4 class="quad-card-title-ar">دعم البنية التحتية</h4>
              <div class="quad-card-btn">${ICONS.arrowRight}</div>
            </div>
          </a>

          <!-- Card 04: Subcontracting Services -->
          <a class="service-quad-card" href="/services/site-preparation/">
            <div class="quad-card-num">04</div>
            <div class="quad-card-media">
              <img src="${A}activity-earth.png" alt="Earthworks crew and equipment on site" loading="lazy" width="600" height="400">
            </div>
            <div class="quad-card-body">
              <div class="quad-card-icon">${ICONS.subcontracting}</div>
              <h3 class="quad-card-title-en">Subcontracting Services</h3>
              <h4 class="quad-card-title-ar">خدمات المقاولات الفرعية</h4>
              <div class="quad-card-btn">${ICONS.arrowRight}</div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- WAVY DIVIDER 2: SANDSTONE CREAM TO MIDNIGHT DARK -->
    <div class="wave-divider wave-cream-to-dark" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path class="wave-contour" d="M0,30 C300,90 540,10 780,65 C1020,120 1200,30 1440,80 L1440,120 L0,120 Z" fill="rgba(13, 18, 24, 0.4)"/>
        <path class="wave-contour-2" d="M0,55 C340,115 580,35 820,85 C1060,135 1240,45 1440,95 L1440,120 L0,120 Z" fill="rgba(13, 18, 24, 0.7)"/>
        <path class="wave-main" d="M0,70 C380,135 640,50 880,100 C1120,150 1280,65 1440,105 L1440,120 L0,120 Z" fill="#0d1218"/>
      </svg>
    </div>

    <!-- SECTION 3: OUR VALUES & VISION 2030 (MIDNIGHT DARK OBSIDIAN) -->
    <section class="section-values-vision" id="values-vision">
      <div class="wrap">
        <div class="values-vision-layout reveal-on-scroll">
          <!-- Left Values Column -->
          <div class="values-content-col">
            <span class="section-gold-eyebrow">${L('OUR VALUES', 'قيمنا الراسخة')}</span>
            <h2 class="section-serif-title text-white">${L('BUILT ON TRUST. DRIVEN BY A HIGHER PURPOSE.', 'بُنيت على الثقة. ومحفزة بغاية أسمى.')}</h2>
            <p class="section-lead-desc text-muted-cream">
              ${L(
                'We deliver more than earthworks — we build value, opportunity and lasting infrastructure for future generations.',
                'نحن نقدم أكثر من مجرد أعمال ترابية — إننا نصنع قيمة وفرصاً وبنية تحتية مستدامة للأجيال القادمة.'
              )}
            </p>

            <!-- 4 Circular Golden Ring Value Badges -->
            <div class="values-badges-row">
              <div class="value-ring-badge">
                <div class="ring-circle">${ICONS.shield}</div>
                <strong class="ring-title-en">Safety First</strong>
                <span class="ring-title-ar">السلامة أولاً</span>
              </div>

              <div class="value-ring-badge">
                <div class="ring-circle">${ICONS.diamond}</div>
                <strong class="ring-title-en">Uncompromising Quality</strong>
                <span class="ring-title-ar">جودة بلا مساومة</span>
              </div>

              <div class="value-ring-badge">
                <div class="ring-circle">${ICONS.users}</div>
                <strong class="ring-title-en">People & Partnerships</strong>
                <span class="ring-title-ar">شركاء في النجاح</span>
              </div>

              <div class="value-ring-badge">
                <div class="ring-circle">${ICONS.leaf}</div>
                <strong class="ring-title-en">Sustainable Growth</strong>
                <span class="ring-title-ar">نمو مستدام</span>
              </div>
            </div>
          </div>

          <!-- Right Vision 2030 Column -->
          <div class="vision-badge-col">
            <div class="vision-stamp-card">
              <span class="vision-align-tag">${L('ALIGNED WITH', 'متوافق مع')}</span>
              <div class="vision-vector-wrap">${ICONS.vision2030}</div>
              <div class="vision-kingdom-text">
                <span class="ar-k">المملكة العربية السعودية</span>
                <span class="en-k">KINGDOM OF SAUDI ARABIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WAVY DIVIDER 3: MIDNIGHT DARK TO SANDSTONE CREAM -->
    <div class="wave-divider wave-dark-to-cream" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path class="wave-contour" d="M0,25 C320,85 580,15 800,70 C1040,125 1220,35 1440,85 L1440,120 L0,120 Z" fill="rgba(245, 240, 230, 0.4)"/>
        <path class="wave-contour-2" d="M0,50 C360,110 620,35 840,90 C1080,140 1260,50 1440,95 L1440,120 L0,120 Z" fill="rgba(245, 240, 230, 0.7)"/>
        <path class="wave-main" d="M0,68 C400,130 680,55 920,105 C1160,155 1300,70 1440,110 L1440,120 L0,120 Z" fill="#f5f0e6"/>
      </svg>
    </div>

    <!-- SECTION 4: FEATURED PROJECTS (SANDSTONE CREAM) -->
    <section class="section-projects-ref" id="featured-projects">
      <div class="wrap">
        <div class="projects-ref-header reveal-on-scroll">
          <div class="projects-head-text">
            <span class="section-gold-eyebrow">${L('FEATURED PROJECTS', 'مشاريعنا المميزة')}</span>
            <h2 class="section-serif-title">${L('REAL PROJECTS. LASTING IMPACT.', 'مشاريع حقيقية. وأثر دائم.')}</h2>
            <p class="section-lead-desc">
              ${L(
                'From major infrastructure works to complex earthmoving operations, we deliver projects that power progress across Saudi Arabia.',
                'من كبرى مشاريع البنية التحتية إلى أصعب أعمال القطع الصخري، ننجز مشاريع تصنع الفارق في شتى أنحاء المملكة.'
              )}
            </p>
          </div>

          <div class="projects-head-action">
            <a class="btn-dark-pill" href="/projects/">
              <span>${L('View All Projects', 'عرض كافة المشاريع')}</span> ${ICONS.arrowRight}
            </a>
          </div>
        </div>

        <div class="projects-ref-grid reveal-on-scroll">
          <!-- Project 1: Riyadh -->
          <a class="project-ref-card" href="/projects/king-salman-park-alyamama/">
            <div class="project-card-media">
              <img src="${A}salman-park-aerial.png" alt="King Salman Park earthworks in Riyadh" loading="lazy" width="600" height="400">
              <span class="project-city-tag">RIYADH</span>
            </div>
            <div class="project-card-info">
              <h3>King Salman Park</h3>
              <p>Earthworks · Infrastructure</p>
              <div class="project-card-link">
                <span>${L('View Project', 'تفاصيل المشروع')}</span> ${ICONS.arrowRight}
              </div>
            </div>
          </a>

          <!-- Project 2: Qiddiya -->
          <a class="project-ref-card" href="/projects/qiddiya-city-center/">
            <div class="project-card-media">
              <img src="${A}qiddiya-grading.png" alt="Qiddiya grading and site preparation" loading="lazy" width="600" height="400">
              <span class="project-city-tag">QIDDIYA</span>
            </div>
            <div class="project-card-info">
              <h3>Site Preparation Works</h3>
              <p>Excavation · Backfilling</p>
              <div class="project-card-link">
                <span>${L('View Project', 'تفاصيل المشروع')}</span> ${ICONS.arrowRight}
              </div>
            </div>
          </a>

          <!-- Project 3: Riyadh infrastructure -->
          <a class="project-ref-card" href="/projects/exit-4-hospital/">
            <div class="project-card-media">
              <img src="${A}activity-earth.png" alt="Riyadh excavation and infrastructure works" loading="lazy" width="600" height="400">
              <span class="project-city-tag">RIYADH</span>
            </div>
            <div class="project-card-info">
              <h3>Infrastructure Support</h3>
              <p>Earthworks · Utilities</p>
              <div class="project-card-link">
                <span>${L('View Project', 'تفاصيل المشروع')}</span> ${ICONS.arrowRight}
              </div>
            </div>
          </a>

          <!-- Right Column: More Than Projects We Build Possibilities -->
          <div class="project-possibilities-card">
            <div class="possibilities-inner">
              <div class="possibilities-heading">
                <span>MORE THAN</span>
                <span>PROJECTS</span>
                <span>WE BUILD</span>
                <span>POSSIBILITIES</span>
              </div>
              <div class="possibilities-skyline-vector">
                <svg viewBox="0 0 200 60" fill="currentColor">
                  <path d="M10 60 L10 40 L25 40 L25 60 M30 60 L30 30 L45 30 L45 60 M50 60 L50 15 L60 10 L70 15 L70 60 M75 60 L75 35 L90 35 L90 60 M95 60 L95 20 L110 5 L125 20 L125 60 M130 60 L130 38 L145 38 L145 60 M150 60 L150 25 L165 25 L165 60 M170 60 L170 42 L190 42 L190 60 Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WAVY DIVIDER 4: SANDSTONE CREAM TO MIDNIGHT DARK -->
    <div class="wave-divider wave-cream-to-dark" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path class="wave-contour" d="M0,35 C320,95 560,15 800,70 C1040,125 1220,35 1440,85 L1440,120 L0,120 Z" fill="rgba(13, 18, 24, 0.4)"/>
        <path class="wave-contour-2" d="M0,60 C360,120 600,40 840,90 C1080,140 1260,50 1440,100 L1440,120 L0,120 Z" fill="rgba(13, 18, 24, 0.7)"/>
        <path class="wave-main" d="M0,75 C400,140 660,55 900,105 C1140,155 1300,70 1440,110 L1440,120 L0,120 Z" fill="#0d1218"/>
      </svg>
    </div>

    <!-- SECTION 5: OUR EQUIPMENT (MIDNIGHT DARK WITH GIANT EXCAVATOR) -->
    <section class="section-equipment-power" id="equipment-power">
      <div class="wrap">
        <div class="equipment-power-header reveal-on-scroll">
          <div class="equip-head-text">
            <span class="section-gold-eyebrow">${L('OUR EQUIPMENT', 'أسطولنا ومعداتنا')}</span>
            <h2 class="section-serif-title text-white">${L('POWER THAT MOVES A NATION', 'قوة تحرك مسيرة الوطن')}</h2>
            <p class="section-lead-desc text-muted-cream">
              ${L(
                'A modern fleet. Maximum reliability. Ready for the most demanding earthworks and infrastructure projects.',
                'أسطول هندسي متطور بأعلى مستويات الجاهزية التشغيلية، مستعد لتنفيذ أضخم المشاريع الإنشائية والتنموية.'
              )}
            </p>
          </div>

          <div class="equip-head-action">
            <a class="btn-quote-header" href="/equipments/">
              <span>${L('Explore Our Equipment', 'استكشف أسطول المعدات')}</span> ${ICONS.arrowRight}
            </a>
          </div>
        </div>

        <div class="equipment-power-showcase reveal-on-scroll">
          <!-- Giant Excavator Image Feature -->
          <div class="equipment-giant-visual">
            <img src="${A}hero-poster.jpg" alt="Earthmoving fleet working across a wide excavation" loading="lazy" width="1200" height="750">
            <div class="equip-visual-vignette"></div>
            <div class="built-horizons-stamp">
              <strong>BUILT</strong>
              <strong>FOR</strong>
              <strong>BIGGER</strong>
              <strong>HORIZONS</strong>
            </div>
          </div>

          <!-- Right Fleet Breakdown List with Animated Count-Ups -->
          <div class="equipment-fleet-specs">
            <div class="fleet-spec-row">
              <div class="spec-icon-box">${ICONS.excavator}</div>
              <div class="spec-meta">
                <span class="spec-name">EXCAVATORS</span>
                <span class="spec-tonnage count-up" data-counter="90" data-prefix="05 - " data-suffix=" Ton">05 - 90 Ton</span>
              </div>
            </div>

            <div class="fleet-spec-row">
              <div class="spec-icon-box">${ICONS.bulldozer}</div>
              <div class="spec-meta">
                <span class="spec-name">DOZERS</span>
                <span class="spec-tonnage">D6 - D10</span>
              </div>
            </div>

            <div class="fleet-spec-row">
              <div class="spec-icon-box">${ICONS.loader}</div>
              <div class="spec-meta">
                <span class="spec-name">WHEEL LOADERS</span>
                <span class="spec-tonnage count-up" data-counter="7" data-prefix="3 - " data-suffix=" m³">3 - 7 m³</span>
              </div>
            </div>

            <div class="fleet-spec-row">
              <div class="spec-icon-box">${ICONS.truck}</div>
              <div class="spec-meta">
                <span class="spec-name">DUMP TRUCKS</span>
                <span class="spec-tonnage count-up" data-counter="40" data-prefix="10 - " data-suffix=" Ton">10 - 40 Ton</span>
              </div>
            </div>

            <div class="fleet-spec-row">
              <div class="spec-icon-box">${ICONS.cog}</div>
              <div class="spec-meta">
                <span class="spec-name">SUPPORT EQUIPMENT</span>
                <span class="spec-tonnage">And More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WAVY DIVIDER 5: MIDNIGHT DARK TO SANDSTONE CREAM -->
    <div class="wave-divider wave-dark-to-cream" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path class="wave-contour" d="M0,30 C300,90 540,10 780,65 C1020,120 1200,30 1440,80 L1440,120 L0,120 Z" fill="rgba(245, 240, 230, 0.4)"/>
        <path class="wave-contour-2" d="M0,55 C340,115 580,35 820,85 C1060,135 1240,45 1440,95 L1440,120 L0,120 Z" fill="rgba(245, 240, 230, 0.7)"/>
        <path class="wave-main" d="M0,70 C380,135 640,50 880,100 C1120,150 1280,65 1440,105 L1440,120 L0,120 Z" fill="#f5f0e6"/>
      </svg>
    </div>

    <!-- SECTION 6: FOUNDATIONS, VISION & PEOPLE (BOTTOM 3-COLUMN SHOWCASE) -->
    <section class="section-brand-foundations" id="brand-foundations">
      <div class="wrap">
        <div class="foundations-trio-grid reveal-on-scroll">
          <!-- Left: People & Land -->
          <div class="foundations-card foundations-people-card">
            <img src="${A}hero-cinematic.jpg" alt="Earthworks at sunset across a desert landscape" loading="lazy" width="600" height="400">
            <div class="foundations-overlay">
              <div class="foundations-people-text">
                <h3>PEOPLE. LAND. POSSIBILITIES.</h3>
                <p class="ar-calligraphy">معاً نبني مستقبل أكثر ازدهاراً</p>
              </div>
            </div>
          </div>

          <!-- Center: Official Qemam Al-Entaj Brand Crest -->
          <div class="foundations-card foundations-brand-card">
            <div class="brand-crest-box">
              <img class="brand-mark-center" src="${A}qimam-mark.png" alt="Qemam Al-Entaj" width="70" height="78">
              <h2 class="brand-crest-en">QEMAM AL-ENTAJ</h2>
              <h3 class="brand-crest-ar">قمم الإنتاج</h3>
              <div class="brand-crest-divider"></div>
              <p class="brand-crest-motto-en">EARTHWORKS FOR A STRONGER SAUDI ARABIA</p>
              <p class="brand-crest-motto-ar">أعمال الأرض - لسعودية أقوى</p>
            </div>
          </div>

          <!-- Right: Terrains & Call to Action -->
          <div class="foundations-card foundations-terrains-card">
            <img src="${A}riyadh-skyline-twilight.jpg" alt="Riyadh Modern Architectural Landmarks" loading="lazy" width="600" height="400">
            <div class="foundations-overlay">
              <div class="foundations-terrains-text">
                <span class="terrains-tag">DIFFERENT TERRAINS</span>
                <span class="terrains-sub">A SHARED TOMORROW</span>
                
                <div class="terrains-cta-box">
                  <h4>LET'S BUILD WHAT'S NEXT</h4>
                  <a class="btn-quote-header" href="/contact/">
                    <span>${L('Get a Quote', 'طلب عرض سعر')}</span> ${ICONS.arrowRight}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STORY VIDEO LIGHTBOX MODAL -->
    <div id="story-video-modal" class="story-modal" aria-hidden="true" role="dialog">
      <div class="story-modal-backdrop"></div>
      <div class="story-modal-dialog">
        <button class="story-modal-close" id="story-modal-close-btn" type="button" aria-label="Close Story Video">
          &times;
        </button>
        <div class="story-video-wrapper">
          <video id="story-video-player" controls preload="metadata" poster="${A}hero-poster.jpg">
            <source src="${A}hero-video.mp4" type="video/mp4">
            <source src="${A}hero-video.webm" type="video/webm">
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div class="story-modal-caption">
          <h3>${L('Qemam Al-Entaj — Earthworks in Continuous Motion', 'شركة قمم الإنتاج — عمليات متواصلة في بناء الغد')}</h3>
          <p>${L('Mass grading, heavy excavation, and strategic infrastructure across the Kingdom of Saudi Arabia.', 'أعمال الحفر والردم والتسويات الكبرى لكبرى مشاريع المملكة.')}</p>
        </div>
      </div>
    </div>
  `;
}

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
            ${t().discussProject} <span class="svg-arrow-up">${ICONS.arrowUpRight}</span>
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
                <div class="btn-circle-gold">→</div>
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
          <a class="btn-gold" href="/contact/">${t().discussProject} <span class="svg-arrow-up">${ICONS.arrowUpRight}</span></a>
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
                <span style="font-size: 22px;"></span>
                <strong>${L('Technical Execution Standards', 'معايير التنفيذ الهندسي المعتمدة')}</strong>
              </div>
              <p>${L(service.specsEn, service.specsAr)}</p>
            </div>

            <div style="margin-top: 28px; display: flex; gap: 14px; flex-wrap: wrap;">
              <a class="btn-gold" href="/contact/">${t().discussProject} <span class="svg-arrow-up">${ICONS.arrowUpRight}</span></a>
              <a class="btn-outline-dark" href="/equipments/">${t().nav.fleet} (378+) <span class="svg-arrow-up">${ICONS.arrowUpRight}</span></a>
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
                <span class="step-check"></span>
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
              <div class="safety-card-icon">️</div>
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
          <a class="btn-gold" href="/contact/">${t().discussProject} <span class="svg-arrow-up">${ICONS.arrowUpRight}</span></a>
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
      locationEn: '<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA',
      locationAr: '<span class="svg-inline-pin">${ICONS.pin}</span> الرياض، المملكة العربية السعودية'
    },
    {
      id: 'pl-2',
      active: false,
      videoImg: `${A}uae-highway-paving.jpg`,
      thumbImg: `${A}uae-highway-paving.jpg`,
      titleEn: 'Asphalt Paving Operations',
      titleAr: 'عمليات فرش وسفلتة الطرق السريعة',
      duration: '01:48',
      locationEn: '<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA',
      locationAr: '<span class="svg-inline-pin">${ICONS.pin}</span> الرياض، المملكة العربية السعودية'
    },
    {
      id: 'pl-3',
      active: false,
      videoImg: `${A}cta-sunset.jpg`,
      thumbImg: `${A}cta-sunset.jpg`,
      titleEn: 'Material Loading & Haulage',
      titleAr: 'تحميل المواد ونقل الأتربة بالقلابات',
      duration: '02:10',
      locationEn: '<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA',
      locationAr: '<span class="svg-inline-pin">${ICONS.pin}</span> الرياض، المملكة العربية السعودية'
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
      locationEn: '<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA',
      locationAr: '<span class="svg-inline-pin">${ICONS.pin}</span> القدية، الرياض'
    },
    {
      img: 'uae-highway-paving.jpg',
      category: 'roads',
      categoryEn: 'ROADS & ASPHALT',
      categoryAr: 'الطرق والأسفلت',
      titleEn: 'Asphalt Paving with Multi-Unit Operation',
      titleAr: 'فرش الأسفلت بواسطة قطار رصف متكامل',
      locationEn: '<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA',
      locationAr: '<span class="svg-inline-pin">${ICONS.pin}</span> الرياض، المملكة العربية السعودية'
    },
    {
      img: 'action-night-shift.jpg',
      category: 'earthworks',
      categoryEn: 'EARTHWORKS',
      categoryAr: 'الأعمال الترابية',
      titleEn: 'Night Shift Operations under Floodlights',
      titleAr: 'عمليات الوردية الليلية تحت كشافات الإضاءة',
      locationEn: '<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA',
      locationAr: '<span class="svg-inline-pin">${ICONS.pin}</span> الرياض، المملكة العربية السعودية'
    },
    {
      img: 'salman-park.png',
      category: 'landscaping',
      categoryEn: 'LANDSCAPING',
      categoryAr: 'تنسيق المواقع والتسوية',
      titleEn: 'Landscaping & Grading at King Salman Park',
      titleAr: 'تسوية وتشكيل تضاريس حديقة الملك سلمان',
      locationEn: '<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA',
      locationAr: '<span class="svg-inline-pin">${ICONS.pin}</span> حديقة الملك سلمان، الرياض'
    },
    {
      img: 'service-pipeline-utility.jpg',
      category: 'utilities',
      categoryEn: 'UTILITIES & PIPELINES',
      categoryAr: 'شبكات الأنابيب والمرافق',
      titleEn: 'Utilities & Pipeline Installation',
      titleAr: 'تركيب وتمديد خطوط الأنابيب والمرافق',
      locationEn: '<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA',
      locationAr: '<span class="svg-inline-pin">${ICONS.pin}</span> الرياض، المملكة العربية السعودية'
    },
    {
      img: 'cta-sunset.jpg',
      category: 'equipment',
      categoryEn: 'EQUIPMENT OPERATIONS',
      categoryAr: 'تشغيل المعدات والنقل',
      titleEn: 'Material Loading & Haulage Operations',
      titleAr: 'عمليات تحميل ونقل وتفريغ نواتج الحفر',
      locationEn: '<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA',
      locationAr: '<span class="svg-inline-pin">${ICONS.pin}</span> الرياض، المملكة العربية السعودية'
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
              <span class="video-main-play-btn">PLAY</span>
              <div class="video-center-cta-text">
                <h3 id="action-center-title">${L('Watch Our Operations', 'شاهد عملياتنا')}</h3>
                <span id="action-center-duration">02:36</span>
              </div>
            </button>

            <!-- Bottom Video Info Overlay -->
            <div class="video-overlay-info">
              <div>
                <h3 class="video-overlay-title" id="action-main-video-title">${L('Large Scale Earthworks in Riyadh', 'أعمال ترابية واسعة النطاق في الرياض')}</h3>
                <div class="video-overlay-meta" id="action-main-video-meta">${L('<span class="svg-inline-pin">${ICONS.pin}</span> Riyadh, KSA · 4K UHD Feed', '<span class="svg-inline-pin">${ICONS.pin}</span> الرياض، المملكة العربية السعودية · بث 4K')}</div>
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
                <div class="video-playlist-card-play">PLAY</div>
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
                  ${L('Explore Our Projects', 'استكشف مشاريعنا')} <span class="svg-arrow-right">${ICONS.arrowRight}</span>
                </a>
                <a href="/contact/" class="btn" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.3); color: var(--pure-white); font-weight: 700; padding: 14px 28px; border-radius: var(--radius-pill); text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease;">
                  <span style="font-size: 14px;"></span> ${L('Contact Our Team', 'تواصل مع فريقنا')}
                </a>
              </div>

              <div class="operational-impact-metrics">
                <div class="impact-metric-item">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 22px;"></span>
                    <strong>378+</strong>
                  </div>
                  <span>${L('Heavy Machines in Fleet', 'آلية ومعدة ثقيلة بالأسطول')}</span>
                </div>
                <div class="impact-metric-item">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 22px;">️</span>
                    <strong>50+</strong>
                  </div>
                  <span>${L('Ongoing & Completed Projects', 'مشروع قيد التنفيذ ومنجز')}</span>
                </div>
                <div class="impact-metric-item">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 22px;">️</span>
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
        <button class="lightbox-close-btn" id="site-lightbox-close" aria-label="${L('Close Modal', 'إغلاق النافذة')}"></button>
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
                <span class="portfolio-loc"><span class="svg-inline-pin">${ICONS.pin}</span> ${L(p.location, p.locationAr)}</span>
                <p style="font-size: 13.5px; color: var(--muted-text); margin-bottom: 14px; line-height: 1.6;">${L(p.twoLineDescEn, p.twoLineDescAr)}</p>
                <div class="portfolio-footer">
                  <span>${p.year}</span>
                  <div class="btn-circle-gold">→</div>
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
          <span class="expand-hint-chip"> ${t().expandPhotoPrompt}</span>
        </div>

        <div style="padding: 30px 0 20px; border-bottom: 1px solid var(--subtle-border);">
          <span style="display: inline-block; background: var(--warm-sand); color: var(--midnight-blue); padding: 6px 16px; border-radius: var(--radius-pill); font-size: 13px; font-weight: 800; margin-bottom: 12px;">
             ${project.year}
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
            <strong><span class="svg-inline-pin">${ICONS.pin}</span> ${L(project.location, project.locationAr)}</strong>
          </div>
          <div>
            <small>${L('Client / Partner', 'العميل / الشريك')}</small>
            <strong> ${L(project.client, project.clientAr)}</strong>
          </div>
          <div>
            <small>${L('Timeline', 'الفترة')}</small>
            <strong>⏱ ${project.year}</strong>
          </div>
          <div>
            <small>${L('Contractor Status', 'درجة التصنيف')}</small>
            <strong> 1st Degree (KSA)</strong>
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
          <div style="font-size: 34px; margin-bottom: 10px;"></div>
          <strong style="font-size: 17px; color: var(--midnight-blue); display: block; margin-bottom: 6px;">${t().clientSlotTitle}</strong>
          <p style="font-size: 13.5px; color: var(--muted-text);">${t().clientSlotDesc}</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div class="lightbox-modal" id="site-lightbox-modal" aria-hidden="true">
      <div class="lightbox-content-box">
        <button class="lightbox-close-btn" id="site-lightbox-close"></button>
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
            <span style="font-size: 24px;"></span>
            <div>
              <small style="color: var(--sand-gold); font-weight: 800; font-size: 11px; text-transform: uppercase;">Location</small>
              <strong>${L('Riyadh, Al Yarmouk District, Al Najah Street, KSA', 'المملكة العربية السعودية، الرياض، حي اليرموك، شارع النجاح')}</strong>
            </div>
          </div>

          <div class="contact-card-tile">
            <span style="font-size: 24px;"></span>
            <div>
              <small style="color: var(--sand-gold); font-weight: 800; font-size: 11px; text-transform: uppercase;">Direct Lines</small>
              <strong>
                <a href="tel:+966505606116" dir="ltr">+966 50 560 6116</a><br>
                <a href="tel:+966509234001" dir="ltr">+966 50 923 4001</a>
              </strong>
            </div>
          </div>

          <div class="contact-card-tile">
            <span style="font-size: 24px;">️</span>
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
            <button class="btn-gold" type="submit">${t().startProject} <span class="svg-arrow-up">${ICONS.arrowUpRight}</span></button>
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

  app.innerHTML = renderIntroPreloader() + renderHeader() + `<main id="main-content">${mainContent}</main>` + renderFooter();

  bindEventListeners();

  if (typeof window !== 'undefined' && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const scrollVal = params.get('scroll');
    if (scrollVal) {
      const s = parseInt(scrollVal, 10);
      window.scrollTo(0, s);
      window.dispatchEvent(new Event('scroll'));
    }
  }
}

// ==========================================================================
// 3D LIVING CONSTRUCTION LANDSCAPE TERRAIN ENGINE
// ==========================================================================
let terrainAnimationId = null;
let terrainRenderer = null;

function initLivingLandscape3D() {
  const container = document.getElementById('landscape-canvas-container');
  const canvas = document.getElementById('living-terrain-canvas');
  if (!container || !canvas) return;

  // Cleanup any previous animation loop or renderer
  if (terrainAnimationId) {
    cancelAnimationFrame(terrainAnimationId);
    terrainAnimationId = null;
  }
  if (terrainRenderer) {
    try { terrainRenderer.dispose(); } catch (e) {}
    terrainRenderer = null;
  }

  // Graceful fallback if Three.js or WebGL is not available
  if (typeof THREE === 'undefined') {
    container.classList.add('use-fallback');
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
  } catch (err) {
    container.classList.add('use-fallback');
    return;
  }

  terrainRenderer = renderer;
  const dpr = Math.min((typeof window !== 'undefined' && window.devicePixelRatio) || 1, 2);
  renderer.setPixelRatio(dpr);
  renderer.setSize(container.clientWidth || 1440, container.clientHeight || 900);
  if (THREE.ACESFilmicToneMapping) {
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
  }

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a1725, 0.016);

  const aspect = (container.clientWidth && container.clientHeight) ? (container.clientWidth / container.clientHeight) : (16 / 9);
  const camera = new THREE.PerspectiveCamera(46, aspect, 0.5, 500);

  // Initial cinematic high aerial vantage point overlooking Saudi terrain
  const baseCamY = 15.0;
  const baseCamZ = 44.0;
  camera.position.set(0, baseCamY, baseCamZ);
  camera.lookAt(0, 1.5, -8.0);

  // Lighting: Warm golden hour desert sun + midnight blue ambient sky
  const sunLight = new THREE.DirectionalLight(0xfde3a7, 1.35);
  sunLight.position.set(45, 30, -50);
  scene.add(sunLight);

  const skyFillLight = new THREE.DirectionalLight(0x30485c, 0.85);
  skyFillLight.position.set(-30, 20, 20);
  scene.add(skyFillLight);

  const ambientLight = new THREE.AmbientLight(0x0a1725, 0.7);
  scene.add(ambientLight);

  // Procedural Terraced Saudi Earthworks Topography
  const gridW = 150;
  const gridD = 150;
  const segs = 120;
  const geometry = new THREE.PlaneGeometry(gridW, gridD, segs, segs);
  geometry.rotateX(-Math.PI / 2);

  const posAttr = geometry.attributes.position;
  for (let i = 0; i < posAttr.count; i++) {
    const vx = posAttr.getX(i);
    const vz = posAttr.getZ(i);

    // Multi-frequency rugged Saudi mountains
    let elev = Math.sin(vx * 0.038) * Math.cos(vz * 0.038) * 13.5
             + Math.sin(vx * 0.075 + 1.2) * Math.cos(vz * 0.065 + 0.9) * 5.8
             + Math.cos(vx * 0.14) * Math.sin(vz * 0.14) * 2.2;

    // Center excavation haul road corridor cut
    const roadDist = Math.abs(vx);
    const canyonFactor = Math.min(1.0, Math.pow(roadDist / 18.0, 1.8));
    elev = (elev * canyonFactor) - (1.0 - canyonFactor) * 3.8;

    // Stepped excavation benches (quarry / cut terraces)
    const step = 2.4;
    const terraced = Math.floor(elev / step) * step;
    const finalElev = elev * 0.4 + terraced * 0.6;
    posAttr.setY(i, finalElev);
  }
  geometry.computeVertexNormals();

  // Custom Shader Material: Midnight Blue depth with glowing Sand Gold topographic contour lines
  const uniforms = {
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uBaseColor: { value: new THREE.Color(0x0a1725) },
    uMidColor: { value: new THREE.Color(0x16324d) },
    uGoldColor: { value: new THREE.Color(0xc6a56b) },
    uSunColor: { value: new THREE.Color(0xfde3a7) }
  };

  const vertexShader = `
    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    varying float vElevation;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vElevation = position.y;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform float uScroll;
    uniform vec3 uBaseColor;
    uniform vec3 uMidColor;
    uniform vec3 uGoldColor;
    uniform vec3 uSunColor;

    varying vec3 vWorldPosition;
    varying vec3 vNormal;
    varying float vElevation;

    void main() {
      vec3 lightDir = normalize(vec3(0.5, 0.45, -0.6));
      float diff = max(dot(vNormal, lightDir), 0.0);

      // Deep Midnight blue gradient across elevation
      float hNorm = clamp((vElevation + 6.0) / 20.0, 0.0, 1.0);
      vec3 ground = mix(uBaseColor, uMidColor, hNorm);

      // Topographic elevation contour lines (Sand Gold)
      float contourFreq = 0.62;
      float line = abs(fract(vElevation * contourFreq - 0.5) - 0.5) / fwidth(vElevation * contourFreq);
      float contour = 1.0 - clamp(line, 0.0, 1.0);

      // Dynamic survey laser sweep across terrain
      float sweepZ = mod(uTime * 9.0, 150.0) - 75.0;
      float sweepDist = abs(vWorldPosition.z - sweepZ);
      float sweepWave = smoothstep(10.0, 0.0, sweepDist) * 0.75;

      // Color composition
      vec3 col = ground + diff * uSunColor * 0.35;
      col = mix(col, uGoldColor, contour * 0.85);
      col += uGoldColor * sweepWave;

      // Distance atmospheric fog fade into deep midnight blue
      float dist = length(vWorldPosition - cameraPosition);
      float fog = clamp((dist - 20.0) / 120.0, 0.0, 1.0);
      col = mix(col, uBaseColor, fog);

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  const terrainMat = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    side: THREE.DoubleSide
  });

  const terrainMesh = new THREE.Mesh(geometry, terrainMat);
  scene.add(terrainMesh);

  // Wireframe contour overlay for extra engineering precision feel
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xc6a56b,
    wireframe: true,
    transparent: true,
    opacity: 0.07
  });
  const wireMesh = new THREE.Mesh(geometry, wireMat);
  wireMesh.position.y += 0.03;
  scene.add(wireMesh);

  // Topographic survey markers (pulsing coordinate beacons)
  const beaconCoords = [
    { x: -14, z: -8 },
    { x: 18, z: -22 },
    { x: -2, z: -40 }
  ];

  const beaconGroup = new THREE.Group();
  beaconCoords.forEach(pt => {
    const beaconGeom = new THREE.CylinderGeometry(0.12, 0.12, 4.0, 8);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xc6a56b, transparent: true, opacity: 0.65 });
    const beacon = new THREE.Mesh(beaconGeom, beaconMat);
    beacon.position.set(pt.x, 2.0, pt.z);
    beaconGroup.add(beacon);

    const ringGeom = new THREE.RingGeometry(0.8, 1.0, 24);
    ringGeom.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xfde3a7, transparent: true, opacity: 0.85, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.position.set(pt.x, 0.2, pt.z);
    beacon.userData.ring = ring;
    beaconGroup.add(ring);
  });
  scene.add(beaconGroup);

  // Mouse Parallax & Scroll Handling
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  function onMouseMove(e) {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = -(e.clientY / window.innerHeight) * 2 + 1;
    targetMouseX = nx * 3.5;
    targetMouseY = ny * 1.5;
  }
  window.addEventListener('mousemove', onMouseMove, { passive: true });

  const openingContent = document.getElementById('hero-opening-content');
  const transitionStage = document.getElementById('hero-transition-stage');
  const heroSection = document.getElementById('hero-3d-section');

  function updateScroll() {
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    const heroHeight = heroSection.offsetHeight;
    const scrolled = Math.max(0, -rect.top);
    const progress = Math.min(1.0, scrolled / (heroHeight * 0.75));

    uniforms.uScroll.value = progress;

    // Camera flight forward through terrain canyon
    const flightZ = baseCamZ - progress * 48.0;
    const flightY = baseCamY - progress * 10.5;
    const flightX = Math.sin(progress * Math.PI) * 4.0;
    
    camera.position.z = flightZ;
    camera.position.y = flightY + currentMouseY;
    camera.position.x = flightX + currentMouseX;
    camera.lookAt(0, 1.5 - progress * 2.0, -10.0 - progress * 25.0);

    // Opacity / Transform of Hero Opening and Transition Narrative
    if (openingContent) {
      const openOpacity = Math.max(0, 1.0 - progress * 2.2);
      openingContent.style.opacity = openOpacity;
      openingContent.style.transform = `translateY(${progress * -80}px)`;
      openingContent.style.pointerEvents = openOpacity <= 0.05 ? 'none' : 'auto';
    }

    if (transitionStage) {
      if (progress > 0.25 && progress < 0.95) {
        const transProg = (progress - 0.25) / 0.55;
        const transOpacity = transProg < 0.5 ? transProg * 2.0 : (1.0 - transProg) * 2.0;
        transitionStage.style.opacity = Math.min(1.0, Math.max(0, transOpacity));
        transitionStage.style.transform = `translateY(${(1.0 - transProg) * 30}px)`;
        transitionStage.style.pointerEvents = 'auto';
      } else {
        transitionStage.style.opacity = '0';
        transitionStage.style.pointerEvents = 'none';
      }
    }
  }

  window.addEventListener('scroll', updateScroll, { passive: true });

  // Resize Handler
  function onResize() {
    if (!container || !renderer) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize);

  // Visibility Optimization (Pause RAF when not visible)
  let isVisible = true;
  if ('IntersectionObserver' in window && heroSection) {
    const io = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    io.observe(heroSection);
  }

  // Animation Loop
  let clock = new THREE.Clock();
  function animate() {
    terrainAnimationId = requestAnimationFrame(animate);
    if (!isVisible) return;

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();
    uniforms.uTime.value = elapsedTime;

    // Smooth mouse parallax interpolation
    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    // Gentle terrain drift when at top of page
    const scrollY = (typeof window !== 'undefined' && window.scrollY) || 0;
    if (scrollY < 50) {
      camera.position.x = Math.sin(elapsedTime * 0.25) * 1.5 + currentMouseX;
      camera.position.y = baseCamY + Math.cos(elapsedTime * 0.3) * 0.5 + currentMouseY;
      camera.lookAt(0, 1.5, -8.0);
    }

    // Pulse beacon rings
    beaconGroup.children.forEach((obj, idx) => {
      if (obj.userData.ring) {
        const s = 1.0 + Math.sin(elapsedTime * 3.0 + idx) * 0.25;
        obj.userData.ring.scale.set(s, s, s);
      }
    });

    renderer.render(scene, camera);
  }

  animate();
  updateScroll();
}


// ==========================================================================
// NUMERIC COUNT-UP OBSERVER (MOBILE-OPTIMIZED SMOOTH RAF EASING)
// ==========================================================================
function initCounterAnimations() {
  const countElements = document.querySelectorAll('.count-up, [data-counter]');
  if (!countElements.length) return;

  if (!('IntersectionObserver' in window)) {
    countElements.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-counter') || el.textContent.replace(/[^0-9.]/g, ''));
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      if (!isNaN(target)) el.textContent = prefix + target + suffix;
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        obs.unobserve(el);
        const target = parseFloat(el.getAttribute('data-counter') || el.textContent.replace(/[^0-9.]/g, ''));
        if (isNaN(target)) return;

        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        const duration = parseInt(el.getAttribute('data-duration') || '1600', 10);

        let startTime = null;
        function animateCounter(currentTime) {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic function: 1 - pow(1 - x, 3)
          const ease = 1 - Math.pow(1 - progress, 3);
          const currentVal = (ease * target).toFixed(decimals);
          el.textContent = prefix + currentVal + suffix;

          if (progress < 1) {
            requestAnimationFrame(animateCounter);
          } else {
            el.textContent = prefix + target.toFixed(decimals) + suffix;
          }
        }
        requestAnimationFrame(animateCounter);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  countElements.forEach((el) => observer.observe(el));
}

// ==========================================================================
// CINEMATIC PRELOADER CONTROLLER (0-100% WITH WEBSITE REVEAL)
// ==========================================================================
function initIntroPreloader() {
  const preloader = document.getElementById('intro-preloader');
  if (!preloader) return;

  // If already viewed in current session, hide immediately
  if (sessionStorage.getItem('qemam_intro_viewed') === '1') {
    preloader.style.display = 'none';
    return;
  }

  const progressBar = document.getElementById('intro-progress-bar');
  const counterNum = document.getElementById('intro-counter-number');
  const statusText = document.getElementById('intro-status-text');

  const steps = [
    { p: 15, text: 'CALIBRATING GPS EXCAVATION MATRICES' },
    { p: 40, text: 'MAPPING TOPOGRAPHIC SAUDI CONTOURS' },
    { p: 68, text: 'MOBILIZING 378+ HEAVY UNITS FLEET' },
    { p: 88, text: 'ALIGNING VISION 2030 INFRASTRUCTURE' },
    { p: 100, text: 'WELCOME TO QEMAM AL-ENTAJ' }
  ];

  let currentPercent = 0;
  const duration = 1600; // 1.6s smooth cinematic progression
  let startTimestamp = null;

  function closePreloader() {
    sessionStorage.setItem('qemam_intro_viewed', '1');
    preloader.classList.add('intro-completed');
    setTimeout(() => {
      preloader.style.display = 'none';
      // Trigger scroll reveal observer for hero immediately
      document.querySelectorAll('.hero-earthworks-ref').forEach((el) => el.classList.add('is-revealed'));
    }, 750);
  }

  function tickProgress(ts) {
    if (!startTimestamp) startTimestamp = ts;
    const elapsed = ts - startTimestamp;
    const rawProgress = Math.min(elapsed / duration, 1);
    // Smooth progress with subtle ease-out
    currentPercent = Math.min(Math.floor(rawProgress * 100), 100);

    if (progressBar) progressBar.style.width = currentPercent + '%';
    if (counterNum) counterNum.textContent = currentPercent;

    if (statusText) {
      for (let i = steps.length - 1; i >= 0; i--) {
        if (currentPercent >= steps[i].p) {
          statusText.textContent = steps[i].text;
          break;
        }
      }
    }

    if (rawProgress < 1) {
      requestAnimationFrame(tickProgress);
    } else {
      if (counterNum) counterNum.textContent = '100';
      if (progressBar) progressBar.style.width = '100%';
      // Brief pause at 100% then reveal
      setTimeout(() => {
        closePreloader();
      }, 250);
    }
  }

  requestAnimationFrame(tickProgress);
}

// ==========================================================================
// STORY VIDEO MODAL CONTROLLER
// ==========================================================================
function initStoryVideoModal() {
  const watchBtn = document.getElementById('hero-watch-story-btn');
  const modal = document.getElementById('story-video-modal');
  const closeBtn = document.getElementById('story-modal-close-btn');
  const videoPlayer = document.getElementById('story-video-player');

  if (watchBtn && modal) {
    watchBtn.onclick = () => {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      if (videoPlayer) {
        try { videoPlayer.currentTime = 0; videoPlayer.play(); } catch(e) {}
      }
    };
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (videoPlayer) {
        try { videoPlayer.pause(); } catch(e) {}
      }
    }
  }

  if (closeBtn) closeBtn.onclick = closeModal;
  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal || e.target.classList.contains('story-modal-backdrop')) {
        closeModal();
      }
    };
  }
}

function bindEventListeners() {
  initIntroPreloader();
  initCounterAnimations();
  initStoryVideoModal();

  // 0. The Living Construction Landscape 3D Terrain
  if (currentPath === '/' || currentPath === '') {
    initLivingLandscape3D();
  }

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

  // 7. Homepage Work in Action Player Switcher
  const homePlaylistItems = document.querySelectorAll('.action-playlist-item');
  const homeMainPlayerImg = document.getElementById('home-action-player-img');
  const homeMainPlayerTitle = document.getElementById('home-action-player-title');
  const homeMainPlayerDesc = document.getElementById('home-action-player-desc');

  if (homePlaylistItems.length > 0) {
    homePlaylistItems.forEach((btn) => {
      btn.onclick = () => {
        homePlaylistItems.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const img = btn.dataset.img;
        const title = btn.dataset.title;
        const desc = btn.dataset.desc;
        if (homeMainPlayerImg && img) homeMainPlayerImg.src = img;
        if (homeMainPlayerTitle && title) homeMainPlayerTitle.textContent = title;
        if (homeMainPlayerDesc && desc) homeMainPlayerDesc.textContent = desc;
      };
    });
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

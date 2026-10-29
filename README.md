# Qimam Al-Intaj Contracting Co. Ltd.

Corporate website for شركة قمم الإنتاج للمقاولات المحدودة. The site is bilingual (English and Arabic), responsive, and built as static routes. The exact logo, documented project photography, and individual client logo PNGs came from the supplied company profile PDF. The homepage hero is an illustrative generated image. Equipment product images come from SANY's official catalogue; source URLs are recorded in `assets/equipment-sources.json`. These catalogue images represent equipment categories and do not document ownership of specific machines. Official matching images could not be verified for the bulldozer and diesel tanker, so those cards are marked for photo review. The chairman portrait comes from `chairman_final.jpeg` supplied in Downloads.

## Run locally

```bash
npm run build
npm run dev
```

Open http://localhost:4173/.

## Check

```bash
npm test
```

The build output is in `dist/`. Current page templates and interactions live in `experience.js` and `experience.css`.

# The Austin Cakery — Bespoke Website Concept

> **Concept Presentation & Client Handover Document**  
> *“A little art, a lot of heart.”*  
> Prepared for **The Austin Cakery** (Austin & Leander, Texas)

This repository contains a bespoke, high-performance, editorial website concept created specifically for **The Austin Cakery**. It is designed to reflect the warmth, elegance, and artisanal craftsmanship of boutique wedding and celebration cake artistry.

---

## 🌸 Creative Direction & Palette

- **Editorial Serif:** Cormorant Garamond (refined, fine-art bridal typography)
- **Modern Sans:** Plus Jakarta Sans (crisp readability)
- **Palette:**
  - Warm Ivory: `#F5F0E8` (Canvas & card surfaces)
  - Soft Champagne: `#D9C7AE` (Subtle borders & warm accents)
  - Dusty Rose: `#B77D70` (Primary interactive accents & CTA buttons)
  - Deep Espresso: `#34352F` (Deep editorial text & high contrast)
  - Muted Sage: `#858B76` (Natural floral & organic balance)

---

## 🚀 How to Run Locally on Windows

### Prerequisites
- [Node.js](https://nodejs.org/) (v20.18+ or v22 LTS)

### Quick Start
```powershell
# 1. Clone or navigate to the project directory
cd c:\Users\user\Documents\austincakery

# 2. Install dependencies (if not already installed)
npm install --legacy-peer-deps

# 3. Start local development server
npm run dev
```

Visit **`http://localhost:5173/`** in your browser.

---

## 🖼️ How to Replace Concept Images with Approved Client Photography

All images are centralized, optimized, and stored in the local [`public/images/`](file:///c:/Users/user/Documents/austincakery/public/images) directory.

### Step 1: Add Your High-Resolution Photos
Drop your photos into `public/images/` with descriptive names (e.g., `wedding-tier-austin.jpg`, `pressed-florals-leander.jpg`).

### Step 2: Update the Image Manifest
Open [`src/data/galleryData.ts`](file:///c:/Users/user/Documents/austincakery/src/data/galleryData.ts):
```typescript
{
  id: 'cake-01',
  title: 'Tiered Ivory & Pressed Garden Florals',
  category: 'Weddings', // 'Weddings' | 'Celebrations' | 'Floral' | 'Artistic Details'
  image: '/images/your-new-cake-photo.jpg',
  aspectRatio: 'tall',   // 'tall' | 'portrait' | 'square'
  alt: 'Description of your cake design for accessibility and SEO',
  conceptNote: 'Notes on your buttercream texturing or floral elements.',
  isConceptImage: false,
}
```

---

## ✍️ Where to Edit Brand Copy & Information

- **Brand Details & Press Links:**  
  [`src/data/featuresData.ts`](file:///c:/Users/user/Documents/austincakery/src/data/featuresData.ts)  
  *Edit Instagram handles, Linktree URLs, verified interviews, service locations, and follower stats.*

- **Frequently Asked Questions & Studio Policies:**  
  [`src/data/faqData.ts`](file:///c:/Users/user/Documents/austincakery/src/data/faqData.ts)  
  *Add or adjust studio policies on booking lead times, delivery coordination, and flavors once finalized.*

- **Page Titles & Meta Descriptions (SEO):**  
  Each page in [`src/pages/`](file:///c:/Users/user/Documents/austincakery/src/pages/) uses the `<SEOHead />` component to define search engine metadata.

---

## 📬 Connecting a Real Inquiry Delivery Method

The inquiry form ([`src/components/InquiryForm.tsx`](file:///c:/Users/user/Documents/austincakery/src/components/InquiryForm.tsx)) currently features an interactive local demo flow:
1. Validates all inputs (Name, Email, Event Category, Event Date, Details, Consent).
2. Generates a formatted summary.
3. Allows the prospective client to **copy the details to clipboard** or **continue via Instagram DM**.

### Connecting to Production Email or CRM:
When the owner approves their preferred delivery endpoint, replace the mock delay in `handleSubmit` in `InquiryForm.tsx`:

#### Option A: Formspree (No backend required)
```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

#### Option B: Resend / EmailJS / Supabase
Trigger your serverless function or webhook endpoint with the `formData` object.

---

## 📦 How to Build for Production

```powershell
# Run TypeScript compilation and build production bundle
npm run build

# Preview the built distribution
npm run preview
```

The compiled, production-ready static files will be generated in [`dist/`](file:///c:/Users/user/Documents/austincakery/dist). They can be hosted instantly on Vercel, Netlify, Cloudflare Pages, or AWS S3.

---

## 📋 Verified Facts Preserved
- **Studio:** The Austin Cakery (home-based custom cake studio in Austin, Texas).
- **Service Locations:** Austin & Leander, Texas.
- **Founder & Artist:** Niloufer Y. Khatri.
- **Verified Public Press:** Canvas Rebel (2023), Voyage Austin, Voyage Houston (2025).
- **Official Instagram Profile:** [@theaustincakery](https://www.instagram.com/theaustincakery/) (16.8K+ followers, 1,300+ posts).
- **Linktree:** [linktr.ee/theaustincakery](https://linktr.ee/theaustincakery).
- **Concept Disclaimer:** Clearly marked as a private concept prepared for review.

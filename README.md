# ANSSI BOWLS — Handcrafted Luxury Designer Bowls

> **Crafted for Hands. Designed for the Table.**  
> A production-grade luxury e-commerce and brand portfolio web application inspired by quiet luxury aesthetics (fanzartfans.com layout architecture adapted for designer tableware).

---

## ✦ Brand Narrative & Overview

**ANSSI BOWLS** is an Indian luxury artisan studio producing wheel-thrown ceramics, sculpted hardwood bowls, and rare stone vessels. Every piece is handcrafted by master artisans across India, utilizing sustainable aged teak, Rajasthan stoneware, Khurja kaolin clay, and non-toxic, food-safe glazes.

---

## ✦ Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router DOM (v7/v6 compatible)
- **Styling**: Tailwind CSS (customized palette & typography tokens)
- **Animation**: Framer Motion (smooth scroll reveals, hero parallax, interactive tab morphing, modal overlays)
- **Icons**: Lucide React + custom inline luxury SVG branding
- **Typography**: Google Fonts — *Cormorant Garamond* (Editorial Serif) + *Inter* (Clean Modern Sans)
- **State Management**: React Context (`CartContext` and `WishlistContext` with `localStorage` persistence)
- **Data**: Rich local JSON datasets (`products.json`, `collections.json`, `testimonials.json`, `navigation.js`)

---

## ✦ Architecture & Sections

1. **Top Announcement Bar**:
   - Free shipping notification threshold (orders over ₹5,000)
   - Bespoke commissions notice & flagship showroom locations (Bangalore, Mumbai, Delhi)

2. **Sticky Header / Navigation**:
   - Architectural branding logo: "ANSSI BOWLS"
   - Mega menu with deep category links (Material, Style, Room, Size)
   - Real-time search with keyboard submit (`Enter` navigates to filtered catalog)
   - Wishlist counter badge
   - Cart counter badge with live item count
   - **"Book Consultation"** direct CTA button
   - Full-screen responsive slide-out drawer on mobile & tablet

3. **Cinematic Hero Section**:
   - Full-viewport ambient photography with subtle parallax motion
   - Editorial headline: *"Crafted for Hands. Designed for the Table."*
   - Dual primary CTAs: *"Explore Collections"* + *"Book Studio Visit"*
   - Floating luxury metrics: *1,200+ Studio Pieces • 14 Master Artisans • 100% Food-Safe & Certified*

4. **Our Story / Brand Narrative**:
   - Side-by-side editorial layout with slow craft highlights
   - Highlight cards: Khurja clay & Rajasthan stoneware, sustainable teak & rosewood, 14-day curing cycle
   - Founder quote & studio milestone badge (Founded 2009 in Bangalore)

5. **Why Anssi / Craftsmanship Pillars**:
   - 5 interactive value cards with subtle micro-animations:
     - Handcrafted to Perfection
     - Food-Safe Premium Materials
     - Durable & Heat Resistant (Kiln fired to 1250°C)
     - Easy to Clean & Care
     - Finished with Fine Detail

6. **Discover Collections (Tabbed Showcase)**:
   - Dynamic tabs (*Bowls* vs *Other Pieces*)
   - Category tiles: Ceramic Bowls, Turned Wooden Bowls, Stone & Marble, Fine Serving Sets, Decorative Centerpieces, Platters & Gift Sets

7. **Bespoke Studio (3-Step Interactive Customizer)**:
   - **Step 1**: Choose Silhouette & Material (Fluted Ceramic, Teak Root, Pedestal Marble, Raku Smoked Stoneware)
   - **Step 2**: Select Surface Glaze & Finish (Mist White, Celadon Crackle, Smoked Charcoal, 24k Gold Kintsugi)
   - **Step 3**: Select Size & Enter Custom Engraving (Live monogram / studio stamp watermark preview)
   - Real-time mockup card with estimated lead time & instant *"Enquire for Custom Orders"* CTA

8. **Client Stories & Press Testimonials**:
   - 5-Star gold rating review cards
   - Editorial quotes from interior architects, Michelin-star chefs, lifestyle curators
   - Auto-sliding carousel with manual pagination dots and pause-on-hover

9. **Experience Centres / Showrooms CTA**:
   - Full-width tactile showroom invite
   - Flagship studio locator links (Indiranagar, Kala Ghoda, Mehrauli)
   - *"Schedule Private Viewing"* modal trigger

10. **Rich Footer**:
    - Newsletter subscription strip
    - Multi-column navigation links (Collections, Company, Customer Service, Legal)
    - Social links with custom SVG vector icons
    - Copyright and studio pedigree notices

11. **Inner Pages**:
    - `/collections` & `/collections/:slug`: Multi-facet filtered listing with category descriptions
    - `/products`: Full catalogue with instant search, multi-facet filtering (Material, Style, Size) and sorting (Featured, Price, Rating)
    - `/products/:slug`: High-resolution gallery switcher, color picker, quantity adjuster, Add to Cart / Wishlist buttons, food safety features list, and related items
    - `/cart`: Item quantity manager, live GST calculation, complimentary shipping bar, subtotal order summary
    - `/wishlist`: Saved favourites grid with quick "Add to Cart" and delete actions
    - `/about`: Studio timeline (2009–present), artisan-first manifesto, sustainable craft values
    - `/contact`: Interactive message form, studio contact info, opening hours
    - `/showroom`: City-grouped directory of 12 luxury showrooms across India with live search

12. **Enquiry Modal**:
    - Accessible popup for booking private studio consultations and bespoke commissions

---

## ✦ Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Run

```bash
# Clone or navigate to the repository
cd "A:\Manish Project\Project\Annsi Bowels"

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be live at `http://localhost:5173/`.

### Production Build

```bash
# Verify typecheck & bundle production build
npm run build

# Preview production build locally
npm run preview
```

---

## ✦ Color Palette Tokens

| Token | Hex | Role |
|---|---|---|
| **Ivory** | `#FAF7F2` | Warm Alabaster background |
| **Cream** | `#F3EDE4` | Soft Linen card background |
| **Charcoal** | `#2B2B2B` | Primary heading & deep graphite text |
| **Body** | `#6B6B6B` | Secondary editorial body text |
| **Gold** | `#B08D57` | Warm muted brass accent |
| **Gold Dark** | `#8E6F3F` | Hover state brass |
| **Footer** | `#2B2622` | Deep espresso walnut background |
| **Border** | `#E8E0D5` | Subtle warm border tint |

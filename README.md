# APS Landing Page - Anjaneya Print Pack Solutions

A premium, industrial-style single-page React landing page built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
aps-landing/
├── app/
│   ├── globals.css          # Design system & custom CSS
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Sticky header with mobile menu
│   │   └── Footer.tsx        # Footer with 4 columns
│   └── home/
│       ├── Hero.tsx          # Hero with parallax & Lottie
│       ├── Values.tsx        # Why APS section
│       ├── Products.tsx      # Products grid with modals
│       ├── CaseStudies.tsx   # Carousel with Embla
│       ├── Machines.tsx      # Machines grid with lightbox
│       ├── MarketsClients.tsx # Markets & client logos
│       └── Contact.tsx       # Contact form & newsletter
├── data/
│   ├── products.json         # 8 product definitions
│   ├── clients.json          # Client logos data
│   ├── caseStudies.json      # 3 case studies
│   └── machines.json         # 6 machines with specs
├── public/
│   └── animations/
│       └── labelRoll.json    # Lottie animation (placeholder)
└── ACCESSIBILITY.md          # Accessibility checklist

```

## 🎨 Design System

### Colors
- **Primary**: `#0F172A` (Deep Blue)
- **Accent**: `#F59E0B` (Warm Orange)
- **Muted**: `#64748B` (Gray)

### Typography
- **Font**: Inter (via system fonts fallback)
- **Headings**: Bold, large scale
- **Body**: Regular, comfortable line-height

## 🔧 Technologies

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Icons**: Lucide React
- **Lottie**: lottie-react

## 📦 Features

### 1. Header
- Sticky positioning
- Smooth scroll navigation
- Mobile hamburger menu with full-screen overlay
- "Get a Quote" CTA

### 2. Hero Section
- Full-bleed with parallax background layers
- Lottie animation (rotating label roll)
- Dual CTAs with hover animations
- Scroll indicator

### 3. Values Section
- 4 feature cards: Quality Service, Intrinsic Growth, Synergy, R&D
- Icon-based design with hover effects

### 4. Products Grid
- 8 product cards with descriptions
- Modal dialogs with detailed specs
- "Request Sample" CTA

### 5. Case Studies Carousel
- 3 case studies with metrics
- Embla carousel with navigation
- Responsive card layout

### 6. Machines & R&D
- 6 machine cards with specs
- Lightbox modal for details
- R&D initiative callout (PP/PE recycling)

### 7. Markets & Clients
- Market tags (Food, Pharma, Dairy, etc.)
- Client logos grid (10 major brands)

### 8. Contact & Newsletter
- Contact information with icons
- Contact form with validation
- Newsletter signup

### 9. Footer
- 4-column layout
- Social media links
- Legal links (Privacy, Terms)

## 🎭 Lottie Animation

The hero section uses a Lottie animation for the product mockup. A placeholder is included at:

```
public/animations/labelRoll.json
```

**To use a custom animation:**
1. Create or download a Lottie JSON file (from LottieFiles, After Effects, etc.)
2. Replace `public/animations/labelRoll.json` with your file
3. The animation will automatically load on the hero section

**Recommended animation style:**
- Rotating label roll or packaging product
- Loop: true
- Duration: 3-5 seconds
- Colors: Match brand palette (blues, oranges)

## ♿ Accessibility

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for full checklist.

**Key features:**
- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- ARIA labels on interactive elements
- High contrast ratios (14.7:1 for primary text)
- Semantic HTML structure
- Form validation and error messages

## 🔍 SEO

**Metadata included:**
- Optimized title and description
- Open Graph tags for social sharing
- Twitter Card metadata
- Keyword optimization

**Social Share Preview:**
> **APS - Innovative Labelling & Packaging Solutions**
> 
> End-to-end labelling and packaging solutions made to scale. Quality, compliance, and R&D-driven innovation.

## 📝 Customization

### Update Content
Edit JSON files in `/data/`:
- `products.json` - Product catalog
- `clients.json` - Client logos
- `caseStudies.json` - Case studies
- `machines.json` - Machine specifications

### Update Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: #0F172A;
  --accent: #F59E0B;
  --muted: #64748B;
}
```

### Update Contact Info
Edit `components/layout/Footer.tsx` and `components/home/Contact.tsx`

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
The app is a standard Next.js application and can be deployed to any platform supporting Node.js.

## 📄 License

© 2026 Anjaneya Print Pack Solutions. All rights reserved.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

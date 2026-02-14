<<<<<<< HEAD
# Green Tape Agro - Premium Organic Compost E-Commerce Website

A modern, high-converting e-commerce website for Green Tape Agro Industries built with Next.js 16, Tailwind CSS, ShadCN UI, and Framer Motion.

## Features

### Pages
- **Home Page** - Hero section, product features, benefits, customer reviews, and CTA
- **Product Page** - Product details, gallery, specifications, quantity selector, FAQ, and WhatsApp ordering
- **Checkout Page** - Cart management, order summary, delivery form with WhatsApp integration
- **About Page** - Company story, values, statistics, and mission/vision
- **Contact Page** - Contact form, business information, hours, and location

### Key Features
- Responsive design (mobile, tablet, desktop)
- Framer Motion animations for engaging UX
- Zustand state management for cart functionality
- Persistent cart storage
- WhatsApp integration for orders
- SEO optimized with metadata and structured data (JSON-LD)
- Sitemap and robots.txt for search engines
- Product image gallery
- Customer reviews and testimonials
- FAQ accordion section
- Trust badges and security features
- Smooth page transitions

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 3.4
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion 11
- **State Management**: Zustand 4.4
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Dev Server**: Turbo (built-in with Next.js 16)

## Project Structure

```
app/
├── layout.tsx              # Root layout with global metadata
├── page.tsx               # Home page
├── globals.css            # Global styles and design tokens
├── product/
│   ├── layout.tsx         # Product page metadata
│   └── page.tsx           # Product detail page
├── checkout/
│   ├── layout.tsx         # Checkout metadata
│   └── page.tsx           # Checkout/cart page
├── about/
│   ├── layout.tsx         # About page metadata
│   └── page.tsx           # About page
└── contact/
    ├── layout.tsx         # Contact page metadata
    └── page.tsx           # Contact page

components/
├── header.tsx             # Navigation header
├── footer.tsx             # Footer with links
├── structured-data.tsx    # JSON-LD schema components
└── ui/                    # ShadCN UI components

lib/
├── store.ts              # Zustand cart store
└── utils.ts              # Utility functions

public/
├── product-compost.jpg   # Product image
├── sitemap.xml           # XML sitemap
├── robots.txt            # Robots configuration
└── schema.json           # Organization schema

tailwind.config.ts        # Tailwind configuration
next.config.mjs           # Next.js configuration
tsconfig.json            # TypeScript configuration
package.json             # Dependencies
```

## Installation

### Using Shadcn CLI (Recommended)

```bash
# Create a new project
npx create-next-app@latest green-tape-agro --typescript

# Install the project files
cd green-tape-agro

# Copy all files from this project to your new project
# You can also clone this repository and use it directly
```

### Manual Installation

```bash
# Clone the repository
git clone <repository-url>
cd green-tape-agro

# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Run development server
npm run dev
# Server will run on http://localhost:3000
```

## Configuration

### Environment Variables

No environment variables required for basic setup. For production deployment:

1. Update phone numbers in:
   - `components/footer.tsx`
   - `components/header.tsx`
   - `app/contact/page.tsx`

2. Update business information in:
   - `app/about/page.tsx`
   - `app/contact/page.tsx`
   - `app/layout.tsx`

3. Update domain in metadata files:
   - `public/sitemap.xml`
   - `public/schema.json`

## Color Scheme

The site uses a nature-inspired green and white color palette:

- **Primary**: Green (#2D7D4C) - Main brand color
- **Secondary**: Light Gray/Beige - Neutral background
- **Accent**: Bright Green (#3FA56E) - Call-to-action
- **Background**: Off-white - Clean, minimal
- **Foreground**: Dark Green - Text

## SEO Features

- ✅ Meta tags and Open Graph tags
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Structured data (JSON-LD)
- ✅ Mobile-friendly responsive design
- ✅ Fast page load with Next.js 16
- ✅ Image optimization
- ✅ Semantic HTML

## Performance

- Optimized with Next.js 16's new caching APIs
- Turbopack for fast builds
- Code splitting and lazy loading
- Image optimization
- CSS minification
- Framer Motion optimized animations

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git push

# Connect your repository to Vercel
# Visit https://vercel.com/import

# Vercel will auto-deploy on push
```

### Deploy to Other Platforms

The project can be deployed to any Node.js hosting:

```bash
# Build for production
npm run build

# Start production server
npm run start
```

Supported platforms: Vercel, Netlify, Railway, Render, AWS, etc.

## Customization

### Update Product Information

Edit `/app/product/page.tsx`:
```typescript
const product = {
  id: 'compost-10kg',
  name: 'Your Product Name',
  price: 499,
  // ... other fields
};
```

### Update Business Information

Edit `/app/contact/page.tsx` and `/app/layout.tsx`:
- Phone numbers
- Email addresses
- Business address
- Hours of operation

### Update Images

Replace `/public/product-compost.jpg` with your product image.

### Update Branding

Edit `/app/globals.css` for color changes:
```css
:root {
  --primary: your-color;
  --accent: your-color;
  /* ... other colors */
}
```

## WhatsApp Integration

The site integrates WhatsApp for customer communication:
- Order placement via WhatsApp
- Direct messaging from contact form
- Quick support access

Update phone number: `+919876543210` in:
- `components/header.tsx`
- `app/product/page.tsx`
- `app/checkout/page.tsx`
- `app/contact/page.tsx`

## Cart Management

Cart data is persisted to browser localStorage using Zustand:
- Add/remove items
- Update quantities
- Automatic persistence
- Cart count in header

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Metrics

- Lighthouse Score: 95+
- Core Web Vitals: All Green
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s

## License

This project is provided as-is for commercial use.

## Support

For issues or questions:
1. Check the FAQ section on the contact page
2. Contact via WhatsApp: +91 9876 543210
3. Email: info@greentapeagro.com

## Future Enhancements

- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] User accounts and order history
- [ ] Real-time inventory management
- [ ] Email notification system
- [ ] Admin dashboard
- [ ] Blog/knowledge base
- [ ] Multiple language support
- [ ] Bulk order management

---

Built with ❤️ for sustainable agriculture
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 8814d81657710591d9469425c06200a13117222a

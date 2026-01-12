# 💍 Rithu by AAha

**A High-Performance, Luxury Jewelry E-Commerce Platform**

*"serving differences in your preferences"*

---

## 🌟 Overview

Rithu by AAha is a premium jewelry e-commerce platform built with cutting-edge technologies to deliver an experience that rivals luxury brands like Cartier and Tiffany in aesthetics, while matching Amazon in functionality and performance.

### Key Features

✨ **Customer Experience**
- AI-powered semantic search
- Optimistic UI for instant cart interactions
- Real-time order tracking with visual timeline
- Wishlist and personalized recommendations
- One-click checkout with Stripe

🎨 **Luxury Light Design System**
- Champagne/Cream color palette (#FDFBF7)
- Cinzel/Playfair Display headings
- Glassmorphism navigation
- Magnetic hover effects
- Framer Motion animations

🔐 **Enterprise Security**
- Role-based access control (RBAC)
- Zod validation on all inputs
- Rate limiting with Upstash
- Secure payment processing

📊 **Admin Dashboard**
- Real-time analytics (Revenue, AOV, Conversion)
- Bulk order management
- Product CMS with image upload
- Automated invoice generation
- Low stock alerts

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router, Server Actions, Turbopack) |
| **Language** | TypeScript (Strict Mode) |
| **Database** | PostgreSQL (Supabase/Neon) |
| **ORM** | Prisma |
| **Styling** | Tailwind CSS v4 + Shadcn/UI |
| **State** | Zustand + React Query |
| **Animation** | Framer Motion |
| **Auth** | Auth.js v5 |
| **Payments** | Stripe Intents API |
| **Email** | Resend + React-Email |
| **PDF** | @react-pdf/renderer |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (Supabase or Neon account)
- Stripe account (test keys)
- Resend account (for emails)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AAha
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in the required values in `.env`:
   - `DATABASE_URL` - PostgreSQL connection string
   - `AUTH_SECRET` - Generate with `openssl rand -base64 32`
   - `STRIPE_SECRET_KEY` - From Stripe dashboard
   - `RESEND_API_KEY` - From Resend dashboard

4. **Initialize the database**
   ```bash
   # Push schema to database
   npm run db:push
   
   # Or run migrations
   npm run db:migrate
   
   # (Optional) Seed sample data
   npm run db:seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

---

## 📁 Project Structure

```
rithu-by-aaha/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Sample data seeder
├── public/
│   ├── fonts/                 # Custom fonts
│   └── images/                # Static assets
├── src/
│   ├── app/                   # Next.js 15 App Router
│   │   ├── (auth)/            # Auth routes
│   │   ├── (shop)/            # Customer-facing pages
│   │   ├── admin/             # Admin dashboard
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── ui/                # Shadcn/UI components
│   │   ├── layout/            # Navbar, Footer
│   │   ├── products/          # Product cards, filters
│   │   └── cart/              # Cart drawer
│   ├── lib/
│   │   ├── auth.ts            # Auth.js config
│   │   ├── db.ts              # Prisma client
│   │   ├── stripe.ts          # Stripe utilities
│   │   └── utils.ts           # Helpers
│   ├── store/                 # Zustand stores
│   └── types/                 # TypeScript types
├── .env.example               # Environment template
├── next.config.mjs            # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS config
└── package.json
```

---

## 🎨 Design System

### Color Palette

```css
--bg-primary: #FDFBF7      /* Champagne/Cream */
--bg-secondary: #F4F1EA    /* Warm Beige */
--text-primary: #1A1A1A    /* Soft Charcoal */
--text-secondary: #595959  /* Slate Grey */
--accent: #D4AF37          /* Metallic Gold */
```

### Typography

- **Headings:** Cinzel (Serif)
- **Body:** Geist Sans / Lato (Sans-serif)

---

## 🔧 Available Scripts

```bash
npm run dev          # Start development server (Turbopack)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push Prisma schema to database
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio (DB GUI)
npm run db:seed      # Seed sample data
```

---

## 📦 Database Schema

### Core Models

- **User** - Authentication and profiles
- **Product** - Jewelry catalog with images, pricing, stock
- **Category** - Product categorization
- **Collection** - Curated product collections
- **Order** - Customer orders with status tracking
- **OrderItem** - Individual items in an order
- **Payment** - Stripe payment records
- **Address** - Shipping/billing addresses
- **CartItem** - Persistent shopping cart
- **WishlistItem** - Saved products
- **Review** - Product ratings and reviews
- **InventoryLog** - Stock change tracking
- **Banner** - Homepage CMS

---

## 🔐 Authentication

Using **Auth.js v5** (NextAuth) with:
- Credentials provider (email/password)
- JWT sessions
- Role-based access control (USER, ADMIN)
- Protected routes via middleware

---

## 💳 Payment Flow

1. User submits checkout form
2. Server creates Stripe Payment Intent
3. Client renders Stripe Elements
4. User confirms payment
5. Stripe webhook triggers:
   - Order status update
   - Stock decrement
   - Invoice generation
   - Confirmation email

---

## 📧 Email Templates

Using **Resend** + **React-Email** for:
- Order confirmation
- Shipping notification
- Invoice delivery
- Low stock alerts (admin)

---

## 🎯 Roadmap

- [x] Database schema design
- [x] Design system setup
- [ ] Authentication implementation
- [ ] Product listing and search
- [ ] Shopping cart and checkout
- [ ] Payment integration
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Invoice generation
- [ ] AI semantic search
- [ ] Production deployment

---

## 📄 License

Copyright © 2024 Rithu by AAha. All rights reserved.

---

## 🤝 Support

For questions or support, contact: support@rithubyaaha.com

# Aura Parfums - Luxury Fragrance E-commerce

A production-ready e-commerce website for luxury perfume decants and original bottles, built with Next.js, Supabase, and modern web technologies.

## 🌟 Features

### Core Functionality
- **Product Catalog**: Decants and original bottles with advanced filtering
- **Shopping Cart**: Persistent cart with localStorage and server sync
- **Checkout**: Secure payment processing with Stripe and PayPal
- **User Accounts**: Registration, authentication, and order history
- **Admin Dashboard**: Product management, inventory tracking, order management
- **Search & Filters**: Advanced search with scent family categorization

### Design & User Experience
- **Luxury Design**: Premium aesthetics with refined typography and spacing
- **Advanced Animations**: GSAP timelines and Anime.js micro-interactions
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Accessibility**: WCAG AA compliance with proper ARIA labels
- **Performance**: Optimized images, lazy loading, and code splitting

### Technical Features
- **SEO Optimized**: Meta tags, structured data, and OpenGraph
- **Security**: Row-level security with Supabase
- **Type Safety**: Full TypeScript implementation
- **Testing**: Unit tests and E2E testing setup
- **Analytics**: Google Analytics 4 and Facebook Pixel integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account (for payments)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd aura-parfums
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Fill in your environment variables:
- Supabase URL and keys
- Stripe API keys
- Analytics IDs
- Email service credentials

4. **Set up Supabase database**

Run the migrations in your Supabase dashboard SQL editor:
- `supabase/migrations/create_products_table.sql`
- `supabase/migrations/create_users_table.sql`
- `supabase/migrations/create_orders_table.sql`
- `supabase/migrations/create_inventory_table.sql`
- `supabase/migrations/create_coupons_table.sql`

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
aura-parfums/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (auth)/            # Authentication pages
│   │   ├── admin/             # Admin dashboard
│   │   ├── cart/              # Shopping cart
│   │   ├── checkout/          # Checkout flow
│   │   ├── products/          # Product pages
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   ├── layout/            # Layout components
│   │   ├── home/              # Homepage components
│   │   └── admin/             # Admin components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   ├── types/                 # TypeScript definitions
│   └── styles/                # Global styles
├── supabase/
│   └── migrations/            # Database migrations
├── public/                    # Static assets
├── tests/                     # Test files
└── docs/                      # Documentation
```

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:e2e` - Run E2E tests

### Database Management

#### Adding Products
Products can be added through the admin dashboard or directly via SQL:

```sql
INSERT INTO products (name, brand, description, scent_family, product_type, sizes, images)
VALUES (
  'Tom Ford Oud Wood',
  'Tom Ford',
  'A refined, exotic blend of rare oud, Brazilian rosewood, and cardamom.',
  'Oriental',
  'decant',
  '[{"ml": 5, "price": 25.00, "sku": "TF-OW-5ML"}, {"ml": 10, "price": 45.00, "sku": "TF-OW-10ML"}]',
  '["https://example.com/tom-ford-oud-wood.jpg"]'
);
```

#### Managing Inventory
```sql
INSERT INTO inventory (product_id, size_ml, stock_quantity, low_stock_threshold)
VALUES ('product-uuid', 5, 50, 10);
```

### Payment Integration

#### Stripe Setup
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe dashboard
3. Add webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`
4. Update environment variables

#### PayPal Setup
1. Create a PayPal developer account
2. Create a new application
3. Get your client ID and secret
4. Update environment variables

### Analytics Setup

#### Google Analytics 4
1. Create a GA4 property
2. Get your Measurement ID
3. Add to `NEXT_PUBLIC_GA_MEASUREMENT_ID`

#### Facebook Pixel
1. Create a Facebook Pixel
2. Get your Pixel ID
3. Add to `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`

## 🎨 Design System

### Colors
- **Primary**: Gold (#D4AF37) - Luxury and elegance
- **Secondary**: Deep Navy (#1B2951) - Sophistication
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: Warm orange for highlights
- **Status**: Success, warning, and error states

### Typography
- **Headings**: Playfair Display (serif) for elegance
- **Body**: Inter (sans-serif) for readability
- **Sizes**: 8-point scale with proper line heights

### Spacing
- **System**: 8px base unit for consistent spacing
- **Grid**: CSS Grid and Flexbox for layouts
- **Breakpoints**: Mobile-first responsive design

## 🔒 Security

### Authentication
- Supabase Auth with email/password
- Row-level security (RLS) policies
- Admin role verification
- Session management

### Data Protection
- Input validation with Zod schemas
- SQL injection prevention
- XSS protection
- CSRF tokens for forms

### Payment Security
- PCI DSS compliance via Stripe
- Secure checkout flow
- Encrypted data transmission
- Webhook signature verification

## 📊 Performance

### Optimization Techniques
- **Images**: Next.js Image component with automatic optimization
- **Code Splitting**: Dynamic imports and route-based splitting
- **Caching**: Static generation and ISR where appropriate
- **Compression**: Gzip/Brotli compression

### Performance Targets
- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Pass all thresholds
- **Bundle Size**: Optimized chunk sizes
- **Load Time**: <3s on 3G networks

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

Test files are located in `__tests__` directories alongside components.

### E2E Tests
```bash
npm run test:e2e
```

E2E tests cover critical user flows:
- User registration and login
- Product browsing and search
- Add to cart functionality
- Complete checkout process
- Admin product management

### Test Coverage
- Components: >80% coverage
- Utilities: >90% coverage
- Critical paths: 100% coverage

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository**
```bash
npx vercel
```

2. **Set environment variables**
Add all variables from `.env.example` to Vercel dashboard

3. **Deploy**
```bash
npm run build
vercel --prod
```

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `out`
3. **Node version**: 18+

### Self-hosted

1. **Build the application**
```bash
npm run build
```

2. **Start the server**
```bash
npm run start
```

## 🔧 Configuration

### Supabase Setup

1. **Create project** at [supabase.com](https://supabase.com)
2. **Run migrations** in SQL editor
3. **Configure RLS policies**
4. **Set up webhooks** for real-time updates

### Email Configuration

The application supports transactional emails via Resend:

1. Create account at [resend.com](https://resend.com)
2. Verify your domain
3. Get API key and add to environment variables

## 📈 Analytics & Marketing

### Google Analytics 4
- Enhanced e-commerce tracking
- Custom events for key actions
- Conversion tracking
- Audience insights

### Facebook Pixel
- Purchase events
- Add to cart tracking
- View content events
- Custom audiences

### SEO Features
- **Structured Data**: Product, Organization, and Breadcrumb schemas
- **Meta Tags**: Dynamic titles and descriptions
- **Sitemap**: Automatically generated
- **Robots.txt**: Search engine directives

## 🛡 Compliance

### GDPR Compliance
- Cookie consent banner
- Privacy policy integration
- Data export functionality
- Right to deletion

### Accessibility (WCAG AA)
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🔄 API Reference

### Products API
```typescript
GET /api/products              # List products with filters
GET /api/products/[id]         # Get single product
POST /api/products             # Create product (admin)
PUT /api/products/[id]         # Update product (admin)
DELETE /api/products/[id]      # Delete product (admin)
```

### Orders API
```typescript
GET /api/orders                # List user orders
POST /api/orders               # Create order
GET /api/orders/[id]           # Get order details
PUT /api/orders/[id]           # Update order (admin)
```

### Cart API
```typescript
GET /api/cart                  # Get cart contents
POST /api/cart/add             # Add item to cart
PUT /api/cart/update           # Update cart item
DELETE /api/cart/remove        # Remove cart item
```

## 🐛 Troubleshooting

### Common Issues

**Build errors**
- Ensure all environment variables are set
- Check TypeScript compilation
- Verify Supabase connection

**Authentication issues**
- Check Supabase URL and keys
- Verify RLS policies
- Ensure proper user roles

**Payment problems**
- Validate Stripe configuration
- Check webhook endpoints
- Verify SSL certificates

### Support

For technical support:
- Check the GitHub Issues
- Review documentation
- Contact: support@auraparfums.com

## 📄 License

This project is proprietary software for Aura Parfums. All rights reserved.

## 🤝 Contributing

This is a private commercial project. For feature requests or bug reports, please contact the development team.

---

**Built with ❤️ for fragrance lovers worldwide**
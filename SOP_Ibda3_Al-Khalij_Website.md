# Standard Operating Procedure (SOP)

## Project Overview

**Company Name:** Ibda3 Al-Khalij Student Services

**Project Type:** Full student services company website to support international students studying in Jordan.

**Primary Goal:** Build a responsive, bilingual website using Next.js 14 and PostgreSQL, with dynamic content managed through an admin dashboard. The site must be SEO-friendly, secure, and ready to scale for future features.

**Target Audience:** Public visitors without registration, and a secure admin user with email/password login.

**Languages:** Arabic (default RTL) and English (LTR switchable)

**Technology Stack:**
- Next.js 14 (App Router)
- Node.js 18+
- PostgreSQL 16
- Prisma ORM
- NextAuth.js v4
- bcryptjs
- Tailwind CSS
- next-intl
- next/image
- Cloudinary or local storage for uploads
- Metadata API, sitemap.xml, robots.txt

---

## SOP Scope

This SOP covers:
- Project setup
- Database design and configuration
- Frontend page structure
- Admin dashboard features
- Authentication and security
- Upload system rules
- SEO and localization
- Deployment preparation
- Future scalability planning

---

## Roles and Responsibilities

**Developer Responsibilities:**
- Build frontend and backend using the specified stack
- Implement secure admin authentication and protected APIs
- Create a modern responsive bilingual UI with RTL support
- Ensure database integrity and correct file upload handling
- Optimize for SEO, performance, and accessibility
- Document configuration and deployment steps

**Admin Responsibilities:**
- Manage services, universities, site settings, logos, and homepage content
- Use the admin dashboard to add, update, delete, and publish content
- Maintain secure credentials and environment configuration

---

## Project Workflow

### 1. Environment Setup

1. Create project folder `ibda3-alkhalij`
2. Initialize Next.js app with TypeScript and Tailwind
3. Install required dependencies:
   - `next`, `react`, `react-dom`
   - `typescript`, `@types/react`, `@types/node`
   - `tailwindcss`, `postcss`, `autoprefixer`
   - `prisma`, `@prisma/client`
   - `next-auth`
   - `bcryptjs`
   - `next-intl`
   - `cloudinary`, `multer` or upload library
   - `pg`, `dotenv`
4. Configure `next.config.js` for locales, images, and security headers
5. Set up `.env` with PostgreSQL and authentication values
6. Create `prisma/schema.prisma`
7. Run Prisma migrations and seed initial admin/site settings

### 2. Database Design

Required database tables:
- `Admin`
- `SiteSettings`
- `University`
- `Service`
- `Requirement`

#### Admin Table
- `id`
- `email`
- `password`
- `createdAt`
- `updatedAt`

#### SiteSettings Table
- `id`
- `siteNameArabic`
- `siteNameEnglish`
- `logoUrl`
- `heroTitleArabic`
- `heroTitleEnglish`
- `heroDescriptionArabic`
- `heroDescriptionEnglish`
- `contactEmail`
- `whatsappNumber`
- `phoneNumber`
- `googleMapsUrl`
- `socialLinks`
- `createdAt`
- `updatedAt`

#### University Table
- `id`
- `nameArabic`
- `nameEnglish`
- `type` (private or government)
- `imageUrl`
- `location`
- `googleMapsUrl`
- `worldRanking`
- `tuitionFees`
- `feesLastUpdated`
- `createdAt`
- `updatedAt`

#### Service Table
- `id`
- `titleArabic`
- `titleEnglish`
- `descriptionArabic`
- `descriptionEnglish`
- `icon`
- `sortOrder`
- `isActive`
- `createdAt`
- `updatedAt`

#### Requirement Table
- `id`
- `universityId`
- `nameArabic`
- `nameEnglish`
- `createdAt`
- `updatedAt`

---

## Application Structure

### Project Directories

- `prisma/schema.prisma`
- `public/uploads/`
- `public/logo/`
- `src/app/`
  - `[locale]/page.tsx`
  - `[locale]/services/page.tsx`
  - `[locale]/universities/private/page.tsx`
  - `[locale]/universities/government/page.tsx`
  - `[locale]/contact/page.tsx`
  - `admin/login/page.tsx`
  - `admin/dashboard/page.tsx`
  - `admin/services/page.tsx`
  - `admin/universities/page.tsx`
  - `admin/settings/page.tsx`
  - `api/auth/[...nextauth]/route.ts`
  - `api/universities/route.ts`
  - `api/services/route.ts`
  - `api/upload/route.ts`
- `src/lib/prisma.ts`
- `src/lib/auth.ts`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/LanguageSwitcher.tsx`
- `src/components/UniversityCard.tsx`
- `src/components/ServiceCard.tsx`
- `src/middleware.ts`
- `messages/ar.json`
- `messages/en.json`

### Routing and Pages

Public pages must exist for:
- `/` home page
- `/services`
- `/universities/private`
- `/universities/government`
- `/contact`

Admin pages must exist for:
- `/admin/login`
- `/admin/dashboard`
- `/admin/services`
- `/admin/universities`
- `/admin/settings`

---

## Feature Requirements

### Public Visitor Capabilities
- Browse services
- Browse universities by private/government
- View required documents for each university
- View tuition fee details
- See world ranking and location information
- Open Google Maps URL
- Use language switcher
- Access contact details and support links
- No registration required

### Admin Capabilities
- Login with secure credentials
- Access dashboard only when authenticated
- Add, edit, delete services
- Add, edit, delete universities
- Upload university images and site logo
- Update site name and homepage content
- Manage service activation and sort order
- Protect admin-only routes and APIs

### Security Controls
- Use `bcryptjs` for password hashing
- Protect admin routes with middleware
- Secure API routes with session validation
- Keep environment variables safe in `.env`
- Validate uploaded files and sanitize inputs
- Enforce allowed upload formats and size limits
- Prevent unauthenticated access to admin endpoints

### Upload Handling
- Allowed formats: `jpg`, `jpeg`, `png`, `webp`
- Maximum file size: 5MB
- Upload locations: `public/uploads`, `public/logo`
- Manage file storage via local upload or Cloudinary
- Use a secure upload API endpoint with validation

### Localization and i18n
- Arabic default locale with RTL support
- English alternate locale with LTR support
- Use `next-intl` for localized content
- Enable locale-aware routing
- Translate all page content, metadata, and UI text
- Implement language switcher in Navbar

### SEO Requirements
- Dynamic metadata for each page
- Arabic and English SEO content
- Open Graph metadata
- Twitter Card metadata
- `robots.txt` configuration
- `sitemap.xml` generation
- Optimized page titles and descriptions
- Fast image loading via `next/image`
- Structured, accessible markup

### UI Design Rules
- Modern, professional blue branding
- Rounded cards, soft shadows, clean spacing
- Responsive desktop, tablet, mobile layouts
- Sticky navbar and mobile navigation menu
- Smooth transitions and good typography
- Fast loading interface
- Consistent student-services company style

---

## Homepage Section Requirements

The homepage must include:
- Hero section with logo, name, CTA button
- Services preview section
- Private universities highlight
- Government universities highlight
- Why choose us section
- Contact section
- Footer with contact and social links

---

## Admin Middleware Behavior

Middleware must:
- Protect all `/admin` paths except `/admin/login`
- Redirect unauthenticated users to admin login
- Support locale detection and locale-specific routing
- Maintain secure session state for admin users

---

## Required API Endpoints

- `POST /api/auth/[...nextauth]` for authentication
- `GET/POST/PUT/DELETE /api/universities` for university management
- `GET/POST/PUT/DELETE /api/services` for service management
- `POST /api/upload` for media uploads

---

## Deployment and Testing

### Local Testing
- Run dev server and confirm all locales render correctly
- Validate admin login, protected routes, and API security
- Test file uploads with valid and invalid formats
- Check SEO metadata and sitemap generation
- Confirm responsive design on desktop/tablet/mobile

### Deployment Checklist
- Ensure PostgreSQL connection is configured
- Verify `NEXTAUTH_URL`, `DATABASE_URL`, and Cloudinary env vars
- Confirm `robots.txt` and `sitemap.xml` are available
- Build production assets with `npm run build`
- Deploy to a platform that supports Node.js and PostgreSQL

---

## Future Scalability Plan

The architecture must support future expansions including:
- Student accounts and online application flows
- Payment gateway integration
- Notification and messaging features
- University filtering and search UI
- Multi-admin roles and permissions
- Blog and testimonials sections
- Analytics dashboard and live chat

---

## Deliverables

- Fully responsive Next.js bilingual website
- Admin dashboard with secure management features
- PostgreSQL-backed dynamic content storage
- Upload system for university images and logos
- SEO optimized pages with metadata and sitemap
- Secure authentication and protected APIs
- Clean project structure ready for scaling

---

## Recommended File and Folder Structure

```
ibda3-alkhalij/
├── prisma/
│   └── schema.prisma
├── public/
│   ├── uploads/
│   └── logo/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── universities/
│   │   │   │   ├── private/page.tsx
│   │   │   │   └── government/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── admin/
│   │   │   ├── login/page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── universities/page.tsx
│   │   │   └── settings/page.tsx
│   │   └── api/
│   │       ├── auth/[...nextauth]/route.ts
│   │       ├── universities/route.ts
│   │       ├── services/route.ts
│   │       └── upload/route.ts
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── auth.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── UniversityCard.tsx
│   │   └── ServiceCard.tsx
│   └── middleware.ts
├── messages/
│   ├── ar.json
│   └── en.json
├── .env
├── package.json
└── next.config.js
```

---

## Notes

- The admin login must be the only protected authentication entry point.
- Public visitor pages must remain accessible without registration.
- All content should load dynamically from the PostgreSQL database.
- Use `next-intl` for localization and metadata translation.
- Prefer clean, accessible markup and a professional UX suitable for student services.

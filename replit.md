# Overview

This is a full-stack personal portfolio website for Mike Kagera, an ICT professional. The application features a modern, glassmorphic design with a dark theme and showcases professional experience, skills, education, and projects. It includes a contact form for potential employers or clients to reach out.

The portfolio is built as a single-page application with smooth scrolling navigation between sections including home, about, skills, experience, education, projects, and contact. The design emphasizes visual appeal with neomorphic elements, gradient text effects, and responsive layouts.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with minimal bundle impact
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **State Management**: TanStack Query for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Server Framework**: Express.js with TypeScript for robust API endpoints
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema-first development
- **Session Management**: In-memory storage with extensible interface for future database integration
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development Server**: Custom Vite integration for seamless full-stack development

## Data Storage
- **Database**: PostgreSQL configured through Neon serverless database
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Schema**: Contact form submissions with fields for name, email, subject, message, and timestamps
- **Validation**: Zod schemas for runtime type checking and form validation

## Authentication & Authorization
- **Current Implementation**: No authentication system (portfolio is public-facing)
- **Contact Form**: Basic form submission without user accounts
- **Admin Access**: Direct database queries for viewing contact submissions

## Development & Build Pipeline
- **Development**: Hot module replacement with Vite dev server
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Linting**: ESLint integration for code quality
- **Build**: Separate client and server builds with optimized output
- **Deployment**: Node.js server with static file serving

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM for modern component-based UI
- **TanStack Query**: Advanced server state management with caching and synchronization
- **Wouter**: Minimalist routing library for single-page navigation

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Comprehensive primitive components for accessibility
- **Lucide React**: Consistent icon library for UI elements
- **Class Variance Authority**: Type-safe variant management for components

## Backend & Database
- **Express.js**: Web application framework for Node.js server
- **Drizzle ORM**: Type-safe SQL toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database hosting
- **Zod**: Schema validation library for type-safe data handling

## Development Tools
- **Vite**: Build tool with optimized development experience
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer plugin

## Form & Interaction
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation schemas
- **Date-fns**: Modern date utility library for timestamp handling

## Deployment & Runtime
- **Node.js**: JavaScript runtime for server execution
- **Connect PG Simple**: PostgreSQL session store for future session management
- **Nanoid**: Secure URL-friendly unique ID generator
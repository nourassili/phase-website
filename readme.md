# Overview

This is a modern full-stack web application built for "Phase", a wellness platform targeting busy mothers. The application features a beautiful landing page with waitlist functionality, designed to promote a wellness app that offers 15-minute workouts, meal planning, and mindfulness features. The project uses a monorepo structure with separate client and server directories, built with React, Express.js, and PostgreSQL.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming (lavender, sage, beige color palette)
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **API Design**: RESTful endpoints with JSON responses
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot reload with Vite integration for seamless development experience

## Data Storage
- **Primary Database**: PostgreSQL hosted on Neon Database
- **ORM**: Drizzle ORM with automatic migrations
- **Schema**: Two main tables - users and waitlist_signups
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Validation**: Drizzle-Zod integration for runtime validation

## Authentication & Authorization
- **Session-based Authentication**: PostgreSQL-backed sessions using connect-pg-simple
- **Password Security**: Ready for bcrypt implementation (schema includes password field)
- **User Management**: Basic user schema with username/password structure

## Build & Development
- **Build Tool**: Vite for fast development and optimized production builds
- **Development Mode**: Integrated Express and Vite dev servers
- **Production Build**: ESBuild for server bundling, Vite for client bundling
- **TypeScript**: Full TypeScript support across client, server, and shared code
- **Hot Reload**: Full-stack hot reload capabilities

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migrations and schema management

## UI & Design
- **Shadcn/ui**: Pre-built component library
- **Radix UI**: Headless UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundling for production
- **Replit Integration**: Development environment integration

## Frontend Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation
- **Wouter**: Lightweight routing
- **Date-fns**: Date manipulation utilities

## Backend Libraries
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe database operations
- **Connect-pg-simple**: PostgreSQL session store
- **TSX**: TypeScript execution for development

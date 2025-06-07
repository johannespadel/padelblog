# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog project by Johannes Padel, created as a learning exercise for Claude Code in terminal. The goal is to create a simple personal blog.

## Current State

The repository now has a working blog implementation with:
- Complete Next.js application structure
- TypeScript configuration
- Tailwind CSS for styling
- Sanity CMS integration for content management
- Dynamic blog posts fetched from Sanity
- Sanity Studio for content editing
- GitHub Pages deployment configuration

## Technology Stack

- **Next.js** - React framework for production with static site generation
- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Sanity** - Headless CMS for managing blog posts and content
- **GitHub Pages** - Static site hosting and deployment platform

**Future considerations**:
- Additional Next.js features and optimizations
- Advanced Tailwind components and plugins

## Repository Structure

Currently minimal with only essential files. Future structure will depend on technology choices.

## Development Setup

```bash
npm install              # Install dependencies
cp .env.local.example .env.local  # Set up environment variables
npm run dev             # Start development server (http://localhost:3000)
npm run sanity:dev      # Start Sanity Studio for content management
npm run build           # Build for production and export static files
npm run lint            # Run ESLint
```

**Project Structure**:
- `src/app/` - Next.js App Router pages and layouts
- `src/app/studio/` - Embedded Sanity Studio for content management
- `src/app/posts/[slug]/` - Dynamic blog post pages
- `src/sanity/` - Sanity schemas and configuration
- `src/lib/` - Utility functions, types, and shared code

**Content Management**:
- Blog posts are managed through Sanity CMS
- Access Sanity Studio at `/studio` or run `npm run sanity:dev`
- Posts are dynamically fetched and statically generated at build time

## Deployment

The project uses GitHub Pages for hosting with the following workflow:

1. **Static Site Generation**: Next.js will be configured to export static files using `next export`
2. **Build Process**: GitHub Actions will automatically build and deploy on push to main branch
3. **Content Management**: Blog posts managed through Sanity CMS, changes trigger rebuilds
4. **Domain**: Hosted at `https://johannespadel.github.io/padelblog`

**Deployment considerations**:
- Next.js must be configured for static export compatibility
- All API routes must be handled at build time or through external services
- Image optimization may need special handling for static deployment

## Notes for Claude Code

- This is a learning project specifically designed for Claude Code practice
- Technology stack: Next.js + React + TypeScript + Tailwind CSS + Sanity + GitHub Pages
- Focus on simplicity and educational value over complexity
- When implementing features, follow Next.js and React best practices
- Use Tailwind utility classes for styling, avoid custom CSS when possible
- Ensure TypeScript types are properly defined
- Configure Next.js for static export to ensure GitHub Pages compatibility
- All dynamic content should be fetched at build time for static generation
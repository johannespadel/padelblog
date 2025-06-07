# Padel Blog

A personal blog by Johannes Padel built with modern web technologies.

## Technologies

- **Next.js** - React framework for production
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Sanity** - Headless CMS for blog posts
- **GitHub Pages** - Static site hosting and deployment

## Purpose

This project serves as a learning exercise for Claude Code in terminal while creating a simple personal blog.

## Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Sanity project details

# Start development server
npm run dev

# Sanity Studio is managed separately - visit your Sanity project dashboard

# Build for production
npm run build

# Run linting
npm run lint
```

The blog will be available at `http://localhost:3000` during development.

## Content Management

Blog posts are managed through Sanity CMS:
1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Add your project ID and dataset to `.env.local`
3. Use your Sanity project dashboard to create and edit blog posts
4. Blog posts will automatically appear on your site after publishing
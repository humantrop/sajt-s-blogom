# Next.js Blog Project - Copilot Instructions

## Project Overview
This is a modern blog website built with Next.js, featuring Markdown support for blog posts, TypeScript, Tailwind CSS, and responsive design.

## Project Setup

The project has been fully scaffolded with:
- Next.js 16 with TypeScript
- Tailwind CSS for styling
- ESLint for code quality
- App Router structure
- Markdown blog functionality using Gray Matter, Remark, and Remark HTML

## Getting Started

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **View site**: Open http://localhost:3000

## Development Tasks

### Available Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding Blog Posts
1. Create a new `.md` file in `public/blog/`
2. Include YAML frontmatter with title, date, author, excerpt
3. Write Markdown content
4. File will be automatically available on the blog

### Project Structure
```
src/
├── app/
│   ├── page.tsx           # Home page
│   ├── page.module.css    # Home page styles
│   └── blog/
│       ├── page.tsx       # Blog listing
│       ├── page.module.css
│       ├── [slug].tsx     # Individual blog post
│       └── [slug].module.css
└── lib/
    └── blog.ts            # Blog utility functions
```

## Customization

- **Colors**: Modify gradients in `src/app/page.module.css`
- **Styling**: Each page has its own CSS module file
- **Blog Settings**: Modify frontmatter parsing in `src/lib/blog.ts`

## Deployment

The project is ready to deploy to Vercel or any Node.js hosting:
```bash
npm run build
npm start
```

## Technologies Used
- Next.js 16
- TypeScript
- Tailwind CSS
- Gray Matter (markdown parsing)
- Remark (markdown processing)
- Remark GFM (GitHub Flavored Markdown)
- Remark HTML (markdown to HTML conversion)

## Notes

- Blog posts are loaded from `public/blog/` directory
- Posts are automatically sorted by date (newest first)
- Static generation is used for optimal performance
- The project is fully responsive and mobile-friendly

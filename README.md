# Debugging The Self

A personal blog exploring spirituality, travel, and productivity through the lens of lived experience across five countries.

## About

This is a Jekyll-based static site hosted on GitHub Pages. The site features a dark technical theme inspired by debugging and coding aesthetics.

## Local Development

### Prerequisites
- Ruby (2.7 or higher)
- Bundler

### Setup

1. Install dependencies:
```bash
bundle install
```

2. Run local server:
```bash
bundle exec jekyll serve
```

3. Visit `http://localhost:4000` in your browser

### Live Reload
For development with live reload:
```bash
bundle exec jekyll serve --livereload
```

## Creating New Posts

1. Create a new file in `_posts/` directory with the format:
   ```
   YYYY-MM-DD-title-of-post.md
   ```

2. Add frontmatter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD
   category: spirituality|travel|productivity
   tags: [tag1, tag2, tag3]
   excerpt: "Brief description of the post"
   featured: true  # Optional: Makes post appear as featured on homepage
   ---
   ```

3. Write content in Markdown below the frontmatter

## Site Structure

```
.
├── _config.yml           # Site configuration
├── _includes/            # Reusable components (header, footer)
├── _layouts/             # Page templates
│   ├── default.html      # Base layout
│   ├── home.html         # Homepage layout
│   ├── post.html         # Blog post layout
│   └── category.html     # Category page layout
├── _posts/               # Blog posts (markdown files)
├── assets/
│   ├── css/              # Stylesheets
│   └── js/               # JavaScript files
├── index.md              # Homepage content
├── spirituality.md       # Spirituality category page
├── travel.md             # Travel category page
├── productivity.md       # Productivity category page
└── about.md              # About page
```

## Customization

### Updating Site Information
Edit `_config.yml` to update:
- Site title
- Description
- Author name
- Email
- Base URL

### Changing Colors
Edit `assets/css/style.css` and modify the CSS variables in the `:root` selector:
```css
:root {
    --bg-primary: #0a0e27;
    --accent-primary: #4a9eff;
    /* ... more variables */
}
```

### Adding Navigation Items
Edit `_includes/header.html` to add/remove navigation links

## Features

- ✅ Responsive design
- ✅ Dark technical theme
- ✅ Category pages (Spirituality, Travel, Productivity)
- ✅ Search functionality within categories
- ✅ Featured posts on homepage
- ✅ Mobile-friendly navigation
- ✅ SEO optimized
- ✅ Fast static site generation

## Deployment

### GitHub Pages (Automatic)

This site is configured for GitHub Pages. Simply push to the `master` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

GitHub Pages will automatically build and deploy your site to:
`https://sharma-apoorv.github.io`

### Manual Deployment (Other Hosts)

1. Build the site:
```bash
bundle exec jekyll build
```

2. Deploy the contents of `_site/` directory to your host

## Troubleshooting

### Jekyll won't start
- Ensure Ruby is installed: `ruby -v`
- Install bundler: `gem install bundler`
- Install dependencies: `bundle install`

### Changes not appearing
- Clear Jekyll cache: `bundle exec jekyll clean`
- Restart server: `bundle exec jekyll serve`

### GitHub Pages not updating
- Check GitHub Actions tab for build errors
- Ensure `_config.yml` baseurl matches repository name
- Wait 2-3 minutes for deployment

## Writing Tips

- Use descriptive titles
- Add relevant tags for discoverability
- Include excerpt for better previews
- Use markdown formatting for readability
- Add images to enhance posts (place in `assets/images/`)

## License

Personal project - all content © Apoorv

## Contact

Questions or feedback? Feel free to open an issue or reach out!

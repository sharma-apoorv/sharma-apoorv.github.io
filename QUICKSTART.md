# Quick Start Guide

## Getting Your Site Live in 5 Minutes

### Step 1: Install Dependencies
```bash
# Install bundler if you don't have it
gem install bundler

# Install Jekyll and dependencies
bundle install
```

### Step 2: Test Locally
```bash
# Start the local server
bundle exec jekyll serve

# Open your browser to:
# http://localhost:4000
```

### Step 3: Customize Your Content

#### Update Site Info
Edit `_config.yml`:
```yaml
title: Debugging The Self
author: Apoorv
email: your.email@example.com  # Update this!
```

#### Add Your First Post
1. Create file: `_posts/2025-01-18-my-first-post.md`
2. Add content:
```markdown
---
layout: post
title: "My First Post"
date: 2025-01-18
category: productivity
tags: [first-post, hello-world]
featured: true
excerpt: "This is my first post on my new blog!"
---

# Hello World

This is the content of my first blog post...
```

### Step 4: Deploy to GitHub Pages

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial Jekyll site setup"

# Push to GitHub
git push origin master
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: `master`
4. Click **Save**
5. Wait 2-3 minutes
6. Visit: `https://sharma-apoorv.github.io`

## Common Tasks

### Add a New Post
```bash
# Create file in _posts/ with date format
touch _posts/2025-01-18-my-new-post.md

# Add frontmatter and content
# Posts automatically appear on homepage and category pages
```

### Change Theme Colors
Edit `assets/css/style.css`:
```css
:root {
    --bg-primary: #0a0e27;      /* Main background */
    --accent-primary: #4a9eff;  /* Links and accents */
    /* Change these values to customize colors */
}
```

### Update About Page
Edit `about.md` with your personal information

### Add Categories
Already set up: Spirituality, Travel, Productivity
To add more:
1. Create `category-name.md`
2. Use the category layout
3. Add to navigation in `_includes/header.html`

## Writing in Markdown

### Headers
```markdown
# H1
## H2
### H3
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Alt text](/assets/images/photo.jpg)
```

### Code
```markdown
Inline `code`

```python
# Code block
def hello():
    print("Hello")
\`\`\`
```

### Lists
```markdown
- Item 1
- Item 2

1. First
2. Second
```

### Quotes
```markdown
> This is a quote
```

## Troubleshooting

### "Command not found: bundle"
```bash
gem install bundler
```

### "Cannot find gem 'jekyll'"
```bash
bundle install
```

### Changes not showing locally
```bash
# Stop server (Ctrl+C)
bundle exec jekyll clean
bundle exec jekyll serve
```

### Site not updating on GitHub
- Wait 2-3 minutes after push
- Check GitHub Actions tab for errors
- Ensure Pages is enabled in Settings

## Next Steps

1. ✅ Customize `_config.yml` with your info
2. ✅ Update `about.md` with your story
3. ✅ Delete sample posts in `_posts/`
4. ✅ Write your first real post
5. ✅ Push to GitHub
6. ✅ Share your new blog!

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Need help?** Open an issue or check the README.md file for more details.

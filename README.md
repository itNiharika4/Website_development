# Israt Tamanna Niharika: Portfolio

Static portfolio website (HTML, CSS, JavaScript). No build step.

## Structure
```
index.html
assets/
  css/style.css
  js/main.js
  img/profile.jpg   <- add your photo (square, ~400x400)
  ISRAT_CV.pdf      <- add your CV for the "Download CV" button
.nojekyll
```

## Publish on GitHub Pages
1. Create a repository named `YOUR-USERNAME.github.io` (site will be at `https://YOUR-USERNAME.github.io`), or any name for a project site.
2. Upload all files from this folder to the repository root (include the hidden `.nojekyll` file).
3. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`, and save.
4. Wait a minute or two, then open your site URL.

## Preview locally
```
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Updating content
Edit `index.html`. Each section (Education, Research, Publications, Skills, etc.) is a `<section>` with the text inline.

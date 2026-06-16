# GitHub Pages Publishing Guide

This guide explains how to publish this portfolio website for free using GitHub Pages.

## What You Will Get

After publishing, your website will be available at a public URL like:

```text
https://your-github-username.github.io/yashkumar-portfolio/
```

You can share that link with clients.

## Required Files

Upload these files and folders to GitHub:

```text
index.html
styles.css
script.js
assets/
```

Keep `index.html` at the root of the repository. GitHub Pages uses it as the homepage.

## Step 1: Create A GitHub Account

1. Go to https://github.com/
2. Create a free account or sign in.

## Step 2: Create A New Repository

1. Click the `+` icon in the top-right corner.
2. Click `New repository`.
3. Repository name:

```text
yashkumar-portfolio
```

4. Set visibility to `Public`.
5. Click `Create repository`.

## Step 3: Upload The Website Files

1. Open your new repository on GitHub.
2. Click `uploading an existing file`.
3. Drag these items into the upload area:

```text
index.html
styles.css
script.js
assets/
README.md
GITHUB_PAGES_GUIDE.md
```

4. Scroll down.
5. In the commit message box, write:

```text
Add portfolio website
```

6. Click `Commit changes`.

## Step 4: Turn On GitHub Pages

1. In the repository, click `Settings`.
2. In the left sidebar, click `Pages`.
3. Under `Build and deployment`, set:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

4. Click `Save`.

## Step 5: Open Your Live Website

GitHub may take a few minutes to publish the site.

Return to:

```text
Settings > Pages
```

You should see a live website URL like:

```text
https://your-github-username.github.io/yashkumar-portfolio/
```

Open that link and share it with clients.

## Step 6: Updating The Website Later

To change text, email, pricing, or images:

1. Open the file on GitHub.
2. Click the pencil edit icon.
3. Make your change.
4. Click `Commit changes`.

GitHub Pages will republish automatically after a short delay.

## Important Notes

- The repository must be public on GitHub Free.
- Do not rename `index.html`.
- Do not move `index.html` into another folder.
- Keep the `assets` folder in the same location as `index.html`.
- The contact form uses the visitor's email app through a `mailto:` link. It does not store messages in a database.

## Optional: Custom Domain Later

You can later connect a domain such as:

```text
yashkumarpatel.com
```

This is optional and usually requires buying a domain. GitHub Pages itself can still host the site for free.

## Official GitHub Documentation

- GitHub Pages overview: https://docs.github.com/en/pages
- Create a GitHub Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Configure a publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

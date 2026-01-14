---
description: Deploy to Vercel with GitHub (Mock Data - No Database)
---

# 🚀 Deploy Your Site to Vercel - Step by Step Guide

This guide will help you deploy your luxury jewelry e-commerce site to Vercel using GitHub, with mock data instead of a database.

---

## 📋 Prerequisites

Before starting, make sure you have:
- A GitHub account (sign up at https://github.com if you don't have one)
- A Vercel account (sign up at https://vercel.com - you can use your GitHub account to sign in)
- Git installed on your computer

---

## Part 1: Prepare Your Code for Deployment (Without Database)

### Step 1: Create Mock Data Files

We'll create mock data files to replace database calls.

**Action Required:** Ask the AI assistant to create mock data files for:
- Products
- Collections
- Users
- Orders

### Step 2: Update Environment Variables

Create a `.env.production` file for Vercel deployment:

```bash
# These are for production without database
NODE_ENV=production
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXTAUTH_SECRET=your-secret-key-here
```

### Step 3: Modify package.json Build Script

Update the build script to work without Prisma database:

```json
"build": "next build"
```

Remove or comment out the `postinstall` script that runs `prisma generate`.

---

## Part 2: Push Your Code to GitHub

### Step 4: Initialize Git Repository (if not already done)

Open a terminal in your project folder (`d:\AAha`) and run:

```bash
git init
```

### Step 5: Create a GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `rithu-jewelry-store`)
5. Keep it **Public** or **Private** (your choice)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 6: Add Files to Git

In your terminal (in `d:\AAha`):

```bash
# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit - Ready for Vercel deployment"
```

### Step 7: Connect to GitHub Repository

Copy the commands from GitHub (they look like this):

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name!**

---

## Part 3: Deploy to Vercel

### Step 8: Sign Up/Login to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 9: Import Your GitHub Repository

1. On the Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find your repository (`rithu-jewelry-store`)
4. Click **"Import"**

### Step 10: Configure Your Project

On the configuration page:

1. **Framework Preset:** Should automatically detect "Next.js"
2. **Root Directory:** Leave as default (`.`)
3. **Build Command:** Should be `next build`
4. **Output Directory:** Should be `.next`

### Step 11: Add Environment Variables

Click on **"Environment Variables"** section and add:

| Name | Value |
|------|-------|
| `NEXTAUTH_SECRET` | Generate a random string or use an existing one |
| `NEXTAUTH_URL` | Leave empty for now (will auto-fill) |
| `NODE_ENV` | production |

**To generate a secret key:**
- You can use this online: https://generate-secret.vercel.app/32
- Or run in terminal: `openssl rand -base64 32` (if you have OpenSSL)

### Step 12: Deploy!

1. Click the **"Deploy"** button
2. Wait for the build to complete (this usually takes 1-3 minutes)
3. You'll see a success screen with your live URL!

### Step 13: View Your Live Site

1. Click on the **"Visit"** button or the URL shown
2. Your site is now live! 🎉

The URL will be something like:
- `https://your-repo-name.vercel.app`
- or `https://your-repo-name-username.vercel.app`

---

## Part 4: Update & Redeploy (For Future Changes)

Whenever you make changes to your code:

```bash
# 1. Add your changes
git add .

# 2. Commit with a message
git commit -m "Description of what you changed"

# 3. Push to GitHub
git push

# Vercel will automatically detect the changes and redeploy!
```

---

## 🆘 Troubleshooting

### Build Failed on Vercel?

**Common issues:**

1. **Prisma errors:** Make sure you've removed database-related code
2. **TypeScript errors:** Fix any type errors shown in the build log
3. **Environment variables missing:** Double-check all required env vars are added

**How to check:**
- Click on the failed deployment
- Look at the **"Build Logs"** to see the exact error
- Ask the AI assistant for help with the specific error message

### Can't Push to GitHub?

**Authentication issues:**
- GitHub might ask for a Personal Access Token instead of password
- Generate one at: https://github.com/settings/tokens
- Use the token as your password when pushing

---

## 📝 Important Notes

1. **Free Tier Limits:**
   - Vercel free tier gives you unlimited deployments
   - Bandwidth limit: 100GB/month
   - Build time limit: 6000 minutes/month
   - More than enough for testing!

2. **Custom Domain (Optional):**
   - You can add a custom domain later in Vercel settings
   - For now, the `.vercel.app` domain works great for testing

3. **Environment Variables:**
   - Never commit `.env` files to GitHub
   - Always add sensitive data through Vercel dashboard

---

## ✅ Success Checklist

- [ ] Code prepared with mock data
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] Site is live and accessible

---

**Need help?** Just ask! Provide any error messages you see, and I'll help you fix them.

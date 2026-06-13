# GitHub Actions + Vercel CI/CD Setup Guide

This guide walks through setting up automated CI/CD with GitHub Actions and Vercel deployment for the Energy-EX Next.js application.

## Prerequisites

- GitHub repository (already set up)
- Vercel account (https://vercel.com)
- Admin access to the GitHub repository

## Step 1: Create Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm ci`
5. Click "Deploy"
6. Wait for the initial deployment to complete

## Step 2: Get Vercel Credentials

1. In Vercel Dashboard, go to **Settings** → **Tokens**
2. Create a new token:
   - Click "Create"
   - Give it a name (e.g., "GitHub Actions")
   - Copy the token value
3. Go to Vercel Dashboard → Your Project
4. Under **Settings** → **General**, copy:
   - **Project ID**
   - **Team/Org ID** (if using team)

## Step 3: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Create the following secrets:
   - `VERCEL_TOKEN`: Paste your Vercel token from Step 2
   - `VERCEL_PROJECT_ID`: Your Vercel project ID
   - `VERCEL_ORG_ID`: Your Vercel organization/team ID (if using team account)

## Step 4: Environment Setup (Optional)

If you need environment variables deployed to Vercel:

1. In Vercel Dashboard, go to **Settings** → **Environment Variables**
2. Add any required environment variables (e.g., API keys, database URLs)
3. These will be automatically used during deployment

## Workflows Overview

### 1. **CI Workflow** (`ci.yml`)
Runs on every push to `main` and `develop` branches, and on all pull requests:
- Installs dependencies
- Runs TypeScript type checking
- Runs ESLint linting
- Builds the Next.js application
- Tests on Node.js 18.x and 20.x

**Status Badge** (add to README.md):
```markdown
[![CI](https://github.com/your-username/Energy-EX-Web/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/Energy-EX-Web/actions/workflows/ci.yml)
```

### 2. **Production Deployment** (`deploy.yml`)
Runs on every push to the `main` branch (after CI passes):
- Builds the application
- Deploys to Vercel production
- Creates deployment status

This is your **main deployment pipeline**. Ensure your `main` branch is stable.

### 3. **Preview Deployment** (`preview.yml`)
Runs on all pull requests:
- Builds the application
- Deploys a preview URL to Vercel
- Comments on the PR with the preview URL

Perfect for testing changes before merging.

## Testing the Setup

1. Create a test branch:
   ```bash
   git checkout -b test/ci-cd-setup
   git push origin test/ci-cd-setup
   ```

2. Create a pull request to `main`

3. Watch the actions run:
   - Go to **Actions** tab in GitHub
   - You should see **CI** and **Preview** workflows running
   - Once CI passes, you'll get a comment with the preview URL

4. Merge the PR to trigger production deployment

## Troubleshooting

### Deployment fails with "Invalid token"
- Verify `VERCEL_TOKEN` is correctly set in GitHub Secrets
- Generate a new token in Vercel if needed

### "Project not found" error
- Verify `VERCEL_PROJECT_ID` is correct
- Check that the project exists in your Vercel dashboard

### TypeScript errors in CI
- Run `npx tsc --noEmit` locally to check for errors
- Fix them locally before pushing

### Build fails on GitHub Actions
- Check the full workflow logs in the Actions tab
- Run `npm ci && npm run build` locally to reproduce

## Manual Deployment (if needed)

If you need to manually deploy:

```bash
npm install -g vercel

# For production
vercel --prod

# For preview
vercel
```

## Best Practices

1. **Always use `main` branch for production** - Keep it stable
2. **Test locally first** - Run `npm run build` and `npm run lint` before pushing
3. **Use feature branches** - Create branches for each feature/fix
4. **Review preview deployments** - Check preview URLs on PRs before merging
5. **Monitor deployments** - Check GitHub Actions and Vercel Dashboard regularly

## Next Steps

- Add the CI badge to your README.md
- Set up branch protection rules in GitHub
- Configure Vercel analytics if needed
- Monitor your deployments in the Vercel Dashboard

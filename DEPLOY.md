# Deploy to GitHub + Cloudflare Pages

This project is a Vite React app. The repository includes a GitHub Actions workflow that builds the app and deploys the output (`dist`) to Cloudflare Pages.

What I added
- [/.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) — builds and deploys on pushes to `main`/`master`.
- [/.gitignore](.gitignore) — ignores node_modules, build outputs, and env files.

Quick steps to deploy

1. Create a GitHub repository and push the code

   Using the GitHub CLI (`gh`) (recommended):

```bash
gh repo create <OWNER>/<REPO> --public --source=. --remote=origin --push
```

   Or manually on GitHub: create a new repo, then run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:<OWNER>/<REPO>.git
git push -u origin main
```

2. Create a Cloudflare Pages project

- In Cloudflare dashboard → Pages → Create a project → Connect to GitHub and choose your repository and branch (`main`).
- Give Pages a project name (this will be `CF_PROJECT_NAME` below).

3. Create a Cloudflare API token

- Create an API Token in Cloudflare (My Profile → API Tokens) with the following scoped permissions at minimum:
  - Account:Pages (Edit), Account:Pages (Read), and if needed, Account:Workers (Edit/Read)
  - Or use the `Cloudflare Pages` template when creating the token.

4. Add GitHub repository secrets

Set these secrets in your GitHub repo Settings → Secrets → Actions:

- `CF_API_TOKEN` — the Cloudflare API token you created
- `CF_ACCOUNT_ID` — your Cloudflare Account ID (find in the Cloudflare dashboard Overview)
- `CF_PROJECT_NAME` — the Pages project name you set when creating the Pages project

You can set secrets from the CLI (gh):

```bash
gh secret set CF_API_TOKEN --body "<your-token>"
gh secret set CF_ACCOUNT_ID --body "<your-account-id>"
gh secret set CF_PROJECT_NAME --body "<your-pages-project-name>"
```

5. Push to `main`

After the secrets are set and the repo has been pushed, any push to `main` will trigger the workflow which runs `npm ci`, `npm run build`, and deploys `./dist` to Cloudflare Pages.

Notes & troubleshooting
- If you prefer to use `wrangler` instead of the Pages Action, let me know and I can add a `wrangler.toml` and an alternate workflow.
- If your Cloudflare Pages project is not created via the dashboard (you prefer API-only), make sure `CF_PROJECT_NAME` matches the Pages project slug.
- Ensure `npm run build` produces the `dist` folder (Vite default). If you changed the output dir, update the workflow's `directory` input.

If you want, I can:
- Initialize git and push the repository (I can run the `gh` commands if you have the GitHub CLI authenticated here).
- Add a `wrangler.toml` and alternate GitHub Action for `wrangler pages publish`.

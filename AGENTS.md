<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Holy Solutions — Project rules

## Security: never leak sensitive information

This repository is **public** (hosted at github.com/holyusm/holysolutions). Never commit, suggest committing, or output in any form:

- **API keys, tokens, secrets** (OpenAI, Anthropic, Supabase, Stripe, WhatsApp Business API, Google, AWS, etc.) — even as examples or placeholders that look real
- **Passwords or private credentials** of any kind
- **Personal contact data** beyond what's already public on the live site (the placeholder WhatsApp number `+56 9 0000 0000` in `lib/constants.ts` is intentionally fake — when the real number is configured, it stays in env vars, not in source if it's not yet public-facing)
- **`.env*` files**, service-account JSONs, `*.key` / `*.pem` / `credentials.json` — these are blocked in `.gitignore`; do not bypass
- **Local config** like `.claude/`, `.vscode/`, `.idea/` — user-specific, blocked in `.gitignore`
- **Database connection strings, internal URLs, private endpoints**
- **Client information** (real names, emails, project details of paying clients) — the projects in `lib/constants.ts` are intentionally fictional placeholders
- **AI conversation transcripts** or memory files from `.claude/`

## Workflow rules

- Before any `git add` / `git commit`, verify no secret-looking strings are in the diff
- If the user asks to commit a `.env` file or anything matching the patterns above, refuse and explain why
- Secrets that need to be referenced by code go in environment variables, loaded via `process.env.NEXT_PUBLIC_*` (browser-safe) or `process.env.*` (server-only)
- For Vercel deployment: secrets are set in the Vercel dashboard under Project Settings → Environment Variables, NOT in source
- If a secret is accidentally committed, treat it as compromised: rotate it immediately, then remove it from history (`git filter-repo` or BFG)

## Stack-specific reminders

- All editable content (prices, services, projects, FAQ, WhatsApp number) lives in `lib/constants.ts`
- WhatsApp number is the only "config" value — when it stops being public, move it to `NEXT_PUBLIC_WHATSAPP_NUMBER` env var
- shadcn/ui v4 uses `@base-ui/react` primitives, NOT Radix — do not import from `@radix-ui/*`
- Static export is OFF (`next.config.ts` has no `output: 'export'`) — Vercel handles Next.js natively
- No backend, no database — contact flow is WhatsApp-only by design

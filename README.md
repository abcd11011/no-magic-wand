# No Magic Wand

A minimal personal/business website for a beauty & wellness brand-growth consultant.
Plain HTML/CSS/JS — no build step, no dependencies. Automatic dark mode follows the
visitor's system setting.

```
NMW/
├── index.html      ← all the content & copy (edit here)
├── styles.css      ← design / colours / dark mode
├── script.js       ← year + newsletter form behaviour
├── assets/
│   └── avatar.svg   ← placeholder headshot (replace)
└── README.md
```

## Quick preview
Just open `index.html` in a browser. That's it.

---

## What to customise (search `TODO` in `index.html`)

| Thing | Where |
|------|-------|
| Your name & bio | `.hero` section in `index.html` |
| Headshot | replace `assets/avatar.svg` with `assets/avatar.jpg`, update the `<img src>` |
| Blog posts | `#writing` section — titles, dates, links |
| Service packages & prices | `#services` section |
| Instagram tiles & handle | `#instagram` section |
| LinkedIn URL | search `linkedin.com/in/your-handle` (appears 3×) |
| Instagram URL | search `instagram.com/your-handle` |

---

## 1. Newsletter — MailerLite (free up to 1,000 subscribers)

1. Create a free account at **mailerlite.com**.
2. **Sites & Forms → Embedded forms → New form**. Design it, then pick the
   **“Custom HTML / Universal”** embed option.
3. Two ways to connect:
   - **Easiest:** delete the `<form>…</form>` block in the `#newsletter` section of
     `index.html` and paste MailerLite's full embed snippet in its place.
   - **Keep this design:** set the form's `action="…"` to MailerLite's POST URL and
     make sure the email input's `name` matches theirs (`fields[email]`). Then open
     `script.js` and set `PLACEHOLDER_MODE = false` so the form submits for real.

Until then the form shows a friendly “you're on the list” message (placeholder only).

## 2. Payments — Stripe (hosted Checkout, no backend)

1. In your **Stripe Dashboard → Payment Links**, create one link per package.
   Payment Links **are** Stripe-hosted Checkout — no code or server required.
2. In `index.html`, replace each `https://buy.stripe.com/REPLACE_ME` with the matching
   Payment Link URL (there are three, one per card).
3. For high-ticket work you may prefer a call first — point the button at your
   Calendly / Cal.com link instead. (The “Book a free call” link uses `cal.com/your-handle`.)

## 3. Instagram feed (optional auto-updating)

The tiles are static placeholders linking to your profile. For a real, auto-updating
feed, use a free widget and paste its snippet over the `.ig-grid`:
- **behold.so** (clean, free tier) — recommended
- EmbedSocial / SnapWidget — also free tiers

---

## Deploy (recommended: GitHub for backup + Netlify to serve)

**Why both:** GitHub keeps your code backed up with full history; Netlify pulls from
GitHub and serves the live site with free SSL, a custom domain, and instant rollbacks.

```bash
# one-time: put the code on GitHub
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<you>/no-magic-wand.git
git push -u origin main
```

Then at **netlify.com → Add new site → Import from Git**, pick the repo. Done — every
`git push` redeploys automatically. Add your custom domain under **Domain settings**.

**Simplest possible alternative:** skip Git entirely and drag the `NMW` folder onto
[app.netlify.com/drop](https://app.netlify.com/drop) for an instant live URL.

---

## Dark mode
Handled automatically via `@media (prefers-color-scheme: dark)` in `styles.css`.
No toggle needed — it matches the visitor's OS setting. Test it by switching your
Mac to Dark Appearance in System Settings → Appearance.

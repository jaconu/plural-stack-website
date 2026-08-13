# pluralstack.org

Website for **Plural Stack**, a project of [RadicalxChange](https://www.radicalxchange.org).

This is a plain static site: no build step, no framework. `index.html` is the site.

## How it deploys

Netlify (RxC's team account) watches this repository. Every push to `main`
is live at [pluralstack.org](https://pluralstack.org) within about a minute.
Pull requests get an automatic preview URL, so you can review changes
before merging.

## Editing content

- **In the browser:** open the file on GitHub, press `.` or use the pencil
  icon, edit, and commit to a branch → open a PR → merge when the preview
  looks right.
- **Locally:** clone, edit, push. There is nothing to install or build.

## Portability rule

This project may later move to EU-based hosting (e.g. Hetzner, Codeberg
Pages) for data-sovereignty reasons. To keep that migration trivial:

1. Keep the site as plain static files — no host-specific build magic.
2. Keep DNS at the registrar (Porkbun), **not** delegated to Netlify.
3. Don't adopt Netlify-proprietary features beyond `netlify.toml`
   headers and, if ever needed, a portable `_redirects` file.

If you follow those three rules, moving hosts is a DNS change plus a CI
tweak.

## Infrastructure notes

| Thing    | Where                | Notes                                   |
|----------|----------------------|-----------------------------------------|
| Domain   | Porkbun              | Auto-renew on; WHOIS privacy on         |
| DNS      | Porkbun              | A record (apex) + CNAME (www) → Netlify |
| Hosting  | Netlify (RxC team)   | Site imported from this repo            |
| Email    | Porkbun forwarding   | hello@pluralstack.org → project lead    |

## One-time setup (already done / for reference)

1. Create this repo under the RxC GitHub org; add the `plural-stack`
   team with Write access.
2. Netlify → Add new site → Import from GitHub → this repo.
   Build command: none. Publish directory: `.`
3. Netlify → Domain management → Add `pluralstack.org` → choose
   **external DNS** (do not delegate nameservers to Netlify).
4. Porkbun → DNS for pluralstack.org: add the A record and `www` CNAME
   Netlify displays; delete Porkbun's default parking records.
5. SSL provisions automatically (Let's Encrypt) once DNS propagates.

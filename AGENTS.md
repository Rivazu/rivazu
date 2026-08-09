## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Learned User Preferences

- Do not modify rivazu project files unless explicitly asked; user is building the Astro portfolio themselves—explain, review, and answer only (learning mode).
- Deploy OpenSEO on the rivazu VPS through OpenShip as a Docker Compose project from `every-app/open-seo` (repo-root `compose.yaml`, GHCR image)—not TanStack per-app source build and not a manual `~/open-seo` clone.
- Self-hosted OpenSEO Docker uses `AUTH_MODE=local_noauth`—anyone who can reach the URL has admin; don't treat hostname obscurity as security.

## Learned Workspace Facts

- `~/Projects/rivazu`: Astro personal portfolio/blog for the `rivazu.com` apex.
- `rivazu.com` on a Hetzner Cloud VPS; SSH with `~/.ssh/id_hetzner` as user `rich`. DNS is managed in Squarespace Domains (keep Google Workspace MX/SPF when repointing apex).
- Hosting layout: OpenShip control plane on `ship.rivazu.com`; apex `rivazu.com` reserved for the personal site; OpenSEO on `seo.rivazu.com` via OpenShip Compose (`every-app/open-seo`). Do not install nginx—OpenShip owns 80/443.
- OpenSEO on OpenShip: set `DATAFORSEO_API_KEY` (DataForSEO Base64 credential), `ALLOWED_HOST=seo.rivazu.com`, `PORT=3001`, `AUTH_MODE=local_noauth`, `CLOUDFLARE_INCLUDE_PROCESS_ENV=true`, and optionally `OPENSEO_TELEMETRY_DISABLED=1`; redeploy after env changes.

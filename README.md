# Destinazione Meme

Prima versione pubblicabile del sito ufficiale di Destinazione Meme.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Pronto per deploy su Vercel

## Avvio locale

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build
```

## Deploy su Vercel

1. Crea un repository GitHub con questa cartella.
2. Accedi a Vercel e scegli `Add New Project`.
3. Importa il repository.
4. Lascia le impostazioni automatiche di Next.js.
5. Pubblica.

Quando il dominio definitivo sara collegato, aggiorna `siteUrl` in `app/layout.tsx`,
`app/sitemap.ts` e `app/robots.ts`.

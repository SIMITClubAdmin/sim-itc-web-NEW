# Sanity CMS – Setup Guide (from scratch)

This project uses **Sanity** as the headless CMS. Content is managed in **Sanity Studio** (run separately in the `studio/` folder) and fetched by the Next.js app.

---

## 1. Create a Sanity project

1. Go to **[sanity.io/manage](https://www.sanity.io/manage)** and sign in (or create an account).
2. Click **Create project**.
3. Choose a name (e.g. “SIM IT Club”) and pick a dataset name (e.g. **production**).
4. After creation, open your project and go to **API** in the left sidebar.
5. Note:
   - **Project ID** (e.g. `abc123xyz`)
   - **Dataset** (usually `production`).

---

## 2. Connect this repo to your project

1. In the project root, copy the example env file and add your values:

   ```bash
   cp .env.local.example .env.local
   ```

2. Edit **`.env.local`** and set:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

   Replace `your_project_id_here` with the **Project ID** from step 1.

3. Restart the dev server so Next.js picks up the new env vars:

   ```bash
   npm run dev
   ```

---

## 3. Install and run Sanity Studio

The Studio runs as a **separate app** in the `studio/` folder (so the main site can use React 19 while the Studio uses React 18).

1. From the project root, install Studio dependencies and run it:

   ```bash
   cd studio
   npm install
   cp .env.example .env
   ```

2. Edit **`studio/.env`** and set the same project ID and dataset as in the main app:

   ```env
   SANITY_STUDIO_PROJECT_ID=your_project_id_here
   SANITY_STUDIO_DATASET=production
   ```

3. Start the Studio:

   ```bash
   npm run dev
   ```

   Or from the project root: **`npm run studio`** (runs `cd studio && npm run dev`).

4. Open **[http://localhost:3333](http://localhost:3333)** in your browser. The first time you may be asked to log in to Sanity (or create an account).
5. After login you’ll see the Studio with content types: **Event**, **Partner**, **Media Item**.

You can now add and edit content; it will appear on the site once published.

---

## 4. CORS (required for live preview / API calls from the browser)

So that the browser can talk to Sanity from your app:

1. Go to **[sanity.io/manage](https://www.sanity.io/manage)** → your project → **API**.
2. Find **CORS origins**.
3. Add:
   - `http://localhost:3000` (development)
   - Your production URL when you deploy (e.g. `https://your-site.vercel.app`).

Save. Without this, the Studio or front-end requests can be blocked.

---

## 5. Content types (schemas)

| Type         | Use |
|-------------|-----|
| **Event**   | Hackathons, workshops, events, projects. Used on **Initiatives** and category sub-pages. |
| **Partner** | Partner logos and links. Used on **Our Partners**. |
| **Media Item** | Images/videos for the **Media Gallery** (can be wired later). |

- **Event** has: title, slug, category (hackathon / workshop / event / project), date, description, image, link, order.
- **Partner** has: name, logo, website URL, order.
- **Media Item** has: title, date, image, video URL, optional link to an Event.

Schema files live in **`sanity/schemas/`**. You can extend them and re-run the app.

---

## 6. Where content is used

- **`/initiatives`** – “Past Highlights” comes from **Event** documents (falls back to static list if Sanity isn’t configured or returns nothing).
- **`/our-partners`** – Partner logos and names come from **Partner** documents (falls back to static logos if none).
- **`/media-gallery`** – Can be wired to **Media Item** later using `mediaGalleryQuery` in `src/lib/sanity/queries.ts`.

---

## 7. Useful commands

| Command        | Purpose |
|----------------|--------|
| `npm run dev`  | Run Next.js; open `/studio` to edit content. |
| `npm run build`| Production build (fetches from Sanity if env is set). |

---

## 8. Troubleshooting

- **Studio shows “Project not found” or won’t load**  
  Check `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local` and that you’re logged into the correct Sanity account.

- **Changes in Studio don’t appear on the site**  
  Make sure you **Publish** the document (not only save draft). Refresh the site; in dev, data is fetched on each request.

- **Images don’t load on the site**  
  `next.config.js` already allows `cdn.sanity.io`. If you use another image host, add it to `images.remotePatterns`.

- **CORS errors in the browser**  
  Add your app URL (e.g. `http://localhost:3000`) to **CORS origins** in [sanity.io/manage](https://www.sanity.io/manage) → your project → API.

---

## 9. Optional: deploy Studio

The Studio in **`studio/`** can be deployed to **Sanity’s hosted Studio** so editors don’t need to run it locally:

```bash
cd studio
npm run deploy
```

Follow the prompts to link your project. You’ll get a URL like **https://your-project.sanity.studio**. Add that URL to CORS origins in [sanity.io/manage](https://www.sanity.io/manage) if you use live preview. The main Next.js site is deployed separately (e.g. Vercel); add its URL to CORS as well.

# Seiryu

Homepage for the Seiryu community site — one place for club forums, club news, and club
groupchats instead of spreading everything across Discord channels.

## Structure

```
index.html        homepage
css/style.css      all styling / design tokens
js/script.js        callout toggle + hero image cycler hook
assets/             put hero images here
```

## Adding the cycling hero image

Open `js/script.js` and fill in `HERO_IMAGES` with your image paths, e.g.:

```js
const HERO_IMAGES = ["assets/hero-1.jpg", "assets/hero-2.jpg", "assets/hero-3.jpg"];
```

Drop the actual image files into `assets/`. The script will crossfade between them
automatically every 5 seconds, right behind the feature card.

## Pages still to build

`forums.html`, `clubs.html`, `groupchats.html`, `news.html`, `members.html` — the nav
already links to these, they just don't exist yet.

## Running locally

No build step. Just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

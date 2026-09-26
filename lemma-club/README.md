# Lemma Club website

A static website for Lemma Club, with four pages:

| Page | File | What's on it |
| --- | --- | --- |
| Home | `index.html` | Group photo, the club name in the upper left, the next three events, how to join |
| About us | `about.html` | What the club is, what it does, who can join |
| Leadership | `leadership.html` | Board members in circles, each with a short description and Website / CV / LinkedIn links |
| Events | `events.html` | Month calendar plus a list of that month's events |

It is plain HTML, CSS and JavaScript, with no build step and no dependencies.

## Updating the content

Almost everything you'll change week to week is in **`js/content.js`**:

- **`club`**: meeting time, room, Instagram link and email. Leave a value empty to hide it.
- **`leaders`**: one entry per board member (name, role, details, bio, photo and links).
- **`events`**: one entry per event (date, time, type, title and description).

The site currently shows placeholder names, photos and events. Once you've replaced them, set `draft: false` in `js/content.js` to remove the "Draft site" note at the top of each page.

### Photos

- **Group photo:** save it as `assets/group-photo.jpg`. A wide landscape photo works best.
- **Board photos:** put them in `assets/leaders/`, e.g. `assets/leaders/president.jpg`, and set that path as the person's `photo` in `js/content.js`. Square photos with the face centred look best in the circles.

Until a photo is added, the site shows a graph-paper placeholder instead.

### Page text

The text on the home and about pages is written directly in `index.html` and `about.html`. Edit it there.

## Previewing locally

Open `index.html` in a browser, or run a small local server from this folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with GitHub Pages

1. Push this folder's contents to the root of the repository's `main` branch.
2. In the repository on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

GitHub Pages is free for public repositories. Publishing Pages from a private repository needs a paid GitHub plan.

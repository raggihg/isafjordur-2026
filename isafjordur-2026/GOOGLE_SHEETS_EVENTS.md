# Google Sheet fyrir viðburði

Búðu til Google Sheet með dálkunum:

date | time | party | title | location | url | source

Dæmi:

2026-05-09 | 20:00 | B | Beint í xBílinn – Pub Quiz | Bubbly Bistro & Wine | https://... | Framsókn

Síðan:
1. File → Share → Publish to web
2. Veldu CSV
3. Settu CSV slóðina í Netlify sem environment variable:

VITE_EVENTS_CSV_URL

4. Redeploy.

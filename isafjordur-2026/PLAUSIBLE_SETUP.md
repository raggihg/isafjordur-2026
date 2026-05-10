# Plausible Analytics — einföld leið

Best er að setja Plausible scriptið handvirkt í `index.html`.

Finndu þetta í `index.html`:

```html
<!-- PLAUSIBLE MANUAL SETUP:
```

og settu scriptið sem Plausible gefur þér inn í `<head>`.

Dæmi:

```html
<script defer data-domain="isafjordur2026.netlify.app" src="https://plausible.io/js/script.js"></script>
```

Mikilvægt:
- `data-domain` á að vera domainið án `https://`
- það verður að passa við domainið sem er skráð í Plausible
- eftir breytingu þarf að deploya aftur
- prófaðu helst í incognito eða án adblocker

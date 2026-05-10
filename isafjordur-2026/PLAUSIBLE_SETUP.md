# Plausible Analytics

Til að Plausible virki þarf að setja environment variable í Netlify:

```txt
VITE_PLAUSIBLE_DOMAIN
```

Value á að vera nákvæmlega domainið sem er skráð í Plausible, án `https://`.

Dæmi:

```txt
isafjordur2026.netlify.app
```

Eftir breytinguna þarf að redeploya síðuna í Netlify.

Ef Plausible finnur ekki scriptið:
1. Opna live síðuna.
2. View source.
3. Leita að `plausible.io/js/script.js`.
4. Prófa í incognito eða án adblocker.

# Refactor notes

App.jsx er nú bara routing/samsetning.

## Helstu möppur

- `src/components/` — UI-hlutar síðunnar
- `src/data/` — gögn, spurningar, viðburðir og heimildir

## Mikilvægar skrár

- `src/components/EventsPanel.jsx` — viðburðadagatal
- `src/data/events.js` — fallback viðburðir
- `src/data/eventsSheet.js` — sækir Google Sheet ef `VITE_EVENTS_CSV_URL` er sett
- `src/components/QuizPanel.jsx` — könnun
- `src/data/quizQuestions.js` — spurningar í könnun
- `src/components/Sources.jsx` — heimildir og credit-texti

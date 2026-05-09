import { events as fallbackEvents } from './events.js'

const EVENTS_CSV_URL = import.meta.env.VITE_EVENTS_CSV_URL || ''

function parseCsvLine(line) {
  const result = []
  let value = ''
  let insideQuotes = false

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i]
    const next = line[i + 1]

    if (char === '"' && next === '"') {
      value += '"'
      i += 1
    } else if (char === '"') {
      insideQuotes = !insideQuotes
    } else if (char === ',' && !insideQuotes) {
      result.push(value.trim())
      value = ''
    } else {
      value += char
    }
  }

  result.push(value.trim())
  return result
}

function parseCsv(csvText) {
  const rows = csvText
    .replace(/\r/g, '')
    .split('\n')
    .filter(Boolean)
    .map(parseCsvLine)

  const headers = rows.shift()?.map((header) => header.trim()) || []

  return rows
    .map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] || ''])))
    .filter((event) => event.date && event.title)
    .map((event) => ({
      date: event.date,
      time: event.time || '',
      party: event.party || '',
      title: event.title,
      location: event.location || '',
      url: event.url || '',
      source: event.source || 'Google Sheet'
    }))
}

export async function loadEvents() {
  if (!EVENTS_CSV_URL) return fallbackEvents

  try {
    const response = await fetch(EVENTS_CSV_URL, { cache: 'no-store' })
    if (!response.ok) throw new Error(`Could not load events: ${response.status}`)
    const sheetEvents = parseCsv(await response.text())
    return sheetEvents.length ? sheetEvents : fallbackEvents
  } catch (error) {
    console.warn('Using fallback events because Google Sheet could not be loaded.', error)
    return fallbackEvents
  }
}

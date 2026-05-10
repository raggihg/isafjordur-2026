import React from 'react'
import { parties } from '../data/parties.js'
import { events } from '../data/events.js'
import LogoMark from './LogoMark.jsx'
import { trackEvent } from '../utils/analytics.js'

const dayNames = {
  '2026-05-10': 'Sunnudagur 10. maí',
  '2026-05-12': 'Þriðjudagur 12. maí',
  '2026-05-16': 'Laugardagur 16. maí'
}

function groupEventsByDate(items) {
  return items.reduce((groups, event) => {
    if (!groups[event.date]) groups[event.date] = []
    groups[event.date].push(event)
    return groups
  }, {})
}

export default function EventsPanel() {
  const visibleEvents = [...events]
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))

  const groupedEvents = groupEventsByDate(visibleEvents)

  return (
    <section id="vidburdir" className="panel eventsPanel groupedEventsPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Viðburðir</p>
        </div>
      </div>

      <div className="eventDayList">
        {Object.entries(groupedEvents).map(([date, dayEvents]) => (
          <section className="eventDayGroup" key={date}>
            <h3>{dayNames[date] || date}</h3>

            <div className="eventCompactList">
              {dayEvents.map((event) => {
                const party = parties.find((item) => item.letter === event.party)

                return (
                  <a
                    className="eventCompactItem"
                    href={event.url}
                    target="_blank"
                    rel="noreferrer"
                    key={`${event.date}-${event.time}-${event.title}`}
                    onClick={() => {
                      if (typeof trackEvent === 'function') {
                        trackEvent('Event Link Click', { title: event.title, party: event.party })
                      }
                    }}
                  >
                    <span className="eventCompactTime">{event.time || '—'}</span>

                    <span className="eventCompactLogo">
                      {party ? <LogoMark party={party} /> : '✓'}
                    </span>

                    <span className="eventCompactText">
                      <strong>{event.title}</strong>
                      <small>{event.location}</small>
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

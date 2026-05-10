import React from 'react'
import { parties } from '../data/parties.js'
import { events } from '../data/events.js'
import LogoMark from './LogoMark.jsx'

export default function EventsPanel() {
  const visibleEvents = [...events]
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))

  return (
    <section id="vidburdir" className="panel eventsPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Viðburðir</p>
        </div>
      </div>

      <div className="eventTimeline">
        {visibleEvents.map((event) => {
          const party = parties.find((item) => item.letter === event.party)

          return (
            <a className="eventItem" href={event.url} target="_blank" rel="noreferrer" key={`${event.date}-${event.time}-${event.title}`}>
              <div className="eventDate">
                <strong>{event.date.split('-').slice(1).reverse().join('.')}</strong>
                <span>{event.time}</span>
              </div>

              <div className="eventLogo">
                {party ? <LogoMark party={party} /> : <span>✓</span>}
              </div>

              <div>
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <small className="eventSource">{event.source}</small>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

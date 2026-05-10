import React, { useEffect, useState } from 'react'
import { parties } from '../data/parties.js'
import { loadEvents } from '../data/eventsSheet.js'
import LogoMark from './LogoMark.jsx'

export default function EventsPanel() {
  const [loadedEvents, setLoadedEvents] = useState([])

  useEffect(() => {
    let mounted = true

    loadEvents().then((items) => {
      if (mounted) setLoadedEvents(items)
    })

    return () => {
      mounted = false
    }
  }, [])

  const visibleEvents = [...loadedEvents]
    .filter((event) => event.date >= '2026-04-13')
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
                <small>{event.source}</small>
              </div>
            </a>
          )
        })}

        {!visibleEvents.length && (
          <div className="eventEmpty">
            Engir viðburðir fundust. Athugaðu Google Sheet tenginguna eða bættu við viðburði.
          </div>
        )}
      </div>
    </section>
  )
}

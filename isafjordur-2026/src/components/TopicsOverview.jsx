import React from 'react'
import { BarChart3 } from 'lucide-react'
import { topics } from '../data/parties.js'

export default function TopicsOverview({ setActiveTopic }) {
  return (
    <section id="malefni" className="panel topicsOverview">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><BarChart3 size={15} /> Málefnasíður</p>
          
          <p>Veldu málefni og sjáðu allar áherslur allra flokka á einni síðu.</p>
        </div>
      </div>

      <div className="topicOverviewGrid">
        {topics.map((topic) => (
          <button className="topicOverviewCard" key={topic.id} onClick={() => setActiveTopic(topic.id)}>
            <strong>{topic.name}</strong>
            <small>Skoða áherslur allra flokka →</small>
          </button>
        ))}
      </div>
    </section>
  )
}

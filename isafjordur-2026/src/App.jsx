import React, { useState } from 'react'
import { parties, topics } from './data/parties.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PartyCards from './components/PartyCards.jsx'
import PartyDetail from './components/PartyDetail.jsx'
import TopicDetail from './components/TopicDetail.jsx'
import TopicsOverview from './components/TopicsOverview.jsx'
import EventsPanel from './components/EventsPanel.jsx'
import ElectionInfoPanel from './components/ElectionInfoPanel.jsx'
import CampaignInfoPanel from './components/CampaignInfoPanel.jsx'
import QuizPanel from './components/QuizPanel.jsx'
import Sources from './components/Sources.jsx'

export default function App() {
  const [activePartyId, setActiveParty] = useState(null)
  const [activeTopicId, setActiveTopic] = useState(null)
  const activeParty = parties.find((party) => party.id === activePartyId)
  const activeTopic = topics.find((topic) => topic.id === activeTopicId)

  return (
    <div className="site">
      <Header setActiveParty={setActiveParty} setActiveTopic={setActiveTopic} />

      {activeTopic ? (
        <main className="pageWrap">
          <TopicDetail topic={activeTopic} setActiveTopic={setActiveTopic} />
        </main>
      ) : activeParty ? (
        <main className="pageWrap">
          <PartyDetail party={activeParty} setActiveParty={setActiveParty} />
        </main>
      ) : (
        <main>
          <Hero />
          <PartyCards setActiveParty={setActiveParty} />
          <div className="pageWrap stackedSections">
            <TopicsOverview setActiveTopic={setActiveTopic} />
            <EventsPanel />
            <ElectionInfoPanel />
            <CampaignInfoPanel />
            <QuizPanel />
            <Sources />
          </div>
        </main>
      )}
    </div>
  )
}

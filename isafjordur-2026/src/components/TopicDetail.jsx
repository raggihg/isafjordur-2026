import { Home, Anchor, BookOpen, HeartHandshake, Leaf, Route, Dumbbell, BriefcaseBusiness, Music4, Map } from 'lucide-react'
import React from 'react'
import { parties, topics } from '../data/parties.js'
import LogoMark from './LogoMark.jsx'

const topicIcons = {
  husnaedi: Home,
  hafnir: Anchor,
  menntun: BookOpen,
  velferd: HeartHandshake,
  umhverfi: Leaf,
  samgongur: Route,
  ithrottir: Dumbbell,
  atvinnulif: BriefcaseBusiness,
  menning: Music4,
  skipulag: Map
}


function TopicSwitchButton({ topic, direction, onClick }) {
  return (
    <button className={`topicSwitch ${direction}`} onClick={onClick}>
      <span className="switchArrow">{direction === 'prev' ? '←' : '→'}</span>
      <span className="switchText">
        <small>{direction === 'prev' ? 'Fyrra málefni' : 'Næsta málefni'}</small>
        <strong>{topic.name}</strong>
      </span>
    </button>
  )
}

export default function TopicDetail({ topic, setActiveTopic }) {
  const currentIndex = topics.findIndex((item) => item.id === topic.id)
  const previousTopic = topics[(currentIndex - 1 + topics.length) % topics.length]
  const nextTopic = topics[(currentIndex + 1) % topics.length]

  return (
    <section className="topicDetail">
      <div className="topicDetailNav">
        <TopicSwitchButton
          topic={previousTopic}
          direction="prev"
          onClick={() => setActiveTopic(previousTopic.id)}
        />

        <button className="backButton" onClick={() => setActiveTopic(null)}>
          Öll málefni
        </button>

        <TopicSwitchButton
          topic={nextTopic}
          direction="next"
          onClick={() => setActiveTopic(nextTopic.id)}
        />
      </div>

      <article className="detailHero topicHero">
        <div className="topicIconLarge">•</div>
        <div>
          <p className="eyebrow">Málefnasíða</p>
          <h1>{topic.name}</h1>
          <p>Stefnuatriði og áherslur framboðanna.</p>
        </div>
      </article>

      <div className="topicPartyGrid">
        {parties.map((party) => (
          <article className="panel topicPartyCard" key={party.id}>
            <div className="topicPartyHeader">
              <LogoMark party={party} />
              <div>
                <span>{party.list}</span>
                <h2>{party.name}</h2>
              </div>
            </div>

            <p>{party.topics[topic.id]}</p>

            <ul className="topicActionList">
              {(party.policyByTopic?.[topic.id] || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

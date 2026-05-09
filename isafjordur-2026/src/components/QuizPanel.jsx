import React, { useMemo, useState } from 'react'
import { HelpCircle } from 'lucide-react'
import { parties } from '../data/parties.js'
import { quizQuestions } from '../data/quizQuestions.js'
import { stableShuffleOptions } from '../data/quizHelpers.js'
import LogoMark from './LogoMark.jsx'

export default function QuizPanel() {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const scores = useMemo(() => {
    const result = { B: 0, C: 0, D: 0, M: 0, S: 0 }
    Object.values(answers).forEach((option) => {
      option.parties.forEach((letter) => {
        result[letter] += 1
      })
    })
    return Object.entries(result)
      .map(([letter, score]) => ({
        letter,
        score,
        party: parties.find((item) => item.letter === letter)
      }))
      .sort((a, b) => b.score - a.score)
  }, [answers])

  const answeredCount = Object.keys(answers).length
  const topScore = scores[0]?.score || 0

  return (
    <section id="konnun" className="panel quizPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><HelpCircle size={15} /> Könnun</p>
          <h2>Hvaða áherslur passa þér?</h2>
          <p>Svaraðu spurningunum og sjáðu hvaða framboð í Ísafjarðarbæ er næst þínum áherslum.</p>
        </div>
      </div>

      <div className="quizProgress">
        <div className="quizProgressBar">
          <i style={{ width: `${(answeredCount / quizQuestions.length) * 100}%` }} />
        </div>
        <span>{answeredCount} af {quizQuestions.length} spurningum</span>
      </div>

      <div className="quizGrid">
        <div className="quizQuestions">
          {quizQuestions.map((question, index) => (
            <article className="quizQuestion" key={question.text}>
              <h3>{index + 1}. {question.text}</h3>
              <div className="quizOptions">
                {stableShuffleOptions(question.options, index).map((option) => (
                  <button
                    key={option.label}
                    className={answers[index]?.label === option.label ? 'selected' : ''}
                    onClick={() => { setAnswers({ ...answers, [index]: option }); setShowResults(false) }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="quizResult">
          <h3>Niðurstaða</h3>
          <p>{answeredCount} af {quizQuestions.length} spurningum svarað.</p>

          {!showResults ? (
            <div className="quizLocked">
              <strong>Engin niðurstaða enn</strong>
              <span>Svaraðu spurningunum og smelltu svo á takkann til að sjá hvaða framboð passar best við áherslurnar þínar.</span>
              <button
                className="quizSubmit"
                disabled={answeredCount === 0}
                onClick={() => setShowResults(true)}
              >
                Sjá niðurstöðu
              </button>
            </div>
          ) : (
            <>
              <div className="resultBars">
                {scores.map(({ letter, score, party }) => (
                  <div className="resultRow" key={letter}>
                    <LogoMark party={party} />
                    <span>{party.shortName}</span>
                    <div className="bar"><i style={{ width: topScore ? `${(score / topScore) * 100}%` : '0%' }} /></div>
                    <strong>{score}</strong>
                  </div>
                ))}
              </div>
              <p className="quizDisclaimer">Niðurstaðan er vísbending byggð á svörum þínum, ekki formleg kosningaráðgjöf.</p>
            </>
          )}

          <button className="quizReset" onClick={() => { setAnswers({}); setShowResults(false) }}>
            Hreinsa svör
          </button>
        </aside>
      </div>
    </section>
  )
}

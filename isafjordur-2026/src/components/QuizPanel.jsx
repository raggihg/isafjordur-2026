import React, { useMemo, useState } from 'react'
import { HelpCircle } from 'lucide-react'
import { parties } from '../data/parties.js'
import { quizQuestions } from '../data/quizQuestions.js'
import { stableShuffleOptions } from '../data/quizHelpers.js'
import LogoMark from './LogoMark.jsx'

export default function QuizPanel() {
  const [answers, setAnswers] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const question = quizQuestions[currentQuestion]
  const answeredCount = Object.keys(answers).length
  const isLastQuestion = currentQuestion === quizQuestions.length - 1

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

  const topScore = scores[0]?.score || 0
  const topParty = scores[0]?.party
  const progress = ((currentQuestion + (answers[currentQuestion] ? 1 : 0)) / quizQuestions.length) * 100

  const answerQuestion = (option) => {
    const nextAnswers = { ...answers, [currentQuestion]: option }
    setAnswers(nextAnswers)
    setShowResults(false)

    if (isLastQuestion) {
      setShowResults(true)
      window.setTimeout(() => {
        document.querySelector('#konnun')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return
    }

    window.setTimeout(() => {
      setCurrentQuestion((value) => Math.min(value + 1, quizQuestions.length - 1))
    }, 160)
  }

  const goBack = () => {
    setShowResults(false)
    setCurrentQuestion((value) => Math.max(value - 1, 0))
  }

  const goNext = () => {
    if (!answers[currentQuestion]) return
    if (isLastQuestion) {
      setShowResults(true)
    } else {
      setCurrentQuestion((value) => Math.min(value + 1, quizQuestions.length - 1))
    }
  }

  const resetQuiz = () => {
    setAnswers({})
    setCurrentQuestion(0)
    setShowResults(false)
  }

  return (
    <section id="konnun" className="panel quizPanel quizFocusPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><HelpCircle size={15} /> Könnun</p>
          <h2>Hvaða framboð ert þú næst?</h2>
          <p>Svaraðu einni spurningu í einu og fáðu niðurstöðu í lokin.</p>
        </div>
      </div>

      <div className="quizProgress">
        <div className="quizProgressBar">
          <i style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <span>{Math.min(answeredCount, quizQuestions.length)} af {quizQuestions.length}</span>
      </div>

      {!showResults ? (
        <div className="singleQuizLayout">
          <article className="singleQuestionCard">
            <div className="questionMeta">
              <span>Spurning {currentQuestion + 1}</span>
              <strong>{quizQuestions.length}</strong>
            </div>

            <h3>{question.text}</h3>

            <div className="quizOptions singleQuizOptions">
              {stableShuffleOptions(question.options, currentQuestion).map((option) => (
                <button
                  key={option.label}
                  className={answers[currentQuestion]?.label === option.label ? 'selected' : ''}
                  onClick={() => answerQuestion(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="quizNavigation">
              <button onClick={goBack} disabled={currentQuestion === 0}>
                Til baka
              </button>

              <button onClick={goNext} disabled={!answers[currentQuestion]}>
                {isLastQuestion ? 'Sjá mína niðurstöðu' : 'Næsta spurning'}
              </button>
            </div>
          </article>
        </div>
      ) : (
        <div className="quizFinalResult">
          <div className="winnerCard">
            {topParty && <LogoMark party={topParty} />}
            <div>
              <span>Þú ert næst</span>
              <h3>{topParty?.name}</h3>
              <p>Niðurstaðan byggir á svörum þínum í könnuninni.</p>
            </div>
          </div>

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

          <div className="quizResultActions">
            <button onClick={() => { setShowResults(false); setCurrentQuestion(quizQuestions.length - 1) }}>
              Breyta síðasta svari
            </button>
            <button onClick={resetQuiz}>
              Taka könnun aftur
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

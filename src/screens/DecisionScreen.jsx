import { useState } from 'react'
import { scenario, options, reviewAreas } from '../data/scenario.js'

function DecisionScreen({ answers, onAnswer, onBack, onSubmit }) {
  const [showError, setShowError] = useState(false)
  const unanswered = reviewAreas.filter((area) => !answers[area.id])

  function handleSubmit(event) {
    event.preventDefault()
    if (unanswered.length > 0) {
      setShowError(true)
      document.getElementById(`${unanswered[0].id}-${options[0].value}`)?.focus()
      return
    }
    onSubmit()
  }

  return (
    <section className="card" aria-labelledby="screen-title">
      <h2 id="screen-title" tabIndex={-1}>Make your decisions</h2>
      <p className="intro">{scenario.decisionInstruction}</p>

      <form onSubmit={handleSubmit} noValidate>
        {reviewAreas.map((area) => {
          const invalid = showError && !answers[area.id]
          return (
            <fieldset key={area.id} className={invalid ? 'is-invalid' : undefined}>
              <legend>{area.title}</legend>
              <p className="detail">{area.detail}</p>
              {invalid && <p className="field-error">Not answered yet</p>}
              {options.map((option) => {
                const id = `${area.id}-${option.value}`
                return (
                  <label className="option" htmlFor={id} key={option.value}>
                    <input
                      type="radio"
                      id={id}
                      name={area.id}
                      value={option.value}
                      checked={answers[area.id] === option.value}
                      onChange={() => onAnswer(area.id, option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                )
              })}
            </fieldset>
          )
        })}

        <p className="error" role="alert">
          {showError && unanswered.length > 0
            ? `Please answer all review areas. ${unanswered.length} remaining.`
            : ''}
        </p>

        <div className="actions">
          <button type="button" className="secondary" onClick={onBack}>Back</button>
          <button type="submit">Review feedback</button>
        </div>
      </form>
    </section>
  )
}

export default DecisionScreen

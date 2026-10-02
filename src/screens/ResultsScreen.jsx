import { scenario, reviewAreas, optionLabel } from '../data/scenario.js'

function ResultsScreen({ answers, onBack, onRestart }) {
  const matched = reviewAreas.filter((area) => answers[area.id] === area.suggested).length

  return (
    <section className="card" aria-labelledby="screen-title">
      <h2 id="screen-title" tabIndex={-1}>Review your feedback</h2>
      <p className="intro">{scenario.feedbackInstruction}</p>

      <div className="summary-panel">
        <h3>Scenario complete</h3>
        <p>
          You matched {matched} of {reviewAreas.length} suggested responses.
        </p>
      </div>

      <ul className="feedback-cards">
        {reviewAreas.map((area) => {
          const isAligned = answers[area.id] === area.suggested
          return (
            <li key={area.id} className="feedback-card">
              <h3>{area.title}</h3>
              <dl>
                <div>
                  <dt>Your response</dt>
                  <dd>{optionLabel(answers[area.id])}</dd>
                </div>
                <div>
                  <dt>Suggested response</dt>
                  <dd>{optionLabel(area.suggested)}</dd>
                </div>
              </dl>
              <p className="alignment">
                {isAligned ? 'Aligned with suggested response' : 'Different from suggested response'}
              </p>
              <p className="reasoning">{area.feedback}</p>
            </li>
          )
        })}
      </ul>

      <p className="closing-note">{scenario.closingNote}</p>

      <div className="actions">
        <button type="button" className="secondary" onClick={onBack}>Change decisions</button>
        <button type="button" onClick={onRestart}>Start again</button>
      </div>
    </section>
  )
}

export default ResultsScreen

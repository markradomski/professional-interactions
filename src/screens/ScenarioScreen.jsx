import { scenario, reviewAreas } from '../data/scenario.js'

function ScenarioScreen({ onBack, onNext }) {
  return (
    <section className="card" aria-labelledby="screen-title">
      <h2 id="screen-title" tabIndex={-1}>Review the scenario</h2>
      <p className="intro">{scenario.scenarioInstruction}</p>

      <div className="scenario-panel">
        <p>{scenario.context}</p>
      </div>

      <h3>What should you consider?</h3>
      <ul className="area-cards">
        {reviewAreas.map((area) => (
          <li key={area.id} className="area-card">
            <h4>{area.title}</h4>
            <p>{area.detail}</p>
          </li>
        ))}
      </ul>

      <div className="actions">
        <button type="button" className="secondary" onClick={onBack}>Back</button>
        <button type="button" onClick={onNext}>Continue to decisions</button>
      </div>
    </section>
  )
}

export default ScenarioScreen

import { scenario } from '../data/scenario.js'

function IntroScreen({ onNext }) {
  return (
    <section className="card" aria-label="Introduction">
      <p className="intro">{scenario.intro}</p>

      <div className="objective">
        <h2>Learning objective</h2>
        <p>{scenario.objective}</p>
      </div>

      <p className="meta">Estimated time: {scenario.estimatedTime}</p>

      <div className="actions">
        <button type="button" onClick={onNext}>Begin scenario</button>
      </div>
    </section>
  )
}

export default IntroScreen

import { steps } from '../data/scenario.js'

function Progress({ current }) {
  const currentIndex = steps.findIndex((step) => step.id === current)

  return (
    <nav className="progress" aria-label="Progress">
      <ol>
        {steps.map((step, index) => (
          <li
            key={step.id}
            className={index < currentIndex ? 'is-complete' : index === currentIndex ? 'is-current' : undefined}
            aria-current={index === currentIndex ? 'step' : undefined}
          >
            {step.label}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Progress

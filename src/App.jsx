import { useEffect, useRef, useState } from 'react'
import { scenario } from './data/scenario.js'
import Progress from './components/Progress.jsx'
import IntroScreen from './screens/IntroScreen.jsx'
import ScenarioScreen from './screens/ScenarioScreen.jsx'
import DecisionScreen from './screens/DecisionScreen.jsx'
import ResultsScreen from './screens/ResultsScreen.jsx'

function App() {
  const [screen, setScreen] = useState('intro')
  const [answers, setAnswers] = useState({})
  const previousScreen = useRef(screen)

  // Move focus to the new screen's heading so keyboard and screen reader users land on the new content.
  useEffect(() => {
    if (previousScreen.current === screen) return
    previousScreen.current = screen
    const heading = document.getElementById('screen-title') ?? document.getElementById('page-title')
    heading?.focus()
  }, [screen])

  function handleAnswer(areaId, value) {
    setAnswers((current) => ({ ...current, [areaId]: value }))
  }

  function handleRestart() {
    setAnswers({})
    setScreen('intro')
  }

  return (
    <main className="app-shell">
      <Progress current={screen} />

      <header className={screen === 'intro' ? 'app-header' : 'app-header visually-hidden'}>
        <h1 id="page-title" tabIndex={-1}>{scenario.title}</h1>
        <p className="subtitle">{scenario.subtitle}</p>
      </header>

      {screen === 'intro' && <IntroScreen onNext={() => setScreen('scenario')} />}
      {screen === 'scenario' && (
        <ScenarioScreen onBack={() => setScreen('intro')} onNext={() => setScreen('decision')} />
      )}
      {screen === 'decision' && (
        <DecisionScreen
          answers={answers}
          onAnswer={handleAnswer}
          onBack={() => setScreen('scenario')}
          onSubmit={() => setScreen('results')}
        />
      )}
      {screen === 'results' && (
        <ResultsScreen answers={answers} onBack={() => setScreen('decision')} onRestart={handleRestart} />
      )}

      <footer className="disclaimer">
        <p>{scenario.disclaimer}</p>
      </footer>
    </main>
  )
}

export default App

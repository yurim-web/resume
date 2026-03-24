import './index.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Career from './components/Career'
import Achievements from './components/Achievements'

function App() {
  return (
    <div className="resume-container">
      <Header />
      <AboutMe />
      <Skills />

      {/* Career 섹션 타이틀 */}
      <div style={{ marginBottom: '1rem' }}>
        <p className="section-title" style={{ marginBottom: 0 }}>Work Experience</p>
      </div>
      <Career />

      <Achievements />

      <footer className="no-print" style={{
        textAlign: 'center',
        padding: '2rem 0 1rem',
        fontSize: '0.75rem',
        color: 'var(--text-light)',
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: '0.05em',
      }}>
        © 2026 Lee Yurim · <a href="https://yurim-web.github.io" target="_blank" rel="noreferrer"
          style={{ color: 'var(--accent)', textDecoration: 'none' }}>Portfolio</a>
      </footer>
    </div>
  )
}

export default App

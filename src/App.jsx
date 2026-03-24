/* 루트 컴포넌트 - 섹션 순서: Header → AboutMe → Skills → Career → Achievements → Footer */

import styles from './App.module.css'
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

      {/* Work Experience 섹션 타이틀 + Career 목록 */}
      <div className={styles.sectionTitleWrap}>
        <p className="section-title">Work Experience</p>
      </div>
      <Career />

      <Achievements />

      {/* 하단 푸터 - 인쇄 시 숨김 */}
      <footer className={`no-print ${styles.footer}`}>
        © 2026 Lee Yurim ·{' '}
        <a
          href="https://yurim-web.github.io"
          target="_blank"
          rel="noreferrer"
          className={styles.footerLink}
        >
          Portfolio
        </a>
      </footer>
    </div>
  )
}

export default App

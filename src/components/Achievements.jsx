/* Achievements 섹션 - 핵심 성과 + 학력/자격증
   achievements: 핵심 성과 목록
   education: 학력·교육 이력
   licenses: 자격증 목록 */

import styles from './Achievements.module.css'

const achievements = [
  '상용 SaaS 서비스(ReportingX.) 프론트엔드를 단독으로 구현하여 서비스 런칭에 기여',
  '카페24 쇼핑몰 2개 제작 → 퍼블리싱·배포 전 과정 수행',
  '디자인 → 퍼블리싱 → 프론트엔드 개발까지 확장된 풀스택 UI 역량',
  'Git 협업 및 서버 배포 경험으로 운영·배포 프로세스 이해',
]

const education = [
  { period: '2024.10 ~ 2024.12', content: '웹(퍼블리셔) 프론트엔드 (JS, React) 양성과정 350시간 수료' },
  { period: '2019.03 ~ 2022.08', content: '청운대학교 멀티미디어학과 졸업 (인천캠)' },
]

const licenses = [
  { date: '2023.09', content: '컴퓨터그래픽스운용기능사' },
  { date: '2020.09', content: 'GTQ 포토샵 1급' },
]

export default function Achievements() {
  return (
    <>
      {/* 핵심 성과 */}
      <section className={`card ${styles.section}`}>
        <p className="section-title">핵심 성과</p>
        <ul className={styles.achieveList}>
          {achievements.map((a, i) => (
            <li key={i} className={styles.achieveItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 학력 & 자격증 */}
      <section className={`card ${styles.section}`}>
        <p className="section-title">Education & License</p>
        <div className={styles.eduGrid}>
          <div>
            <p className={styles.subTitle}>학력 · 교육</p>
            <div className={styles.timelineList}>
              {education.map((e, i) => (
                <div key={i} className={styles.timelineItem}>
                  <span className={styles.timelinePeriod}>{e.period}</span>
                  <span className={styles.timelineContent}>{e.content}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.subTitle}>자격증</p>
            <div className={styles.timelineList}>
              {licenses.map((l, i) => (
                <div key={i} className={styles.timelineItem}>
                  <span className={styles.timelinePeriod}>{l.date}</span>
                  <span className={styles.timelineContent}>{l.content}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

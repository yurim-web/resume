/* Skills 섹션 - 스킬 그룹별 태그 렌더링
   skillGroups 배열에서 그룹 추가/수정 가능
   color: 'blue' | 'purple' | 'green' → index.css 의 .tag 색상 클래스에 대응 */

import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'Publishing & Frontend',
    color: 'blue',
    skills: [
      'HTML5 / CSS3', 'Semantic Markup', 'Web Accessibility',
      'CSS Grid / Flexbox', 'Responsive · Adaptive Layout',
      'JavaScript', 'React', 'TypeScript', 'Next.js',
      'GSAP (ScrollTrigger · Timeline)', '카페24 커스터마이징',
    ],
  },
  {
    label: 'UI/UX & Design',
    color: 'purple',
    skills: ['UI/UX Design', 'Figma', 'Photoshop', 'Illustrator'],
  },
  {
    label: 'Tools',
    color: 'green',
    skills: ['Git / GitHub / SourceTree', 'VSCode / Cursor', 'Notion / Confluence / Box'],
  },
]

/* color 값 → CSS 클래스명 매핑 */
const colorMap = { blue: '', purple: 'tag-purple', green: 'tag-green' }

export default function Skills() {
  return (
    <section className={`card ${styles.section}`}>
      <p className="section-title">Skills</p>
      <div className={styles.groups}>
        {skillGroups.map(({ label, color, skills }) => (
          <div key={label}>
            <p className={styles.groupLabel}>{label}</p>
            <div className={styles.tags}>
              {skills.map((s) => (
                <span key={s} className={`tag ${colorMap[color]}`}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

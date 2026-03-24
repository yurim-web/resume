/* About Me 섹션 - 자기소개 3줄 */

import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <section className={`card ${styles.section}`}>
      <p className="section-title">About Me</p>
      <div className={styles.content}>
        <p>
          디자인부터 퍼블리싱, 프론트엔드 개발까지 직접 경험한 실무형 웹 퍼블리셔 &amp; 프론트엔드 개발자입니다.
        </p>
        <p>
          첫 번째 회사에서 웹/앱 UI 디자인을 단독 수행하며 시각적 감각과 퍼블리싱 기반을 다졌고,
          현재 회사에서는 상용 서비스의 프론트엔드 개발 및 유지보수를 전담하고 있습니다.
        </p>
        <p>
          디자인을 이해하는 만큼, 시안의 의도를 정확히 구현하고 디자이너와 개발자 사이의 소통 비용을 줄이는 역할을 할 수 있습니다.
        </p>
      </div>
    </section>
  )
}

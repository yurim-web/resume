import styles from './Career.module.css'

const careers = [
  {
    company: '(주)청명종합광고기획',
    role: '프론트엔드 개발자',
    period: '2025.04 ~ 재직 중',
    summary: '상용 웹서비스 프론트엔드 개발 · 유지보수 · 서버 배포 참여',
    emoji: '💻',
    projects: [
      {
        name: 'ReportingX.',
        desc: '마케터용 데이터 리포팅 SaaS',
        contribution: '프론트엔드 100%',
        links: [
          { label: '랜딩', url: 'https://markx.dev/intro' },
          { label: '가이드', url: 'https://markx.dev/guide_main?content=open-application' },
          { label: '서비스', url: 'https://www.mxrx.dev/' },
        ],
        tasks: [
          'HTML/CSS/JavaScript 기반 랜딩페이지 및 가이드 페이지 전체 구현',
          '반응형 레이아웃 및 스크롤/모션 인터랙션 개발',
          '페이지 구조 설계 및 UI/UX 개선',
          'Git 기반 협업(GitHub Flow) 및 서버 배포 참여',
          '지속적인 서비스 유지보수 및 코드 리팩토링',
        ],
        achievements: [
          '랜딩·가이드 페이지를 단독 구현하여 서비스 런칭에 기여',
          '반응형 대응으로 모바일~데스크톱 전 디바이스 최적화',
          '코드 구조화 및 리팩토링으로 유지보수 효율 향상',
        ],
      },
      {
        name: 'Herzion Shop',
        desc: '광고주 자사몰',
        contribution: '디자인 + 프론트엔드 100%',
        links: [{ label: '사이트', url: 'https://herzionshop.cafe24.com/' }],
        tasks: [
          '카페24 기반 프론트 전체 커스터마이징 (템플릿 미사용, 자체 제작)',
          '메인/상세 페이지 HTML/CSS/JS 개발',
          '브랜드 아이덴티티에 맞는 UI 스타일 설계 및 제작',
          '반응형 화면 구성 및 EmailJS 연동 문의 폼 구현',
        ],
      },
      {
        name: 'Swedish Nutra',
        desc: '광고주 자사몰',
        period: '2025.11 ~ 2025.12  |  수정보완 2026.02',
        contribution: '프론트엔드 100%',
        links: [{ label: '사이트', url: 'https://swedishnutra.kr/' }],
        tasks: [
          '카페24 스킨 전체 커스터마이징',
          '메인/서브/상세 페이지 UI 디자인 및 퍼블리싱',
          'CSS 기반 인터랙션 구현 및 사용자 중심 레이아웃 설계',
        ],
      },
    ],
  },
  {
    company: '(주)쇼엠',
    role: '웹디자이너',
    period: '2024.01 ~ 2024.08',
    summary: '웹/앱 UI 디자인 전담 · 간단한 퍼블리싱 업무 병행',
    emoji: '🎨',
    projects: [
      {
        name: '에드모아 기업 웹사이트',
        contribution: '웹디자인 100%',
        tasks: [
          '메인/서브 페이지 UI 전체 디자인',
          '반응형 웹 레이아웃 설계 및 HTML/CSS 퍼블리싱',
        ],
      },
      {
        name: '뷰티정보 웹사이트',
        contribution: '웹디자인 100%',
        tasks: [
          '콘텐츠 중심 웹사이트 UI/UX 설계',
          '반응형 UI 구조 및 비주얼 스타일 설계',
        ],
      },
      {
        name: '퍼스널컬러 테스트 앱 · 전기요금 계산기 앱',
        contribution: '앱 디자인 100%',
        tasks: [
          '모바일 앱 UI 전체 설계 및 디자인',
          '앱 전체 UX 플로우 설계 및 컬러/그래프 UI 컴포넌트 제작',
        ],
      },
    ],
  },
  {
    company: '(주)오라코퍼레이션',
    role: '콘텐츠 디자이너',
    period: '2022.03 ~ 2023.06',
    summary: 'SNS 콘텐츠 기획 · 브랜드 디자인 제작',
    emoji: '🧩',
    projects: [
      {
        name: 'SNS 콘텐츠 기획 및 디자인',
        tasks: [
          '인스타그램/블로그 채널 콘텐츠 기획 및 원고 작성',
          '브랜드 톤앤매너 기반 썸네일 · 카드뉴스 · 광고 이미지 제작',
          '릴스/쇼츠 숏폼 영상 편집',
        ],
      },
    ],
  },
]

export default function Career() {
  return (
    <section className={styles.section}>
      <div className={styles.careerList}>
        {careers.map((career, ci) => (
          <div key={ci} className={`card ${styles.careerCard}`}>
            {/* Company Header */}
            <div className={styles.companyHeader}>
              <div className={styles.companyLeft}>
                <span className={styles.emoji}>{career.emoji}</span>
                <div>
                  <p className={styles.companyName}>{career.company}</p>
                  <p className={styles.companyRole}>{career.role}</p>
                </div>
              </div>
              <span className={`tag tag-navy ${styles.period}`}>{career.period}</span>
            </div>
            <p className={styles.summary}>{career.summary}</p>

            {/* Projects */}
            <div className={styles.projects}>
              {career.projects.map((proj, pi) => (
                <div key={pi} className={styles.project}>
                  <div className={styles.projectHeader}>
                    <div className={styles.projectTitleRow}>
                      <span className={styles.projectName}>{proj.name}</span>
                      {proj.desc && (
                        <span className={styles.projectDesc}>{proj.desc}</span>
                      )}
                      {proj.period && (
                        <span className={styles.projectPeriod}>{proj.period}</span>
                      )}
                    </div>
                    <div className={styles.projectMeta}>
                      {proj.contribution && (
                        <span className="tag tag-purple">{proj.contribution}</span>
                      )}
                      {proj.links?.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.link}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>

                  <ul className={styles.taskList}>
                    {proj.tasks.map((task, ti) => (
                      <li key={ti}>{task}</li>
                    ))}
                  </ul>

                  {proj.achievements && (
                    <div className={styles.achievements}>
                      <p className={styles.achieveLabel}>주요 성과</p>
                      <ul className={`${styles.taskList} ${styles.achieveList}`}>
                        {proj.achievements.map((a, ai) => (
                          <li key={ai}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

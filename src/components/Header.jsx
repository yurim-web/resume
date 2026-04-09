/* Header 섹션 - 이름, 직함, 연락처 정보
   contacts 배열에서 연락처 항목 수정 가능 */

import styles from './Header.module.css'

const contacts = [
  { label: 'Email', value: 'lyl5152@naver.com', href: 'mailto:lyl5152@naver.com' },
  { label: 'Phone', value: '010-4054-5152', href: 'tel:010-4054-5152' },
  { label: 'GitHub', value: 'github.com/yurim-web', href: 'https://github.com/yurim-web' },
  { label: 'Portfolio', value: 'yurim-web.github.io', href: 'https://yurim-web.github.io' },
]

export default function Header() {
  return (
    <header className={`card ${styles.header}`}>
      <div className={styles.top}>
        <div className={styles.nameArea}>
          <img src={`${import.meta.env.BASE_URL}myimg.png`} alt="이유림" className={styles.profileImg} />
          <div className={styles.nameBlock}>
            <p className={styles.name}>이유림</p>
            <p className={styles.nameEn}>Lee Yurim</p>
            <p className={styles.role}>Web Publisher · Frontend Developer</p>
          </div>
        </div>
        <a
          href="https://yurim-web.github.io"
          target="_blank"
          rel="noreferrer"
          className={`no-print ${styles.portfolioBtn}`}
        >
          Portfolio ↗
        </a>
      </div>

      <div className={styles.contacts}>
        {contacts.map(({ label, value, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.contactItem}>
            <span className={styles.contactLabel}>{label}</span>
            <span className={styles.contactValue}>{value}</span>
          </a>
        ))}
      </div>
    </header>
  )
}

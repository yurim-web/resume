# 📄 경력기술서 - 이유림

> 웹 퍼블리셔 & 프론트엔드 개발자 **이유림**의 경력기술서 페이지입니다.

🔗 **배포 URL:** https://yurim-web.github.io/resume
🌐 **포트폴리오:** https://yurim-web.github.io

---

## 🛠️ 기술 스택

| 기술 | 설명 |
|---|---|
| ⚛️ React 19 | UI 컴포넌트 |
| ⚡ Vite 6 | 빌드 도구 |
| 🎨 CSS Modules | 컴포넌트별 스타일 |
| ✏️ Pretendard Variable | 한/영 통합 폰트 |

## 📁 프로젝트 구조

```
src/
├── App.jsx               # 🏠 루트 컴포넌트 (섹션 배치 + 푸터)
├── App.module.css         # 🎨 푸터 스타일
├── index.css              # 🌈 전역 스타일 (CSS 변수, 카드, 태그, 인쇄)
├── main.jsx               # 🚀 엔트리포인트
└── components/
    ├── Header.jsx         # 👤 이름, 직함, 연락처
    ├── AboutMe.jsx        # 💬 자기소개
    ├── Skills.jsx         # 💡 기술 스택 (Publishing, Design, Tools)
    ├── Career.jsx         # 💼 경력 및 프로젝트 (Work Experience)
    └── Achievements.jsx   # 🏆 핵심 성과, 학력, 자격증
```

## 🚀 로컬 실행

```bash
npm install
npm run dev
```

## 🔍 빌드 & 미리보기

```bash
npm run build
npm run preview    # 👉 http://localhost:4173/resume/
```

## 📦 배포

```bash
npm run deploy
```

`gh-pages` 브랜치에 빌드 결과물을 자동으로 배포합니다.
GitHub 레포 **Settings → Pages → Source**를 `gh-pages` 브랜치로 설정해야 합니다.

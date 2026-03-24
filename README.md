# 경력기술서 - 이유림

웹 퍼블리셔 & 프론트엔드 개발자 이유림의 경력기술서 페이지입니다.

🔗 **배포 URL:** https://yurim-web.github.io/resume
🔗 **포트폴리오:** https://yurim-web.github.io

---

## 기술 스택

- React 19
- Vite
- CSS Modules
- Pretendard (폰트)

## 프로젝트 구조

```
src/
├── App.jsx               # 루트 컴포넌트
├── App.module.css
├── index.css             # 전역 스타일 (변수, 카드, 태그 등)
├── main.jsx
└── components/
    ├── Header.jsx        # 이름, 직함, 연락처
    ├── AboutMe.jsx       # 자기소개
    ├── Skills.jsx        # 기술 스택
    ├── Career.jsx        # 경력 및 프로젝트
    └── Achievements.jsx  # 핵심 성과, 학력, 자격증
```

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포

```bash
npm run deploy
```

`gh-pages` 브랜치에 빌드 결과물을 자동으로 배포합니다.
GitHub 레포 Settings → Pages → Source를 `gh-pages` 브랜치로 설정해야 합니다.

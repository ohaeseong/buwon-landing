# 부원 진열장 랜딩 페이지

부원 진열장 회사 소개 페이지입니다. React와 TypeScript로 개발되었습니다.

## 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **Lucide React** - 아이콘

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:3000`에서 실행됩니다.

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
src/
├── components/          # 컴포넌트
│   ├── Header.tsx      # 헤더/네비게이션
│   ├── Hero.tsx        # 메인 히어로 섹션
│   ├── About.tsx       # 회사 소개
│   ├── Products.tsx    # 제품 소개
│   ├── Features.tsx    # 특징/장점
│   ├── Contact.tsx     # 연락처/문의
│   └── Footer.tsx      # 푸터
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx           # 앱 진입점
└── index.css          # 글로벌 스타일
```

## 주요 섹션

1. **Hero** - 메인 소개 및 CTA
2. **About** - 부원 진열장 회사 소개
3. **History** - 회사 30년 역사와 주요 이정표
4. **Products** - 주요 제품군 (볼트 앵글, 무볼트 앵글, 경량랙, 중량랙, 곤도라, 하이퍼, 파펫트랙, 킹콩랙)
5. **Features** - 회사 특징 및 강점
6. **Contact** - 연락처 및 문의 폼
7. **Footer** - 회사 정보 및 링크

## 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **타임라인 기반 회사 역사**: 30년간의 주요 이정표를 시각적으로 표현
- **제품 확장 시스템**: 새로운 제품을 쉽게 추가할 수 있는 템플릿 구조
- **붉은 계열 브랜드 컬러**: 브랜드 아이덴티티를 반영한 색상 시스템
- **인터랙티브 UI**: 호버 효과와 부드러운 애니메이션

## 커스터마이징

`tailwind.config.js`에서 컬러, 폰트 등을 수정할 수 있습니다.
각 컴포넌트는 독립적으로 구성되어 있어 쉽게 수정 가능합니다.

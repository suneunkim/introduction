const modalData = [
  {
    id: 1,
    title: '오늘 점심은 먹대리가',
    period: '2024.11 (14일)',
    description: '점심 메뉴를 추천해주는 서비스',
    features: [
      '음식 카테고리를 선택해 원하는 분류로 추천',
      '오늘 날씨에 어울리는 음식 메뉴 추천',
      '카카오톡 공유로 손 쉽게 공유하기',
    ],
    skills: ['Next.js', 'TypeScript', 'firebase', 'react-lottie-player'],
    image: ['/mukdaeri_project.png'],
    githubLink: 'https://github.com/suneunkim/today-lunch',
  },
  {
    id: 2,
    title: '다인리뷰',
    period: '2024.08 ~ 2024.09 (10주)',
    description: '사업주와 인플루언서를 연결하는 체험단 리뷰 플랫폼',
    features: [
      'SSR 기반 검색 페이지 및 SEO 최적화',
      '디자인 캘린더, 쿼리 필터를 활용한 검색',
      '반응형 UI 개발 (웹/모바일)',
    ],

    skills: ['Next.js', 'TypeScript', 'Zustand', 'React Hook Form', 'kakao map API'],
    image: ['/dainreview.webp'],
    githubLink: 'https://github.com/suneunkim/dain_review',
  },
  {
    id: 3,
    title: 'Honey-Place',
    period: '2024.07 (14일)',
    features: [
      '가상화 리스트 적용(Windowing)',
      '카카오 지도 연동으로 주소 등록과 지도로 장소 확인',
      '업로드 과정의 페이지 이동 과정 E2E 테스트 적용',
    ],
    description: '맛집 공유와 지도로 확인하는 서비스',
    skills: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'TailwindCSS',
      'React Hook Form',
      'react-virtuoso',
    ],
    image: ['/honeyplace.webp'],
    githubLink: 'https://github.com/suneunkim/next-honey-place',
  },
  {
    id: 4,
    title: 'Sun-coffee',
    period: '2024.04 ~ 2024.05 (4주)',
    features: [
      '결제 SDK 연동',
      '구매자와 판매자에 따른 기능 구현',
      '무한 스크롤 및 추천 상품 리스트',
    ],
    description: '커피 주문과 판매 플랫폼',
    skills: ['Vite', 'React', 'Tanstack Query', 'Context API', 'React Hook Form'],
    image: ['/suncoffee.webp'],
    githubLink: 'https://github.com/suneunkim/Sun-coffee',
  },
]

export default modalData

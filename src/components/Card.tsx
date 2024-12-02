import styles from './components.module.css'

const Card = () => {
  return (
    <div className={styles.card_container}>
      <section className={styles.card}>
        <h3>점메추 - 점심 메뉴 추천 사이트</h3>
        <span>2024.10</span>
        <ul>
          <li>Next.Js 서버 컴포넌트 활용한 SSR 구현</li>
          <li>디자인 가이드를 준수한 반응형 웹 디자인</li>
        </ul>
      </section>
      <section className={styles.card}>
        <h3>다인리뷰 - 체험단 리뷰 사이트</h3>
        <span>2024.08 ~ 2024.09 (10주) </span>
        <li>가상화 리스트 적용(Windowing)</li>
        <li>카카오 지도 연동으로 주소 등록과 지도로 장소 확인</li>
        <li>업로드 과정의 페이지 이동 과정 E2E 테스트 적용</li>
      </section>
      {/* <section className={styles.card}>
        <h3>Honey-Place - 맛집 공유와 지도</h3>
        <span>2024.07 ~ 2024.10 (14일)</span>
      </section>
      <section className={styles.card}>
        <h3>Sun-coffee - 결제 연동 프로젝트</h3>
        <span>2024.04 ~ 2024.05 (4주)</span>
        <li>결제 SDK 연동</li>
        <li>구매자와 판매자에 따른 기능 구현</li>
        <li>무한 스크롤 및 추천 상품 리스트</li>
      </section> */}
    </div>
  )
}

export default Card

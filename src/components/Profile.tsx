import { useEffect, useState } from 'react'
import styles from './components.module.css'

const Profile = () => {
  const text = 'FRONTEND DEVELOPER'
  const [displayedText, setDisplayedText] = useState('') // 현재까지 나타난 텍스트
  const [isDeleting, setIsDeleting] = useState(false) // 삭제 상태
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]) // 글자 추가
          setIndex((prevIndex) => prevIndex + 1) // 인덱스 증가
        } else {
          setIsDeleting(true) // 타이핑이 끝났으면 삭제 모드로 변경
        }
      } else {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1)) // 글자 삭제
          setIndex((prevIndex) => prevIndex - 1) // 인덱스 감소
        } else {
          setIsDeleting(false) // 다시 타이핑 모드로 변경
        }
      }
    }, 150) // 300ms 간격으로 글자 추가 또는 삭제

    return () => clearInterval(typingInterval) // 컴포넌트 언마운트 시 interval 종료
  }, [text, isDeleting, index])

  return (
    <div className={styles.profile_container}>
      <div className={styles.intro_wrap}>
        <div className={styles.intro_subtitle}>
          {displayedText}
          <span className={styles.intro_cursor} />
        </div>
        <div className={styles.intro_name}>KIM SUN EUN</div>
      </div>

      <p className={styles.intro}>
        안녕하세요.
        <br />
        지식을 공유하며 함께 성장하는 것을 좋아하는 개발자 김선은입니다. 겪은 문제를 나누기 위해
        기록합니다.
      </p>
    </div>
  )
}

export default Profile

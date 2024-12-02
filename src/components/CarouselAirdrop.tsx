import { useState } from 'react'
import Airdrop from './Airdrop'
import styles from './components.module.css'
import projects from '../data/projects'
import airDropData from '../data/airDropData'

const CarouselAirdrop = ({ openModal }: { openModal: (index: number) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleReject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % airDropData.length)
  }

  const handleSelect = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={styles.carousel_wrap}>
      <div className={styles.carousel}>
        {projects.map((data, index) => {
          const cardPosition =
            index === currentIndex
              ? 'center'
              : index === (currentIndex + 1) % projects.length
              ? 'right'
              : index === (currentIndex - 1 + projects.length) % projects.length
              ? 'left'
              : 'hidden'

          return (
            <>
              <Airdrop
                title={data.title}
                description={data.description}
                imageUrl={data.image}
                handleSelect={() => handleSelect(index)}
                handleReject={handleReject}
                onAccept={() => openModal(index)}
                cardPosition={cardPosition}
                key={data.id}
              />
              <div className={styles.carousel_pagenation}>
                {projects.map((_, idx) => (
                  <span
                    key={idx}
                    className={`${styles.bullet} ${idx === currentIndex ? styles.active : ''}`}
                    onClick={() => handleSelect(idx)} // 불렛 클릭 시 해당 인덱스 선택
                  ></span>
                ))}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default CarouselAirdrop

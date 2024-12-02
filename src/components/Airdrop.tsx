import styles from './components.module.css'

interface Props {
  title: string
  description: string
  handleSelect: (index: any) => void
  handleReject: () => void
  onAccept: () => void
  cardPosition: any
  imageUrl: string[]
}

const Airdrop = ({
  title,
  description,
  imageUrl,
  handleSelect,
  handleReject,
  onAccept,
  cardPosition,
}: Props) => {
  const handleRejectButton = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleReject()
  }

  return (
    <div onClick={handleSelect} className={`${styles.cardWrapper} ${styles[cardPosition]}`}>
      <div className={styles.airdrop_container}>
        <div className={styles.airdrop_content}>
          <h4 className={styles.airdrop_title}>{title}</h4>
          <p className={styles.airdrop_description}>{description}</p>
        </div>
        <img src={imageUrl[0]} className={styles.airdrop_img} />
        <div className={styles.airdrop_button_wrap}>
          <button onClick={handleRejectButton} className={styles.airdrop_button}>
            거절
          </button>
          <button onClick={onAccept} className={styles.airdrop_button}>
            수락
          </button>
        </div>
      </div>
    </div>
  )
}

export default Airdrop

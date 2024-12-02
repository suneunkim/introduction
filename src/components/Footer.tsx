import styles from './components.module.css'

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_box}>
        <a
          href='https://knotty-capacity-b5e.notion.site/11357b55d52e80e2a7f1f8ca98a722ad'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/profile_footer.png' className={styles.footer_icon} />
        </a>
        <span>About Me</span>
      </div>

      <div className={styles.footer_box}>
        <a href='https://github.com/suneunkim' target='_blank' rel='noopener noreferrer'>
          <img src='/github_logo.png' className={styles.footer_icon} />
        </a>
        <span>Github</span>
      </div>

      <div className={styles.footer_box}>
        <a href='https://velog.io/@hisy4429_sun/posts' target='_blank' rel='noopener noreferrer'>
          <img src='/velog.png' className={styles.footer_icon} />
        </a>
        <span>Velog</span>
      </div>
    </div>
  )
}

export default Footer

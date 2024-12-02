import styles from './modal.module.css'

interface ProjectProps {
  id: number
  title: string
  period: string
  description: string
  features: string[]
  skills: string[]
  image: string[]
  githubLink: string
}

interface Props {
  closeModal: () => void
  project: ProjectProps | null
  handleselectedIndex: (direction: 'next' | 'prev') => void
}
const ProjectModal = ({ closeModal, project, handleselectedIndex }: Props) => {
  return (
    <div className={styles.container}>
      {/* 상단창 */}
      <div className={styles.tap}>
        <div className={styles.tap_circle}>
          <span onClick={closeModal} />
          <span />
          <span />
        </div>
        <div>PROJECT</div>
      </div>

      <div className={styles.container_inner_wrap}>
        {/* 왼쪽 버튼 */}
        <div onClick={() => handleselectedIndex('prev')}>
          <svg
            className={styles.arrow}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              clipRule='evenodd'
              fillRule='evenodd'
              d='M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z'
            />
          </svg>
        </div>

        {/* 콘텐츠 */}
        <section className={styles.modal_content}>
          <header className={styles.project_header}>
            <h3>{project?.title}</h3>
            <p>{project?.period}</p>
          </header>
          <article className={styles.project_image_container}>
            <img className={styles.project_image} src={project?.image[0]} />
          </article>
          <div className={styles.project_details}>
            <div className={styles.project_details_subtitle}>
              <h4>{project?.description}</h4>

              <a href={project?.githubLink} target='_blank' rel='noopener noreferrer'>
                <img src='/github_logo.png' alt='github_logo' />
              </a>
            </div>
            <ul className={styles.description_list}>
              {project?.features.map((feature, i) => (
                <li key={i} className={styles.description_list_item}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.skill_container}>
            {project?.skills.map((skill, i) => (
              <span key={i} className={styles.skill_stack}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 오른쪽 버튼 */}
        <div onClick={() => handleselectedIndex('next')}>
          <svg
            className={styles.arrow}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              clipRule='evenodd'
              fillRule='evenodd'
              d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

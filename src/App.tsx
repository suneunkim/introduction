import './App.css'
import Footer from './components/Footer'
import Profile from './components/Profile'
import CarouselAirdrop from './components/CarouselAirdrop'
import { useState } from 'react'
import ProjectModal from './components/ProjectModal'
import modalData from './data/modalData'

function App() {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setSelectedIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedIndex(null)
  }

  const selectedProject = selectedIndex !== null ? modalData[selectedIndex] : null

  // 모달 창에서 프로젝트 설명 바꾸기
  const handleselectedIndex = (direction: 'next' | 'prev') => {
    setSelectedIndex((prev) => {
      if (prev !== null) {
        if (direction === 'next') {
          return (prev + 1) % modalData.length // next 버튼 클릭 시
        } else if (direction === 'prev') {
          return (prev - 1 + modalData.length) % modalData.length // prev 버튼 클릭 시
        }
      }
      return prev
    })
  }

  return (
    <main className='background'>
      <Profile />
      <CarouselAirdrop openModal={openModal} />
      <Footer />
      {isModalOpen && (
        <ProjectModal
          key={selectedProject?.title}
          project={selectedProject}
          closeModal={closeModal}
          handleselectedIndex={handleselectedIndex}
        />
      )}
    </main>
  )
}

export default App

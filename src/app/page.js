import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

import styles from './styles/About.module.scss'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto">
     
     <Navbar/>
     <div>Hello queen</div>
     <p className={styles.highlight}> New color orange</p>
     <HeroSection/>
 
    </main>
  )
}

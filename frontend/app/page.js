import DocCarousel from '@/components/DocCarousel'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import Specialities from '../components/Specialities'

export default function Home() {
  return (
    <div>
     <HeroSection/>
     <DocCarousel/>
     <Specialities/>
    </div>
  )
}

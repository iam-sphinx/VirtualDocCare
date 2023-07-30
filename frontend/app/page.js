import DocCarousel from '@/components/DocCarousel'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import Specialities from '../components/Specialities'
import WhyUS from '@/components/WhyUS'

export default function Home() {
  return (
    <div>
     <HeroSection/>
     <DocCarousel/>
     <Specialities/>
     <WhyUS/>
  
    </div>
  )
}

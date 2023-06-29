import MainSlider from '@/components/carousel/Carousel'
import Header from '@/components/header/Header'
import Image from 'next/image'
import Container from '@/components/Container'
import Footer from '@/components/Footer'

export default function Home() {
  return (
   <>
   <div className='lg:px-[85px]'>
   <Header />
   <main className='hero-section mt-[104px]'>
    <Container />
   </main>
   <Footer />
   </div>
   
   </>
  )
}

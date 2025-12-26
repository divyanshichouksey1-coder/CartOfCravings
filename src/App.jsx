import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import WhyUs from './components/WhyUs'
import InstagramSection from './components/InstagramSection'
import ContactSection from './components/ContactSection'
import FloatingCallButton from './components/FloatingCallButton'
import ParallaxImages from './components/ParallaxImages'

function App() {
  const [hoveredDish, setHoveredDish] = useState(null)

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Header />
      <ParallaxImages />
      
      <Hero />
      
      <Menu hoveredDish={hoveredDish} setHoveredDish={setHoveredDish} />
      
      <WhyUs />
      
      <InstagramSection />
      
      <ContactSection />
      
      <FloatingCallButton />
    </div>
  )
}

export default App


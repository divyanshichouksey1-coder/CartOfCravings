import { motion } from 'framer-motion'
import { ChefHat, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 text-center px-4 md:px-8"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="glassmorphism rounded-full p-4">
            <ChefHat className="w-12 h-12 md:w-16 md:h-16 text-neon-amber" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 text-glow"
        >
          THE ADDICTION
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 text-neon-amber"
        >
          STARTS AT 4:30 PM
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-2 text-electric-orange"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            <p className="font-elegant text-lg md:text-xl italic">
              Live From Lucknow
            </p>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <p className="font-elegant text-base md:text-lg text-neon-amber mt-2">
            Lucknow ki Nawabazi ka Asli Swaad
          </p>
        </motion.div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-neon-amber rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-neon-amber rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero


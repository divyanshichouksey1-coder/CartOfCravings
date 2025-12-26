import { motion } from 'framer-motion'
import { UtensilsCrossed } from 'lucide-react'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 md:gap-4"
          >
            <div className="glassmorphism rounded-full p-2 md:p-3">
              <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6 text-neon-amber" />
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl text-neon-amber text-glow">
                CartOfCravings
              </h1>
              <p className="font-elegant text-xs md:text-sm text-electric-orange italic -mt-1">
                Live From Lucknow
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex items-center gap-2 text-sm text-gray-300"
          >
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-electric-orange rounded-full"
            />
            <span className="font-elegant">Open 4:30 PM - 10:00 PM</span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header


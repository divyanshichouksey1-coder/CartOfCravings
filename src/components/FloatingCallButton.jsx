import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const FloatingCallButton = () => {
  const phoneNumber = "9936622786"

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(255, 184, 0, 0.5)',
            '0 0 40px rgba(255, 184, 0, 0.8)',
            '0 0 20px rgba(255, 184, 0, 0.5)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="glassmorphism rounded-full p-4 neon-border"
      >
        <Phone className="w-8 h-8 text-neon-amber" />
      </motion.div>
    </motion.a>
  )
}

export default FloatingCallButton


import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Zap } from 'lucide-react'

const LiveStatus = () => {
  const [timeLeft, setTimeLeft] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()
      const currentTime = currentHour * 60 + currentMinute
      
      const openTime = 16 * 60 + 30 // 4:30 PM
      const closeTime = 22 * 60 // 10:00 PM
      
      if (currentTime >= openTime && currentTime < closeTime) {
        setIsOpen(true)
        setTimeLeft(null)
      } else {
        setIsOpen(false)
        let targetTime
        if (currentTime < openTime) {
          targetTime = openTime
        } else {
          targetTime = openTime + 24 * 60 // Next day
        }
        const minutesLeft = targetTime - currentTime
        setTimeLeft(minutesLeft)
      }
    }

    updateStatus()
    const interval = setInterval(updateStatus, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glassmorphism rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.div
              animate={isOpen ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: isOpen ? Infinity : 0 }}
              className="inline-block mb-6"
            >
              <div className="glassmorphism rounded-full p-4">
                {isOpen ? (
                  <Zap className="w-10 h-10 md:w-12 md:h-12 text-electric-orange" />
                ) : (
                  <Clock className="w-10 h-10 md:w-12 md:h-12 text-neon-amber" />
                )}
              </div>
            </motion.div>
            
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-4xl md:text-6xl mb-4 text-electric-orange text-glow">
                  SIZZLING NOW
                </h3>
                <p className="font-elegant text-xl md:text-2xl text-gray-300">
                  We're open and ready to satisfy your cravings!
                </p>
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mt-6 inline-block"
                >
                  <div className="w-4 h-4 bg-electric-orange rounded-full" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-3xl md:text-5xl mb-4 text-neon-amber">
                  LIVE FROM LUCKNOW
                </h3>
                {timeLeft !== null && (
                  <div className="space-y-2">
                    <p className="font-elegant text-lg md:text-xl text-gray-300 mb-4">
                      Opening in
                    </p>
                    <motion.div
                      key={timeLeft}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="font-display text-5xl md:text-7xl text-neon-amber"
                    >
                      {timeLeft} MIN
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
          
          {isOpen && (
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(255,184,0,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 pointer-events-none"
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default LiveStatus


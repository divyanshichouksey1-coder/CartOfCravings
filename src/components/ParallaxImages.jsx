import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallaxImages = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Momo Image */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 opacity-20"
      >
        <div
          className="w-full h-full rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80)`,
            filter: 'sepia(100%) saturate(200%) hue-rotate(30deg)',
          }}
        />
      </motion.div>

      {/* Potato Stick Image */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute bottom-20 left-10 w-28 h-28 md:w-40 md:h-40 opacity-20"
      >
        <div
          className="w-full h-full rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80)`,
            filter: 'sepia(100%) saturate(200%) hue-rotate(30deg)',
          }}
        />
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        style={{ y: y1, rotate: rotate2 }}
        className="absolute top-1/2 left-20 w-24 h-24 md:w-32 md:h-32 opacity-10"
      >
        <div
          className="w-full h-full rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&q=80)`,
            filter: 'sepia(100%) saturate(200%) hue-rotate(30deg)',
          }}
        />
      </motion.div>
    </div>
  )
}

export default ParallaxImages


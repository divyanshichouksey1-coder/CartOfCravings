import { motion } from 'framer-motion'
import { Instagram, Users } from 'lucide-react'

const InstagramSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glassmorphism rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle, rgba(255,184,0,0.1) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(255,184,0,0.1) 0%, transparent 70%)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 pointer-events-none"
          />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="glassmorphism rounded-full p-4">
                <Instagram className="w-10 h-10 md:w-12 md:h-12 text-electric-orange" />
              </div>
            </motion.div>
            
            <h2 className="font-display text-4xl md:text-6xl mb-4 text-glow">
              INSTA-GRID
            </h2>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-8"
            >
              <a
                href="https://instagram.com/cartofcravings.coc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <p className="font-display text-3xl md:text-5xl text-neon-amber mb-2 hover:text-electric-orange transition-colors">
                  @cartofcravings.coc
                </p>
              </a>
            </motion.div>
            
            <p className="font-elegant text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Follow us for daily cravings, behind-the-scenes magic, and exclusive updates.
            </p>
            
            <motion.a
              href="https://instagram.com/cartofcravings.coc"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 glassmorphism rounded-full px-8 py-4 text-lg font-display text-neon-amber hover:text-electric-orange hover:neon-border transition-all duration-300"
            >
              <Users className="w-6 h-6" />
              <span>Join the Cravings Club</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InstagramSection


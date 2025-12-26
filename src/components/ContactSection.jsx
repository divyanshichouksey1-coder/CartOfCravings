import { motion } from 'framer-motion'
import { MapPin, Navigation, Phone } from 'lucide-react'

const ContactSection = () => {
  const location = "In front of Geological Survey of India, Aliganj, Lucknow"
  const phoneNumber = "9936622786"
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5!2d80.95!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="glassmorphism rounded-full p-4">
              <MapPin className="w-10 h-10 md:w-12 md:h-12 text-neon-amber" />
            </div>
          </motion.div>
          
          <h2 className="font-display text-5xl md:text-7xl mb-4 text-glow">
            FIND THE FLAVOR
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-electric-orange italic">
            Come visit us at our location
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glassmorphism rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <Navigation className="w-8 h-8 text-electric-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-3 text-neon-amber">
                  Location
                </h3>
                <p className="font-elegant text-base md:text-lg text-gray-300 leading-relaxed">
                  {location}
                </p>
              </div>
            </div>
            
            <motion.a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 glassmorphism rounded-full px-6 py-3 text-base font-display text-neon-amber hover:text-electric-orange hover:neon-border transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              <span>Open in Maps</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glassmorphism rounded-2xl overflow-hidden"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ minHeight: '300px', border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(1.2)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CartOfCravings Location"
              className="w-full h-full"
            />
          </motion.div>
        </div>

        {/* Desktop Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <motion.a
            href={`tel:${phoneNumber}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 glassmorphism rounded-full px-8 py-4 text-xl font-display text-neon-amber hover:text-electric-orange hover:neon-border transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span className="text-2xl font-bold">Call to Order: {phoneNumber}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection


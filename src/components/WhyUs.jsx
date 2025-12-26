import { motion } from 'framer-motion'
import { Star, Award, Heart } from 'lucide-react'

const WhyUs = () => {
  const features = [
    {
      icon: Star,
      title: "Pure Street Food Luxury",
      description: "No boring snacks. Just authentic flavors that hit different.",
    },
    {
      icon: Award,
      title: "Spiced to Perfection",
      description: "Every bite is a journey through Lucknow's culinary heritage.",
    },
    {
      icon: Heart,
      title: "Made with Passion",
      description: "Crafted fresh daily with love and the finest ingredients.",
    },
  ]

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl mb-4 text-glow">
            WHY US?
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-electric-orange italic max-w-2xl mx-auto">
            No boring snacks. Just pure, unadulterated street food luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glassmorphism rounded-2xl p-6 md:p-8 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <div className="glassmorphism rounded-full p-4">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-neon-amber" />
                  </div>
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl mb-3 text-neon-amber">
                  {feature.title}
                </h3>
                <p className="font-elegant text-base md:text-lg text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs


import { motion } from 'framer-motion'
import { UtensilsCrossed, Flame } from 'lucide-react'

const menuItems = {
  "Stick Magic": [
    {
      name: "Paneer Pop Stick",
      description: "Golden Crunch meets Molten Cheese. Spiced to Perfection.",
      image: "paneer-stick",
    },
    {
      name: "Crispy Potato Stick",
      description: "Steam-Kissed perfection with a Golden Crunch exterior.",
      image: "potato-stick",
    },
  ],
  "Momo Overload": [
    {
      name: "Cheese Corn Momos",
      description: "Molten Cheese explosion in every bite. Pure street food luxury.",
      image: "cheese-momo",
    },
    {
      name: "Paneer Momos",
      description: "Steam-Kissed dumplings with spiced paneer. Unadulterated flavor.",
      image: "paneer-momo",
    },
  ],
}

const Menu = ({ hoveredDish, setHoveredDish }) => {
  return (
    <section className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="glassmorphism rounded-full p-4">
              <UtensilsCrossed className="w-10 h-10 md:w-12 md:h-12 text-electric-orange" />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl mb-4 text-glow"
          >
            TASTE THE CRUNCH
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-elegant text-xl md:text-2xl text-electric-orange italic"
          >
            Interactive Menu
          </motion.p>
        </div>

        {Object.entries(menuItems).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="mb-20"
          >
            <h3 className="font-display text-3xl md:text-5xl mb-8 text-neon-amber flex items-center gap-4">
              <Flame className="w-8 h-8 md:w-10 md:h-10" />
              {category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredDish(item.image)}
                  onHoverEnd={() => setHoveredDish(null)}
                  className="relative group"
                >
                  <div className="glassmorphism rounded-2xl p-6 md:p-8 hover:neon-border transition-all duration-300 cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-display text-2xl md:text-3xl text-neon-amber group-hover:text-electric-orange transition-colors">
                        {item.name}
                      </h4>
                      <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Flame className="w-6 h-6 text-electric-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </div>
                    <p className="font-elegant text-base md:text-lg text-gray-300 italic">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {hoveredDish && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-0"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl"
            style={{
              backgroundImage: hoveredDish === 'paneer-stick' 
                ? `url(https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80)`
                : hoveredDish === 'potato-stick'
                ? `url(https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80)`
                : hoveredDish === 'cheese-momo'
                ? `url(https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80)`
                : `url(https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80)`,
            }}
          />
        </motion.div>
      )}
    </section>
  )
}

export default Menu


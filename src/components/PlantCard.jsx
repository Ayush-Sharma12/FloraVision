import { ShoppingBag } from 'lucide-react'

function PlantCard({ plant, showExplore, onAdd }) {
  const { name, price, description, image, category } = plant

  const handleAddToCart = () => {
    console.log(`Adding ${name} to cart`)
    onAdd?.(plant)
  }

  const handleExplore = () => {
    console.log(`Exploring ${name}`)
  }

  return (
    <div className="relative w-full h-auto group">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-[28px] border border-white/20 shadow-2xl" />

      <div className="relative p-5 flex flex-col">
        <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-3xl mb-5 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              console.log('Image failed to load for', name, '-> swapping to fallback')
              e.currentTarget.src = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&h=500&fit=crop'
            }}
            className="max-h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <p className="text-sm tracking-wide uppercase text-white/70 mb-1">{category}</p>
        <h3 className="text-2xl md:text-[28px] text-white/90 mb-2">{name}</h3>

        <p className="text-[15px] md:text-[16px] text-white/70 mb-6 max-w-[372px]">{description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2 text-white whitespace-nowrap">
            <span className="text-lg md:text-xl">Rs.</span>
            <span className="text-[24px] md:text-[28px] font-semibold">{price}/-</span>
          </div>
          <button onClick={handleAddToCart} className="w-[48px] h-[48px] border border-white/60 rounded-xl flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300" aria-label="Add to cart">
            <ShoppingBag className="w-6 h-6 text-white/80" />
          </button>
        </div>

        
      </div>
    </div>
  )
}

export default PlantCard
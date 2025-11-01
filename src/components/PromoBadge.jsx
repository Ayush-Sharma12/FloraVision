import { ShoppingBag } from 'lucide-react'

const PromoBadge = ({ plant, align = 'right', onAdd }) => {
  if (!plant) return null
  const pos = align === 'left' ? 'left-[-14px]' : 'right-[-14px]'

  return (
    <div className={`glass-effect rounded-[28px] border border-white/20 p-4 w-[260px] shadow-2xl ${pos}`}>
      <div className="flex items-center gap-3">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-16 h-16 rounded-2xl object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=200&h=200&fit=crop')}
        />
        <div className="min-w-0">
          <p className="text-white/80 text-sm truncate">{plant.category}</p>
          <p className="text-white text-lg font-semibold truncate">{plant.name}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-white text-xl font-semibold">Rs. {plant.price}/-</span>
        <button
          onClick={() => onAdd?.(plant)}
          className="w-10 h-10 rounded-xl border-2 border-white text-white flex items-center justify-center hover:bg-white/10"
          aria-label={`Add ${plant.name} to cart`}
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default PromoBadge

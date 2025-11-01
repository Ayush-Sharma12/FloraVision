import { ShoppingBag } from 'lucide-react'

// Wide glassmorphic banner card used in hero (left image + right copy or vice-versa)
function BandCard({ title, copy, price, image, imageOn = 'left', onExplore, onAdd }) {
  const isLeft = imageOn === 'left'

  return (
    <div className="relative glass-effect rounded-[72px] border border-white/20 p-8 md:p-12 w-full max-w-[1200px] mx-auto">
      <div
        className={`grid grid-cols-1 ${
          isLeft ? 'md:grid-cols-[600px_1fr]' : 'md:grid-cols-[1fr_600px]'
        } gap-12 items-center`}
      >
        {/* Image Section */}
        <div
          className={`${isLeft ? '' : 'md:order-2'} w-full h-[440px] md:h-[520px] overflow-hidden rounded-[48px] flex items-center justify-center`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) =>
              (e.currentTarget.src =
                'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1000&h=1000&fit=crop')
            }
          />
        </div>

        {/* Content Section */}
        <div
          className={`${isLeft ? '' : 'md:order-1'} flex flex-col justify-center space-y-6 md:space-y-8 px-4`}
        >
          {/* Title */}
          <h4 className="text-white text-4xl md:text-5xl font-semibold  decoration-white/60">
            {title}
          </h4>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-2xl leading-relaxed max-w-prose">
            {copy}
          </p>

          {/* Divider */}
          <div className="border-t border-white/30 w-1/2 my-2"></div>

          {/* Price + Buttons */}
          <div className="flex items-center gap-8 pt-2">
            <span className="text-white text-4xl md:text-5xl font-semibold">
              Rs. {price}/-
            </span>
            <button
              onClick={onExplore}
              className="h-20 px-10 rounded-2xl border-4 border-white text-white text-xl hover:bg-white/10 transition"
            >
              Explore
            </button>
            <button
              onClick={onAdd}
              className="w-20 h-20 rounded-2xl border-4 border-white text-white flex items-center justify-center hover:bg-white/10 transition"
              aria-label="Add to cart"
            >
              <ShoppingBag className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BandCard

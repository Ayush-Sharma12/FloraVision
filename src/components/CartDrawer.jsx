import { ShoppingBag, X, Plus, Minus } from 'lucide-react'

function CartDrawer({ open, onClose, items = [], onInc, onDec, onRemove, onCheckout }) {
  if (!open) return null

  const subtotal = items.reduce((sum, it) => sum + it.price * (it.qty || 1), 0)

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        aria-label="Close cart"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <aside className="absolute right-0 top-0 h-full w-[380px] sm:w-[420px] glass-effect border border-white/20 rounded-l-3xl p-5 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-white/90" />
            <h3 className="text-white text-2xl font-semibold">Your Cart</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10" aria-label="Close">
            <X className="w-5 h-5 text-white/80" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {items.length === 0 && (
            <div className="text-white/70 text-center py-16">No items yet — add a plant to get started 🌿</div>
          )}

          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-4 glass-effect rounded-2xl p-3">
              <img
                src={it.image}
                alt={it.name}
                className="w-14 h-14 rounded-xl object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=200&h=200&fit=crop'
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-white/90 font-medium truncate">{it.name}</p>
                <p className="text-white/70 text-sm">Rs. {it.price}/-</p>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => onDec?.(it)} className="w-7 h-7 rounded-md border border-white/30 text-white/80 hover:bg-white/10" aria-label="Decrease">
                    <Minus className="w-4 h-4 mx-auto" />
                  </button>
                  <span className="w-8 text-center text-white/90">{it.qty || 1}</span>
                  <button onClick={() => onInc?.(it)} className="w-7 h-7 rounded-md border border-white/30 text-white/80 hover:bg-white/10" aria-label="Increase">
                    <Plus className="w-4 h-4 mx-auto" />
                  </button>
                  <button onClick={() => onRemove?.(it)} className="ml-auto text-white/60 hover:text-white/90 text-sm">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-white/80 mb-3">
            <span>Subtotal</span>
            <span className="font-semibold text-white">Rs. {subtotal}/-</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full h-12 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer

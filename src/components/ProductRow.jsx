// Simple three-item row used under hero to match the reference mock
function ProductRow({ plants = [] }) {
  const slice = plants.slice(0, 3)
  return (
    <div className="mt-10 flex items-end justify-center gap-8">
      {slice.map((p) => (
        <div key={p.id} className="glass-effect rounded-[24px] p-3 w-[180px]">
          <div className="w-full h-[140px] overflow-hidden rounded-2xl">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="mt-3 text-white/80 text-sm truncate">{p.name}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductRow
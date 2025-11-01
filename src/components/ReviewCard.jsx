function ReviewCard({ review }) {
  const { name, rating, text, avatar } = review

  const renderStars = () => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5" viewBox="0 0 21 20" fill="#FFF84E">
          <path d="M10.5 0L13.09 7.26L20.5 8.29L15.5 13.14L16.68 20.5L10.5 16.77L4.32 20.5L5.5 13.14L0.5 8.29L7.91 7.26L10.5 0Z"/>
        </svg>
      )
    }
    return stars
  }

  return (
    <div className="relative w-full max-w-md h-auto">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-[45px] border border-white/30" />

      <div className="relative p-6 flex flex-col space-y-4">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              console.log('Avatar failed to load for', name, '-> fallback avatar')
              e.currentTarget.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
            }}
            className="w-16 h-16 rounded-full object-cover shadow-xl ring-2 ring-white/20"
          />
          <div className="flex flex-col">
            <p className="text-xl md:text-2xl font-['Inter'] text-white font-medium">{name}</p>
            <div className="flex gap-1 mt-1.5">{renderStars()}</div>
          </div>
        </div>
        <p className="text-base md:text-lg font-['Inter'] text-white/75 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

export default ReviewCard
import { useEffect, useRef, useState } from 'react'
import { ShoppingBag, Search, ChevronDown } from 'lucide-react'
import Logo from './Logo.jsx'

function Header({ cartCount = 0, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      setScrolled(y > 10)
      // Slide up on scroll down, slide back on scroll up
      if (y > lastY.current + 5) setHidden(true)
      else if (y < lastY.current - 5) setHidden(false)
      lastY.current = y

    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearchClick = () => {
    // TODO: Implement search functionality
    console.log('Search clicked')
  }

  const handleCartClick = () => {
    console.log('Cart items:', cartCount)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 md:py-6 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between ${scrolled ? 'glass-effect rounded-2xl px-4 py-3 border border-white/20' : ''}`}>
        <a href="#home" className="shrink-0"><Logo /></a>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#home" className="font-['Indie_Flower'] text-xl lg:text-2xl text-white hover:text-white/80 transition-colors">
            Home
          </a>

          <div className="relative">
            <button type="button" onClick={() => setIsMenuOpen(v => !v)} className="flex items-center gap-2 group">
              <span className="font-['Indie_Flower'] text-xl lg:text-2xl text-white group-hover:text-white/80 transition-colors">Plants Type</span>
              <ChevronDown className={`w-4 h-4 text-white transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMenuOpen && (
              <div className="absolute mt-3 glass-effect rounded-xl p-3 border border-white/20 min-w-[180px]">
                <a href="#plants" className="block px-3 py-2 text-white/75 hover:text-white">Indoor</a>
                <a href="#plants" className="block px-3 py-2 text-white/75 hover:text-white">Tropical</a>
                <a href="#plants" className="block px-3 py-2 text-white/75 hover:text-white">Trailing</a>
                <a href="#plants" className="block px-3 py-2 text-white/75 hover:text-white">Succulents</a>
              </div>
            )}
          </div>

          <a href="#more" className="font-['Indie_Flower'] text-xl lg:text-2xl text-white hover:text-white/80 transition-colors">More</a>
          <a href="#contact" className="font-['Indie_Flower'] text-xl lg:text-2xl text-white hover:text-white/80 transition-colors">Contact</a>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={handleSearchClick} className="hover:scale-110 transition-transform" aria-label="Search">
            <Search className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
<button onClick={onCartClick || handleCartClick} className="relative hover:scale-110 transition-transform" aria-label="Open cart">
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
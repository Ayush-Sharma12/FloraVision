import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PlantCard from './components/PlantCard.jsx'
import ReviewCard from './components/ReviewCard.jsx'
import Footer from './components/Footer.jsx'
import BestPick from './components/BestPick.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import { trendyPlants, topSellingPlants, customerReviews } from './data/plantsData'

function App() {
const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  console.log('FloraVision app loaded')

  const handleAddToCart = (plant) => {
setCart(prev => {
      const found = prev.find(p => p.id === plant.id)
      if (found) return prev.map(p => p.id === plant.id ? { ...p, qty: (p.qty || 1) + 1 } : p)
      return [...prev, { ...plant, qty: 1 }]
    })
    setIsCartOpen(true)
    console.log('Added to cart:', plant.name)
  }

  return (
    <div className="min-h-screen">
<Header cartCount={cart.reduce((a,c)=>a+(c.qty||1),0)} onCartClick={() => setIsCartOpen(true)} />

      <main className="relative bg-[#1B2316] text-white overflow-hidden">
  {/* Subtle gradient overlay same as BestPick */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a1e]/70 to-[#0b160f]/90 pointer-events-none" />

  {/* Actual page content */}
  <div className="relative z-10">
    <Hero />

    {/* Trendy Plants Section */}
    <section id="plants" className="py-24 px-6 md:px-10">
      <SectionTitle>Our Top Selling Plants</SectionTitle>

      <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        {trendyPlants.map((plant, index) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            showExplore={index % 2 === 0}
            onAdd={handleAddToCart}
          />
        ))}
      </div>
    </section>

    {/* Customer Reviews */}
    <section className="py-24 px-6 md:px-10">
      <SectionTitle>Customer Review</SectionTitle>

      <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        {customerReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
    <section className='py-24 px-6 md:px-10'>
      <SectionTitle>Our Best o2</SectionTitle> 
       <BestPick />
    </section>
    <Footer/>
     
     </div>
    
</main>


     

      
    </div>
  )
}

export default App
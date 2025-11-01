import { useState } from 'react'
import ReviewCard from './ReviewCard.jsx'
import BandCard from './BandCard.jsx'
import R2 from '../assets/RoseGoldFemanine2.png'
import R3 from '../assets/RoseGoldFemanine3.png'
import ronnie from '../assets/user1.png'
import R1 from '../assets/RoseGoldFemanine1.png'
import SectionTitle from '../components/SectionTitle.jsx'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredPlant = {
    name: 'Aglaonema plant',
    category: 'Indoor Plant',
    image: R1,
  }

  const firstReview = {
    name: 'Ronnie Hamill',
    rating: 5,
    text: "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.",
    avatar: ronnie,
  }

  const handleBuyNow = () => {
    console.log('Buy now clicked for', featuredPlant.name)
    // TODO: Navigate to checkout
  }

  return (
    <section id="home" className="relative min-h-[100svh] pt-24 md:pt-32 px-0 md:px-10 overflow-hidden">
      {/* Background image only for the first view */}
      <div className="absolute inset-0 hero-bg pointer-events-none" />
      <div className="relative max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Hero content */}
          <div className="flex-1 space-y-8">
            <h1 className="font-['Inter'] font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight md:leading-[0.95] text-white/75">
              Earth's Exhale
            </h1>

            <p className="font-['Inter'] font-medium text-[23px] text-white/75 max-w-[775px]">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
              environment and its essential role in sustaining life.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <button onClick={handleBuyNow} className="h-16 w-[217px] rounded-xl border-2 border-white text-white text-[28px] font-['Inter'] hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Buy Now
              </button>

              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/50 flex items-center border-4 justify-center transition-all duration-300 group-hover:bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-10 h-10 text-white/80"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <p className="font-['Indie_Flower'] text-xl md:text-2xl text-white">
                  Live Demo...
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Featured plant card */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            {/* <div className="absolute -inset-6 rounded-[55px] blur-2xl bg-green-900/30 pointer-events-none" /> */}
            <div className="absolute inset-0 backdrop-blur-lg border border-white/20 shadow-2xl rounded-[45px] overflow-hidden"></div>

            <div className="relative p-6 flex flex-col space-y-4">
              <div className="w-full h-96 md:h-[500px] overflow-visible rounded-3xl">
                <img
                  src={featuredPlant.image}
                  alt={featuredPlant.name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    console.log('Hero image failed, using fallback')
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=800&fit=crop'
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xl md:text-2xl font-['Inter'] text-white/75">{featuredPlant.category}</p>
              <h3 className="text-3xl md:text-4xl font-['Inter'] text-white/75">{featuredPlant.name}</h3>

              <button onClick={handleBuyNow} className="h-16 w-full max-w-xs rounded-xl border-2 border-white text-white text-2xl font-['Inter'] hover:bg-white/10 transition-all duration-300">
                Buy Now
              </button>

              {/* <div className="flex items-center justify-center gap-2 pt-2">
                <div className="w-6 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white/50 rounded-full" />
                <div className="w-2 h-2 bg-white/50 rounded-full" />
              </div> */}

              {/* <div className="hidden lg:block absolute -top-6 right-0">
              <PromoBadge plant={{ id: 1001, name: 'Fiddle Leaf Fig', category: 'Indoor Tree', price: 550, image: 'https://images.unsplash.com/photo-1598880940371-c756e015faf4?w=500&h=500&fit=crop' }} />
            </div>
            <div className="hidden lg:block absolute top-[52%] right-0">
              <PromoBadge plant={{ id: 1002, name: 'Snake Plant', category: 'Succulent', price: 250, image: 'https://images.unsplash.com/photo-1593482892097-43d5ad247636?w=500&h=500&fit=crop' }} />
            </div> */}
            </div>
          </div>
        </div>

        {/* Section title */}

        <SectionTitle>Our Trendy plants</SectionTitle>

        {/* Floating review card to match mock */}
        <div className="hidden md:block absolute left-6 top-[500px]">
          <ReviewCard review={firstReview} />
        </div>

        {/* Two band cards (stacked) */}
        <div className="mt-6 md:mt-8 space-y-6">
          <BandCard
            title="For Your Desks Decorations"
            copy="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
            price={599}
            imageOn="left"
            image={R2}
          />
          <BandCard
            title="For Your Desks Decorations"
            copy="The greenery adds a touch of nature and serenity to any desk, making it feel more inviting and calming."
            price={399}
            imageOn="right"
            image={R3}
          />
        </div>

        {/* <div className="mt-8">
          <ReviewCard review={firstReview} />
        </div> */}

        {/* Two wide band cards matching the figma */}
        {/* <div className="space-y-8 md:space-y-10 mt-8">
          <BandCard
            title="For Your Desks Decorations"
            copy="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
            price={599}
            imageOn="left"
            image="https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=800&h=800&fit=crop"
          />
          <BandCard
            title="For Your Desks Decorations"
            copy="The greenery adds a touch of nature and serenity to any desk, making it feel more inviting and calming."
            price={399}
            imageOn="right"
            image="https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=800&h=800&fit=crop"
          />
        </div> */}

        {/* Removed small product row from first fold to match mock more closely */}
        {/* <ProductRow plants={[
          { id: 101, name: 'Aglaonema', image: 'https://images.unsplash.com/photo-1593482892540-73c9199d6f0e?w=500&h=500&fit=crop' },
          { id: 102, name: 'Pothos', image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=500&h=500&fit=crop' },
          { id: 103, name: 'Cactus', image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=500&h=500&fit=crop' },
        ]} /> */}
      </div>
    </section>
  )
}

export default Hero
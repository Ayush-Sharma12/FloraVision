import plantImg from '../assets/RoseGoldFemanine1.png'; // replace with your image path

function BestPick() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 ">
      {/* Card container */}
      <div className="relative w-full max-w-6xl rounded-[70px] border border-white/20 shadow-2xl bg-white/5 backdrop-blur-xl  p-8 overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Left: Image area */}
        <div className="relative w-full md:w-[50%] flex justify-center items-center md:-ml-8">
          <img
            src={plantImg}
            alt="O2 Plant"
            className="w-[420px] md:w-[520px] lg:w-[580px] xl:w-[620px] object-contain drop-shadow-[0_0_35px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* Right: Text area */}
        <div className="w-full md:w-[50%] text-left text-gray-200 md:pl-8 lg:pl-16 space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
            We Have Small And Best O2 Plants Collection’s
          </h2>

          <p className="text-sm md:text-base text-gray-300">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>

          <p className="text-sm md:text-base text-gray-300">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <button className="px-6 py-2 rounded-md border border-gray-300/30 text-gray-200 hover:bg-gray-700/20 transition">
              Explore
            </button>

            {/* Pagination + Nav */}
            <div className="ml-auto flex items-center gap-4 text-gray-300">
              <button className="p-2 rounded-full hover:bg-gray-700/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-xs">01/04</div>

              <button className="p-2 rounded-full hover:bg-gray-700/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestPick;

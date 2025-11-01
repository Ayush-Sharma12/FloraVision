import Logo from './Logo.jsx';

function Footer() {
  return (
    <footer className="relative z-10 text-white py-16 px-8 md:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Logo />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and
            elevate your living environment."
          </p>

          <div className="flex items-center gap-6 pt-2 text-sm">
            <a href="#" className="hover:text-white transition">FB</a>
            <a href="#" className="hover:text-white transition">TW</a>
            <a href="#" className="hover:text-white transition">LI</a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1">
          <h4 className="text-white font-semibold mb-4">Quick Link’s</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white transition text-decoration-line: underline">Home</a></li>
            <li><a href="#" className="hover:text-white transition text-decoration-line: underline">Type’s Of plant’s</a></li>
            <li><a href="#" className="hover:text-white transition text-decoration-line: underline">Contact</a></li>
            <li><a href="#" className="hover:text-white transition text-decoration-line: underline">Privacy</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-4">
          <h4 className="text-white font-semibold">For Every Update.</h4>
          <div className="flex border border-gray-400/50 rounded-md overflow-hidden w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-3 py-2 bg-transparent text-sm placeholder-gray-400 focus:outline-none"
            />
            <button className="px-4 py-2 bg-white text-black text-sm font-semibold hover:bg-gray-100 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        FloraVision © all right reserve
      </div>
    </footer>
  );
}

export default Footer;

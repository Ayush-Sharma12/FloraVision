import logo from '../assets/plant.png'
function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="w-12 h-12  rounded-full flex items-center justify-center shadow-lg">
        <img src={logo} className="w-8 h-8 text-white/75" />
      </div>
      <span className="font-black text-3xl text-white/75 font-['Inter']">
        FloraVision.
      </span>
    </div>
  )
}

export default Logo
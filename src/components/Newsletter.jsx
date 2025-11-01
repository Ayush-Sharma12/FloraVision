function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log('Newsletter subscribe:', data.get('email'))
    // TODO: Add real subscription logic
  }

  return (
    <section className="py-24 px-6 md:px-10" id="newsletter">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 text-shadow-glow">Subscribe to Our Newsletter</h2>
        <p className="text-white/75 max-w-2xl mx-auto mb-10">
          Get fresh plant arrivals, special deals, and care tips right to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex-1 glass-effect rounded-xl border border-white/20 px-4 h-14 flex items-center">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="w-full bg-transparent outline-none text-white placeholder:text-white/50"
              aria-label="Email address"
            />
          </div>
          <button type="submit" className="h-14 px-8 rounded-xl border-2 border-white text-white text-lg font-medium hover:bg-white/10 transition-all">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
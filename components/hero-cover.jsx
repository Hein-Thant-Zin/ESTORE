export default function HeroCover() {
  return (
    <section className="p-4 overflow-hidden rounded-xl">
          <div className="container mx-auto">
              <div style={{ backgroundImage: "url('/hero-banner.avif')" }} className="overflow-hidden bg-cover h-80 rounded-xl lg:h-96">
                  <div className="flex items-center justify-center w-full h-full">
                      <p className="text-3xl font-bold text-white sm:text-5xl lg:text-6xl drop-shadow">Meet the New You</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

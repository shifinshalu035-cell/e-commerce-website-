function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
<video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
     <source
          src="/background/trimmed.mp4"
          type="video/mp4"
        />
      </video>
  <div
      className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
        }}
      ></div>
<div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-b from-transparent to-black"></div>
<div className="relative z-10 flex flex-col justify-center h-full px-16 text-white max-w-3xl">
        
        <h1 className="text-4xl font-bold text-red-500  pixel-font">
          Stickora
        </h1>
 <h2 className="text-2xl mb-6 font-light pixel-font">
          Create, Customize & Order Your
          Favorite Stickers
        </h2>
<p className="text-gray-300 mb-8 max-w-xl pixel-font">
          Premium anime, movie, quote and
          custom stickers made for creators,
          gamers and collectors.
        </p>
 <div className="flex gap-4">
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg  transition duration-300 hover:scale-105 pixel-font">
            Shop Now
          </button>

          <button className="bg-white/20 backdrop-blur-lg hover:bg-white/40 px-8 py-3 rounded-lg font-semibold transition duration-300 pixel-font">
            Explore
          </button>
        </div>

      </div>
 </section>
  );
}

export default HeroSection;
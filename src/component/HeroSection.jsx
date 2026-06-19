function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center "
      style={{
        backgroundImage: "url('/background/back.jpeg')",
      }}
    >
      <div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 100%)",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(0px)",
    maskImage:
      "linear-gradient(to right, black 0%, black 40%, transparent 100%)",
  }}
></div>


      <div className="relative z-10 flex flex-col justify-center h-full px-12 text-white">
        <h1 className="text-6xl font-bold text-red-500 text-center">
          Stickora
        </h1>

        <h2 className="text-xl mb-6 text-center">
          Create, Customize & Order Your Favorite Stickers
        </h2>

        <button className="bg-red-600 px-6 py-3 rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center "
      style={{
        backgroundImage: "url('/background/back1.png ')",
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
      "linear-gradient(to right, black 0%, black 20%, transparent 100%)",
  }}
></div>


      <div className="relative z-10 flex flex-col justify-center h-full px-12 text-white">
        <h1 className="text-4xl font-bold text-white-500 text-center poppins-font">
          Stickora
        </h1>

        <h2 className="text-xl mb-6 text-center poppins-font">
          Create, Customize & Order Your Favorite Stickers
        </h2>

       <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50">
  Shop Now
</button>
      </div>
    </section>
  );
}

export default HeroSection;
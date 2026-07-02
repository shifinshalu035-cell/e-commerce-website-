function WelcomeSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black rounded-bl-[150px]">

      {/* Background Image */}
      <img
        src="/luffy.jpeg"
        alt="Luffy Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
        <div className="absolute top-0 left-0 w-full h-100 bg-gradient-to-b from-black to-transparent"></div>

      {/* Dark Overlay */}

      {/* Content */}
      <div className="relative z-10 flex items-center  justify-center min-h-screen px-12">

        <div className="max-w-3xl text-center">

          <p className="text-red-500 uppercase tracking-[6px] mb-4 px-20 smooch-font">
            Welcome to Stickora
          </p>

          <h2 className="text-6xl text-white  mb-4 leading-tight smooch-font ">
            More Than Just
            <span className="text-red-600"> Stickers.</span>
          </h2>

          <p className="text-gray-300 text-sm leading-10  smooch-font">
            At <span className="text-white font-semibold">Stickora</span>, we
            believe every sticker tells a story. Whether you're passionate about
            anime, movies, gaming, or original artwork, our mission is to help
            you express your personality through premium-quality stickers.
          </p>

          <p className="text-gray-400 text-sm leading-9 mt-5 smooch-font">
            Every design is created with attention to detail and printed on
            durable, waterproof vinyl to ensure long-lasting quality. From
            decorating laptops and phones to helmets and water bottles, our
            stickers are made to stand out wherever you place them.
          </p>

          <p className="text-gray-400 text-sm leading-9 mt-4 smooch-font">
            Stickera is more than a store—it's a community for collectors,
            creators, and fans who love turning everyday items into something
            unique.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WelcomeSection;
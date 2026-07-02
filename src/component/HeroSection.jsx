import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
function HeroSection() {
   const navigate = useNavigate();
   const handleExplore = () =>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
      document.getElementById("future")
      ?.scrollIntoView({
        behavior:"smooth",
      });
    }else{
      navigate("/login")
    }
   }
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
          src="/background/bk.mp4"
          type="video/mp4"
        />
      </video>
  
<div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
<div className="relative z-10 flex flex-col justify-center h-full px-16 text-white ">
       <div className="flex justify-center"> 
<motion.h1
  initial={{ backgroundPosition: "-200% 0" }}
  animate={{ backgroundPosition: "200% 0" }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatDelay: 5,
    ease: "linear",
  }}
  className="text-4xl  font-bold pixel-font"
  style={{
    backgroundImage:
      "linear-gradient(120deg,#b91c1c 35%,#ffffff 50%,#b91c1c 65%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }}
>
  斯蒂科拉
</motion.h1>
</div>
 <h2 className="text-2xl mb-0 font-light pixel-font flex justify-center">
          Create, Customize & Order Your
          Favorite Stickers
        </h2>
<p className="text-gray-300 mb-0 flex justify-center pixel-font">
          Premium anime, movie, quote and
          custom stickers made for creators,
          gamers and collectors.
        </p>
 <div className="flex justify-center gap-4 w-full mt-0">
  <button className="bg-red-600  hover:bg-white/40 px-8 py-3 rounded-lg transition duration-300 "
  onClick={() =>
    document
      .getElementById("future")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
>
  Shop Now
</button>
<button
  onClick={handleExplore}
  className="bg-white/20 flex justify-center backdrop-blur-lg hover:bg-white/40 px-8 py-3 rounded-lg transition duration-300  "
>
  Explore
</button>
        </div>

      </div>
 </section>
  );
}

export default HeroSection;
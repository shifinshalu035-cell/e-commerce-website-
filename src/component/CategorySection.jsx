import { Link } from "react-router-dom";
import image from "../assets/anime.bg.jpeg";
import image1 from "../assets/movies.bg.jpeg";

function CategorySection() {
  const categories = [
    {
     name: "Movies",
     image: image1,
     
    },
    {
      name:"Anime",
      image:image,

    },
   
    
    
  ];

  return (
    <section className="py-10 px-6 pixel-font">
      <h2 className="text-3xl font-bold text-center mb-8">
        Shop By Category
      </h2>

    <div className="flex flex-wrap justify-center gap-6">
  {categories.map((category) => (
    <Link
      key={category.name}
      to={`/category/${category.name}`}
      className="
        relative
        w-40
        h-30  
        rounded-xl
        overflow-hidden
        shadow-lg
        hover:scale-105
        hover:shadow-2xl
        transition
        cursor-pointer
        block
        group
      "
      style={{
        backgroundImage: `url(${category.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      
      <div className="
        absolute 
        inset-0 
        bg-black/50
        group-hover:bg-black/30
        transition
      "></div>


      
      <div className="
        relative
        h-full
        flex
        items-center
        justify-center
      ">
        <h3 className="
          text-white
          text-2xl
          font-bold
          pixel-font
        ">
          {category.name}
        </h3>
      </div>

    </Link>
  ))}
</div>
    </section>
  );
}

export default CategorySection;
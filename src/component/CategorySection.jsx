import { Link } from "react-router-dom";

function CategorySection() {
  const categories = [
    "Movies",
    "Anime",
    "Wall Art",
    
    
  ];

  return (
    <section className="py-10 px-6 pixel-font">
      <h2 className="text-3xl font-bold text-center mb-8">
        Shop By Category
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="bg-black text-red-600 shadow-lg rounded-xl p-6 text-center hover:scale-105 hover:shadow-2xl transition cursor-pointer block"
          >
            <h3 className="font-bold text-lg">
              {category}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
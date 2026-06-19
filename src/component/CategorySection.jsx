function CategorySection() {
  const categories = [
    "Movies",
    "Quotes",
    "Wall Art",
    "Premium",
    "Custom",
  ];

  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 hover:shadow-2xl transition cursor-pointer"
          >
            <h3 className="font-bold text-lg">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  console.log("ID:", id);

  const products = [
  {
    id: 1,
    title: "Interstellar Quote Sticker",
    price: 99,
    category: "Movies",
    description: "Inspirational quote from Interstellar."
  },
  {
    id: 2,
    title: "Batman Logo Sticker",
    price: 149,
    category: "Movies",
    description: "Classic Batman logo design."
  },
  {
    id: 3,
    title: "Never Give Up Sticker",
    price: 79,
    category: "Quotes",
    description: "Motivational quote sticker."
  },
  {
    id: 4,
    title: "Dark Knight Quote Sticker",
    price: 119,
    category: "Movies",
    description: "Famous quote from The Dark Knight."
  },
  {
    id: 5,
    title: "Inception Dream Sticker",
    price: 129,
    category: "Movies",
    description: "Inspired by the movie Inception."
  },
  {
    id: 6,
    title: "Success Is A Journey Sticker",
    price: 89,
    category: "Quotes",
    description: "Daily motivation sticker."
  },
  {
    id: 7,
    title: "Believe In Yourself Sticker",
    price: 69,
    category: "Quotes",
    description: "Positive mindset quote sticker."
  },
  {
    id: 8,
    title: "Minimal Mountain Wall Sticker",
    price: 299,
    category: "Wall Art",
    description: "Beautiful mountain wall decor."
  },
  {
    id: 9,
    title: "Nature Landscape Wall Sticker",
    price: 349,
    category: "Wall Art",
    description: "Nature-inspired wall sticker."
  },
  {
    id: 10,
    title: "Premium Marvel Collection",
    price: 499,
    category: "Premium",
    description: "Exclusive Marvel sticker pack."
  },
  {
    id: 11,
    title: "Premium Movie Quotes Pack",
    price: 599,
    category: "Premium",
    description: "Limited edition movie quotes."
  },
  {
    id: 12,
    title: "Anime Hero Sticker",
    price: 139,
    category: "Anime",
    description: "Popular anime character design."
  },
  {
    id: 13,
    title: "Samurai Anime Sticker",
    price: 159,
    category: "Anime",
    description: "Japanese samurai-style sticker."
  },
  {
    id: 14,
    title: "Custom Name Sticker",
    price: 199,
    category: "Custom",
    description: "Personalized name sticker."
  },
  {
    id: 15,
    title: "Custom Logo Sticker",
    price: 249,
    category: "Custom",
    description: "Upload your own logo design."
  }
];



  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <h1>Product Details</h1>

      <h2>{product.title}</h2>

      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>

      <p>
        <strong>Category:</strong>{" "}
        {product.category}
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {product.description}
      </p>

      <div>
        <h3>Select Size</h3>

        <button>Small</button>
        <button>Medium</button>
        <button>Large</button>
      </div>

      <div>
        <h3>Quantity</h3>

        <button>-</button>
        <span> 1 </span>
        <button>+</button>
      </div>

      <br />

      <button>❤️ Add To Wishlist</button>

      <button>🛒 Add To Cart</button>
    </div>
  );
}

export default ProductDetails;

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
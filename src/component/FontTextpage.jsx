import { Link } from "react-router-dom";
function FontTest() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="logo-font text-5xl">Bebas Neue</h1>
      <h1 className="poppins-font text-5xl">Poppins</h1>
      <h1 className="playfair-font text-5xl">Playfair Display</h1>
      <h1 className="cinzel-font text-5xl">Cinzel</h1>
      <h1 className="oswald-font text-5xl">Oswald</h1>
      <h1 className="fredoka-font text-5xl">Fredoka</h1>
      <h1 className="bangers-font text-5xl">Bangers</h1>
      <h1 className="lobster-font text-5xl">Lobster</h1>
      <h1 className="pixel-font text-5xl">
  PIXEL TEST
</h1>
<Link
  to="/"
  style={{ fontFamily: "Pixelify Sans" }}
>
  Home
</Link>
    </div>
  );
}

export default FontTest;
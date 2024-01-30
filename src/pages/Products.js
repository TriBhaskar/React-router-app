import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "A Book", price: 6, description: "A great book!" },
  { id: "p2", title: "A Carpet", price: 66, description: "Red and green." },
  {
    id: "p3",
    title: "An Online Course",
    price: 6,
    description: "Learn to code!",
  },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;

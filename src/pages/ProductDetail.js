// Importing necessary dependencies from react-router-dom
import { Link, useParams } from "react-router-dom";

// Defining the ProductDetailPage component
export default function ProductDetailPage() {
  // Accessing the URL parameters using useParams hook
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <p>
        {/* Creating a link to navigate back to the previous page */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

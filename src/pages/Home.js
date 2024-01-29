import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products.</Link>{" "}
        {/* Instead of <a> tag we use Link component. */}
      </p>
      <p>
        <button onClick={() => navigate("/products")}>
          Go to the list of products
        </button>
      </p>
    </>
  );
}

export default HomePage;

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products.</Link>{" "}
        {/* Instead of <a> tag we use Link component. */}
      </p>
    </>
  );
}

export default HomePage;

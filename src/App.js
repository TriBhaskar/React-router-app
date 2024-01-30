// Import necessary dependencies from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import the required pages
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootPage from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// Create a browser router configuration
const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootPage />, // Render the RootPage component when the path is "/root"
    errorElement: <ErrorPage />, // Render the ErrorPage component when there is an error
    children: [
      { path: "", element: <HomePage /> }, // Render the HomePage component when the path is empty
      { path: "products", element: <ProductsPage /> }, // Render the ProductsPage component when the path is "/products"
      { path: "products/:productId", element: <ProductDetailPage /> }, // Render the ProductDetailPage component when the path is "/products/:productId"
    ],
  },
]);

// Define the App component
function App() {
  return <RouterProvider router={router} />; // Provide the router configuration to the RouterProvider component
}

export default App;

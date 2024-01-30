// Import the MainNavigation component from the "../components/MainNavigation" file
import MainNavigation from "../components/MainNavigation";

// Define and export the ErrorPage component
export default function ErrorPage() {
  return (
    <>
      <MainNavigation /> {/* Render the MainNavigation component */}
      <main>
        <h1>An error occurred!</h1> {/* Render the heading */}
        <p>Could not find this page</p> {/* Render the error message */}
      </main>
    </>
  );
}

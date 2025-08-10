import { Link } from "react-router";

function Homepage() {
  return (
    <>
      <h1>yo yo</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>{" "}
      </p>
    </>
  );
}

export default Homepage;

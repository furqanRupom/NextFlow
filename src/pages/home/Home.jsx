import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3 className="">this is our homepage</h3>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;

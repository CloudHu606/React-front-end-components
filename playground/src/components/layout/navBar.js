import { Link } from "react-router-dom";
import "../../css/nav.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/singlec">Single Components</Link>
        <Link to="/projects">Small projects</Link>
      </nav>
    </>
  );
};

export default Navbar;

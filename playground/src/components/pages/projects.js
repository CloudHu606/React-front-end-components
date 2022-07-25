import { Link } from "react-router-dom";

const Projects = () => {
  let list = {
    margin: "1% 5%",
    textAlign: "left",
  };

  return (
    <>
      <h2>Projects</h2>
      <ul style={list}>
        <li>
          <Link to="/projects/cinemark">Cinemark</Link>
        </li>
      </ul>
    </>
  );
};

export default Projects;

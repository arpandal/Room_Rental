import "./navbar.css";
import One from "../images/logo.png";


const Navbar = () => {
  return (
    <div className="nav">
      <div className="navContainer">
        <span className="logo">
        <img src={One} alt="logo"/>
        </span>
        <div className="navItem">
          <button className="navBtn">Register</button>
          <button className="navBtn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

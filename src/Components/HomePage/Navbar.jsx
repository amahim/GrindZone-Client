import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';
const Navbar = () => (
  <div className="navbar flex flex-row-reverse lg:flex-row  items-center justify-between ">
    <div className="">
      <Link to="/" className="">
        <img src={Logo} className="lg:w-24 lg:h-24 w-16 h-16" />
      </Link>
    </div>
    <div className=" flex items-center lg:gap-8">
      <ul className="text-white menu menu-horizontal px-1 hidden lg:flex lg:gap-8 text-lg">
        <li>
          <a href="#membership">Membership</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      
      {/* Mobile dropdown */}
      <div className="dropdown lg:hidden  ">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffffff"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  p-1 shadow"
        >
          
          <li>
            <a href="#membership">Membership</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a className=" bg-[#97FB57]">Join</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;

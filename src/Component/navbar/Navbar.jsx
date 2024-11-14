import { NavLink } from "react-router-dom";

const Navbar = () => {

  const links = <>
    <li><NavLink to="/">Home</NavLink>  </li>
    <li><NavLink to={"/listedBooks"}>Listed Books</NavLink></li>
    <li><a>Pages to Read</a></li>
  </>
  return (
    <div className="navbar bg-base-100 mt-2 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  shadow">
       {links}
      </ul>
    </div>
    <a className="text-6xl font-bold">book vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 border-2 rounded-lg border-gray-500  items-center text-[17px]">
       {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className=" btn btn-info">Sing in</a>
    <a className="btn btn-success">Sing up</a>
  </div>
</div>
  );
};

export default Navbar;
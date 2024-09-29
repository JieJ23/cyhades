import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar w-[95%] mx-auto my-4 rounded-lg bg-base-300 max-w-[800px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#3e5ed4] text-white btn-square"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary mt-1 rounded-lg z-40 w-52 p-2 text-black"
          >
            <li>
              <Link to={`/Hades`}>Hades</Link>
            </li>
            <li>
              <Link to={`/Hades2`}>Hades2</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={"/"} className="btn text-xl text-white">
          Home
        </Link>
      </div>
      <div className="navbar-end">
        <Link
          to={
            "https://docs.google.com/forms/d/e/1FAIpQLSdgJUEQirVM1Dwzd3_rJ8wy5wXxbv8n2SYIrVyJ8et1uWXY-g/viewform"
          }
          target="_blank"
          className="btn bg-[#3e5ed4] text-xl text-white"
        >
          Submit Run
        </Link>
      </div>
    </div>
  );
}

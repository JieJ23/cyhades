import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar w-[95%] mx-auto my-4 rounded-lg bg-base-300 max-w-[800px] font-serif">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl text-gray-100" to={`/`}>
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <Link
              to={`https://docs.google.com/forms/d/e/1FAIpQLSdgJUEQirVM1Dwzd3_rJ8wy5wXxbv8n2SYIrVyJ8et1uWXY-g/viewform`}
              target="_blank"
              className="text-gray-100"
            >
              Submit
            </Link>
          </li> */}
          <li>
            <details className="z-40 text-gray-100">
              <summary>Games</summary>
              <ul className="bg-base-100 p-2 rounded-md">
                <li>
                  <Link to={`/Hades`}>Hades</Link>
                </li>
                <li>
                  <Link to={`/Hades2`}>Hades2</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

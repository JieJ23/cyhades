import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className="navbar w-[95%] mx-auto rounded-lg bg-transparent max-w-[800px] font-serif sticky top-2 z-40 backdrop-blur-md border-[1px] border-white/30"
      data-theme="dark"
    >
      <div className="flex-1">
        <Link
          className="btn btn-ghost font-customCin text-xl text-gray-100"
          to={`/`}
        >
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to={`/FormSubmission`}
              className="text-white font-customCin text-xl"
            >
              Submit
            </Link>
          </li>
          {/* <li>
            <Link to={`/Guide`} className="text-white">
              Guide
            </Link>
          </li> */}
          {/* <li>
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
          </li> */}
        </ul>
      </div>
    </div>
  );
}

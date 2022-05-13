const data = [{}];

interface CompProps {
  [key: string]: any;
}
const Comp = ({}: CompProps) => {
  return <></>;
};

export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md fixed top-0 right-0 left-0 flex w-full items-center justify-between bg-white py-2 shadow-lg">
          <div className="px-6">
            <button
              className="navbar-toggler border-0 bg-transparent py-3 px-2 text-xl leading-none text-gray-600 transition-shadow duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 md:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentL"
              aria-controls="navbarSupportedContentL"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
            <div
              className="collapse navbar-collapse grow items-center"
              id="navbarSupportedContentL"
            >
              <ul className="navbar-nav mr-auto flex flex-col md:flex-row">
                <li className="nav-item">
                  <a
                    className="nav-link block p-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link block p-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link block p-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link block p-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="bg-gray-100 p-12 text-center text-gray-700">
          <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
          <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
          <button
            type="button"
            className="mb-1 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Call to action
          </button>
        </div>
      </header>
    </>
  );
}

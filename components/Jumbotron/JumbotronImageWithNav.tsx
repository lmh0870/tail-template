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
        <nav className="navbar navbar-expand-md relative flex w-full items-center justify-between bg-gray-50 py-2 shadow-lg">
          <div className="px-6">
            <button
              className="navbar-toggler border-0 bg-transparent py-3 px-2 text-xl leading-none text-gray-600 transition-shadow duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 md:hidden"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
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
              id="navbarSupportedContentY"
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

        <div className="relative h-[400px] overflow-hidden bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-no-repeat p-12 text-center">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
                <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
                <a
                  className="mb-1 inline-block rounded border-2 border-gray-200 px-7 py-3 text-sm font-medium uppercase leading-snug text-gray-200 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  href="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

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
      <nav className="navbar navbar-expand-lg relative flex w-full items-center justify-between bg-gray-50 py-2 shadow-lg">
        <div className="px-6">
          <button
            className="navbar-toggler border-0 bg-transparent py-3 text-xl leading-none text-gray-600 transition-shadow duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentZ"
            aria-controls="navbarSupportedContentZ"
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
            id="navbarSupportedContentZ"
          >
            <ul className="navbar-nav mr-auto flex flex-row">
              <li className="nav-item">
                <a
                  className="nav-link block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:px-2"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Regular link
                </a>
              </li>
              <li className="dropdown nav-item static">
                <a
                  className="dropdown-toggle nav-link block flex items-center whitespace-nowrap py-2 pr-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:px-2"
                  href="#"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  type="button"
                  id="dropdownMenuButtonZ"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mega menu
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="ml-2 w-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </a>
                <div
                  className="dropdown-menu absolute left-0 top-full mt-0 hidden w-full bg-white shadow-lg"
                  aria-labelledby="dropdownMenuButtonZ"
                >
                  <div className="px-6 py-5 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      <div className="bg-white text-gray-600">
                        <p className="block w-full border-b border-gray-200 px-6 py-2 font-semibold uppercase text-gray-700">
                          Lorem ipsum
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Dolor sit
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Amet consectetur
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Cras justo odio
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Adipisicing elit
                        </a>
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block w-full border-b border-gray-200 px-6 py-2 font-semibold uppercase text-gray-700">
                          Explit voluptas
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Perspiciatis quo
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Cras justo odio
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Laudant maiores
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Provident dolor
                        </a>
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block w-full border-b border-gray-200 px-6 py-2 font-semibold uppercase text-gray-700">
                          Iste quaerato
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Cras justo odio
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Est iure
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Praesentium
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Laboriosam
                        </a>
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block w-full border-b border-gray-200 px-6 py-2 font-semibold uppercase text-gray-700">
                          Cras justo odio
                        </p>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Saepe
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Vel alias
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center border-b border-gray-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Sunt doloribus
                        </a>
                        <a
                          href="#!"
                          aria-current="true"
                          className="block flex w-full items-center px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="mr-1.5 w-1.5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                          >
                            <path
                              fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                            ></path>
                          </svg>
                          Cum dolores
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

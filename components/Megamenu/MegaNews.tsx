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
            data-bs-target="#navbarSupportedContentU"
            aria-controls="navbarSupportedContentU"
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
            id="navbarSupportedContentU"
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
                  id="dropdownMenuButtonU"
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
                  aria-labelledby="dropdownMenuButtonU"
                >
                  <div className="px-6 py-5 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="bg-white">
                        <p className="block w-full pt-2 font-semibold uppercase text-gray-700">
                          Lorem ipsum
                        </p>
                        <div
                          className="relative overflow-hidden bg-cover bg-no-repeat py-4"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                            className="w-full rounded-md shadow-lg"
                            alt="Louvre"
                          />
                          <a href="#!">
                            <div
                              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                        <div className="mt-1 mb-3 flex items-center justify-between">
                          <p className="flex items-center text-blue-400">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              className="mr-2 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"
                              ></path>
                            </svg>
                            Travels
                          </p>
                          <p className="text-gray-700">
                            <u>15.07.2021</u>
                          </p>
                        </div>
                        <a href="#!">
                          <h5 className="mb-2 text-xl font-semibold text-gray-700">
                            This is title of the news
                          </h5>
                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit, iste aliquid. Sed id nihil magni, sint
                            vero provident esse numquam perferendis ducimus
                            dicta adipisci iusto nam temporibus modi animi
                            laboriosam.
                          </p>
                        </a>
                      </div>
                      <div className="bg-white">
                        <p className="block w-full pt-2 font-semibold uppercase text-gray-700">
                          Explit voluptas
                        </p>
                        <div
                          className="relative overflow-hidden bg-cover bg-no-repeat py-4"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/011.webp"
                            className="w-full rounded-md shadow-lg"
                            alt="Louvre"
                          />
                          <a href="#!">
                            <div
                              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                        <div className="mt-1 mb-3 flex items-center justify-between">
                          <p className="flex items-center text-red-500">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              className="mr-2 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 544 512"
                            >
                              <path
                                fill="currentColor"
                                d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
                              ></path>
                            </svg>
                            Business
                          </p>
                          <p className="text-gray-700">
                            <u>15.07.2021</u>
                          </p>
                        </div>
                        <a href="#!">
                          <h5 className="mb-2 text-xl font-semibold text-gray-700">
                            This is title of the news
                          </h5>
                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit, iste aliquid. Sed id nihil magni, sint
                            vero provident esse numquam perferendis ducimus
                            dicta adipisci iusto nam temporibus modi animi
                            laboriosam.
                          </p>
                        </a>
                      </div>
                      <div className="bg-white">
                        <p className="block w-full pt-2 font-semibold uppercase text-gray-700">
                          Cras justo odio
                        </p>
                        <div
                          className="relative overflow-hidden bg-cover bg-no-repeat py-4"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/018.webp"
                            className="w-full rounded-md shadow-lg"
                            alt="Louvre"
                          />
                          <a href="#!">
                            <div
                              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                        <div className="mt-1 mb-3 flex items-center justify-between">
                          <p className="flex items-center text-yellow-500">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              className="mr-2 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
                              ></path>
                            </svg>
                            Technology
                          </p>
                          <p className="text-gray-700">
                            <u>15.07.2021</u>
                          </p>
                        </div>
                        <a href="#!">
                          <h5 className="mb-2 text-xl font-semibold text-gray-700">
                            This is title of the news
                          </h5>
                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit, iste aliquid. Sed id nihil magni, sint
                            vero provident esse numquam perferendis ducimus
                            dicta adipisci iusto nam temporibus modi animi
                            laboriosam.
                          </p>
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

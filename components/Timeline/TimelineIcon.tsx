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
      <h3 className="mb-6 -ml-3 text-2xl font-bold text-gray-700">
        Latest News
      </h3>

      <ol className="border-l-2 border-purple-600">
        <li>
          <div className="flex-start md:flex">
            <div className="-ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="h-3 w-3 text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div className="ml-6 mb-10 block max-w-md rounded-lg bg-gray-100 p-6 shadow-lg">
              <div className="mb-4 flex justify-between">
                <a
                  href="#!"
                  className="text-sm font-medium text-purple-600 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800"
                >
                  New Web Design
                </a>
                <a
                  href="#!"
                  className="text-sm font-medium text-purple-600 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800"
                >
                  04 / 02 / 2022
                </a>
              </div>
              <p className="mb-6 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
              <button
                type="button"
                className="inline-block rounded
                bg-purple-600 px-4
                py-1.5 text-xs font-medium uppercase leading-tight
                text-white
                shadow-md transition duration-150
                ease-in-out hover:bg-purple-700
                hover:shadow-lg focus:bg-purple-700
                focus:shadow-lg focus:outline-none
                focus:ring-0 active:bg-purple-800
                active:shadow-lg"
                data-mdb-ripple="true"
              >
                Preview
              </button>
              <button
                type="button"
                className="inline-block rounded border-2 border-purple-600 px-3.5 py-1 text-xs font-medium uppercase leading-tight text-purple-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-mdb-ripple="true"
              >
                See demo
              </button>
            </div>
          </div>
        </li>
        <li>
          <div className="flex-start md:flex">
            <div className="-ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="h-3 w-3 text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div className="ml-6 mb-10 block max-w-md rounded-lg bg-gray-100 p-6 shadow-lg">
              <div className="mb-4 flex justify-between">
                <a
                  href="#!"
                  className="text-sm font-medium text-purple-600 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800"
                >
                  21 000 Job Seekers
                </a>
                <a
                  href="#!"
                  className="text-sm font-medium text-purple-600 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800"
                >
                  12 / 01 / 2022
                </a>
              </div>
              <p className="mb-6 text-gray-700">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p>
              <button
                type="button"
                className="inline-block rounded bg-purple-600 px-4 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                data-mdb-ripple="true"
              >
                Preview
              </button>
              <button
                type="button"
                className="inline-block rounded border-2 border-purple-600 px-3.5 py-1 text-xs font-medium uppercase leading-tight text-purple-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-mdb-ripple="true"
              >
                See demo
              </button>
            </div>
          </div>
        </li>
        <li>
          <div className="flex-start md:flex">
            <div className="-ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="h-3 w-3 text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div className="ml-6 mb-10 block max-w-md rounded-lg bg-gray-100 p-6 shadow-lg">
              <div className="mb-4 flex justify-between">
                <a
                  href="#!"
                  className="text-sm font-medium text-purple-600 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800"
                >
                  Awesome Employers
                </a>
                <a
                  href="#!"
                  className="text-sm font-medium text-purple-600 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800"
                >
                  21 / 12 / 2021
                </a>
              </div>
              <p className="mb-6 text-gray-700">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
              <button
                type="button"
                className="inline-block rounded bg-purple-600 px-4 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                data-mdb-ripple="true"
              >
                Preview
              </button>
              <button
                type="button"
                className="inline-block rounded border-2 border-purple-600 px-3.5 py-1 text-xs font-medium uppercase leading-tight text-purple-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                data-mdb-ripple="true"
              >
                See demo
              </button>
            </div>
          </div>
        </li>
      </ol>
    </>
  );
}

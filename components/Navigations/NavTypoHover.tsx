export default function Container({}) {
  return (
    <>
      <nav
        className="bg-white
        shadow
        "
      >
        <div
          className="container mx-auto
          px-6 py-4"
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <a
                  className="text-2xl font-bold text-gray-800
                  hover:text-gray-700
                  lg:text-3xl"
                  href="#"
                >
                  Brand
                </a>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className="-mx-4 hidden lg:flex lg:items-center">
              <a
                href="#"
                className="mx-4 mt-2 block text-sm capitalize text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-indigo-400 lg:mt-0"
              >
                Web developers
              </a>
              <a
                href="#"
                className="mx-4 mt-2 block text-sm capitalize text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-indigo-400 lg:mt-0"
              >
                Web Designers
              </a>
              <a
                href="#"
                className="mx-4 mt-2 block text-sm capitalize text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-indigo-400 lg:mt-0"
              >
                UI/UX Designers
              </a>
              <a
                href="#"
                className="mx-4 mt-2 block text-sm capitalize text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-indigo-400 lg:mt-0"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

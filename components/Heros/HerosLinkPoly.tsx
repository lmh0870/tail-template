export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div className="w-full">
        {/* Left - Content(Link) */}
        <nav
          className="bg-white
          shadow-lg"
        >
          <div
            className="
            py-2 px-8
            md:flex md:items-center md:justify-between
            md:px-12"
          >
            <div className="flex items-center justify-between">
              <div
                className="
                text-2xl font-bold text-gray-800
                md:text-3xl
                "
              >
                <a href="#">Brand</a>
              </div>
              <div className="md:hidden">
                <button
                  type="button"
                  className="block
                  text-gray-800 hover:text-gray-700
                  focus:text-gray-700 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6
                    fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="hidden"
                      d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                    />
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="-mx-2
              flex hidden flex-col
              md:block md:flex-row"
            >
              <a
                href="#"
                className="rounded
                py-2 px-2
                text-gray-800
                hover:bg-gray-900
                hover:font-medium hover:text-gray-100
                md:mx-2"
              >
                Home
              </a>
              <a
                href="#"
                className="rounded
                py-2 px-2
                text-gray-800
                hover:bg-gray-900
                hover:font-medium hover:text-gray-100
                md:mx-2"
              >
                About
              </a>
              <a
                href="#"
                className="rounded
                py-2 px-2
                text-gray-800
                hover:bg-gray-900
                hover:font-medium hover:text-gray-100
                md:mx-2"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
        {/* Right - Picture */}
        <div className="flex h-[600px] bg-white">
          <div
            className="flex items-center
            px-8
            text-center
            md:px-12
            lg:w-1/2 lg:text-left"
          >
            <div>
              <h2
                className="text-3xl font-semibold
                text-gray-800 md:text-4xl"
              >
                Build Your New <span className="text-indigo-600">Idea</span>
              </h2>
              <p
                className="mt-2
                text-sm text-gray-500
                md:text-base"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates. Cumque debitis dignissimos id quam vel!
              </p>
              <div
                className="mt-6
                flex justify-center
                lg:justify-start"
              >
                <a
                  className="rounded
                  bg-gray-900
                  px-4 py-3
                  text-xs font-semibold text-gray-200
                  hover:bg-gray-800"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="mx-4
                  rounded
                  bg-gray-300
                  px-4 py-3
                  text-xs font-semibold text-gray-900
                  hover:bg-gray-400"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div
            className="hidden
            lg:block
            lg:w-1/2"
            style={{
              clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
          >
            <div
              className="h-full
              bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')]
              object-cover"
            >
              <div
                className="h-full
                bg-black opacity-25"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

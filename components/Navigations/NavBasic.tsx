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
      <div>
        <div className="flex h-screen flex-wrap place-items-center">
          <section
            className="relative
            mx-auto"
          >
            <nav
              className="flex w-screen justify-between
              bg-gray-900
              text-white"
            >
              <div
                className="flex w-full items-center
                px-5 py-6
                xl:px-12"
              >
                <a
                  className="font-heading
                  text-3xl font-bold"
                  href="#"
                >
                  {/* <img className="h-9" src="/public/vercel.svg" alt="logo"> */}
                  Logo Here.
                </a>
                {/* <!-- Nav Links --> */}
                <ul className="font-heading mx-auto hidden space-x-12 px-4 font-semibold md:flex">
                  <li>
                    <a className="hover:text-gray-200" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200" href="#">
                      Catagory
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200" href="#">
                      Collections
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-200" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
                {/* <!-- Header Icons --> */}
                <div
                  className="hidden
                  items-center
                  space-x-5
                  xl:flex "
                >
                  <a className="hover:text-gray-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </a>
                  <a className="flex items-center hover:text-gray-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="absolute -mt-5 ml-4 flex">
                      <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
                    </span>
                  </a>
                  {/* <!-- Sign In / Register      --> */}
                  <a className="flex items-center hover:text-gray-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-gray-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* <!-- Responsive navbar --> */}
              <a className="mr-6 flex items-center xl:hidden" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -mt-5 ml-4 flex">
                  <span
                    className="absolute inline-flex
                    h-3 w-3
                    animate-ping
                    rounded-full
                    bg-pink-400
                    opacity-75"
                  />
                  <span
                    className="relative inline-flex
                    h-3 w-3
                    rounded-full
                    bg-pink-500"
                  />
                </span>
              </a>
              <a
                className="navbar-burger
                mr-12
                self-center
                xl:hidden"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </a>
            </nav>
          </section>
        </div>
        {/*  */}
        <div className="absolute bottom-0 right-0 z-10 mb-4 mr-4">
          <div>
            <a
              title="Follow me on twitter"
              href="https://www.twitter.com/asad_codes"
              target="_blank"
              className="block h-16 w-16 transform rounded-full shadow transition-all hover:rotate-12 hover:scale-110 hover:shadow-lg"
              rel="noreferrer"
            >
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
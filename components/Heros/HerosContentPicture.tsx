export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div className="dark:bg-gray-900">
        <div className="container mx-auto py-9 md:py-12 lg:py-24">
          <div className="items-strech mx-4 flex flex-col justify-center lg:flex-row">
            {/* Left - Content */}
            <div
              className="flex items-center justify-center
              lg:w-4/12"
            >
              <div>
                <h1
                  className="w-7/12
                  text-4xl font-semibold text-gray-900
                  md:text-5xl xl:text-6xl"
                >
                  Amoire
                </h1>
                <p
                  className="mt-4
                  text-base leading-normal text-gray-600
                  md:w-7/12
                  lg:mt-5 lg:w-11/12
                  xl:w-10/12"
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using.
                </p>
              </div>
            </div>
            {/* Right - Picture */}
            <div
              className="mt-6
              md:mt-8
              lg:mt-0 lg:w-8/12"
            >
              <div
                className="relative
                h-full w-full"
              >
                <img
                  src="https://i.ibb.co/gmV2mLr/pexels-maksim-goncharenok-4352247-1-1-1.png"
                  alt="A lounge sofa"
                  role="img"
                  className="relative
                  hidden
                  h-full w-full
                  lg:block"
                />
                <img
                  src="https://i.ibb.co/Mhgkt2f/pexels-maksim-goncharenok-4352247-1-1-1.png"
                  alt="A lounge sofa"
                  role="img"
                  className="h-full w-full
                  lg:hidden"
                />
                <div
                  className="absolute bottom-0 right-0 hidden
                  w-1/2
                  bg-red-200
                  lg:block"
                >
                  <button
                    className="flex w-full items-center justify-between
                    bg-gray-800
                    p-5
                    text-xl font-medium text-white
                    hover:bg-gray-700
                    focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2
                    xl:p-6
                    xl:text-2xl"
                  >
                    Discover More
                    <div>
                      <svg
                        className="fill-stroke"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66663 16H25.3333"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 21.3333L25.3333 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 10.667L25.3333 16.0003"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div
                className="mt-6 md:mt-8
                lg:hidden"
              >
                <button
                  className="flex w-full items-center justify-between
                  bg-gray-800
                  px-5 py-4
                  text-base font-semibold leading-tight text-white
                  hover:bg-gray-700
                  focus:outline-none
                  focus:ring-2 focus:ring-gray-800 focus:ring-offset-2
                  md:w-5/12 md:text-xl
                  lg:py-7 lg:px-7"
                >
                  Discover More
                  <div>
                    <svg
                      className="fill-stroke"
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M0.453735 12H14.4537"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.4539 16L14.4539 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.4539 8L14.4539 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="21.7269" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

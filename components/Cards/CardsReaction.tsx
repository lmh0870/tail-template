const data = [
  {
    date: "12 April 2021",
    title: "피어나",
    bg: "/reaction/Cos.jpg",
  },
  {
    date: "12 April 2021",
    title: "아잉아잉",
    bg: "/reaction/유메코.jpg",
  },
  {
    date: "12 April 2021",
    title: "리카리카",
    bg: "/reaction/누나.jpg",
  },
  {
    date: "12 April 2021",
    title: "코카인",
    bg: "/reaction/냥.gif",
  },
  {
    date: "12 April 2021",
    title: "앙카댄스",
    bg: "/reaction/정비공.png",
  },
  {
    date: "12 April 2021",
    title: "고질라",
    bg: "/reaction/경멸.jpg",
  },
];

export interface CompProps {
  [key: string]: any;
}

export default function Comp({}: CompProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-96 py-9 px-4 sm:w-auto md:py-12 md:px-6 lg:px-20 lg:py-16 2xl:container 2xl:mx-auto">
        {/* Content */}
        <div className="mt-8 items-stretch md:mt-12 lg:flex">
          {/* Content - Left */}
          <div className="lg:w-1/2">
            <div className="items-center justify-between gap-x-6 sm:flex xl:gap-x-8">
              {/* Content - Left - 1 */}
              <div className="relative sm:w-1/2">
                <div>
                  <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                    {data[0].date}
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="5 text-xl font-semibold text-white">
                      {data[0].title}
                    </h2>
                    {/* <p className="text-base leading-4 text-white mt-2">
                  {data[0].subTitle}
                </p> */}
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src={data[0].bg}
                  className="aspect-square w-full"
                  alt="chair"
                />
              </div>
              {/* Content - Left - 2 */}
              <div className="relative mt-4 sm:mt-0 sm:w-1/2">
                <div>
                  <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                    {data[1].date}
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="5 text-xl font-semibold text-white">
                      {data[1].title}
                    </h2>
                    {/* <p className="text-base leading-4 text-white mt-2">
                  {data[1].subTitle}
                </p> */}
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src={data[1].bg}
                  className="aspect-square w-full"
                  alt="wall design"
                />
              </div>
            </div>
            {/* Content - Left - 3 */}
            <div className="relative">
              <div>
                <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white md:p-10">
                  {data[2].date}
                </p>
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h2 className="5 text-xl font-semibold text-white">
                    {data[2].title}
                  </h2>
                  {/* <p className="text-base leading-4 text-white mt-2">
                {data[2].subTitle}
              </p> */}
                  <a
                    href="javascript:void(0)"
                    className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src={data[2].bg}
                alt="sitting place"
                // mt-8
                className="mt-4 aspect-square w-full sm:block md:mt-6"
              />
            </div>
          </div>
          {/* Content - Right */}
          <div className="mt-4 flex-col justify-between md:mt-6 lg:ml-4 lg:mt-0 lg:flex lg:w-1/2 xl:ml-8">
            <div className="relative">
              <div>
                <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white md:p-10">
                  {data[3].date}
                </p>
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h2 className="5 text-xl font-semibold text-white">
                    {data[3].title}
                  </h2>
                  {/* <p className="text-base leading-4 text-white mt-2">
                {data[3].subTitle}
              </p> */}
                  <a
                    href="javascript:void(0)"
                    className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src={data[3].bg}
                alt="sitting place"
                className="aspect-square w-full sm:block"
              />
            </div>
            <div className="mt-4 items-center justify-between gap-x-6 sm:flex md:mt-6 xl:gap-x-8">
              <div className="relative w-full">
                <div>
                  <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                    {data[4].date}
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="5 text-xl font-semibold text-white">
                      {data[4].title}
                    </h2>
                    {/* <p className="text-base leading-4 text-white mt-2">
                  {data[4].subTitle}
                </p> */}
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src={data[4].bg}
                  className="aspect-square w-full"
                  alt="chair"
                />
              </div>
              <div className="relative mt-4 w-full sm:mt-0">
                <div>
                  <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                    {data[5].date}
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="5 text-xl font-semibold text-white">
                      {data[5].title}
                    </h2>
                    {/* <p className="text-base leading-4 text-white mt-2">
                  {data[5].subTitle}
                </p> */}
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src={data[5].bg}
                  className="aspect-square w-full"
                  alt="wall design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

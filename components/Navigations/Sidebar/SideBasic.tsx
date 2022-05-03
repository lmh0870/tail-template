export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div className="flex">
        <div
          className="hidden
          h-screen w-2/5
          border-r
          bg-white
          md:flex md:w-1/4"
        >
          <div
            className="mx-auto
            py-10"
          >
            <h1
              className="mb-10
              cursor-pointer
              text-2xl font-bold text-[#EC5252]
              duration-150"
            >
              Asason
            </h1>
            <ul>
              <li
                className="mt-10
                flex
                cursor-pointer
                space-x-2
                duration-150
                hover:text-[#EC5252]"
              >
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="font-semibold">Home</span>
              </li>
              <li
                className="mt-10
                flex
                cursor-pointer
                space-x-2
                duration-150
                hover:text-[#EC5252]"
              >
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
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-semibold">All Courses</span>
              </li>
              <li
                className="mt-10
                flex
                cursor-pointer
                space-x-2
                duration-150
                hover:text-[#EC5252]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <span className="font-semibold">My Course</span>
              </li>
              <li
                className="mt-10
                flex
                cursor-pointer
                space-x-2
                duration-150
                hover:text-[#EC5252]"
              >
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="font-semibold">Profile</span>
              </li>
              <li
                className="mt-10
                flex
                cursor-pointer
                space-x-2
                duration-150
                hover:text-[#EC5252]"
              >
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <span className="font-semibold">Setthing</span>
              </li>
              <button
                className="mt-10
                w-full
                rounded-full
                bg-[#EC5252]
                py-1.5
                text-white"
              >
                Learn
              </button>
            </ul>
          </div>
        </div>
        <main
          className="min-h-screen
          w-full
          bg-white"
        >
          <nav
            className="flex items-center justify-between
            border-b
            bg-white
            px-10 py-6"
          >
            <div
              className="flex w-96 items-center
              space-x-3
              rounded-md
              bg-gray-100
              px-4 py-2"
            >
              <input
                type="text"
                placeholder="search"
                className="w-full
                bg-gray-100 outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div
              className="flex items-center
              space-x-4
              "
            >
              <img
                className="w-8 rounded-full"
                src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
                alt="Elon Musk"
              />
              <p
                className="hidden
                md:block"
              >
                Elon Musk
              </p>
            </div>
          </nav>
          <div className="mx-6">
            <h1
              className="my-6
              text-3xl"
            >
              All Courses
            </h1>
            <div
              className="mt-6
              space-y-3
              md:flex md:space-y-0 md:space-x-4"
            >
              <div
                className="h-90
                rounded-md
                bg-gradient-to-r from-indigo-600 to-purple-600
                p-10"
              >
                <p
                  className="cursor-pointer
                  text-3xl font-thin text-indigo-50"
                >
                  How to do Basic Jumping and how to landing safely
                </p>
                <div
                  className="mt-4
                  flex items-center
                  space-x-4"
                >
                  <img
                    className="h-10 w-10
                    cursor-pointer
                    rounded-full"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                  <div>
                    <h3
                      className="cursor-pointer
                      font-semibold text-indigo-50"
                    >
                      Thomas Hope
                    </h3>
                    <p
                      className="text-sm
                      font-thin text-indigo-50"
                    >
                      53K views • 2 weeks ago
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="h-90
                rounded-md
                bg-gradient-to-r from-indigo-600 to-purple-600 p-10"
              >
                <p
                  className="cursor-pointer
                  text-3xl font-thin text-indigo-50"
                >
                  How to do Basic Jumping and how to landing safely
                </p>
                <div
                  className="mt-4
                  flex items-center
                  space-x-4"
                >
                  <img
                    className="h-10 w-10
                    cursor-pointer
                    rounded-full
                    "
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                  <div>
                    <h3
                      className="cursor-pointer
                      font-semibold
                      text-indigo-50"
                    >
                      Thomas Hope
                    </h3>
                    <p className="text-sm font-thin text-indigo-50">
                      53K views • 2 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mx-6 mt-10
            grid grid-cols-2 gap-6
            md:grid-cols-3 lg:grid-cols-4"
          >
            <div
              className="overflow-hidden
              rounded-t-md shadow-lg "
            >
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="relative p-2">
                  <p
                    className="mt-6
                    text-lg font-semibold"
                  >
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="absolute -top-6 right-6 h-12
                    w-12
                    rounded-full
                    border-2
                    p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden
              rounded-t-md
              shadow-lg "
            >
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div
                  className="relative
                  p-2"
                >
                  <p
                    className="mt-6
                    text-lg font-semibold"
                  >
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="absolute -top-6 right-6 h-12 w-12
                    rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden
              rounded-t-md
              shadow-lg "
            >
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="relative p-2">
                  <p
                    className="mt-6
                    text-lg font-semibold"
                  >
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="absolute
                    -top-6 right-6 h-12 w-12
                    rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-t-md shadow-lg ">
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="relative p-2">
                  <p className="mt-6 text-lg font-semibold">
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="absolute -top-6 right-6 h-12 w-12 rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-t-md shadow-lg ">
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="relative p-2">
                  <p className="mt-6 text-lg font-semibold">
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="absolute -top-6 right-6 h-12 w-12 rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-t-md shadow-lg ">
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="relative p-2">
                  <p className="mt-6 text-lg font-semibold">
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="absolute -top-6 right-6 h-12 w-12 rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-t-md shadow-lg ">
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="relative p-2">
                  <p className="mt-6 text-lg font-semibold">
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="absolute -top-6 right-6 h-12 w-12 rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-t-md shadow-lg ">
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="relative p-2">
                  <p className="mt-6 text-lg font-semibold">
                    Basic how to ride your skateboard comfortly
                  </p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="absolute -top-6 right-6 h-12 w-12 rounded-full border-2 p-0.5"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray-100 py-6 text-center">
            Copyright &copy; 2022 dej45.com Template by Namina
          </footer>
        </main>
      </div>
    </>
  );
}

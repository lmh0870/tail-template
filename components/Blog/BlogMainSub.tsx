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
    <div className="mx-auto max-w-screen-xl">
      <header className="flex items-center justify-between border-b py-2">
        <a
          href="#"
          className="px-2 font-bold uppercase text-purple-800 lg:px-0"
        >
          LOGO
        </a>
        <ul className="inline-flex items-center">
          <li className="px-2 md:px-4">
            <a
              href=""
              className="font-semibold text-purple-600 hover:text-purple-500"
            >
              {" "}
              Home{" "}
            </a>
          </li>
          <li className="px-2 md:px-4">
            <a
              href=""
              className="font-semibold text-gray-500 hover:text-purple-500"
            >
              {" "}
              About{" "}
            </a>
          </li>
          <li className="px-2 md:px-4">
            <a
              href=""
              className="font-semibold text-gray-500 hover:text-purple-500"
            >
              {" "}
              Press{" "}
            </a>
          </li>
          <li className="px-2 md:px-4">
            <a
              href=""
              className="font-semibold text-gray-500 hover:text-purple-500"
            >
              {" "}
              Contact{" "}
            </a>
          </li>
          <li className="hidden px-2 md:block md:px-4">
            <a
              href=""
              className="font-semibold text-gray-500 hover:text-purple-500"
            >
              {" "}
              Login{" "}
            </a>
          </li>
          <li className="hidden px-2 md:block md:px-4">
            <a
              href=""
              className="font-semibold text-gray-500 hover:text-purple-500"
            >
              {" "}
              Register{" "}
            </a>
          </li>
        </ul>
      </header>
      {/*  */}
      <main>
        {/* Contnet - 1 */}
        <div>
          {/* Main - 1 */}
          <a
            className="relative mb-4 inline-block
            h-[24em] w-full
            rounded
            md:mb-0 md:w-2/3"
            href="./blog.html"
          >
            <div
              className="bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.7))]
              absolute left-0 bottom-0 z-10
              h-full w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              className="absolute left-0 top-0 z-0
              h-full w-full
              rounded
              object-cover"
            />
            <div
              className="absolute bottom-0 left-0 z-20
              p-4
              "
            >
              <span
                className="mb-2
                inline-flex items-center justify-center
                bg-black
                px-4 py-1
                text-gray-200
                "
              >
                Nutrition
              </span>
              <h2 className="text-4xl font-semibold leading-tight text-gray-100">
                Pellentesque a consectetur velit, ac molestie ipsum. Donec
                sodales, massa et auctor.
              </h2>
              <div className="mt-3 flex">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="mr-2
                  h-10 w-10
                  rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-200">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    {" "}
                    14 Aug{" "}
                  </p>
                </div>
              </div>
            </div>
          </a>
          {/* Main - 2 */}
          <a
            className="relative h-[24em] w-full rounded md:w-full"
            href="./blog.html"
          >
            {/* <div
              className="bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.7))]
              absolute left-0 top-0 z-10
              h-full w-full"
            /> */}
            <img
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
              className="absolute left-0 top-0 z-0
              h-full w-full
              rounded
              object-cover"
            />
            <div
              className="absolute bottom-0 left-0 z-20
              p-4 "
            >
              <span className="mb-2 inline-flex items-center justify-center bg-black px-4 py-1 text-gray-200">
                Science
              </span>
              <h2 className="text-3xl font-semibold leading-tight text-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h2>
              <div className="mt-3 flex">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                  className="mr-2 h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-200">
                    {" "}
                    Chrishell Staus{" "}
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    {" "}
                    15 Aug{" "}
                  </p>
                </div>
              </div>
            </div>
          </a>
          {/* End */}
        </div>
        {/* Content - 2 */}
        <div className="mt-10 mb-10 block px-2 lg:flex lg:space-x-2 lg:p-0">
          <div className="w-full lg:w-2/3">
            <a
              className="mb-10 block w-full rounded lg:flex"
              href="./blog-single-1.html"
            >
              <div
                className="h-48 flex-none overflow-hidden bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')] bg-cover text-center opacity-75
                lg:w-48"
                title="deit is very important"
              ></div>
              <div className="flex flex-col justify-between rounded bg-white px-4 leading-normal">
                <div>
                  <div className="mt-3 mb-2 text-2xl font-bold text-gray-700 md:mt-0">
                    Aliquam venenatis nisl id purus rhoncus, in efficitur sem
                    hendrerit.
                  </div>
                  <p className="text-base text-gray-700">
                    Duis euismod est quis lacus elementum, eu laoreet dolor
                    consectetur. Pellentesque sed neque vel tellus lacinia
                    elementum. Proin consequat ullamcorper eleifend.
                  </p>
                </div>
                <div className="mt-3 flex">
                  <img
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    className="mr-2 h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold capitalize text-gray-700">
                      {" "}
                      eduard franz{" "}
                    </p>
                    <p className="text-xs text-gray-600"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </a>

            <div className="mb-10 w-full rounded lg:flex">
              <div
                className="h-48 flex-none overflow-hidden bg-[url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')] bg-cover text-center opacity-75 lg:w-48"
                title="deit is very important"
              ></div>
              <div className="flex flex-col justify-between rounded bg-white px-4 leading-normal">
                <div>
                  <div className="mt-3 mb-2 text-2xl font-bold text-gray-700 md:mt-0">
                    Integer commodo, sapien ut vulputate viverra
                  </div>
                  <p className="text-base text-gray-700">
                    Nam malesuada aliquet metus, ac commodo augue mollis sit
                    amet. Nam bibendum risus sit amet metus semper consectetur.
                    Proin consequat ullamcorper eleifend. Nam bibendum risus sit
                    amet metus semper consectetur.
                  </p>
                </div>
                <div className="mt-3 flex">
                  <img
                    src="https://randomuser.me/api/portraits/women/54.jpg"
                    className="mr-2 h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold capitalize text-gray-700">
                      {" "}
                      Serenity Hughes{" "}
                    </p>
                    <p className="text-xs text-gray-600"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10 w-full rounded lg:flex">
              <div
                className="h-48 flex-none overflow-hidden bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')] bg-cover text-center opacity-75 lg:w-48"
                title="deit is very important"
              ></div>
              <div className="flex flex-col justify-between rounded bg-white px-4 leading-normal">
                <div>
                  <div className="mt-3 mb-2 text-2xl font-bold text-gray-700 md:mt-0">
                    Suspendisse varius justo eu risus laoreet fermentum non
                    aliquam dolor
                  </div>
                  <p className="text-base text-gray-700">
                    Mauris porttitor, velit at tempus vulputate, odio turpis
                    facilisis dui, vitae eleifend odio ipsum at odio. Phasellus
                    luctus scelerisque felis eget suscipit.
                  </p>
                </div>
                <div className="mt-3 flex">
                  <img
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    className="mr-2 h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold capitalize text-gray-700">
                      {" "}
                      eduard franz{" "}
                    </p>
                    <p className="text-xs text-gray-600"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-3 lg:w-1/3">
            <div className="mb-4">
              <h5 className="mb-2 px-1 text-lg font-bold uppercase text-gray-700">
                {" "}
                Popular Topics{" "}
              </h5>
              <ul>
                <li className="border-b border-t border-white px-1 py-4 transition duration-300 hover:border-gray-200">
                  <a
                    href="#"
                    className="flex cursor-pointer items-center text-gray-600"
                  >
                    <span className="mr-3 inline-block h-4 w-4 bg-green-300"></span>
                    Nutrition
                    <span className="ml-auto text-gray-500">23 articles</span>
                    <i className="bx bx-right-arrow-alt ml-1 text-gray-500"></i>
                  </a>
                </li>
                <li className="border-b border-t border-white px-1 py-4 transition duration-300 hover:border-gray-200">
                  <a
                    href="#"
                    className="flex cursor-pointer items-center text-gray-600"
                  >
                    <span className="mr-3 inline-block h-4 w-4 bg-indigo-300"></span>
                    Food & Diet
                    <span className="ml-auto text-gray-500">18 articles</span>
                    <i className="bx bx-right-arrow-alt ml-1 text-gray-500"></i>
                  </a>
                </li>
                <li className="border-b border-t border-white px-1 py-4 transition duration-300 hover:border-gray-200">
                  <a
                    href="#"
                    className="flex cursor-pointer items-center text-gray-600"
                  >
                    <span className="mr-3 inline-block h-4 w-4 bg-yellow-300"></span>
                    Workouts
                    <span className="ml-auto text-gray-500">34 articles</span>
                    <i className="bx bx-right-arrow-alt ml-1 text-gray-500"></i>
                  </a>
                </li>
                <li className="border-b border-t border-white px-1 py-4 transition duration-300 hover:border-gray-200">
                  <a
                    href="#"
                    className="flex cursor-pointer items-center text-gray-600"
                  >
                    <span className="mr-3 inline-block h-4 w-4 bg-blue-300"></span>
                    Immunity
                    <span className="ml-auto text-gray-500">9 articles</span>
                    <i className="bx bx-right-arrow-alt ml-1 text-gray-500"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="border border-dotted"></div>

            <div className="mt-4 mb-4 p-1">
              <h5 className="mb-2 text-lg font-bold uppercase text-gray-700">
                {" "}
                Subscribe{" "}
              </h5>
              <p className="text-gray-600">
                Subscribe to our newsletter. We deliver the best health related
                articles to your inbox
              </p>
              <input
                placeholder="your email address"
                className="mt-4 w-full rounded-t border bg-gray-100 p-2 text-gray-700 hover:outline-none"
              />
              <button className="w-full rounded-b bg-indigo-600 px-4 py-2 capitalize tracking-wide text-gray-200">
                Subscribe
              </button>
            </div>

            <div className="border border-dotted"></div>
          </div>
        </div>
      </main>

      {/*  */}
    </div>
  );
}

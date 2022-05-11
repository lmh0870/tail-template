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
      <div className="overflow-x-hidden bg-gray-100">
        <nav className="bg-white px-6 py-4 shadow">
          <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="#"
                  className="text-xl font-bold text-gray-800 md:text-2xl"
                >
                  Brand
                </a>
              </div>
              <div>
                <button
                  type="button"
                  className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden flex-col md:-mx-4 md:flex md:flex-row">
              <a
                href="#"
                className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
              >
                Home
              </a>
              <a
                href="#"
                className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
              >
                Blog
              </a>
              <a
                href="#"
                className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
              >
                About us
              </a>
            </div>
          </div>
        </nav>

        <div className="px-6 py-8">
          <div className="container mx-auto flex justify-between">
            <div className="w-full lg:w-8/12">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                  Post
                </h1>
                <div>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>Latest</option>
                    <option>Last Week</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <div className="mx-auto max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      Jun 1, 2020
                    </span>
                    <a
                      href="#"
                      className="rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 hover:bg-gray-500"
                    >
                      Laravel
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Build Your New Idea with Laravel Freamwork.
                    </a>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempora expedita dicta totam aspernatur doloremque.
                      Excepturi iste iusto eos enim reprehenderit nisi,
                      accusamus delectus nihil quis facere in modi ratione
                      libero!
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="text-blue-500 hover:underline">
                      Read more
                    </a>
                    <div>
                      <a href="#" className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                          alt="avatar"
                          className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">
                          Alex John
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="mx-auto max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      mar 4, 2019
                    </span>
                    <a
                      href="#"
                      className="rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 hover:bg-gray-500"
                    >
                      Design
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Accessibility tools for designers and developers
                    </a>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempora expedita dicta totam aspernatur doloremque.
                      Excepturi iste iusto eos enim reprehenderit nisi,
                      accusamus delectus nihil quis facere in modi ratione
                      libero!
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="text-blue-500 hover:underline">
                      Read more
                    </a>
                    <div>
                      <a href="#" className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                          alt="avatar"
                          className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">
                          Jane Doe
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="mx-auto max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      Feb 14, 2019
                    </span>
                    <a
                      href="#"
                      className="rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 hover:bg-gray-500"
                    >
                      PHP
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      PHP: Array to Map
                    </a>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempora expedita dicta totam aspernatur doloremque.
                      Excepturi iste iusto eos enim reprehenderit nisi,
                      accusamus delectus nihil quis facere in modi ratione
                      libero!
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="text-blue-500 hover:underline">
                      Read more
                    </a>
                    <div>
                      <a href="#" className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                          alt="avatar"
                          className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">
                          Lisa Way
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="mx-auto max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      Dec 23, 2018
                    </span>
                    <a
                      href="#"
                      className="rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 hover:bg-gray-500"
                    >
                      Django
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Django Dashboard - Learn by Coding
                    </a>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempora expedita dicta totam aspernatur doloremque.
                      Excepturi iste iusto eos enim reprehenderit nisi,
                      accusamus delectus nihil quis facere in modi ratione
                      libero!
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="text-blue-500 hover:underline">
                      Read more
                    </a>
                    <div>
                      <a href="#" className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                          alt="avatar"
                          className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">
                          Steve Matt
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="mx-auto max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      Mar 10, 2018
                    </span>
                    <a
                      href="#"
                      className="rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 hover:bg-gray-500"
                    >
                      Testing
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      TDD Frist
                    </a>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempora expedita dicta totam aspernatur doloremque.
                      Excepturi iste iusto eos enim reprehenderit nisi,
                      accusamus delectus nihil quis facere in modi ratione
                      libero!
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="text-blue-500 hover:underline">
                      Read more
                    </a>
                    <div>
                      <a href="#" className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                          alt="avatar"
                          className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">
                          Khatab Wedaa
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex">
                  <a
                    href="#"
                    className="mx-1 cursor-not-allowed rounded-md bg-white px-3 py-2 font-medium text-gray-500"
                  >
                    previous
                  </a>

                  <a
                    href="#"
                    className="mx-1 rounded-md bg-white px-3 py-2 font-medium text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    1
                  </a>

                  <a
                    href="#"
                    className="mx-1 rounded-md bg-white px-3 py-2 font-medium text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    2
                  </a>

                  <a
                    href="#"
                    className="mx-1 rounded-md bg-white px-3 py-2 font-medium text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    3
                  </a>

                  <a
                    href="#"
                    className="mx-1 rounded-md bg-white px-3 py-2 font-medium text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
            <div className="-mx-8 hidden w-4/12 lg:block">
              <div className="px-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">
                  Authors
                </h1>
                <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-6 py-4 shadow-md">
                  <ul className="-mx-4">
                    <li className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                        alt="avatar"
                        className="mx-4 h-10 w-10 rounded-full object-cover"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Alex John
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 23 Posts
                        </span>
                      </p>
                    </li>
                    <li className="mt-6 flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                        alt="avatar"
                        className="mx-4 h-10 w-10 rounded-full object-cover"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Jane Doe
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 52 Posts
                        </span>
                      </p>
                    </li>
                    <li className="mt-6 flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                        alt="avatar"
                        className="mx-4 h-10 w-10 rounded-full object-cover"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Lisa Way
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 73 Posts
                        </span>
                      </p>
                    </li>
                    <li className="mt-6 flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                        alt="avatar"
                        className="mx-4 h-10 w-10 rounded-full object-cover"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Steve Matt
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 245 Posts
                        </span>
                      </p>
                    </li>
                    <li className="mt-6 flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                        alt="avatar"
                        className="mx-4 h-10 w-10 rounded-full object-cover"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Khatab Wedaa
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 332 Posts
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 px-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">
                  Categories
                </h1>
                <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-4 py-6 shadow-md">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - AWS
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Laravel
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Vue
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Design
                      </a>
                    </li>
                    <li className="mt-2 flex items-center">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Django
                      </a>
                    </li>
                    <li className="mt-2 flex items-center">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - PHP
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 px-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">
                  Recent Post
                </h1>
                <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-8 py-6 shadow-md">
                  <div className="flex items-center justify-center">
                    <a
                      href="#"
                      className="rounded bg-gray-600 px-2 py-1 text-sm text-green-100 hover:bg-gray-500"
                    >
                      Laravel
                    </a>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:underline"
                    >
                      Build Your New Idea with Laravel Freamwork.
                    </a>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                        alt="avatar"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <a
                        href="#"
                        className="mx-3 text-sm text-gray-700 hover:underline"
                      >
                        Alex John
                      </a>
                    </div>
                    <span className="text-sm font-light text-gray-600">
                      Jun 1, 2020
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-800 px-6 py-2 text-gray-100">
          <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
            <a href="#" className="text-2xl font-bold">
              Brand
            </a>
            <p className="mt-2 md:mt-0">All rights reserved 2020.</p>
            <div className="-mx-2 mt-4 mb-2 flex md:mt-0 md:mb-0">
              <a href="#" className="mx-2 text-gray-100 hover:text-gray-400">
                <svg viewBox="0 0 512 512" className="h-4 w-4 fill-current">
                  <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>
                </svg>
              </a>
              <a href="#" className="mx-2 text-gray-100 hover:text-gray-400">
                <svg viewBox="0 0 512 512" className="h-4 w-4 fill-current">
                  <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                </svg>
              </a>
              <a href="#" className="mx-2 text-gray-100 hover:text-gray-400">
                <svg viewBox="0 0 512 512" className="h-4 w-4 fill-current">
                  <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
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
      <div className="-my-2 overflow-x-auto py-2 pr-10 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-white py-4 px-12 align-middle shadow-lg">
          <div className="flex justify-between">
            <div className="inline-flex h-12 w-7/12 rounded border bg-transparent px-2 lg:px-6">
              <div className="relative mb-6 flex h-full w-full flex-wrap items-stretch">
                <div className="flex">
                  <span className="whitespace-no-wrap text-grey-dark flex items-center rounded rounded-r-none border border-r-0 border-none bg-transparent py-2 text-sm leading-normal lg:px-3">
                    <svg
                      width="18"
                      height="18"
                      className="w-4 lg:w-auto"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                        stroke="#455A64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.9993 16.9993L13.1328 13.1328"
                        stroke="#455A64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="text-xxs relative w-px flex-auto flex-1 flex-shrink flex-grow rounded rounded-l-none border border-l-0 border-none px-3 font-thin leading-normal tracking-wide text-gray-500 focus:outline-none lg:text-xs lg:text-base"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-dashboard inline-block min-w-full overflow-hidden rounded-bl-lg rounded-br-lg bg-white px-8 pt-3 align-middle shadow">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 px-6 py-3 text-left leading-4 tracking-wider text-blue-500">
                  ID
                </th>
                <th className="border-b-2 border-gray-300 px-6 py-3 text-left text-sm leading-4 tracking-wider text-blue-500">
                  Fullname
                </th>
                <th className="border-b-2 border-gray-300 px-6 py-3 text-left text-sm leading-4 tracking-wider text-blue-500">
                  Email
                </th>
                <th className="border-b-2 border-gray-300 px-6 py-3 text-left text-sm leading-4 tracking-wider text-blue-500">
                  Phone
                </th>
                <th className="border-b-2 border-gray-300 px-6 py-3 text-left text-sm leading-4 tracking-wider text-blue-500">
                  Status
                </th>
                <th className="border-b-2 border-gray-300 px-6 py-3 text-left text-sm leading-4 tracking-wider text-blue-500">
                  Created At
                </th>
                <th className="border-b-2 border-gray-300 px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="text-sm leading-5 text-blue-900">
                    Damilare Anjorin
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  damilareanjorin1@gmail.com
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  +2348106420637
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                    ></span>
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  September 12
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-right text-sm leading-5">
                  <button className="rounded border border-blue-500 px-5 py-2 text-blue-500 transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="text-sm leading-5 text-blue-900">
                    Damilare Anjorin
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  damilareanjorin1@gmail.com
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  +2348106420637
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                    ></span>
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  September 12
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-right text-sm leading-5">
                  <button className="rounded border border-blue-500 px-5 py-2 text-blue-500 transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="text-sm leading-5 text-blue-900">
                    Damilare Anjorin
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  damilareanjorin1@gmail.com
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  +2348106420637
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-red-200 opacity-50"
                    ></span>
                    <span className="relative text-xs">not active</span>
                  </span>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  September 12
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-right text-sm leading-5">
                  <button className="rounded border border-blue-500 px-5 py-2 text-blue-500 transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="text-sm leading-5 text-blue-900">
                    Damilare Anjorin
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  damilareanjorin1@gmail.com
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  +2348106420637
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                    ></span>
                    <span className="relative text-xs">active</span>
                  </span>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  September 12
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-right text-sm leading-5">
                  <button className="rounded border border-blue-500 px-5 py-2 text-blue-500 transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4">
                  <div className="text-sm leading-5 text-blue-900">
                    Damilare Anjorin
                  </div>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  damilareanjorin1@gmail.com
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  +2348106420637
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-orange-900">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-orange-200 opacity-50"
                    ></span>
                    <span className="relative text-xs">disabled</span>
                  </span>
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-sm leading-5 text-blue-900">
                  September 12
                </td>
                <td className="whitespace-no-wrap border-b border-gray-500 px-6 py-4 text-right text-sm leading-5">
                  <button className="rounded border border-blue-500 px-5 py-2 text-blue-500 transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="work-sans mt-4 sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm leading-5 text-blue-700">
                Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">200</span>
                of
                <span className="font-medium">2000</span>
                results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex shadow-sm">
                <div>
                  <a
                    href="#"
                    className="focus:shadow-outline-blue relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-400 focus:z-10 focus:border-blue-300 focus:outline-none active:bg-gray-100 active:text-gray-500"
                    aria-label="Previous"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="focus:shadow-outline-blue active:bg-tertiary hover:bg-tertiary relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-blue-700 transition duration-150 ease-in-out focus:z-10 focus:border-blue-300 focus:outline-none active:text-gray-700"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="focus:shadow-outline-blue active:bg-tertiary hover:bg-tertiary relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-blue-600 transition duration-150 ease-in-out focus:z-10 focus:border-blue-300 focus:outline-none active:text-gray-700"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="focus:shadow-outline-blue active:bg-tertiary hover:bg-tertiary relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-blue-600 transition duration-150 ease-in-out focus:z-10 focus:border-blue-300 focus:outline-none active:text-gray-700"
                  >
                    3
                  </a>
                </div>
                <div v-if="pagination.current_page < pagination.last_page">
                  <a
                    href="#"
                    className="focus:shadow-outline-blue relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-400 focus:z-10 focus:border-blue-300 focus:outline-none active:bg-gray-100 active:text-gray-500"
                    aria-label="Next"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

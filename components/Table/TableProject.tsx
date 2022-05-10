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
      <section className="bg-blueGray-50 relative py-16">
        <div className="mb-12 w-full px-4">
          <div
            className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-pink-900 
  text-white shadow-lg"
          >
            <div className="mb-0 rounded-t border-0 px-4 py-3">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-1 flex-grow px-4 ">
                  <h3 className="text-lg font-semibold text-white">
                    Card Tables
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto ">
              <table className="w-full border-collapse items-center bg-transparent">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-pink-700 bg-pink-800 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-pink-300">
                      Project
                    </th>
                    <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-pink-700 bg-pink-800 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-pink-300">
                      Budget
                    </th>
                    <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-pink-700 bg-pink-800 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-pink-300">
                      Status
                    </th>
                    <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-pink-700 bg-pink-800 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-pink-300">
                      Users
                    </th>
                    <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-pink-700 bg-pink-800 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-pink-300">
                      Completion{" "}
                    </th>
                    <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-pink-700 bg-pink-800 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-pink-300"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className="flex items-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                      <img
                        src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                        className="h-12 w-12 rounded-full border bg-white"
                        alt="..."
                      />
                      <span className="ml-3 font-bold text-white">
                        {" "}
                        Argon Design System{" "}
                      </span>
                    </th>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      $2,500 USD
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-circle mr-2 text-orange-500"></i>
                      pending
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex">
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="flex h-2 overflow-hidden rounded bg-red-200 text-xs">
                            <div
                              style={{
                                width: "60%",
                              }}
                              className="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs">
                      <a
                        href="#pablo"
                        className="text-blueGray-500 block py-1 px-3"
                      >
                        <i className="fas fa-ellipsis-v"></i>
                      </a>
                      <div
                        className="min-w-48 z-50 float-left hidden list-none rounded bg-white py-2 text-left text-base shadow-lg"
                        id="table-dark-1-dropdown"
                      >
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Another action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Something else here
                        </a>
                        <div className="border-blueGray-100 my-2 h-0 border border-solid"></div>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Seprated link
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th className="flex items-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                      <img
                        src="https://demos.creative-tim.com/notus-js/assets/img/angular.jpg"
                        className="h-12 w-12 rounded-full border bg-white"
                        alt="..."
                      />
                      <span className="ml-3 font-bold text-white">
                        Angular Now UI Kit PRO{" "}
                      </span>
                    </th>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      $1,800 USD
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-circle mr-2 text-emerald-500"></i>
                      completed
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex">
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">100%</span>
                        <div className="relative w-full">
                          <div className="flex h-2 overflow-hidden rounded bg-emerald-500 text-xs">
                            <div
                              style={{
                                width: "30%",
                              }}
                              className="flex flex-col justify-center whitespace-nowrap bg-emerald-500 text-center text-white shadow-none"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs">
                      <a
                        href="#pablo"
                        className="text-blueGray-500 block py-1 px-3"
                      >
                        <i className="fas fa-ellipsis-v"></i>
                      </a>
                      <div
                        className="min-w-48 z-50 float-left hidden list-none rounded bg-white py-2 text-left text-base shadow-lg"
                        id="table-dark-1-dropdown"
                      >
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Another action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Something else here
                        </a>
                        <div className="border-blueGray-100 my-2 h-0 border border-solid"></div>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Seprated link
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th className="flex items-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                      <img
                        src="https://demos.creative-tim.com/notus-js/assets/img/sketch.jpg"
                        className="h-12 w-12 rounded-full border bg-white"
                        alt="..."
                      />
                      <span className="ml-3 font-bold text-white">
                        Black Dashboard Sketch
                      </span>
                    </th>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      $3,150 USD
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-circle mr-2 text-orange-500"></i>
                      delayed
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex">
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">73%</span>
                        <div className="relative w-full">
                          <div className="flex h-2 overflow-hidden rounded bg-red-200 text-xs">
                            <div
                              style={{
                                width: "73%",
                              }}
                              className="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs">
                      <a
                        href="#pablo"
                        className="text-blueGray-500 block py-1 px-3"
                      >
                        <i className="fas fa-ellipsis-v"></i>
                      </a>
                      <div
                        className="min-w-48 z-50 float-left hidden list-none rounded bg-white py-2 text-left text-base shadow-lg"
                        id="table-dark-1-dropdown"
                      >
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Another action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Something else here
                        </a>
                        <div className="border-blueGray-100 my-2 h-0 border border-solid"></div>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Seprated link
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th className="flex items-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                      <img
                        src="https://demos.creative-tim.com/notus-js/assets/img/react.jpg"
                        className="h-12 w-12 rounded-full border bg-white"
                        alt="..."
                      />
                      <span className="ml-3 font-bold text-white">
                        React Material Dashboard
                      </span>
                    </th>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      $4,400 USD
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-circle mr-2 text-teal-500"></i>on
                      schedule
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex">
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">90%</span>
                        <div className="relative w-full">
                          <div className="flex h-2 overflow-hidden rounded bg-teal-200 text-xs">
                            <div
                              style={{
                                width: "90%",
                              }}
                              className="flex flex-col justify-center whitespace-nowrap bg-teal-500 text-center text-white shadow-none"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs">
                      <a
                        href="#pablo"
                        className="text-blueGray-500 block py-1 px-3"
                      >
                        <i className="fas fa-ellipsis-v"></i>
                      </a>
                      <div
                        className="min-w-48 z-50 float-left hidden list-none rounded bg-white py-2 text-left text-base shadow-lg"
                        id="table-dark-1-dropdown"
                      >
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Another action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Something else here
                        </a>
                        <div className="border-blueGray-100 my-2 h-0 border border-solid"></div>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Seprated link
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th className="flex items-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                      <img
                        src="https://demos.creative-tim.com/notus-js/assets/img/vue.jpg"
                        className="h-12 w-12 rounded-full border bg-white"
                        alt="..."
                      />
                      <span className="ml-3 font-bold text-white">
                        Vue Material Dashboard
                      </span>
                    </th>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      $2,200USD
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <i className="fas fa-circle mr-2 text-emerald-500"></i>
                      completed
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex">
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                          alt="..."
                          className="border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow"
                        />
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">100%</span>
                        <div className="relative w-full">
                          <div className="flex h-2 overflow-hidden rounded bg-emerald-200 text-xs">
                            <div
                              style={{
                                width: "100%",
                              }}
                              className="flex flex-col justify-center whitespace-nowrap bg-emerald-500 text-center text-white shadow-none"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs">
                      <a
                        href="#pablo"
                        className="text-blueGray-500 block py-1 px-3"
                      >
                        <i className="fas fa-ellipsis-v"></i>
                      </a>
                      <div
                        className="min-w-48 z-50 float-left hidden list-none rounded bg-white py-2 text-left text-base shadow-lg"
                        id="table-dark-1-dropdown"
                      >
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Another action
                        </a>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Something else here
                        </a>
                        <div className="border-blueGray-100 my-2 h-0 border border-solid"></div>
                        <a
                          href="#pablo"
                          className="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
                        >
                          Seprated link
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer className="relative mt-8 pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="mx-auto w-full px-4 text-center md:w-6/12">
                <div className="text-blueGray-500 py-1 text-sm font-semibold">
                  Made with{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Notus JS
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Creative Tim
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

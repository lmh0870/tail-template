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
      <div className="flex h-screen flex-col">
        <header className="flex flex-shrink-0">
          <div
            className="w-64
            flex-shrink-0
            bg-gray-800
            px-4 py-3"
          >
            <button
              className="block
              flex w-full items-center"
            >
              <img
                className="h-8 w-8
                rounded-full
                object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                alt=""
              />
              <span
                className="ml-4
                text-sm font-medium text-white"
              >
                Monica White
              </span>
              <svg
                className="ml-auto ml-10
                h-6 w-6
                stroke-current
                text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 10l-4 4-4-4"
                  stroke="4A5568"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            className="flex flex-1 items-center justify-between
            bg-gray-700
            px-6"
          >
            <nav>
              <a
                href="#"
                className="inline-block
                rounded-lg
                bg-gray-800
                px-3 py-2
                text-sm font-medium leading-none
                text-white
                hover:bg-gray-600"
              >
                MailBox
              </a>
              <a
                href="#"
                className="ml-2
                inline-block
                rounded-lg
                px-3 py-2
                text-sm font-medium leading-none text-white
                hover:bg-gray-600"
              >
                Customers
              </a>
              <a
                href="#"
                className="inline-block
                rounded-lg
                px-3 py-2
                text-sm font-medium leading-none text-white
                hover:bg-gray-600"
              >
                Reporting
              </a>
              <a
                href="#"
                className="inline-block
                rounded-lg
                px-3 py-2
                text-sm font-medium leading-none text-white
                hover:bg-gray-600"
              >
                Manage
              </a>
            </nav>
            <div className="flex items-center">
              <span className="relative">
                <span
                  className="absolute inset-y-0 left-0
                  flex items-center
                  "
                >
                  <i
                    className="fa fa-search h-5 w-5 px-2"
                    style={{
                      color: "gray",
                    }}
                  ></i>
                </span>
                <input
                  className="block
                  w-full
                  rounded-lg
                  bg-gray-900
                  py-2 pl-10 pr-4
                  text-sm leading-none text-white
                  placeholder-gray-400
                  focus:bg-white
                  focus:text-gray-900
                  focus:placeholder-gray-700"
                  placeholder="Search"
                />
              </span>
              <button
                className="ml-6
                text-gray-400
                hover:text-gray-200"
              >
                <i
                  className="fa fa-bell-o
                  h-5 w-5
                  fill-current"
                  aria-hidden="true"
                  style={{
                    color: "#fff",
                  }}
                ></i>
              </button>
              <button
                className="ml-6
                text-gray-400 hover:text-gray-200"
              >
                <i
                  className="fa fa-question-circle-o
                  h-5 w-5
                  fill-current"
                  aria-hidden="true"
                  style={{
                    color: "#fff",
                  }}
                ></i>
              </button>
            </div>
          </div>
        </header>
        {/*  */}
        <div className="flex flex-1 overflow-x-hidden">
          {/* SideBar */}
          <div className="w-64 overflow-y-auto bg-gray-100 p-6">
            <nav>
              <h2 className="font-semibold uppercase tracking-wide text-gray-600">
                MailBoxes
              </h2>
              <div className="mt-3">
                <a
                  href=""
                  className="-mx-3  flex items-center justify-between rounded-lg bg-gray-200 py-1 px-3 text-sm font-medium"
                >
                  <span>
                    <i
                      className="fa fa-envelope-o h-6 w-6 fill-current text-gray-700"
                      aria-hidden="true"
                    ></i>
                    <span className=" text-gray-900">Inbox</span>
                  </span>
                  <span className="inline-block rounded-full bg-gray-300 px-4 py-1 text-center text-xs font-semibold leading-none text-gray-700">
                    6
                  </span>
                </a>
              </div>
              <div className="mt-3">
                <a
                  href=""
                  className="-mx-3  flex items-center justify-between rounded-lg py-1 px-3 text-sm font-medium hover:bg-gray-200"
                >
                  <span>
                    <i
                      className="fa fa-flag-o h-6 w-6 fill-current text-gray-700"
                      aria-hidden="true"
                    ></i>
                    <span className=" text-gray-900">Flagged</span>
                  </span>
                </a>
              </div>
              <div className="mt-3">
                <a
                  href=""
                  className="-mx-3  flex items-center justify-between rounded-lg py-1 px-3 text-sm font-medium hover:bg-gray-200"
                >
                  <span>
                    <i
                      className="fa fa-pencil-square-o h-6 w-6 fill-current text-gray-700"
                      aria-hidden="true"
                    ></i>
                    <span className=" text-gray-900">Drafts</span>
                  </span>
                  <span className="inline-block rounded-full bg-gray-300 px-4 py-1 text-center text-xs font-semibold leading-none text-gray-700">
                    2
                  </span>
                </a>
              </div>
              <div className="mt-3">
                <a
                  href=""
                  className="-mx-3  flex items-center justify-between rounded-lg py-1 px-3 text-sm font-medium hover:bg-gray-200"
                >
                  <span>
                    <i
                      className="fa fa-user-o h-6 w-6 fill-current text-gray-700"
                      aria-hidden="true"
                    ></i>
                    <span className=" text-gray-900">Assigned</span>
                  </span>
                  <span className="inline-block rounded-full bg-gray-300 px-4 py-1 text-center text-xs font-semibold leading-none text-gray-700">
                    1
                  </span>
                </a>
              </div>
              <div className="mt-3">
                <a
                  href=""
                  className="-mx-3  flex items-center justify-between rounded-lg py-1 px-3 text-sm font-medium hover:bg-gray-200"
                >
                  <span>
                    <i
                      className="fa fa-check-circle-o h-6 w-6 fill-current text-gray-700"
                      aria-hidden="true"
                    ></i>
                    <span className=" text-gray-900">Closed</span>
                  </span>
                </a>
              </div>
              <div className="mt-3">
                <a
                  href=""
                  className="-mx-3  flex items-center justify-between rounded-lg py-1 px-3 text-sm font-medium hover:bg-gray-200"
                >
                  <span>
                    <i
                      className="fa fa-trash-o h-6 w-6 fill-current text-gray-700"
                      aria-hidden="true"
                    ></i>
                    <span className=" text-gray-900">Junk</span>
                  </span>
                </a>
              </div>
              <div className="mt-8">
                <h2 className="font-semibold uppercase tracking-wide text-gray-600">
                  Folders
                </h2>
                <div className="mt-3">
                  <a
                    href=""
                    className="-mx-3  flex items-center justify-between rounded-lg py-1 px-3 text-sm font-medium hover:bg-gray-200"
                  >
                    <span className=" text-gray-900">Refunds</span>
                  </a>
                </div>
                <div className="mt-3">
                  <a
                    href=""
                    className="-mx-3  flex items-center justify-between rounded-lg py-1 px-3 text-sm font-medium hover:bg-gray-200"
                  >
                    <span className=" text-gray-900">Discounts</span>
                  </a>
                </div>
                <div className="mt-3">
                  <a
                    href=""
                    className="-mx-3  flex items-center justify-between rounded-lg py-1 px-3 text-sm font-medium hover:bg-gray-200"
                  >
                    <span className=" text-gray-900">Bugs</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          {/*  */}
          <main className=" flex bg-gray-200">
            {/* Content - Left */}
            <div className="overflow-hidden overflow-y-auto">
              <div
                className="flex items-center justify-between
                border-l border-r border-b
                px-4 py-2"
              >
                <button
                  className="flex items-center
                  text-sm font-semibold text-gray-600
                  "
                >
                  <span>Sorted by Date</span>
                  <i
                    className="fa fa-angle-down ml-2 justify-between"
                    aria-hidden="true"
                  ></i>
                </button>
                <button
                  className="flex items-center
                  text-sm font-semibold text-gray-600"
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
              </div>
              <div className="pt-3 pb-4">
                <a
                  href="#"
                  className="block
                  border-t
                  bg-white
                  py-3"
                >
                  <div
                    className="flex justify-between
                    px-4 py-2"
                  >
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Roberston
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      2 days ago
                    </span>
                  </div>
                  <span
                    className="px-4 py-2
                    text-sm font-semibold text-gray-900"
                  >
                    Refund
                  </span>
                  <p
                    className="px-4 py-2
                    text-sm font-semibold text-gray-700"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing <br />{" "}
                    dolor sit sit elo amet consectetur adipisicin elit....
                  </p>
                </a>
                <a
                  href="#"
                  className="block
                  border-t
                  bg-white
                  py-3"
                >
                  <div className="flex justify-between px-4 py-2">
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Roberston
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      2 days ago
                    </span>
                  </div>
                  <span
                    className="px-4 py-2
                    text-sm font-semibold text-gray-900"
                  >
                    Refund
                  </span>
                  <p
                    className="px-4 py-2
                    text-sm font-semibold text-gray-700"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing <br />{" "}
                    dolor sit sit elo amet consectetur adipisicin elit....
                  </p>
                </a>
                <a
                  href="#"
                  className="block
                  border-t
                  bg-white
                  py-3"
                >
                  <div
                    className="flex justify-between
                    px-4 py-2"
                  >
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Roberston
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      2 days ago
                    </span>
                  </div>
                  <span
                    className="px-4 py-2
                    text-sm font-semibold text-gray-900"
                  >
                    Refund
                  </span>
                  <p
                    className="px-4 py-2
                    text-sm font-semibold text-gray-700"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing <br />{" "}
                    dolor sit sit elo amet consectetur adipisicin elit....
                  </p>
                </a>
                <a
                  href="#"
                  className="block
                  border-t
                  bg-white
                  py-3"
                >
                  <div
                    className="flex justify-between
                    px-4 py-2"
                  >
                    <span className="text-sm font-semibold text-gray-900">
                      Gloria Roberston
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      2 days ago
                    </span>
                  </div>
                  <span
                    className="px-4 py-2
                    text-sm font-semibold text-gray-900"
                  >
                    Refund
                  </span>
                  <p
                    className="px-4 py-2
                    text-sm font-semibold text-gray-700"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing <br />{" "}
                    dolor sit sit elo amet consectetur adipisicin elit....
                  </p>
                </a>
              </div>
            </div>
            {/* Content - Right */}
            <div
              className="inline-block flex w-auto flex-col
              overflow-hidden overflow-y-auto
              bg-gray-100
              py-3"
            >
              <div className="flex justify-between ">
                <button>
                  <i
                    className="fa fa-reply
                    px-3
                    text-sm font-semibold text-gray-600"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-tag
                    px-3
                    text-sm font-semibold text-gray-600"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-user-circle
                    px-3
                    text-sm font-semibold text-gray-600"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-inbox
                    px-3
                    text-sm font-semibold text-gray-600"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-ellipsis-h
                    text-sm font-semibold text-gray-600"
                    aria-hidden="true"
                  ></i>
                </button>
                <button>
                  <i
                    className="fa fa-angle-down
                    text-sm font-semibold text-gray-600"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-angle-up
                    px-4
                    text-sm font-semibold text-gray-600"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <div className="shadow-lg">
                <div className="pt-3 pb-4 ">
                  <a
                    href="#"
                    className="block
                    border-t
                    bg-white
                    py-3"
                  >
                    <div
                      className="flex justify-between
                      px-4 py-2"
                    >
                      <span>Re: Student Discount?</span>
                      <div>
                        <span
                          className="px-3
                          text-sm font-semibold
                          "
                        >
                          #1428
                        </span>
                        <span
                          className="rounded-full
                        bg-green-300
                        px-4 py-1
                        text-sm font-semibold text-gray-800"
                        >
                          Active
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div
                  className="ml-2 mr-2
                  rounded-lg
                  pt-4
                  shadow-lg"
                >
                  <a
                    href="#"
                    className="block
                    border-t
                    bg-white
                    py-3 pb-4"
                  >
                    <div
                      className="flex justify-between
                      px-4 py-2"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        Gloria Roberston
                      </span>
                      <div className="flex">
                        <span
                          className="px-4
                          text-sm font-semibold text-gray-600"
                        >
                          {" "}
                          yesterday
                        </span>
                        <img
                          className="h-6 w-6
                          rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p
                      className="px-4 py-2
                      text-sm font-semibold text-gray-700"
                    >
                      Lorem mmmmm ipsum dolor sit amet consectetur adipisicing
                      elit. Iusto adipisci laudantium <br /> iste delectus
                      explicabo id molestiae cupiditate corrupti distinctio
                      alias. <br /> Temporibus quae tenetur quod cupiditate,
                      nostrum tempore inventore maxime ut!{" "}
                    </p>
                  </a>
                </div>
                <div
                  className="ml-2 mr-2
                  rounded-lg
                  pt-4
                  shadow-lg"
                >
                  <a
                    href="#"
                    className="block
                    border-t
                    bg-white
                    py-3 pb-4"
                  >
                    <div
                      className="flex justify-between
                      px-4 py-2"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        Gloria Roberston
                      </span>
                      <div className="flex">
                        <span
                          className="px-4
                          text-sm font-semibold text-gray-600"
                        >
                          {" "}
                          yesterday
                        </span>
                        <img
                          className="h-6 w-6
                          rounded-full
                          object-cover"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p
                      className="px-4 py-2
                      text-sm font-semibold text-gray-700"
                    >
                      Lorem mmmmm ipsum dolor sit amet consectetur adipisicing
                      elit. Iusto adipisci laudantium <br /> iste delectus
                      explicabo id molestiae cupiditate corrupti distinctio
                      alias. <br /> Temporibus quae tenetur quod cupiditate,
                      nostrum tempore inventore maxime ut!{" "}
                    </p>
                  </a>
                </div>
                <div
                  className="ml-2 mr-2
                  rounded-lg
                  pt-4
                  shadow-lg"
                >
                  <a
                    href="#"
                    className="block
                    border-t
                    bg-white
                    py-3 pb-4"
                  >
                    <div
                      className="flex justify-between
                      px-4 py-2"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        Gloria Roberston
                      </span>
                      <div className="flex">
                        <span
                          className="px-4
                          text-sm font-semibold text-gray-600"
                        >
                          {" "}
                          yesterday
                        </span>
                        <img
                          className="h-6 w-6
                          rounded-full
                          object-cover"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p
                      className="px-4 py-2
                      text-sm font-semibold text-gray-700"
                    >
                      Lorem mmmmm ipsum dolor sit amet consectetur adipisicing
                      elit. Iusto adipisci laudantium <br /> iste delectus
                      explicabo id molestiae cupiditate corrupti distinctio
                      alias. <br /> Temporibus quae tenetur quod cupiditate,
                      nostrum tempore inventore maxime ut!{" "}
                    </p>
                  </a>
                </div>
                <div
                  className="ml-2 mr-2
                  rounded-lg
                  pt-4
                  shadow-lg"
                >
                  <a
                    href="#"
                    className="block
                    border-t
                    bg-white
                    py-3 pb-4"
                  >
                    <div
                      className="flex justify-between
                      px-4 py-2"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        Gloria Roberston
                      </span>
                      <div className="flex">
                        <span
                          className="px-4
                          text-sm font-semibold text-gray-600"
                        >
                          {" "}
                          yesterday
                        </span>
                        <img
                          className="h-6 w-6
                          rounded-full
                          object-cover"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                    <p
                      className="px-4 py-2
                      text-sm font-semibold text-gray-700"
                    >
                      Lorem mmmmm ipsum dolor sit amet consectetur adipisicing
                      elit. Iusto adipisci laudantium <br /> iste delectus
                      explicabo id molestiae cupiditate corrupti distinctio
                      alias. <br /> Temporibus quae tenetur quod cupiditate,
                      nostrum tempore inventore maxime ut!{" "}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

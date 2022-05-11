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
      <div className="relative bg-white">
        <nav className="fixed top-0 w-full bg-white shadow-lg">
          <div className="mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="justify-center rounded-full p-2 text-center hover:bg-blue-100 hover:text-blue-500">
                  <svg
                    className="mx-auto h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 477.867 477.867"
                  >
                    <path
                      fillRule="evenodd"
                      d="M119.467 0h-102.4C7.641 0 0 7.641 0 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4C136.533 7.641 128.892 0 119.467 0zM102.4 102.4H34.133V34.133H102.4V102.4zM290.133 0h-102.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4C307.2 7.641 299.559 0 290.133 0zm-17.066 102.4H204.8V34.133h68.267V102.4zM460.8 0H358.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4C477.867 7.641 470.226 0 460.8 0zm-17.067 102.4h-68.267V34.133h68.267V102.4zM119.467 170.667h-102.4C7.641 170.667 0 178.308 0 187.733v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4c-.001-9.425-7.642-17.066-17.067-17.066zm-17.067 102.4H34.133V204.8H102.4v68.267zM290.133 170.667h-102.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067zm-17.066 102.4H204.8V204.8h68.267v68.267zM460.8 170.667H358.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067zm-17.067 102.4h-68.267V204.8h68.267v68.267zM119.467 341.333h-102.4C7.641 341.333 0 348.974 0 358.4v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067V358.4c-.001-9.426-7.642-17.067-17.067-17.067zm-17.067 102.4H34.133v-68.267H102.4v68.267zM290.133 341.333h-102.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067V358.4c0-9.426-7.641-17.067-17.067-17.067zm-17.066 102.4H204.8v-68.267h68.267v68.267zM460.8 341.333H358.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067V358.4c0-9.426-7.641-17.067-17.067-17.067zm-17.067 102.4h-68.267v-68.267h68.267v68.267z"
                    />
                  </svg>
                </div>
                <div className="flex self-center rounded-md px-2 py-1 text-sm font-medium text-gray-800 antialiased hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:outline-none">
                  <div className="mt-1 mr-1 justify-center">
                    <img
                      className="h-5 w-5"
                      src="https://biltrax.atlassian.net/s/-egccmf/b/23/b6b48b2829824b869586ac216d119363/_/favicon-software.ico"
                    />
                  </div>
                  <div className="justify-center text-center text-xl font-semibold">
                    Jira Software
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-3 flex items-center ">
                    <a
                      href="#"
                      className="ml-2 self-center rounded-md px-3 py-1 text-sm font-medium text-gray-800 antialiased hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:outline-none"
                    >
                      Your work
                    </a>
                    <div className="ml-2 flex self-center rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-gray-800 text-blue-500 antialiased focus:bg-blue-100 focus:outline-none">
                      <a href="#" className="">
                        Projects
                      </a>
                      <svg
                        className="mt-1 ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                        />
                      </svg>
                    </div>
                    <div className="ml-2 flex self-center rounded-md px-3 py-1 text-sm font-medium text-gray-800 antialiased hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:outline-none">
                      <a href="#" className="">
                        Filters
                      </a>
                      <svg
                        className="mt-1 ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                        />
                      </svg>
                    </div>
                    <div className="ml-2 flex self-center rounded-md px-3 py-1 text-sm font-medium text-gray-800 antialiased hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:outline-none">
                      <a href="#" className="">
                        Dashboards
                      </a>
                      <svg
                        className="mt-1 ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                        />
                      </svg>
                    </div>
                    <a
                      href="#"
                      className="ml-2 self-center rounded-md px-3 py-1 text-sm font-medium text-gray-800 antialiased hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:outline-none"
                    >
                      People
                    </a>

                    <div className="ml-2 flex self-center rounded-md px-3 py-1 text-sm font-medium text-gray-800 antialiased hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:outline-none">
                      <a href="#" className="">
                        App
                      </a>
                      <svg
                        className="mt-1 ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                        />
                      </svg>
                    </div>
                    <a
                      href="#"
                      className="ml-2 self-center rounded bg-blue-800 px-3 py-1 text-sm font-medium text-white antialiased"
                    >
                      Create
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <input
                    type="text"
                    className="hidden rounded border-2 px-4 py-1 text-sm text-gray-600 focus:shadow-none focus:outline-none lg:block"
                    placeholder="Search ..."
                  />
                  <button
                    className="rounded-full border-2 border-transparent p-1 text-gray-400 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
                    aria-label="Notifications"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  <button
                    className="ml-2 rounded-full border-2 border-transparent p-1 text-gray-700 hover:bg-blue-100 hover:text-blue-500 focus:outline-none"
                    aria-label="Notifications"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 511.156 511.156"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M184.904 465.044c11.999 27.127 39.154 46.112 70.674 46.112s58.674-18.985 70.674-46.112zM255.573 48.836c20.8 0 40.772 3.67 59.306 10.389v-2.283C314.879 25.544 289.335 0 257.938 0h-4.719c-31.398 0-56.942 25.544-56.942 56.942v2.254c18.524-6.699 38.49-10.36 59.296-10.36zM442.747 435.044H68.409c-7.082 0-13.569-4.776-15.042-11.704-1.458-6.859 1.668-13.629 8.01-16.559 1.505-.976 12.833-8.897 24.174-32.862 20.829-44.01 25.201-106.005 25.201-150.263 0-79.855 64.967-144.82 144.821-144.82 79.665 0 144.512 64.652 144.82 144.245.007.191.011.383.011.575 0 44.258 4.372 106.253 25.201 150.263 11.341 23.965 22.668 31.887 24.174 32.862 6.342 2.93 9.469 9.699 8.01 16.559-1.473 6.927-7.959 11.704-15.042 11.704zm7.2-28.157h.01z"
                      />
                    </svg>
                  </button>

                  <button
                    className="ml-2 rounded-full border-2 border-transparent p-1 text-gray-700 hover:bg-blue-100 hover:text-blue-500 focus:outline-none"
                    aria-label="Notifications"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 405.332c-11.777 0-21.332-9.555-21.332-21.332s9.555-21.332 21.332-21.332 21.332 9.555 21.332 21.332-9.555 21.332-21.332 21.332zm33.77-135.637c-7.551 3.477-12.438 11.094-12.438 19.395v9.578c0 11.773-9.535 21.332-21.332 21.332s-21.332-9.559-21.332-21.332v-9.578c0-24.899 14.633-47.723 37.227-58.156 21.738-10.004 37.437-36.567 37.437-49.602C309.332 151.937 285.418 128 256 128s-53.332 23.937-53.332 53.332c0 11.777-9.54 21.336-21.336 21.336S160 193.109 160 181.332c0-52.926 43.07-96 96-96s96 43.074 96 96c0 28.824-25.004 71.191-62.23 88.363zm0 0"
                      />
                    </svg>
                  </button>
                  <button
                    className="ml-2 rounded-full border-2 border-transparent p-1 text-gray-700 hover:bg-blue-100 hover:text-blue-500 focus:outline-none"
                    aria-label="Notifications"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 477.867 477.867"
                    >
                      <path
                        fillRule="evenodd"
                        d="M460.8 170.667h-28.894a203.036 203.036 0 00-8.226-19.934l20.48-20.48c6.663-6.664 6.663-17.468 0-24.132l-72.482-72.346c-6.665-6.663-17.468-6.663-24.132 0l-20.48 20.48a206.392 206.392 0 00-19.866-8.294V17.067C307.2 7.641 299.559 0 290.133 0h-102.4c-9.426 0-17.067 7.641-17.067 17.067v28.894a206.34 206.34 0 00-19.951 8.226l-20.48-20.48c-6.665-6.662-17.468-6.662-24.132 0l-72.329 72.482c-6.663 6.664-6.663 17.468 0 24.132l20.48 20.48a202.631 202.631 0 00-8.294 19.866H17.067C7.641 170.667 0 178.308 0 187.733v102.4c0 9.426 7.641 17.067 17.067 17.067h28.894a202.79 202.79 0 008.226 19.934l-20.48 20.48c-6.662 6.665-6.662 17.468 0 24.132l72.414 72.414c6.665 6.662 17.468 6.662 24.132 0l20.48-20.48a206.65 206.65 0 0019.934 8.226V460.8c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-28.894a206.34 206.34 0 0019.951-8.226l20.48 20.48c6.665 6.662 17.468 6.662 24.132 0l72.414-72.414c6.662-6.664 6.662-17.468 0-24.132l-20.48-20.48a202.67 202.67 0 008.209-19.934H460.8c9.426 0 17.067-7.641 17.067-17.067v-102.4c0-9.425-7.641-17.066-17.067-17.066zM238.933 358.4c-65.98 0-119.467-53.487-119.467-119.467s53.487-119.467 119.467-119.467S358.4 172.954 358.4 238.933c-.075 65.949-53.518 119.392-119.467 119.467z"
                      />
                    </svg>
                  </button>

                  <div className="relative ml-2">
                    <button
                      className="focus:shadow-solid flex max-w-xs items-center rounded-full p-1 text-sm text-white hover:bg-blue-100 focus:outline-none"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                    >
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQH1yPpzWPPbwA/profile-displayphoto-shrink_100_100/0/1597572102197?e=1616630400&v=beta&t=bKny37OM7-qwl1IyJQNjKOj7wSeBmDE8ScYAto5Ul3s"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none">
                  <svg
                    className="block h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex">
          <div className="mt-16 h-auto w-1/5 flex-col border-r bg-gray-100 pl-5">
            <div className="ml-3 flex py-8">
              <div className="h-8 w-8 rounded">
                <img
                  className="h- mt-1 w-20 rounded "
                  src="https://noeticitservices.com/project-assets/images/noetic_logo.png"
                />
              </div>
              <div className="flex-col">
                <div className="mb-1 cursor-pointer items-center  px-2 text-sm font-medium text-gray-700 hover:underline">
                  Noetic IT Service
                </div>

                <div className="px-2 text-xs leading-none text-gray-600">
                  Classic software company
                </div>
              </div>
            </div>
            <div className=" px-3">
              <div className="flex cursor-pointer rounded py-2 px-4 hover:bg-blue-100">
                <svg
                  className="mt-1 h-3 w-3 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 447.243 447.243"
                >
                  <path
                    fillRule="evenodd"
                    d="M420.361 192.229a31.967 31.967 0 00-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0018.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 00-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 002.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 00-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z"
                  />
                </svg>
                <div className="ml-5 text-sm font-normal  tracking-normal text-gray-600 antialiased">
                  Back to project
                </div>
              </div>
            </div>

            <div className="mt-5 border border-gray-300"></div>
            <div className="h-[430px] overflow-auto">
              <div className="flex-col px-3">
                <div className="ml-2 mb-1 items-center  py-4 text-sm font-medium text-gray-700">
                  Issues and filters
                </div>
                <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal  text-gray-600 antialiased hover:bg-blue-100">
                  My open issues
                </div>
                <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal  text-gray-600 antialiased hover:bg-blue-100">
                  Reported by me
                </div>
                <div className="cursor-pointer rounded bg-blue-100 py-3 px-3 text-sm font-normal  tracking-normal text-gray-600 antialiased">
                  All issues
                </div>
                <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal  text-gray-600 antialiased hover:bg-blue-100">
                  Open issues
                </div>
                <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal  text-gray-600 antialiased hover:bg-blue-100">
                  Done issues
                </div>
                <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal  text-gray-600 antialiased hover:bg-blue-100">
                  Viewed recently
                </div>
                <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal  text-gray-600 antialiased hover:bg-blue-100">
                  Created recently
                </div>
                <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal  text-gray-600 antialiased hover:bg-blue-100">
                  Resolved recently
                </div>
                <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal  text-gray-600 antialiased hover:bg-blue-100">
                  Updated recently
                </div>
                <div className="mt-5 border border-gray-300"></div>
                <div className="mb-5 mt-5 cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal  text-gray-600 antialiased hover:bg-blue-100">
                  View all filters
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 flex h-auto w-4/5">
            <div className=" ml-10 h-full w-[400px]">
              <div className="text-sm font-normal tracking-normal text-gray-600 antialiased">
                Projects &nbsp; / &nbsp; Biltrax IT Project
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-normal text-black antialiased">
                All Issues
              </div>
              <div className="mt-5 flex w-full">
                <input
                  type="text"
                  className="h-7 w-1/2 rounded border px-2 text-xs text-gray-500"
                  placeholder="Filter Issue ..."
                />
                <div className="mb-1 cursor-pointer items-center  px-2 text-sm text-blue-500 hover:underline">
                  Advanced search
                </div>
              </div>
              <div className="mt-4 rounded bg-gray-100">
                <div className="flex  items-center justify-between px-1 text-center">
                  <div className="flex self-center rounded-md px-3 py-1 text-sm font-medium text-gray-800 text-blue-500 antialiased hover:bg-blue-100 focus:bg-blue-100 focus:outline-none">
                    <a href="#" className="">
                      Priority
                    </a>
                    <svg
                      className="mt-1 ml-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                      />
                    </svg>
                  </div>
                  <div className="p-2">
                    <button className="flex justify-around rounded px-4 py-2 text-gray-500 hover:bg-blue-100 focus:outline-none">
                      <svg
                        className="h-3 w-3 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fillRule="evenodd"
                          d="M441.156 322.876L392.49 275.49a8.523 8.523 0 00-11.93.017l-81.894 80.299V8.533A8.536 8.536 0 00290.133 0h-68.267a8.536 8.536 0 00-8.533 8.533v347.273l-81.894-80.299a8.528 8.528 0 00-11.921-.017l-48.666 47.386a8.503 8.503 0 00-2.586 6.11c0 2.304.939 4.506 2.586 6.11l179.2 174.481A8.508 8.508 0 00256 512c2.15 0 4.292-.811 5.956-2.423l179.2-174.481a8.526 8.526 0 002.577-6.11c0-2.304-.93-4.506-2.577-6.11z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mx-2 rounded bg-white">
                  <div className="h-[308px] flex-col overflow-auto">
                    <div className="cursor-pointer flex-col rounded hover:bg-blue-100">
                      <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal text-gray-700 antialiased">
                        Selected Options : Tracked
                      </div>
                      <div className="flex justify-between px-3">
                        <div className="flex">
                          <div className="h-4 w-4 rounded bg-red-500 p-1">
                            <svg
                              className="h-2 w-2 text-white"
                              fill="currentColor "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"
                              />
                            </svg>
                          </div>
                          <div className="ml-1 text-xs font-bold text-gray-500">
                            NITSWEBAPP-01
                          </div>
                        </div>
                        <button className="flex h-6 w-6 justify-around rounded-full bg-orange-500 p-1 pb-1">
                          <span className="text-xs font-bold">AS</span>
                        </button>
                      </div>
                      <div className="mt-3 border"></div>
                    </div>
                    <div className="cursor-pointer flex-col bg-blue-100">
                      <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal text-gray-700 antialiased">
                        Project & Company Slug
                      </div>
                      <div className="flex justify-between px-3">
                        <div className="flex">
                          <div className="h-4 w-4 rounded bg-red-500 p-1">
                            <svg
                              className="h-2 w-2 text-white"
                              fill="currentColor "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"
                              />
                            </svg>
                          </div>
                          <div className="ml-1 text-xs font-bold text-gray-500 line-through">
                            NITSWEBAPP-02
                          </div>
                        </div>
                        <button className="flex h-6 w-6 justify-around rounded-full bg-orange-500 p-1 pb-1">
                          <span className="text-xs font-bold">AS</span>
                        </button>
                      </div>
                      <div className="mt-3 border"></div>
                    </div>
                    <div className="cursor-pointer flex-col hover:bg-blue-100">
                      <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal text-gray-700 antialiased">
                        Selected Options : Tracked
                      </div>
                      <div className="flex justify-between px-3">
                        <div className="flex">
                          <div className="h-4 w-4 rounded bg-red-500 p-1">
                            <svg
                              className="h-2 w-2 text-white"
                              fill="currentColor "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"
                              />
                            </svg>
                          </div>
                          <div className="ml-1 text-xs font-bold text-gray-500">
                            NITSWEBAPP-03
                          </div>
                        </div>
                        <button className="flex h-6 w-6 justify-around rounded-full bg-orange-500 p-1 pb-1">
                          <span className="text-xs font-bold">AS</span>
                        </button>
                      </div>
                      <div className="mt-3 border"></div>
                    </div>
                    <div className="cursor-pointer flex-col hover:bg-blue-100">
                      <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal text-gray-700 antialiased">
                        Project & Company Slug
                      </div>
                      <div className="flex justify-between px-3">
                        <div className="flex">
                          <div className="h-4 w-4 rounded bg-red-500 p-1">
                            <svg
                              className="h-2 w-2 text-white"
                              fill="currentColor "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"
                              />
                            </svg>
                          </div>
                          <div className="ml-1 text-xs font-bold text-gray-500 line-through">
                            NITSWEBAPP-04
                          </div>
                        </div>
                        <button className="flex h-6 w-6 justify-around rounded-full bg-orange-500 p-1 pb-1">
                          <span className="text-xs font-bold">AS</span>
                        </button>
                      </div>
                      <div className="mt-3 border"></div>
                    </div>
                    <div className="cursor-pointer flex-col hover:bg-blue-100">
                      <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal text-gray-700 antialiased">
                        Selected Options : Tracked
                      </div>
                      <div className="flex justify-between px-3">
                        <div className="flex">
                          <div className="h-4 w-4 rounded bg-red-500 p-1">
                            <svg
                              className="h-2 w-2 text-white"
                              fill="currentColor "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"
                              />
                            </svg>
                          </div>
                          <div className="ml-1 text-xs font-bold text-gray-500">
                            NITSWEBAPP-05
                          </div>
                        </div>
                        <button className="flex h-6 w-6 justify-around rounded-full bg-orange-500 p-1 pb-1">
                          <span className="text-xs font-bold">AS</span>
                        </button>
                      </div>
                      <div className="mt-3 border"></div>
                    </div>
                    <div className="cursor-pointer flex-col hover:bg-blue-100">
                      <div className="cursor-pointer rounded py-3 px-3 text-sm font-normal tracking-normal text-gray-700 antialiased">
                        Project & Company Slug
                      </div>
                      <div className="flex justify-between px-3">
                        <div className="flex">
                          <div className="h-4 w-4 rounded bg-red-500 p-1">
                            <svg
                              className="h-2 w-2 text-white"
                              fill="currentColor "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"
                              />
                            </svg>
                          </div>
                          <div className="ml-1 text-xs font-bold text-gray-500">
                            NITSWEBAPP-06
                          </div>
                        </div>
                        <button className="flex h-6 w-6 justify-around rounded-full bg-orange-500 p-1 pb-1">
                          <span className="text-xs font-bold">AS</span>
                        </button>
                      </div>
                      <div className="mt-3 border"></div>
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-between px-1 text-center">
                  <div className="p-2">
                    <button className="flex justify-around rounded px-4 py-2 text-gray-500 hover:bg-blue-100 focus:outline-none">
                      <svg
                        className="h-3 w-3 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fillRule="evenodd"
                          d="M441.156 322.876L392.49 275.49a8.523 8.523 0 00-11.93.017l-81.894 80.299V8.533A8.536 8.536 0 00290.133 0h-68.267a8.536 8.536 0 00-8.533 8.533v347.273l-81.894-80.299a8.528 8.528 0 00-11.921-.017l-48.666 47.386a8.503 8.503 0 00-2.586 6.11c0 2.304.939 4.506 2.586 6.11l179.2 174.481A8.508 8.508 0 00256 512c2.15 0 4.292-.811 5.956-2.423l179.2-174.481a8.526 8.526 0 002.577-6.11c0-2.304-.93-4.506-2.577-6.11z"
                        />
                      </svg>
                      <svg
                        className="h-4 w-4 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.074 6.074 0 013.414-1.736L8.989 1.8a8.112 8.112 0 00-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752 5.51.301-.015-5.834-2.307 2.323zm6.647-11.959l.015 5.834 2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 01-3.414 1.736l.069 2.076a8.122 8.122 0 004.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754-5.51-.3z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex self-center rounded-md px-3 py-1 text-sm text-gray-600 antialiased ">
                    issue 48 of 88
                  </div>
                </div>
              </div>
            </div>

            <div className="relative ml-10 w-full  pt-32">
              <div className="absolute right-0 top-0 mb-64 mr-16 mt-5 cursor-pointer text-sm font-semibold tracking-normal text-gray-700  underline antialiased hover:text-blue-500">
                Give feedback
              </div>

              <div className="flex w-full items-center justify-between px-1 text-center">
                <div className="flex p-2">
                  <div className="cursor-pointer py-3 text-sm font-normal  tracking-normal text-gray-600 antialiased">
                    NITSWEBAPP-49 /
                  </div>
                  <div className="ml-2 mt-3 flex">
                    <div className="mt-1 h-4 w-4 rounded bg-red-500 p-1">
                      <svg
                        className="h-2 w-2 text-white"
                        fill="currentColor "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"
                        />
                      </svg>
                    </div>
                    <div className="ml-1 cursor-pointer text-sm font-normal  tracking-normal text-gray-600 antialiased">
                      NITSWEBAPP-05
                    </div>
                  </div>
                </div>
                <div className="mr-6 flex">
                  <div className="rounded p-2 text-blue-700 hover:bg-blue-100">
                    <svg
                      className="h-5 w-5 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6 6.56 0 10-4.834 10-5.6 0-.768-3.44-5.6-10-5.6zm0 9.907c-2.455 0-4.445-1.928-4.445-4.307S7.545 5.691 10 5.691s4.444 1.93 4.444 4.309-1.989 4.307-4.444 4.307zM10 10c-.407-.447.663-2.154 0-2.154-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154 0-.547-1.877.379-2.223 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-2 rounded p-2 text-gray-700 hover:bg-blue-100">
                    <svg
                      className="h-5 w-5 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 13.442c-.633 0-1.204.246-1.637.642l-5.938-3.463c.046-.188.075-.384.075-.584s-.029-.395-.075-.583L13.3 6.025A2.48 2.48 0 0015 6.7c1.379 0 2.5-1.121 2.5-2.5S16.379 1.7 15 1.7s-2.5 1.121-2.5 2.5c0 .2.029.396.075.583L6.7 8.212A2.485 2.485 0 005 7.537c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5a2.48 2.48 0 001.7-.675l5.938 3.463a2.339 2.339 0 00-.067.546A2.428 2.428 0 1015 13.442z"
                      />
                    </svg>
                  </div>
                  <div className="ml-2 rounded p-2 text-gray-700 hover:bg-blue-100">
                    <svg
                      className="h-5 w-5 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex h-[350px] overflow-auto">
                <div className="mr-10 w-[458px]">
                  <div className="w-full px-2 py-2 text-2xl font-semibold hover:bg-blue-100">
                    Project & Company Slug
                  </div>
                  <div className="mt-1 flex">
                    <div className="mr-2 flex cursor-pointer rounded bg-gray-200 py-1 px-3 hover:bg-gray-300">
                      <svg
                        className="h-5 w-5 text-gray-700"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.602 19.8c-1.293 0-2.504-.555-3.378-1.44-1.695-1.716-2.167-4.711.209-7.116l9.748-9.87c.988-1 2.245-1.387 3.448-1.06 1.183.32 2.151 1.301 2.468 2.498.322 1.22-.059 2.493-1.046 3.493l-9.323 9.44c-.532.539-1.134.858-1.738.922-.599.064-1.17-.13-1.57-.535-.724-.736-.828-2.117.378-3.337l6.548-6.63c.269-.272.705-.272.974 0s.269.714 0 .986l-6.549 6.631c-.566.572-.618 1.119-.377 1.364.106.106.266.155.451.134.283-.029.606-.216.909-.521l9.323-9.439c.64-.648.885-1.41.69-2.145a2.162 2.162 0 00-1.493-1.513c-.726-.197-1.48.052-2.12.7l-9.748 9.87c-1.816 1.839-1.381 3.956-.209 5.143 1.173 1.187 3.262 1.629 5.079-.212l9.748-9.87a.683.683 0 01.974 0 .704.704 0 010 .987L9.25 18.15c-1.149 1.162-2.436 1.65-3.648 1.65z"
                        />
                      </svg>
                      <div className="ml-2 text-sm font-normal  tracking-normal text-gray-700 antialiased">
                        Attach
                      </div>
                    </div>
                    <div className="mr-2 flex cursor-pointer rounded bg-gray-200 py-1 px-3 hover:bg-gray-300">
                      <svg
                        className="h-5 w-5 text-gray-700"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11 0H3a1 1 0 00-1 1v12a1 1 0 001 1h5v2h2v-2H8.001v-2H10v-2H8v2H4V2h6v4h2V1a1 1 0 00-1-1zM8 7v1h2V6H9a1 1 0 00-1 1zm4 13h2v-2h-2v2zm0-12h2V6h-2v2zM8 19a1 1 0 001 1h1v-2H8v1zm9-13h-1v2h2V7a1 1 0 00-1-1zm-1 14h1a1 1 0 001-1v-1h-2v2zm0-8h2v-2h-2v2zm0 4h2v-2h-2v2z"
                        />
                      </svg>
                      <div className="ml-2 text-sm font-normal  tracking-normal text-gray-700 antialiased">
                        Create Subtask
                      </div>
                    </div>
                    <div className="mr-1 flex cursor-pointer rounded bg-gray-200 py-1 px-3 hover:bg-gray-300">
                      <svg
                        className="h-5 w-5 text-gray-700"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.859 14.691l-.81.805a1.814 1.814 0 01-2.545 0 1.762 1.762 0 010-2.504l2.98-2.955c.617-.613 1.779-1.515 2.626-.675a.992.992 0 101.397-1.407c-1.438-1.428-3.566-1.164-5.419.675l-2.98 2.956A3.719 3.719 0 002 14.244a3.72 3.72 0 001.108 2.658c.736.73 1.702 1.096 2.669 1.096s1.934-.365 2.669-1.096l.811-.805a.988.988 0 00.005-1.4.995.995 0 00-1.403-.006zm9.032-11.484c-1.547-1.534-3.709-1.617-5.139-.197l-1.009 1.002a.99.99 0 101.396 1.406l1.01-1.001c.74-.736 1.711-.431 2.346.197.336.335.522.779.522 1.252s-.186.917-.522 1.251l-3.18 3.154c-1.454 1.441-2.136.766-2.427.477a.99.99 0 10-1.396 1.406c.668.662 1.43.99 2.228.99.977 0 2.01-.492 2.993-1.467l3.18-3.153A3.732 3.732 0 0018 5.866a3.726 3.726 0 00-1.109-2.659z"
                        />
                      </svg>
                      <div className="ml-2 text-sm font-normal  tracking-normal text-gray-700 antialiased">
                        Link Issue
                      </div>
                    </div>
                    <div className="cursor-pointer rounded bg-gray-200 py-1 px-2 hover:bg-gray-300">
                      <svg
                        className="h-4 w-4 text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-5 mb-1 items-center py-1 text-sm font-medium text-gray-800">
                    Description
                  </div>
                  <div className="flex-col rounded p-2 hover:bg-gray-200">
                    <div className="flex">
                      <div className="h-5 w-5">
                        <svg
                          className="h-5 w-5 text-gray-600"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-1 text-sm font-normal tracking-normal text-gray-800 antialiased ">
                        Lorem ipsum is typically a corrupted version of De
                        finibus bonorum et malorum, a first-century BC text by
                        the Roman statesman and philosopher Cicero, with words
                        altered, added, and removed to make it nonsensical,
                        improper Latin.
                      </div>
                    </div>
                    <div className="mt-10 flex">
                      <div className="h-5 w-5">
                        <svg
                          className="h-5 w-5 text-gray-600"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-1 text-sm font-normal tracking-normal text-gray-800 antialiased ">
                        Lorem ipsum is typically a corrupted version of De
                        finibus bonorum et malorum, a first-century BC text by
                        the Roman statesman and philosopher Cicero, with words
                        altered, added, and removed to make it nonsensical,
                        improper Latin.
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 items-center py-1 text-sm font-medium text-gray-800">
                    Environment
                  </div>
                  <div className="flex-col rounded p-2 hover:bg-gray-200">
                    <div className="flex">
                      <div className="ml-1 text-sm font-normal tracking-normal text-gray-800 antialiased ">
                        None
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 items-center py-1 text-sm font-medium text-gray-800">
                    Activity
                  </div>
                  <div className="flex rounded p-2">
                    <div className="flex">
                      <div className="ml-1 py-1 text-sm font-normal tracking-normal text-gray-800 antialiased ">
                        Show :
                      </div>
                      <div className="ml-2 cursor-pointer rounded bg-gray-700 py-1 px-2 text-sm font-normal tracking-normal text-white antialiased ">
                        Comments
                      </div>
                      <div className="ml-2 cursor-pointer rounded bg-gray-200 py-1 px-2 text-sm font-normal tracking-normal text-gray-800 antialiased ">
                        History
                      </div>
                      <div className="ml-2 cursor-pointer rounded bg-gray-200 py-1 px-2 text-sm font-normal tracking-normal text-gray-800 text-gray-800 antialiased ">
                        Work Log
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 border"></div>
                  <div className="mt-5 flex items-center py-1 text-sm font-medium text-gray-800">
                    <img
                      className="mr-8 h-10 w-10 rounded-full"
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQH1yPpzWPPbwA/profile-displayphoto-shrink_100_100/0/1597572102197?e=1616630400&v=beta&t=bKny37OM7-qwl1IyJQNjKOj7wSeBmDE8ScYAto5Ul3s"
                    />
                    <input
                      type="text"
                      placeholder="Add a Comment"
                      className="w-full rounded border border-gray-500 py-2 px-2 text-xs"
                    />
                  </div>
                </div>
                <div className="w-[240px] rounded bg-white">
                  <div className=" items-center px-1 text-center">
                    <div className="flex w-24 self-center rounded bg-blue-800 px-3 py-2 text-sm font-medium text-white antialiased">
                      <a href="#" className="">
                        Testing
                      </a>
                      <svg
                        className="mt-1 ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mx-2 rounded bg-white">
                    <div className="flex-col">
                      <div className="mt-3 flex-col rounded">
                        <div className="rounded py-1 px-1 text-xs font-semibold tracking-normal text-gray-700 antialiased">
                          Assignee
                        </div>
                        <div className="flex px-2 py-2 hover:bg-gray-200">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQH1yPpzWPPbwA/profile-displayphoto-shrink_100_100/0/1597572102197?e=1616630400&v=beta&t=bKny37OM7-qwl1IyJQNjKOj7wSeBmDE8ScYAto5Ul3s"
                            alt=""
                          />

                          <div className="ml-3 text-xs font-normal text-gray-700">
                            Abuzaid Sayyad
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex-col rounded">
                        <div className="rounded py-1 px-1 text-xs font-semibold tracking-normal text-gray-700 antialiased">
                          Reporter
                        </div>
                        <div className="flex px-2 py-2 hover:bg-gray-200">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://media-exp1.licdn.com/dms/image/C4E35AQFvDRbBk0Ousw/profile-framedphoto-shrink_400_400/0/1610941682185?e=1611381600&v=beta&t=W-wz9MDSoHzY8ApKoSKoSCW41lsP98UqsvjtitjBnQ4"
                            alt=""
                          />
                          <div className="ml-3 text-xs font-normal text-gray-700">
                            Nitish Kumar
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex-col rounded">
                        <div className="rounded py-1 px-1 text-xs font-semibold tracking-normal text-gray-700 antialiased">
                          Labels
                        </div>
                        <div className="px-2 py-2 hover:bg-gray-200">
                          <div className="ml-3 text-xs font-normal text-gray-700">
                            None
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex-col rounded">
                        <div className="rounded py-1 px-1 text-xs font-semibold tracking-normal text-gray-700 antialiased">
                          Epic Link
                        </div>
                        <div className="flex px-1 py-2 hover:bg-gray-200">
                          <div className="ml-3 rounded bg-purple-300 p-1 text-xs font-normal text-gray-700 underline hover:bg-transparent">
                            Nitseditor-frontend
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex-col rounded">
                        <div className="rounded py-1 px-1 text-xs font-semibold tracking-normal text-gray-700 antialiased">
                          Sprint
                        </div>
                        <div className="px-2 py-2 hover:bg-gray-200">
                          <div className="ml-3 text-xs font-normal text-gray-700 hover:text-blue-500 hover:underline">
                            Bugs, Subs Excel, Forecast
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex-col rounded">
                        <div className="rounded py-1 px-1 text-xs font-semibold tracking-normal text-gray-700 antialiased">
                          Priority
                        </div>
                        <div className="flex px-2 py-2 hover:bg-gray-200">
                          <svg
                            className="h-4 w-4 text-yellow-500 "
                            fill="currentColor "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 .75L15.5 6H12v13H8V6H4.5L10 .75z"
                            />
                          </svg>
                          <div className="ml-3 text-xs font-normal text-gray-700">
                            Medium
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex-col rounded">
                        <div className="px-2 py-2 hover:bg-gray-200">
                          <div className="flex self-center rounded text-sm font-medium text-blue-500 antialiased">
                            <svg
                              className="mt-1 ml-1 h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                              />
                            </svg>
                            <a href="#" className="text-blue-600">
                              Show 5 More Field
                            </a>
                          </div>
                          <div className="rounded pl-3 text-xs font-light text-gray-500 antialiased">
                            Original Estimate, Time tracking
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 border"></div>
                    </div>
                  </div>
                  <div className="flex justify-between px-1 text-left ">
                    <div className="p-2 text-xs tracking-normal text-gray-600 antialiased">
                      Created July 3, 2020, 6:24 PM
                      <br />
                      Updated 4 days ago
                      <br />
                      Configure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

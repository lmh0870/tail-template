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
    <form>
      <div
        className="container
        mx-auto rounded"
      >
        <div
          className="border-b border-gray-300
          py-5
          xl:w-full"
        >
          <div
            className="mx-auto
            flex w-11/12 items-center
            xl:mx-0 xl:w-full"
          >
            <p className="text-lg font-bold text-gray-800">Profile</p>
            <div
              className="ml-2 cursor-pointer
              text-gray-600 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  className="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div
            className="mx-auto
            w-11/12
            xl:mx-0 xl:w-9/12"
          >
            <div
              className="relative
              mt-8 h-48
              rounded"
            >
              <img
                src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg"
                alt="Banner"
                className="absolute
                h-full w-full
                rounded
                bg-center object-cover
                shadow-lg"
              />
              <div
                className="absolute
                top-0 right-0 bottom-0 left-0
                rounded bg-black opacity-50"
              />
              <div
                className="absolute
                right-0 mr-4 mt-4
                flex cursor-pointer items-center
                rounded
                px-3 py-2
                "
              >
                <p className="text-xs text-gray-100">Change Cover Photo</p>
                <div className="ml-2 text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-edit"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                </div>
              </div>
              <div
                className="absolute
                bottom-0
                -mb-10 ml-12
                flex h-20 w-20 items-center justify-center
                rounded-full
                bg-cover bg-center
                bg-no-repeat shadow-lg"
              >
                <img
                  src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                  alt=""
                  className="absolute
                  top-0 left-0 bottom-0 right-0 z-0
                  h-full w-full
                  rounded-full
                  object-cover shadow"
                />
                <div
                  className="absolute
                  top-0 right-0 bottom-0 left-0 z-0
                  rounded-full
                  bg-black opacity-50"
                />
                <div
                  className="z-10 flex cursor-pointer flex-col items-center justify-center
                  text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-edit"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                  <p className="text-xs text-gray-100">Edit Picture</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              className="mt-16 flex w-full flex-col
              md:w-1/2 lg:w-1/2 xl:w-2/6"
            >
              <label
                htmlFor="username"
                className="pb-2
                text-sm font-bold text-gray-800"
              >
                Username
              </label>
              <input
                type="email"
                id="username"
                name="username"
                className="rounded
                    border border-gray-300 bg-transparent
                    py-3 pl-3
                    text-sm text-gray-600
                    placeholder-gray-500
                    shadow-sm
                    focus:border-indigo-700 focus:outline-none"
                placeholder="Enter Email Address..."
              />
            </div>
            {/*  */}
            <div
              className="mt-8 flex w-full flex-col
              md:w-1/2 lg:w-1/2 xl:w-3/5"
            >
              <label
                htmlFor="about"
                className="pb-2
                text-sm font-bold text-gray-800 "
              >
                About
              </label>
              <textarea
                id="about"
                name="about"
                required
                className="resize-none
                    rounded border border-gray-300 bg-transparent
                    py-3 pl-3
                    text-sm text-gray-600
                    placeholder-gray-500
                    shadow-sm
                    focus:border-indigo-700 focus:outline-none "
                placeholder="Let the world know who you are"
                rows={5}
              />
              <p
                className="w-full
                pt-1
                text-right text-xs text-gray-600 "
              >
                Character Limit: 200
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mx-auto mt-10 rounded bg-white px-4">
        <div className="border-b border-gray-300 py-5 xl:w-full">
          <div
            className="mx-auto
            flex w-11/12 items-center
            xl:mx-0 xl:w-full"
          >
            <p
              className="text-lg
              font-bold text-gray-800"
            >
              Personal Information
            </p>
            <div
              className="ml-2
              cursor-pointer
              text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  className="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mx-auto pt-4">
          <div
            className="container
            mx-auto"
          >
            <form
              className="my-6 mx-auto w-11/12
              xl:mx-0 xl:w-full"
            >
              <div
                className="mb-6
                flex flex-col
                md:w-1/2 lg:w-1/2 xl:w-1/4"
              >
                <label
                  htmlFor="FirstName"
                  className="pb-2
                  text-sm font-bold text-gray-800 "
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="firstName"
                  required
                  className="rounded border border-gray-300 bg-transparent
                    py-3 pl-3
                    text-sm text-gray-600 placeholder-gray-500
                    shadow-sm
                    focus:border-indigo-700 focus:outline-none"
                  placeholder=""
                />
              </div>
              <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                <label
                  htmlFor="LastName"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="lastName"
                  required
                  className="rounded border border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-600 placeholder-gray-500 shadow-sm focus:border-indigo-700 focus:outline-none"
                  placeholder=""
                />
              </div>
              <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                <label
                  htmlFor="Email"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Email
                </label>
                <div
                  className="flex rounded
                  border border-green-400
                  shadow-sm"
                >
                  <div
                    className="flex items-center
                    border-r border-green-400
                    px-4 py-3
                    focus:outline-none "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <input
                    tabIndex={0}
                    type="text"
                    id="Email"
                    name="email"
                    required
                    className="w-full rounded border-r bg-transparent py-3 pl-3 text-sm text-gray-600 placeholder-gray-500 focus:outline-none"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="flex items-center justify-between pt-1 text-green-700">
                  <p className="text-xs">Email submission success!</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                        0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                      stroke="currentColor"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                <label
                  htmlFor="StreetAddress"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Street Address
                </label>
                <input
                  tabIndex={0}
                  type="text"
                  id="StreetAddress"
                  name="streetAddress"
                  required
                  className="rounded border border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-600 placeholder-gray-500 shadow-sm focus:border-indigo-700 focus:outline-none  "
                  placeholder=""
                />
              </div>
              <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                <label
                  htmlFor="City"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  City
                </label>
                <div className="flex rounded border border-gray-300 shadow-sm ">
                  <input
                    tabIndex={0}
                    type="text"
                    id="City"
                    name="city"
                    required
                    className="w-full rounded border border-transparent bg-transparent py-3 pl-3 text-sm text-gray-600 placeholder-gray-500 focus:border-indigo-700 focus:outline-none "
                    placeholder="Los Angeles"
                  />
                  <div className="flex flex-col items-center justify-center border-l border-gray-300 px-4 text-gray-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-up"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-down"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                <label
                  htmlFor="State/Province"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  State/Province
                </label>
                <input
                  tabIndex={0}
                  type="text"
                  id="State/Province"
                  name="state"
                  required
                  className="rounded border border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-600 placeholder-gray-500 shadow-sm focus:border-indigo-700 focus:outline-none "
                  placeholder="California"
                />
              </div>
              <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                <label
                  htmlFor="Country"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Country
                </label>
                <input
                  tabIndex={0}
                  type="text"
                  id="Country"
                  name="country"
                  required
                  className="rounded border border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-600 placeholder-gray-500 shadow-sm focus:border-indigo-700 focus:outline-none  "
                  placeholder="United States"
                />
              </div>
              <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                <div className="flex items-center pb-2">
                  <label
                    htmlFor="ZIP"
                    className="text-sm font-bold text-gray-800 "
                  >
                    ZIP/Postal Code
                  </label>
                  <div className="ml-2 cursor-pointer text-gray-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        className="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  tabIndex={0}
                  type="text"
                  name="zip"
                  required
                  id="ZIP"
                  className="rounded border border-red-400 bg-transparent py-3 pl-3 text-sm text-gray-600 placeholder-gray-500 shadow-sm focus:border-indigo-700 focus:outline-none "
                  placeholder="86745"
                />
                <div className="flex items-center justify-between pt-1 text-red-700">
                  <p className="text-xs">Incorrect Zip Code</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mx-auto mt-10 w-11/12 rounded bg-gray-100 xl:w-full">
        <div className="py-5 px-8 xl:w-full">
          <div className="mx-auto flex items-center">
            <div className="container mx-auto">
              <div className="mx-auto xl:w-full">
                <p className="text-lg font-bold text-gray-800 ">Alerts</p>
                <p className="pt-1 text-sm text-gray-600 ">
                  Get updates of any new activity or features. Turn on/off your
                  preferences
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto pb-6">
          <div className="flex items-center border-b border-gray-300 px-8 pb-4 text-gray-800 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-800 ">Via Email</p>
          </div>
          <div className="px-8">
            <div className="mb-8 mt-4 flex items-center justify-between">
              <div className="w-9/12">
                <p className="pb-1 text-sm text-gray-800 ">Comments</p>
                <p id="cb1" className="text-sm text-gray-600 ">
                  Get notified when a post or comment is made
                </p>
              </div>
              <div className="relative cursor-pointer rounded-full bg-gray-200 shadow-sm">
                <input
                  tabIndex={0}
                  aria-labelledby="cb1"
                  type="checkbox"
                  name="email_comments"
                  id="toggle1"
                  className="checkbox
                  absolute top-0 bottom-0
                  m-auto h-6 w-6
                  translate-x-6 transform
                  cursor-pointer
                  appearance-none rounded-full
                  border border-transparent
                  bg-white shadow-sm focus:outline-none"
                />
                <label className="toggle-label block h-4 w-12 cursor-pointer overflow-hidden rounded-full bg-gray-300 "></label>
              </div>
            </div>
            <div className="mb-8 flex items-center justify-between">
              <div className="w-9/12">
                <p className="pb-1 text-sm text-gray-800 ">Job Applications</p>
                <p id="cb2" className="text-sm text-gray-600 ">
                  Get notified when a candidate applies to a job posting
                </p>
              </div>
              <div className="relative cursor-pointer rounded-full bg-gray-200 shadow-sm">
                <input
                  aria-labelledby="cb2"
                  tabIndex={0}
                  type="checkbox"
                  name="email_job_application"
                  id="toggle2"
                  className="checkbox absolute top-0 bottom-0 m-auto h-6 w-6 cursor-pointer appearance-none rounded-full border border-transparent bg-white shadow-sm focus:outline-none "
                />
                <label className="toggle-label block h-4 w-12 cursor-pointer overflow-hidden rounded-full bg-gray-300 "></label>
              </div>
            </div>
            <div className="mb-8 flex items-center justify-between">
              <div className="w-9/12">
                <p className="pb-1 text-sm text-gray-800 ">Product Updates</p>
                <p id="cb3" className="text-sm text-gray-600 ">
                  Get notifitied when there is a new product feature or upgrades
                </p>
              </div>
              <div className="relative cursor-pointer rounded-full bg-gray-200 shadow-sm">
                <input
                  aria-labelledby="cb3"
                  tabIndex={0}
                  type="checkbox"
                  name="email_product_update"
                  id="toggle3"
                  className="checkbox absolute top-0 bottom-0 m-auto h-6 w-6 cursor-pointer appearance-none rounded-full border border-transparent bg-white shadow-sm focus:outline-none "
                />
                <label className="toggle-label block h-4 w-12 cursor-pointer overflow-hidden rounded-full bg-gray-300 "></label>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 px-8 pb-4 ">
            <div className="flex items-center text-gray-800 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-800 ">
                Push Notifications
              </p>
            </div>
          </div>
          <div className="px-8">
            <div className="mb-8 mt-4 flex items-center justify-between">
              <div className="w-9/12">
                <p className="pb-1 text-sm text-gray-800 ">Comments</p>
                <p id="cb4" className="text-sm text-gray-600 ">
                  Get notified when a post or comment is made
                </p>
              </div>
              <div className="relative cursor-pointer rounded-full bg-gray-200 shadow-sm">
                <input
                  aria-labelledby="cb4"
                  tabIndex={0}
                  type="checkbox"
                  name="notification_comment"
                  id="toggle4"
                  className="checkbox absolute top-0 bottom-0 m-auto h-6 w-6 cursor-pointer appearance-none rounded-full border border-transparent bg-white shadow-sm focus:outline-none "
                />
                <label className="toggle-label block h-4 w-12 cursor-pointer overflow-hidden rounded-full bg-gray-300 "></label>
              </div>
            </div>
            <div className="mb-8 flex items-center justify-between">
              <div className="w-9/12">
                <p className="pb-1 text-sm text-gray-800 ">Job Applications</p>
                <p id="cb5" className="text-sm text-gray-600 ">
                  Get notified when a candidate applies to a job posting
                </p>
              </div>
              <div className="relative cursor-pointer rounded-full bg-gray-200 shadow-sm">
                <input
                  aria-labelledby="cb5"
                  tabIndex={0}
                  type="checkbox"
                  name="notification_application"
                  id="toggle5"
                  className="checkbox absolute top-0 bottom-0 m-auto h-6 w-6 cursor-pointer appearance-none rounded-full border border-transparent bg-white shadow-sm focus:outline-none"
                />
                <label className="toggle-label block h-4 w-12 cursor-pointer overflow-hidden rounded-full bg-gray-300"></label>
              </div>
            </div>
            <div className="mb-8 flex items-center justify-between">
              <div className="w-9/12">
                <p className="pb-1 text-sm text-gray-800 ">Product Updates</p>
                <p id="cb6" className="text-sm text-gray-600 ">
                  Get notifitied when there is a new product feature or upgrades
                </p>
              </div>
              <div className="relative cursor-pointer rounded-full bg-gray-200 shadow-sm">
                <input
                  aria-labelledby="cb6"
                  tabIndex={0}
                  type="checkbox"
                  name="notification_updates"
                  id="toggle6"
                  className="checkbox absolute top-0 bottom-0 m-auto h-6 w-6 cursor-pointer appearance-none rounded-full border border-transparent bg-white shadow-sm focus:outline-none "
                />
                <label className="toggle-label block h-4 w-12 cursor-pointer overflow-hidden rounded-full bg-gray-300 "></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mx-auto w-11/12 xl:w-full">
        <div className="flex w-full justify-end bg-white py-4 sm:px-0">
          <button
            role="button"
            aria-label="cancel form"
            className="mr-4 rounded bg-gray-200 px-6 py-2 text-xs text-indigo-600 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 "
          >
            Cancel
          </button>
          <button
            role="button"
            aria-label="Save form"
            className="rounded bg-indigo-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

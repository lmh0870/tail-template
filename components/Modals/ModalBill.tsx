import { NextPage } from "next";
import { useState } from "react";

const Modal: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <div
          className="absolute top-0 right-0 bottom-0 left-0 z-10
          py-12
          transition duration-150 ease-in-out"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12
            max-w-lg
            md:w-2/3
            "
          >
            <div
              className="relative
              rounded
              border border-gray-400
              bg-white
              py-8 px-5
              shadow-md
              md:px-10"
            >
              <div
                className="mb-3
                flex w-full justify-start
                text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-wallet"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </svg>
              </div>
              <h1
                className="
                mb-4
                font-bold leading-tight tracking-normal text-gray-800"
              >
                Enter Billing Details
              </h1>
              <label
                htmlFor="name"
                className="text-sm font-bold leading-tight tracking-normal text-gray-800"
              >
                Owner Name
              </label>
              <input
                id="name"
                className="mb-5 mt-2
                flex h-10 w-full items-center
                rounded
                border border-gray-300
                pl-3
                text-sm font-normal text-gray-600
                focus:border focus:border-indigo-700 focus:outline-none"
                placeholder="James"
              />
              <label
                htmlFor="email2"
                className="text-sm font-bold leading-tight tracking-normal text-gray-800"
              >
                Card Number
              </label>
              <div className="relative mb-5 mt-2">
                <div
                  className="absolute
                  flex h-full items-center
                  border-r
                  px-4
                  text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-credit-card"
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
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="7" y1="15" x2="7.01" y2="15" />
                    <line x1="11" y1="15" x2="13" y2="15" />
                  </svg>
                </div>
                <input
                  id="email2"
                  className="flex h-10 w-full items-center
                  rounded
                  border border-gray-300
                  pl-16
                  text-sm font-normal text-gray-600
                  focus:border focus:border-indigo-700 focus:outline-none"
                  placeholder="XXXX - XXXX - XXXX - XXXX"
                />
              </div>
              <label
                htmlFor="expiry"
                className="text-sm font-bold leading-tight tracking-normal text-gray-800"
              >
                Expiry Date
              </label>
              <div className="relative mb-5 mt-2">
                <div
                  className="absolute right-0
                  flex h-full cursor-pointer items-center
                  pr-3
                  text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-calendar-event"
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
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>
                </div>
                <input
                  id="expiry"
                  className="flex h-10 w-full items-center
                  rounded
                  border border-gray-300
                  pl-3
                  text-sm font-normal text-gray-600
                  focus:border focus:border-indigo-700 focus:outline-none"
                  placeholder="MM/YY"
                />
              </div>
              <label
                htmlFor="cvc"
                className="text-sm font-bold leading-tight tracking-normal text-gray-800"
              >
                CVC
              </label>
              <div
                className="relative
                mb-5 mt-2"
              >
                <div
                  className="absolute right-0
                  flex h-full cursor-pointer items-center
                  pr-3
                  text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-info-circle"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    <polyline points="11 12 12 12 12 16 13 16"></polyline>
                  </svg>
                </div>
                <input
                  id="cvc"
                  className="mb-8
                  flex h-10 w-full items-center
                  rounded
                  border border-gray-300
                  pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex w-full items-center justify-start">
                <button className="rounded bg-indigo-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2">
                  Submit
                </button>
                <button
                  className="ml-3 rounded border  bg-gray-100 px-8 py-2 text-sm text-gray-600 transition duration-150 ease-in-out hover:border-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
              <button
                className="absolute top-0 right-0 mt-4 mr-5 cursor-pointer rounded text-gray-400 transition duration-150 ease-in-out hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                onClick={() => setOpen(false)}
                aria-label="close modal"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {/*  */}
      <div className="flex w-full justify-center py-12" id="button">
        <button
          className="mx-auto rounded bg-indigo-700
          px-4 py-2
          text-xs text-white transition
          duration-150 ease-in-out
          hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 sm:px-8 sm:text-sm"
          onClick={() => setOpen(true)}
        >
          Open Modal
        </button>
      </div>

      {/* <!-- Code block ends --> */}
    </div>
  );
};

export default Modal;

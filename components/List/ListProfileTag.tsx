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
      <div
        aria-label="group of cards"
        className="w-full py-8 focus:outline-none"
      >
        <div className="w-full items-center justify-center lg:flex">
          <div
            aria-label="card 1"
            className="mb-7 rounded bg-white p-6 shadow focus:outline-none lg:mr-7 lg:mb-0 lg:w-4/12"
          >
            <div className="flex items-center border-b border-gray-200 pb-6">
              <img
                src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png"
                alt="coin avatar"
                className="h-12 w-12 rounded-full"
              />
              <div className="flex w-full items-start justify-between">
                <div className="w-full pl-3">
                  <p className="text-xl font-medium leading-5 text-gray-800 focus:outline-none">
                    Dogecoin nerds
                  </p>
                  <p className="pt-2 text-sm leading-normal text-gray-500 focus:outline-none">
                    36 members
                  </p>
                </div>
                <div role="img" aria-label="bookmark">
                  <svg
                    className="focus:outline-none"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                      stroke="#2C3E50"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-2">
              <p className="py-4 text-sm leading-5 text-gray-600 focus:outline-none">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <div className="flex focus:outline-none">
                <div className="rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #dogecoin
                </div>
                <div className="ml-3 rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #crypto
                </div>
              </div>
            </div>
          </div>
          <div
            aria-label="card 2"
            className="mb-7 rounded bg-white p-6 shadow focus:outline-none lg:mr-7 lg:mb-0 lg:w-4/12"
          >
            <div className="flex items-center border-b border-gray-200 pb-6">
              <div className="flex h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
              <div className="flex w-full items-start justify-between">
                <div className="w-full pl-3">
                  <p className="text-xl font-medium leading-5 text-gray-800 focus:outline-none">
                    Sale And Purchase
                  </p>
                  <p className="pt-2 text-sm leading-normal text-gray-500 focus:outline-none">
                    36 members
                  </p>
                </div>
                <div aria-label="bookmark" role="img">
                  <svg
                    className="focus:outline-none"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                      stroke="#2C3E50"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-2">
              <p className="py-4 text-sm leading-5 text-gray-600 focus:outline-none">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <div className="flex focus:outline-none">
                <div className="rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #Buy
                </div>
                <div className="ml-3 rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #Sell
                </div>
                <div className="ml-3 rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #Rent
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 w-full items-center justify-center lg:flex">
          <div
            aria-label="card 3"
            className="mb-7 rounded bg-white p-6 shadow focus:outline-none lg:mr-7 lg:mb-0 lg:w-4/12"
          >
            <div className="flex items-center border-b border-gray-200 pb-6">
              <div className="flex h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
              <div className="flex w-full items-start justify-between">
                <div className="w-full pl-3">
                  <p className="text-xl font-medium leading-5 text-gray-800 focus:outline-none">
                    Family guy : A thread
                  </p>
                  <p className="pt-2 text-sm leading-normal text-gray-500 focus:outline-none">
                    36 members
                  </p>
                </div>
                <div role="img" aria-label="bookmark">
                  <svg
                    className="focus:outline-none"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                      stroke="#2C3E50"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-2">
              <p className="py-4 text-sm leading-5 text-gray-600 focus:outline-none">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <div className="flex focus:outline-none">
                <div className="rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #dogecoin
                </div>
                <div className="ml-3 rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #crypto
                </div>
              </div>
            </div>
          </div>
          <div
            aria-label="card 4"
            className="mb-7 rounded bg-white p-6 shadow focus:outline-none lg:mr-7 lg:mb-0 lg:w-4/12"
          >
            <div className="flex items-center border-b border-gray-200 pb-6">
              <div className="flex h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
              <div className="flex w-full items-start justify-between">
                <div className="w-full pl-3">
                  <p className="text-xl font-medium leading-5 text-gray-800 focus:outline-none">
                    DC vs Marvel
                  </p>
                  <p className="pt-2 text-sm leading-normal text-gray-500 focus:outline-none">
                    36 members
                  </p>
                </div>
                <div role="img" aria-label="bookmark">
                  <svg
                    className="focus:outline-none"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                      stroke="#2C3E50"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-2">
              <p className="py-4 text-sm leading-5 text-gray-600 focus:outline-none">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <div className="flex focus:outline-none">
                <div className="rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #dogecoin
                </div>
                <div className="ml-3 rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #crypto
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 w-full items-center justify-center lg:flex">
          <div
            aria-label="card 5"
            className="mb-7 rounded bg-white p-6 shadow focus:outline-none lg:mr-7 lg:mb-0 lg:w-4/12"
          >
            <div className="flex items-center border-b border-gray-200 pb-6">
              <div className="flex h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
              <div className="flex w-full items-start justify-between">
                <div className="w-full pl-3">
                  <p className="text-xl font-medium leading-5 text-gray-800 focus:outline-none">
                    Rick & Morty
                  </p>
                  <p className="pt-2 text-sm leading-normal text-gray-500 focus:outline-none">
                    36 members
                  </p>
                </div>
                <div role="img" aria-label="bookmark">
                  <svg
                    className="focus:outline-none"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                      stroke="#2C3E50"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-2">
              <p className="py-4 text-sm leading-5 text-gray-600 focus:outline-none">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <div className="flex focus:outline-none">
                <div className="rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #dogecoin
                </div>
                <div className="ml-3 rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #crypto
                </div>
              </div>
            </div>
          </div>
          <div
            aria-label="card 6"
            className="mb-7 rounded bg-white p-6 shadow focus:outline-none lg:mr-7 lg:mb-0 lg:w-4/12"
          >
            <div className="flex items-center border-b border-gray-200 pb-6">
              <div className="flex h-12 w-12 flex-shrink-0 rounded-full bg-gray-300"></div>
              <div className="flex w-full items-start justify-between">
                <div className="w-full pl-3">
                  <p className="text-xl font-medium leading-5 text-gray-800 focus:outline-none">
                    La Liga: A history
                  </p>
                  <p className="pt-2 text-sm leading-normal text-gray-500 focus:outline-none">
                    36 members
                  </p>
                </div>
                <div role="img" aria-label="bookmark">
                  <svg
                    className="focus:outline-none"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                      stroke="#2C3E50"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-2">
              <p className="py-4 text-sm leading-5 text-gray-600 focus:outline-none">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <div className="flex focus:outline-none">
                <div className="rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #dogecoin
                </div>
                <div className="ml-3 rounded-full bg-indigo-100 py-2 px-4 text-xs leading-3 text-indigo-700">
                  #crypto
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

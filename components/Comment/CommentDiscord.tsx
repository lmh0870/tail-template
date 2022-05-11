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
      <div className="flex h-screen font-sans antialiased">
        <div className="text-purple-lighter hidden w-24 flex-none bg-gray-900 p-6 md:block">
          <div className="mb-4 cursor-pointer border-b border-gray-600 pb-2">
            <div className="mb-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-3xl bg-white text-2xl font-semibold text-black">
              <img
                src="https://cdn.discordapp.com/embed/avatars/0.png"
                alt=""
              />
            </div>
          </div>
          <div className="mb-4 cursor-pointer">
            <div className="mb-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white text-2xl font-semibold text-black">
              <img
                src="https://cdn.discordapp.com/embed/avatars/0.png"
                alt=""
              />
            </div>
          </div>
          <div className="mb-4 cursor-pointer">
            <div className="mb-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-3xl bg-white text-2xl font-semibold text-black">
              <img
                src="https://cdn.discordapp.com/embed/avatars/1.png"
                alt=""
              />
            </div>
          </div>
          <div className="mb-4 cursor-pointer">
            <div className="mb-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-3xl bg-white text-2xl font-semibold text-black">
              <img
                src="https://cdn.discordapp.com/embed/avatars/2.png"
                alt=""
              />
            </div>
          </div>
          <div className="mb-4 cursor-pointer">
            <div className="mb-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-3xl bg-white text-2xl font-semibold text-black">
              <img
                src="https://cdn.discordapp.com/embed/avatars/3.png"
                alt=""
              />
            </div>
          </div>
          <div className="mb-4 cursor-pointer">
            <div className="mb-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-3xl bg-white text-2xl font-semibold text-black">
              <img
                src="https://cdn.discordapp.com/embed/avatars/4.png"
                alt=""
              />
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="mb-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-3xl bg-white text-2xl font-semibold text-black opacity-25">
              <svg
                className="block h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-purple-lighter hidden w-64 flex-none bg-gray-800 pb-6 md:block">
          <div className="mb-2 mt-3 flex justify-between border-b border-gray-600 px-4 py-1 text-white shadow-xl">
            <div className="flex-auto">
              <h1 className="mb-1 truncate text-xl font-semibold leading-tight">
                My Server
              </h1>
            </div>
            <div>
              <svg
                className="arrow-gKvcEx icon-2yIBmh cursor-pointer opacity-50"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between px-4 text-white">
              <div className="cursor-pointer opacity-75">GENERAL</div>
              <div>
                <svg
                  className="h-5 w-5 cursor-pointer fill-current opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                </svg>
              </div>
            </div>
            <div className="bg-teal-dark cursor-pointer py-1 px-4 font-semibold text-gray-300">
              # general
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between px-4 text-white">
              <div className="cursor-pointer opacity-75">VOICE</div>
              <div>
                <svg
                  className="h-5 w-5 cursor-pointer fill-current opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                </svg>
              </div>
            </div>
            <div className="bg-teal-dark cursor-pointer py-1 px-4 font-semibold text-gray-300 hover:bg-gray-800">
              🔊 General
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col overflow-hidden bg-gray-700">
          <div className="flex flex-none items-center border-b border-gray-600 px-6 py-2 shadow-xl">
            <div className="flex flex-col">
              <h3 className="mb-1 text-xl font-bold text-white text-gray-100">
                <span className="text-gray-400">#</span> general
              </h3>
            </div>
          </div>
          <div className="flex-1 overflow-y-scroll px-6 py-4">
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/0.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">09:23</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/3.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">09:24</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/1.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">09:26</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/2.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">10:00</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/3.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">10:20</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/4.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">10:23</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/0.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">10:30</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/1.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">10:50</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/2.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">11:30</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/3.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">11:37</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/4.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">11:45</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/1.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">11:50</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/2.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">11:55</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/3.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">11:59</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
            <div className="mb-4 flex items-start border-b border-gray-600 py-3 text-sm">
              <img
                src="https://cdn.discordapp.com/embed/avatars/4.png"
                className="mr-3 h-10 w-10 cursor-pointer rounded-3xl"
              />
              <div className="flex-1 overflow-hidden">
                <div>
                  <span className="cursor-pointer font-bold text-red-300 hover:underline">
                    User
                  </span>
                  <span className="text-xs font-bold text-gray-400">12:00</span>
                </div>
                <p className="leading-normal text-white">Discord is awesome!</p>
              </div>
            </div>
          </div>
          <div className="flex-none px-4 pb-6">
            <div className="flex overflow-hidden rounded-lg">
              <span className="text-grey border-r-4 border-gray-600 bg-gray-600 p-2 text-3xl">
                <svg
                  className="block h-6 w-6 cursor-pointer rounded-xl bg-gray-500 hover:bg-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
                    fill="#FFFFFF"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="w-full bg-gray-600 px-4"
                placeholder="Message #general"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

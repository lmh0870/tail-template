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
      <div className="mx-auto w-full max-w-screen-xl px-6">
        <div className="flex justify-center p-4 px-3 py-10">
          <div className="w-full max-w-md">
            <div className="mb-4 rounded-lg bg-white px-3 py-2 shadow-md">
              <div className="block py-2 px-2 text-lg font-semibold text-gray-700">
                Item List
              </div>
              <div className="flex items-center rounded-md bg-gray-200">
                <div className="pl-2">
                  <svg
                    className="h-6 w-6 fill-current text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="heroicon-ui"
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                  </svg>
                </div>
                <input
                  className="w-full rounded-md bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:outline-none"
                  id="search"
                  type="text"
                  placeholder="Search teams or members"
                />
              </div>
              <div className="py-3 text-sm">
                <div className="my-2 flex cursor-pointer justify-start rounded-md px-2 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-400">
                  <span className="m-2 h-2 w-2 rounded-full bg-gray-400"></span>
                  <div className="flex-grow px-2 font-medium">Tighten Co.</div>
                  <div className="text-sm font-normal tracking-wide text-gray-500">
                    Team
                  </div>
                </div>
                <div className="my-2 flex cursor-pointer justify-start rounded-md px-2 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-400">
                  <span className="m-2 h-2 w-2 rounded-full bg-green-400"></span>
                  <div className="flex-grow px-2 font-medium">
                    Taylor Otwell
                  </div>
                  <div className="text-sm font-normal tracking-wide text-gray-500">
                    Member
                  </div>
                </div>
                <div className="my-2 flex cursor-pointer justify-start rounded-md px-2 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-400">
                  <span className="m-2 h-2 w-2 rounded-full bg-gray-400"></span>
                  <div className="flex-grow px-2 font-medium">Adam Wathan</div>
                  <div className="text-sm font-normal tracking-wide text-gray-500">
                    Member
                  </div>
                </div>
                <div className="my-2 flex cursor-pointer justify-start rounded-md px-2 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-400">
                  <span className="m-2 h-2 w-2 rounded-full bg-gray-400"></span>
                  <div className="flex-grow px-2 font-medium">
                    Duke Street Studio Inc.
                  </div>
                  <div className="text-sm font-normal tracking-wide text-gray-500">
                    Team
                  </div>
                </div>
                <div className="my-2 flex cursor-pointer justify-start rounded-md px-2 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-400">
                  <span className="m-2 h-2 w-2 rounded-full bg-green-400"></span>
                  <div className="flex-grow px-2 font-medium">Jeffrey Wey</div>
                  <div className="text-sm font-normal tracking-wide text-gray-500">
                    Member
                  </div>
                </div>
              </div>
              <div className="-mx-3 -mb-2 block rounded-b-lg bg-gray-200 py-2 px-3 text-right text-sm">
                <button className="py-2 px-4 font-bold text-gray-500 hover:text-gray-600">
                  Cancel
                </button>
                <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
        id="side-bar"
        className="invisible fixed top-10
        h-5/6 w-48
        -translate-x-48
        rounded-xl
        bg-white
        py-3 pl-3
        shadow-lg
        duration-300 ease-in-out
        lg:visible
        lg:-translate-x-0"
      >
        <div className="flex h-full flex-col justify-between">
          <img
            className="mx-auto
            mb-10
            px-5 pt-3"
            src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-logotype.5d127e1d767d06efa2b03fe4de5f3d84.svg"
          />

          <div
            className="overflow-hidden
            hover:overflow-auto"
          >
            <div className="mb-10">
              <div className="text-sm text-gray-500">Overview</div>
              <div
                className="flex h-8 cursor-pointer items-center
                border-green-500
                hover:border-r-4"
              >
                <i
                  className="mr-2
                  h-5 w-5
                  animate-pulse
                  rounded-sm
                  bg-gray-300"
                ></i>
                <span className="text-gray-500">Overview</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-sm text-gray-500">Header 1</div>
              <div
                className="flex h-8 cursor-pointer items-center
                border-green-500 hover:border-r-4"
              >
                <i
                  className="mr-2
                  h-5 w-5
                  animate-pulse
                  rounded-sm
                  bg-gray-300"
                ></i>
                <span className="text-gray-500">Menu 1</span>
              </div>
              <div
                className="flex h-8 cursor-pointer items-center
                border-green-500
                hover:border-r-4"
              >
                <i
                  className="mr-2
                  h-5 w-5 animate-pulse rounded-sm bg-gray-300"
                ></i>
                <span className="text-gray-500">Menu 2</span>
              </div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 3</span>
              </div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 4</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-sm text-gray-500">Header 2</div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 1</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-sm text-gray-500">Header 3</div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 1</span>
              </div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 2</span>
              </div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 3</span>
              </div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 4</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-sm text-gray-500">Header 4</div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 1</span>
              </div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 2</span>
              </div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 3</span>
              </div>
              <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
                <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
                <span className="text-gray-500">Menu 4</span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex h-8 cursor-pointer items-center border-green-500 hover:border-r-4">
              <i className="mr-2 h-5 w-5 animate-pulse rounded-sm bg-gray-300"></i>
              <span className="text-gray-500">Account Mgnt</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex cursor-pointer items-center">
              <i className="mr-2 h-5 w-5 animate-pulse rounded-full bg-gray-300"></i>
              <span className="truncate text-gray-500">Firstname Lastname</span>
              <i className="mx-3 h-5 w-1 animate-pulse bg-gray-300"></i>
            </div>
          </div>
          <div className="mt-2 flex justify-end">
            <i className="mr-3 cursor-pointer rounded-full bg-gray-200 px-3 py-1  text-right font-bold text-green-500"></i>
          </div>
        </div>
      </div>

      <div className="visible fixed top-1/2 left-4 -translate-x-0 rounded-lg bg-white shadow-lg duration-300 ease-in-out lg:invisible lg:-translate-x-20">
        <div className="mx-1 my-10">
          <i className="cursor-pointer rounded-full bg-gray-200 px-3 py-2 text-center font-bold text-green-500"></i>
        </div>
      </div>
    </>
  );
}

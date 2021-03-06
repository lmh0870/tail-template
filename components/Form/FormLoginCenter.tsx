export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div
        className="flex min-h-screen w-full flex-col items-center
        bg-gray-50
        pt-6
        sm:justify-center sm:pt-0"
      >
        <div className="mx-auto w-full p-5 sm:max-w-md">
          <h2
            className="mb-12
            text-center text-5xl font-extrabold"
          >
            Welcome.
          </h2>
          <form className="">
            <div className="mb-4">
              <label className="block ">Email</label>
              <input
                id="email"
                type="text"
                name="email"
                className="focus:ring-opacity-50disabled:bg-gray-100
                mt-1 block
                w-full
                rounded-md border
                border-gray-300 py-2
                px-3
                shadow-sm focus:border-red-300
                focus:outline-none focus:ring focus:ring-red-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block
                w-full
                rounded-md
                border border-gray-300
                py-2 px-3
                shadow-sm
                focus:border-red-300 focus:outline-none
                focus:ring focus:ring-red-200 focus:ring-opacity-50
                disabled:bg-gray-100"
              />
            </div>
            <div
              className="mt-6
              flex items-center justify-between"
            >
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="border border-gray-300
                  text-red-600
                  shadow-sm
                  focus:border-red-300
                  focus:ring focus:ring-red-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block
                  text-sm leading-5 text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>
              <a href="#" className="text-sm">
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
            <div className="mt-6">
              <button
                className="inline-flex w-full items-center justify-center
                rounded-md
                border border-transparent
                bg-red-600
                px-4 py-2
                font-semibold capitalize text-white
                transition
                hover:bg-red-700 focus:border-red-700 focus:outline-none
                focus:ring focus:ring-red-200
                active:bg-red-700
                disabled:opacity-25"
              >
                Sign In
              </button>
            </div>
            <div
              className="mt-6
              text-center"
            >
              <a href="#" className="underline">
                Sign up for an account
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

interface CompProps {
  [key: string]: any;
}
const Comp = () => {
  return <></>;
};

export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <form>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control
                  m-0
                  block
                  w-full
                  rounded
                  border
                  border-solid
                  border-gray-300
                  bg-white bg-clip-padding
                  px-3 py-1.5 text-base
                  font-normal
                  text-gray-700
                  transition
                  ease-in-out
                  focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control m-0
                  block
                  w-full
                  rounded
                  border
                  border-solid
                  border-gray-300
                  bg-white bg-clip-padding
                  px-3 py-1.5 text-base
                  font-normal
                  text-gray-700
                  transition
                  ease-in-out
                  focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <a
              href="#!"
              className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700 focus:text-blue-700"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="
                w-full
                rounded
                bg-blue-600
                px-6
                py-2.5
                text-xs
                font-medium
                uppercase
                leading-tight
                text-white
                shadow-md
                transition duration-150
                ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
                focus:shadow-lg focus:outline-none
                focus:ring-0
                active:bg-blue-800
                active:shadow-lg"
          >
            Sign in
          </button>
          <p className="mt-6 text-center text-gray-800">
            Not a member?{" "}
            <a
              href="#!"
              className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700 focus:text-blue-700"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

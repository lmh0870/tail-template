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
      <div className="block max-w-md rounded-lg bg-white p-6 shadow-lg">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
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
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
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
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
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
              id="exampleInput125"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
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
              id="exampleInput126"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check mb-6 text-center">
            <input
              type="checkbox"
              className="form-check-input mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              id="exampleCheck25"
              checked
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck25"
            >
              Subscribe to our newsletter
            </label>
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
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

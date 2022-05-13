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
          <div className="form-group mb-6">
            <input
              type="text"
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
              id="exampleInput7"
              placeholder="Name"
            />
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
              id="exampleInput8"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
                  form-control
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
                  focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
                "
              id="exampleFormControlTextarea13"
              rows={3}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-group form-check mb-6 text-center">
            <input
              type="checkbox"
              className="form-check-input mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              id="exampleCheck87"
              checked
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck87"
            >
              Send me a copy of this message
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
            Send
          </button>
        </form>
      </div>
    </>
  );
}

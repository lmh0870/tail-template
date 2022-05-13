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
              htmlFor="exampleInputEmail1"
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
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="mt-1 block text-xs text-gray-600">
              Well never share your email with anyone else.
            </small>
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword1"
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
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check mb-6">
            <input
              type="checkbox"
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              id="exampleCheck1"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck1"
            >
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="
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
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

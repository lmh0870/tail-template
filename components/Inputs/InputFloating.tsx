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
      <div className="flex justify-center">
        <div>
          <div className="form-floating mb-3 xl:w-96">
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
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput" className="text-gray-700">
              Email address
            </label>
          </div>
          <div className="form-floating mb-3 xl:w-96">
            <input
              type="password"
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
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword" className="text-gray-700">
              Password
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

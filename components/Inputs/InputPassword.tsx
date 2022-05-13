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
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="examplePassword0"
            className="form-label mb-2 inline-block text-gray-700"
          >
            Password input
          </label>
          <input
            type="password"
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
            id="examplePassword0"
            placeholder="Password input"
          />
        </div>
      </div>
    </>
  );
}

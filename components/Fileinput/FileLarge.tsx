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
        <div className="mb-3 w-96">
          <label
            htmlFor="formFileLg"
            className="form-label mb-2 inline-block text-gray-700"
          >
            Large file input example
          </label>
          <input
            className="form-control
    m-0
    block
    w-full
    rounded
    border
    border-solid
    border-gray-300
    bg-white bg-clip-padding
    px-2 py-1.5 text-xl
    font-normal
    text-gray-700
    transition
    ease-in-out
    focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            id="formFileLg"
            type="file"
          />
        </div>
      </div>
    </>
  );
}

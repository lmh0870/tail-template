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
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleFormControlInput2"
              className="form-label mb-2 inline-block text-xl text-gray-700"
            >
              Form control lg
            </label>
            <input
              type="text"
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
          px-4 py-2 text-xl
          font-normal
          text-gray-700
          transition
          ease-in-out
          focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
        "
              id="exampleFormControlInput2"
              placeholder="Form control lg"
            />
          </div>

          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleFormControlInpu3"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Default input
            </label>
            <input
              type="text"
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
              id="exampleFormControlInput3"
              placeholder="Default input"
            />
          </div>

          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleFormControlInput4"
              className="form-label mb-2 inline-block text-sm text-gray-700"
            >
              Form control sm
            </label>
            <input
              type="text"
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
          px-2 py-1 text-sm
          font-normal
          text-gray-700
          transition
          ease-in-out
          focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
        "
              id="exampleFormControlInput4"
              placeholder="Form control sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}

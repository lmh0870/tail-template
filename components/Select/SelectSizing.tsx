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
          <select
            className="form-select-lg form-select m-0
      mb-3
      block
      w-full
      appearance-none
      rounded
      border
      border-solid
      border-gray-300
      bg-white bg-clip-padding bg-no-repeat
      px-4 py-2 text-xl
      font-normal
      text-gray-700
      transition
      ease-in-out
      focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            aria-label=".form-select-lg example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="form-select-sm form-select
    m-0
    block
    w-full
    appearance-none
    rounded
    border
    border-solid
    border-gray-300
    bg-white bg-clip-padding bg-no-repeat
    px-2 py-1 text-sm
    font-normal
    text-gray-700
    transition
    ease-in-out
    focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            aria-label=".form-select-sm example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </>
  );
}

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
      <div className="flex items-center justify-center">
        <div
          className="datepicker form-floating relative mb-3 xl:w-96"
          data-mdb-toggle-button="false"
        >
          <input
            type="text"
            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            placeholder="Select a date"
            data-mdb-toggle="datepicker"
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            Select a date
          </label>
        </div>
      </div>
    </>
  );
}

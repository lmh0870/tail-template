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
        <div className="form-check form-switch">
          <input
            className="form-check-input pointer-events-none float-left -ml-10 h-5 w-9 cursor-pointer appearance-none rounded-full bg-white bg-gray-300 bg-contain bg-no-repeat align-top opacity-50 shadow-sm filter-none focus:outline-none"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDisabled"
            disabled
          />
          <label
            className="form-check-label inline-block text-gray-800 opacity-50"
            htmlFor="flexSwitchCheckDisabled"
          >
            Disabled switch checkbox input
          </label>
        </div>
      </div>
    </>
  );
}

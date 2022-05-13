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
          <div className="form-check">
            <input
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
              disabled
            />
            <label
              className="form-check-label inline-block text-gray-800 opacity-50"
              htmlFor="flexRadioDisabled"
            >
              Disabled radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input float-left mt-1 mr-2 h-4 w-4 appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioCheckedDisabled"
              checked
              disabled
            />
            <label
              className="form-check-label inline-block text-gray-800 opacity-50"
              htmlFor="flexRadioCheckedDisabled"
            >
              Disabled checked radio
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

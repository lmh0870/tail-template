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
        <div className="form-check form-check-inline">
          <input
            className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="inlineCheckbox1"
          >
            1
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="inlineCheckbox2"
          >
            2
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input float-left mt-1 mr-2 h-4 w-4 appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
            disabled
          />
          <label
            className="form-check-label inline-block text-gray-800 opacity-50"
            htmlFor="inlineCheckbox3"
          >
            3 (disabled)
          </label>
        </div>
      </div>
    </>
  );
}

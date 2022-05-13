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
          <div className="form-check form-switch mb-7">
            <input
              className="form-check-input float-left -ml-10 h-5 w-9 cursor-pointer appearance-none rounded-full bg-white bg-gray-300 bg-contain bg-no-repeat align-top shadow-sm focus:outline-none"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault56"
            />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input float-left -ml-10 h-5 w-9 cursor-pointer appearance-none rounded-full bg-white bg-gray-300 bg-contain bg-no-repeat align-top shadow-sm focus:outline-none"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked76"
              checked
            />
          </div>
        </div>
      </div>
    </>
  );
}

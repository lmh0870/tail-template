export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div
        className="mx-auto w-40
        rounded-md
        p-4 shadow-md"
      >
        <fieldset>
          <div className="mb-4 flex items-center">
            <input
              id="country-option-1"
              type="radio"
              name="Name"
              value="value-1"
              className="h-4 w-4
                border-gray-300
                focus:ring-2 focus:ring-blue-300
                "
            />
            <label
              htmlFor="country-option-1"
              className="ml-2 block
              text-sm font-medium text-gray-900"
            >
              United States
            </label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="country-option-2"
              type="radio"
              name="Name"
              value="value-1"
              className="h-4 w-4
                border-gray-300
                focus:ring-2 focus:ring-blue-300
                "
            />
            <label
              htmlFor="country-option-2"
              className="ml-2 block
              text-sm font-medium text-gray-900"
            >
              United States
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="option-disabled"
              type="radio"
              name="countries"
              value="China"
              className="h-4 w-4
                border-gray-200 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="option-disabled"
              className="ml-2 block
                text-sm font-medium text-gray-300"
            >
              China (disabled)
            </label>
          </div>
        </fieldset>
      </div>
    </>
  );
}

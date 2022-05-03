const data = [{}];

interface CompProps {
  [key: string]: any;
}
const Comp = ({}: CompProps) => {
  return <></>;
};

export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div className="mx-auto my-8 flex max-w-xl flex-col">
        <label
          htmlFor="options"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Select your contry
        </label>
        <select
          id="options"
          className="border border-gray-300 bg-gray-50 text-sm text-gray-900
          "
        >
          <option>value-1</option>
          <option>value-2</option>
          <option>value-3</option>
          <option>value-4</option>
          <option>value-5</option>
        </select>
      </div>
    </>
  );
}

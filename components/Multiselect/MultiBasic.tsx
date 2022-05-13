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
      {/* <!-- Required form plugin --> */}
      <label
        className="block text-left"
        style={{
          maxWidth: "300px",
        }}
      >
        <span className="text-gray-700">Multiselect</span>
        <select className="form-multiselect mt-1 block w-full" multiple>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>
      </label>
    </>
  );
}

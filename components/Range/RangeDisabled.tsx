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
      <div className="relative pt-1">
        <label htmlFor="disabledRange" className="form-label">
          Disabled range
        </label>
        <input
          type="range"
          className="
      form-range form-range
      h-6
      w-full
      appearance-none
      bg-transparent
      p-0
      focus:shadow-none focus:outline-none focus:ring-0
    "
          id="disabledRange"
          disabled
        />
      </div>
    </>
  );
}

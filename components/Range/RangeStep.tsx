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
        <label htmlFor="customRange3" className="form-label">
          Example range
        </label>
        <input
          type="range"
          className="
      form-range
      h-6
      w-full
      appearance-none
      bg-transparent
      p-0
      focus:shadow-none focus:outline-none focus:ring-0
    "
          min="0"
          max="5"
          step="0.5"
          id="customRange3"
        />
      </div>
    </>
  );
}

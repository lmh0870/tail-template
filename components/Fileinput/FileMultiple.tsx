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
        <div className="mb-3 w-96">
          <label
            htmlFor="formFileMultiple"
            className="form-label mb-2 inline-block text-gray-700"
          >
            Multiple files input example
          </label>
          <input
            className="form-control
    m-0
    block
    w-full
    rounded
    border
    border-solid
    border-gray-300
    bg-white bg-clip-padding
    px-3 py-1.5 text-base
    font-normal
    text-gray-700
    transition
    ease-in-out
    focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
      </div>

      {/* <!-- Custom scripts -->
<script type="text/javascript">
  const checkbox = document.getElementById("flexCheckIndeterminate");
  checkbox.indeterminate = true;
</script> */}
    </>
  );
}

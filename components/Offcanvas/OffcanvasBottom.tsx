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
      <button
        className="mr-1.5 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        Toggle bottom offcanvas
      </button>

      <div
        className="offcanvas offcanvas-bottom invisible fixed bottom-0 left-0 right-0 flex h-1/3 max-h-full max-w-full flex-col border-none bg-white bg-clip-padding text-gray-700 shadow-sm outline-none transition duration-300 ease-in-out"
        tabIndex={-1}
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header flex items-center justify-between p-4">
          <h5
            className="offcanvas-title mb-0 font-semibold leading-normal"
            id="offcanvasBottomLabel"
          >
            Offcanvas bottom
          </h5>
          <button
            type="button"
            className="btn-close -my-5 -mr-2 box-content h-4 w-4 rounded-none border-none p-2 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="small offcanvas-body flex-grow overflow-y-auto p-4">
          ...
        </div>
      </div>
    </>
  );
}

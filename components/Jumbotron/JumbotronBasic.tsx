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
      <div className="rounded-lg bg-gray-100 p-6 text-gray-700 shadow-lg">
        <h2 className="mb-5 text-3xl font-semibold">Hello world!</h2>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-6 border-gray-300" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <button
          type="button"
          className="mt-4 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Learn more
        </button>
      </div>
    </>
  );
}

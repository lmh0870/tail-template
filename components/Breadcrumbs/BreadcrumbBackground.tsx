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
      <nav className="w-full rounded-md bg-gray-100 px-5 py-3">
        <ol className="list-reset flex">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2 text-gray-500">/</span>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Library
            </a>
          </li>
          <li>
            <span className="mx-2 text-gray-500">/</span>
          </li>
          <li className="text-gray-500">Data</li>
        </ol>
      </nav>
    </>
  );
}

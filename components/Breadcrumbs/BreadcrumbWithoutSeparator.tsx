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
      <nav className="bg-grey-light w-full rounded-md">
        <ol className="list-reset flex">
          <li>
            <a href="#" className="mr-2 text-blue-600 hover:text-blue-700">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="mr-2 text-blue-600 hover:text-blue-700">
              Library
            </a>
          </li>
          <li className="text-gray-500">Data</li>
        </ol>
      </nav>
    </>
  );
}

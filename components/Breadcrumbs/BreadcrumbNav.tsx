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
      <nav className="navbar navbar-light navbar-expand-lg relative flex w-full flex-wrap items-center justify-between bg-gray-100 py-3 text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
        <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
          <nav
            className="bg-grey-light w-full rounded-md"
            aria-label="breadcrumb"
          >
            <ol className="list-reset flex">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Library
                </a>
              </li>
              <li>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Data
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
    </>
  );
}

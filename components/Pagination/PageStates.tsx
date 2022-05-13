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
      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="list-style-none flex">
            <li className="page-item disabled">
              <a
                className="page-link pointer-events-none relative block rounded rounded border-0 bg-transparent py-1.5 px-3 text-gray-500 outline-none transition-all duration-300 focus:shadow-none"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link relative block rounded rounded border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                href="#"
              >
                1
              </a>
            </li>
            <li className="page-item active">
              <a
                className="page-link relative block rounded rounded border-0 bg-blue-600 py-1.5 px-3 text-white shadow-md outline-none transition-all duration-300 hover:bg-blue-600 hover:text-white focus:shadow-md"
                href="#"
              >
                2 <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link relative block rounded rounded border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                href="#"
              >
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link relative block rounded rounded border-0 bg-transparent py-1.5 px-3 text-gray-800 outline-none transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

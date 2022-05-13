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
      <div className="absolute h-full w-60 bg-white px-1 shadow-md">
        <ul className="relative">
          <li className="relative">
            <a
              className="flex h-12 items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 1
            </a>
          </li>
          <li className="relative">
            <a
              className="flex h-12 items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
          <li className="relative">
            <a
              className="flex h-12 items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

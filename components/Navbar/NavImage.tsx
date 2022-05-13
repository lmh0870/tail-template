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
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-gray-100 py-4 text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
        <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <a
              className="mt-2 mr-1 flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 lg:mt-0"
              href="#"
            >
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                alt=""
                loading="lazy"
                className="h-[20px]"
              />
            </a>
          </div>
        </div>
      </nav>
      <br />
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-gray-100 py-4 text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
        <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <a
              className="mt-2 mr-1 flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 lg:mt-0"
              href="#"
            >
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                alt=""
                loading="lazy"
                className="mr-2 h-[20px]"
              />
              <span className="font-medium">MDBootstrap</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

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
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-gray-100 py-3 text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
        <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <a className="text-xl text-black" href="#">
              Navbar
            </a>
          </div>
        </div>
      </nav>
      <br />
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-gray-100 py-3 text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
        <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <a className="text-xl font-semibold text-black" href="#">
              Navbar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

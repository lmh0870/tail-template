export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <nav className="flex w-full justify-between bg-indigo-500 px-6 py-4 shadow-md">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h1 className="cursor-pointer text-xl font-bold text-white">
            Github Coder
          </h1>
        </div>
        <div className="flex items-center space-x-10">
          <p className="cursor-pointer text-lg font-semibold text-white">Hom</p>
          <p className="cursor-pointer text-lg font-semibold text-white">
            About
          </p>
        </div>
      </nav>
    </>
  );
}

export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div
        className="h-96 w-full
        bg-[url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)] bg-cover bg-center"
      >
        <div
          className="flex h-full w-full items-center justify-center
          bg-gray-900
          bg-opacity-50"
        >
          <div className="text-center">
            <h1 className="text-2xl font-semibold uppercase text-white lg:text-3xl">
              Build Your new{" "}
              <span className="text-blue-400 underline">Saas</span>
            </h1>
            <button
              className="mt-4
              w-full
              transform
              rounded-md
              bg-blue-600
              px-4 py-2
              text-sm font-medium uppercase text-white
              transition-colors duration-200
              hover:bg-blue-500
              focus:bg-blue-500 focus:outline-none
              lg:w-auto"
            >
              Start project
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

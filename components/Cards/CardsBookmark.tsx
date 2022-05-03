interface Comp {
  [key: string]: any;
}
const Comp = () => {
  return (
    <div
      className="group relative
      max-h-96
      overflow-hidden rounded-xl
      bg-gray-400 hover:shadow-xl"
    >
      <div
        className="absolute z-20
        flex h-full w-full flex-col justify-between
        p-4"
      >
        <button
          className="flex h-12 w-12 items-center justify-center
          self-end
          rounded-xl border border-gray-400/50
          bg-gray-800/30 p-2
          backdrop-blur-sm hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
        </button>

        <div
          className="w-full
          rounded-xl border border-gray-400/50
          bg-gray-800/30
          p-4
          opacity-0
          backdrop-blur-sm
          hover:shadow-xl
          group-hover:opacity-100
          "
        >
          <h1 className="mb-10 text-3xl font-bold text-white">Title</h1>
          <div className="flex justify-between">
            <h3 className="text-lg font-bold capitalize text-white">Price</h3>
            <h3 className="text-lg font-bold capitalize text-white">View</h3>
          </div>
        </div>
      </div>
      <img
        className="w-full bg-cover bg-center"
        src="https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
      />
    </div>
  );
};
export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div
        className="grid gap-3
        bg-indigo-100 p-4 lg:grid-cols-2"
      >
        <Comp />
        <Comp />
      </div>
    </>
  );
}

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
      <main className="py-12 px-6 sm:px-14 md:px-20">
        <div className="items-center shadow-md sm:flex">
          <div className="sm:px-5 md:px-10">
            <h1 className="my-2 text-2xl font-bold text-gray-800">
              long established
            </h1>
            <p className="mb-2 text-gray-700 md:mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div className="mb-2 flex justify-between">
              <span className="text-sm font-thin">May 20th 2020</span>
              <span className="mb-2 hidden font-bold text-gray-800 sm:block">
                Read more
              </span>
            </div>
          </div>
          <div>
            <img
              className="bg-cover"
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="mt-6 space-x-6 md:flex">
          <div className="shadow-md">
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
            <div className="px-4">
              <h1 className="my-2 mt-3 text-2xl font-bold text-gray-800">
                long established
              </h1>
              <p className="mb-2 text-gray-700">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </p>
              <div className="mt-4 flex justify-between">
                <span className="text-sm font-thin">May 20th 2020</span>
                <span className="mb-2 font-bold text-gray-800">Read more</span>
              </div>
            </div>
          </div>
          <div className="shadow-md">
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
            <div className="px-6">
              <h1 className="my-2 mt-3 text-2xl font-bold text-gray-800">
                long established
              </h1>
              <p className="mb-2 text-gray-700">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </p>
              <div className="mt-4 flex justify-between">
                <span className="text-sm font-thin">May 20th 2020</span>
                <span className="mb-2 font-bold text-gray-800">Read more</span>
              </div>
            </div>
          </div>
          <div className="shadow-md">
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
            <div className="px-4">
              <h1 className="my-2 mt-3 text-2xl font-bold text-gray-800">
                long established
              </h1>
              <p className="mb-2 text-gray-700">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that....
              </p>
              <div className="mt-4 flex justify-between">
                <span className="text-sm font-thin">May 20th 2020</span>
                <span className="mb-2 font-bold text-gray-800">Read more</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 items-center shadow-md sm:flex">
          <div>
            <img
              className="bg-cover"
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="sh sm:px-5 md:px-10">
            <h1 className="my-2 text-2xl font-bold text-gray-800">
              long established
            </h1>
            <p className="mb-2 text-gray-700 md:mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div className="mb-2 flex justify-between">
              <span className="text-sm font-thin">May 20th 2020</span>
              <span className="mb-2 hidden font-bold text-gray-800 sm:block">
                Read more
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

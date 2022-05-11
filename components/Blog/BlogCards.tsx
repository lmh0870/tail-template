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
      <div className="my-12 w-full">
        <div className="mx-auto max-w-5xl px-6 sm:px-6 lg:px-8">
          <div className="w-full rounded bg-white p-8 shadow">
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Blog
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full overflow-hidden rounded md:w-6/12">
                  <img
                    className="object h-auto w-full"
                    src="https://images.unsplash.com/photo-1626169740183-702d6421beeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-4 w-full md:mt-0 md:ml-4 md:w-6/12">
                  <h2 className="text-lg font-semibold leading-tight text-gray-800">
                    Ready to use components
                  </h2>
                  <p className="pt-2 leading-normal">
                    It provides a very simple start, no need to write a lot of
                    code, you just import it and start the primitive components
                    and create the ones you need.
                  </p>
                  <a
                    className="pt-2 leading-normal text-blue-600 hover:underline"
                    href=""
                  >
                    Read more...
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full overflow-hidden rounded md:w-6/12">
                  <img
                    className="object h-auto w-full"
                    src="https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-4 w-full md:mt-0 md:ml-4 md:w-6/12">
                  <h2 className="text-lg font-semibold leading-tight text-gray-800">
                    Ready to use components
                  </h2>
                  <p className="pt-2 leading-normal">
                    It provides a very simple start, no need to write a lot of
                    code, you just import it and start the primitive components
                    and create the ones you need.
                  </p>
                  <a
                    className="pt-2 leading-normal text-blue-600 hover:underline"
                    href=""
                  >
                    Read more...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

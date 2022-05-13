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
      <footer className="bg-gray-100 text-center">
        <div className="px-6 pt-6">
          <form action="">
            <div className="gird-cols-1 flex grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:ml-auto md:mb-6">
                <p className="text-gray-800">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="md:mb-6">
                <input
                  type="text"
                  className="
              form-control
              m-0
              block
              w-full
              rounded
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
            "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6 md:mr-auto">
                <button
                  type="button"
                  className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div
          className="p-4 text-center text-gray-700"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          © 2021 Copyright:
          <a className="text-gray-800" href="https://tailwind-elements.com/">
            Tailwind Elements
          </a>
        </div>
      </footer>
    </>
  );
}

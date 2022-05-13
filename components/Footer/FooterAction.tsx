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
      <footer
        className="text-center text-white"
        style={{
          backgroundColor: "#0a4275",
        }}
      >
        <div className="container p-6">
          <div className="">
            <p className="flex items-center justify-center">
              <span className="mr-4">Register for free</span>
              <button
                type="button"
                className="inline-block rounded-full border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                Sign up!
              </button>
            </p>
          </div>
        </div>

        <div
          className="p-4 text-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          © 2021 Copyright:
          <a className="text-white" href="https://tailwind-elements.com/">
            Tailwind Elements
          </a>
        </div>
      </footer>
    </>
  );
}

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
      <footer
        className="text-center text-white"
        style={{
          backgroundColor: "#caced1",
        }}
      >
        <div className="container p-6">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div className="mb-6 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>

        <div
          className="p-4 text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
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

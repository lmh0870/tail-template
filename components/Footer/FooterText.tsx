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
      <footer className="bg-gray-100 text-center lg:text-left">
        <div className="container p-6 text-gray-800">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="mb-6 md:mb-0">
              <h5 className="mb-2 font-medium uppercase">Footer text</h5>

              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="mb-6 md:mb-0">
              <h5 className="mb-2 font-medium uppercase">Footer text</h5>

              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>
          </div>
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

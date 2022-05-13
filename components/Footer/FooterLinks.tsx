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
        <div className="container p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase text-gray-800">
                Links
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase text-gray-800">
                Links
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase text-gray-800">
                Links
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase text-gray-800">
                Links
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 4
                  </a>
                </li>
              </ul>
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

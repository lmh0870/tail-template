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
      <ol className="border-l border-gray-300 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
        <li>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300 md:ml-0 md:mr-0 md:-mt-1"></div>
            <p className="mt-2 text-sm text-gray-500">01.07.2021</p>
          </div>
          <div className="mt-0.5 ml-4 pb-5 md:ml-0">
            <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
              Title of section 1
            </h4>
            <p className="mb-3 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              scelerisque diam non nisi semper, et elementum lorem ornare.
              Maecenas placerat facilisis mollis. Duis sagittis ligula in
              sodales vehicula.
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300 md:ml-0 md:mr-0 md:-mt-1"></div>
            <p className="mt-2 text-sm text-gray-500">13.09.2021</p>
          </div>
          <div className="mt-0.5 ml-4 pb-5 md:ml-0">
            <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
              Title of section 2
            </h4>
            <p className="mb-3 text-gray-500">
              Libero expedita explicabo eius fugiat quia aspernatur autem
              laudantium error architecto recusandae natus sapiente sit nam
              eaque, consectetur porro molestiae ipsam an deleniti.
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300 md:ml-0 md:mr-0 md:-mt-1"></div>
            <p className="mt-2 text-sm text-gray-500">25.11.2021</p>
          </div>
          <div className="mt-0.5 ml-4 pb-5 md:ml-0">
            <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
              Title of section 3
            </h4>
            <p className="mb-3 text-gray-500">
              Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
              natus! Eum corporis illum nihil officiis tempore. Excepturi illo
              natus libero sit doloremque, laborum molestias rerum pariatur quam
              ipsam necessitatibus incidunt, explicabo.
            </p>
          </div>
        </li>
      </ol>
    </>
  );
}

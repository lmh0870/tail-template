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
      <ol className="border-l-2 border-blue-600">
        <li>
          <div className="flex-start flex items-center">
            <div className="-ml-2 mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600"></div>
            <h4 className="-mt-2 text-xl font-semibold text-gray-800">
              Title of section 1
            </h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <a
              href="#!"
              className="text-sm text-blue-600 transition duration-300 ease-in-out hover:text-blue-700 focus:text-blue-800"
            >
              4 February, 2022
            </a>
            <p className="mt-2 mb-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              type="button"
              className="inline-block rounded bg-blue-600 px-4 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Read more
            </button>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div className="-ml-2 mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600"></div>
            <h4 className="-mt-2 text-xl font-semibold text-gray-800">
              Title of section 2
            </h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <a
              href="#!"
              className="text-sm text-blue-600 transition duration-300 ease-in-out hover:text-blue-700 focus:text-blue-800"
            >
              12 January, 2022
            </a>
            <p className="mt-2 mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <button
              type="button"
              className="inline-block rounded bg-blue-600 px-4 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Read more
            </button>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center">
            <div className="-ml-2 mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600"></div>
            <h4 className="-mt-2 text-xl font-semibold text-gray-800">
              Title of section 3
            </h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <a
              href="#!"
              className="text-sm text-blue-600 transition duration-300 ease-in-out hover:text-blue-700 focus:text-blue-800"
            >
              27 December, 2021
            </a>
            <p className="mt-2 mb-4 text-gray-700">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
            <button
              type="button"
              className="inline-block rounded bg-blue-600 px-4 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Read more
            </button>
          </div>
        </li>
      </ol>
    </>
  );
}

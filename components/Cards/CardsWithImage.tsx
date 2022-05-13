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
      <div className="flex flex-col space-y-10">
        {/* Content - 1 */}
        {/* Card with image */}
        <div
          className="mx-auto max-w-sm
          rounded-lg
          bg-white
          shadow-lg
          "
        >
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div className="p-4">
            <h5
              className="mb-2
              text-xl font-medium text-gray-900"
            >
              Card title
            </h5>
            <p
              className="mb-4
              text-base text-gray-700"
            >
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <button
              type="button"
              className="inline-block
              rounded
              bg-blue-600
              px-6 py-2.5
              text-xs font-medium uppercase leading-tight text-white
              shadow-md
              transition duration-150 ease-in-out
              hover:bg-blue-700
              hover:shadow-lg
              focus:bg-blue-700
              focus:shadow-lg
              focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg"
            >
              Button
            </button>
          </div>
        </div>
        {/* Content - 2 */}
        {/* Card with header and footer */}
        <div className="flex justify-center">
          <div className="block max-w-sm rounded-lg bg-white text-center shadow-lg">
            <div className="border-b border-gray-300 py-3 px-6">Featured</div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium text-gray-900">
                Special title treatment
              </h5>
              <p className="mb-4 text-base text-gray-700">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                type="button"
                className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              >
                Button
              </button>
            </div>
            <div className="border-t border-gray-300 py-3 px-6 text-gray-600">
              2 days ago
            </div>
          </div>
        </div>
        {/* Content - 3 */}
        {/* Horizontal */}
        <div className="flex justify-center">
          <div className="flex flex-col rounded-lg bg-white shadow-lg md:max-w-xl md:flex-row">
            <img
              className=" h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="flex flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-medium text-gray-900">
                Card title
              </h5>
              <p className="mb-4 text-base text-gray-700">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-xs text-gray-600">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

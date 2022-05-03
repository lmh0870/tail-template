export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div
        className="md:h-128
        md:items-cente container
        mx-auto flex
        flex-col
        space-y-6 px-6
        py-4 md:flex-row
        md:space-x-6
        md:py-16"
      >
        <div
          className="flex w-full flex-col items-center
          md:w-1/2
          md:flex-row"
        >
          {/* Button */}
          <div
            className="order-2
            mt-6
            flex justify-center
            md:mt-0 md:flex-col md:space-y-3"
          >
            <button
              className="mx-2
              h-3 w-3
              rounded-full
              bg-blue-500
              focus:outline-none
              md:mx-0"
            />
            <button
              className="mx-2
              h-3 w-3
              rounded-full
              bg-gray-300 hover:bg-blue-500
              focus:outline-none md:mx-0"
            ></button>
            <button
              className="mx-2
              h-3 w-3
              rounded-full
              bg-gray-300 hover:bg-blue-500
              focus:outline-none
              md:mx-0"
            />
            <button
              className="mx-2
              h-3 w-3
              rounded-full
              bg-gray-300 hover:bg-blue-500
              focus:outline-none md:mx-0"
            />
          </div>
          {/* Content */}
          <div
            className="max-w-lg
            md:order-2
            md:mx-12"
          >
            <h1 className="text-3xl font-medium tracking-wide text-gray-800 md:text-4xl">
              The best Apple Watch apps
            </h1>
            <p
              className="mt-4
              text-gray-600"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia
              asperiores alias vero magnam recusandae adipisci ad vitae
              laudantium quod rem voluptatem eos accusantium cumque.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="block
                transform
                rounded-md
                bg-blue-500
                px-3 py-2
                text-center font-semibold text-white
                transition-colors duration-200
                hover:bg-blue-400
                md:inline"
              >
                Download from App Store
              </a>
            </div>
          </div>
        </div>
        {/* Image */}
        <div
          className="flex
          h-96 w-full
          items-center justify-center
          md:w-1/2"
        >
          <img
            className="h-full w-full
            max-w-2xl
            rounded-md
            object-cover"
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="apple watch photo"
          />
        </div>
      </div>
    </>
  );
}

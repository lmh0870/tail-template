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
      <div className="relative h-[400px] overflow-hidden rounded-lg bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-no-repeat p-12 text-center">
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
              <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
              <a
                className="mb-1 inline-block rounded border-2 border-gray-200 px-7 py-3 text-sm font-medium uppercase leading-snug text-gray-200 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

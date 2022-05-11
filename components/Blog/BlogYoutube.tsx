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
      <section
        className="container mx-auto
        grid grid-cols-3 gap-4
        bg-white
        p-4"
      >
        <div className="col-span-2 row-span-2">
          <div
            className="relative overflow-hidden
            pt-[56.25%]"
          >
            <iframe
              className="absolute inset-0
              h-full w-full
              border-0"
              src="https://www.youtube.com/embed/8VTb2votTM0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h3
            className="mt-2
            truncate text-lg uppercase tracking-wider"
          >
            Lorem Ipsum
          </h3>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden
            pt-[56.25%]"
          >
            <img
              className="absolute inset-0
              h-full w-full
              object-cover"
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80"
              alt=""
            />
          </div>

          <h3
            className="absolute inset-x-0 bottom-0
            truncate
            bg-white
            pt-2
            text-lg uppercase tracking-wider"
          >
            Dolor Sit Amet
          </h3>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden
            pt-[56.25%]"
          >
            <img
              className="absolute inset-0
              h-full w-full
              object-cover"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>

          <h3
            className="absolute inset-x-0 bottom-0
            truncate bg-white
            pt-2
            text-lg uppercase tracking-wider"
          >
            Blog 2 Title here
          </h3>
        </div>
      </section>
    </>
  );
}

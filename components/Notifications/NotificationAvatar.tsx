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
      <div className="relative my-6 inline-flex w-fit">
        <div className="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-blue-500 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-white">
          writing…
        </div>
        <div className="h-24 w-24">
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            className="h-full w-full max-w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}

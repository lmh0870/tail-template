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
      <video className="w-full shadow-lg" autoPlay loop controls muted>
        <source
          src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

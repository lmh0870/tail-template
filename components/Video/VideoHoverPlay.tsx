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
  if (typeof document !== "undefined") {
    const clip = document.querySelectorAll(".clip");
    for (let i = 0; i < clip.length; i++) {
      clip[i].addEventListener("mouseenter", function (e) {
        // @ts-ignore
        clip[i].play();
      });
      clip[i].addEventListener("mouseout", function (e) {
        // @ts-ignore
        clip[i].pause();
      });
    }
  }
  return (
    <>
      <video className="clip w-full" loop>
        <source
          src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

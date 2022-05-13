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
      <div className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden pt-[42.857143%]">
        <iframe
          className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
          //   allowFullScreen=""
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"
        ></iframe>
      </div>
    </>
  );
}

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
      <div
        id="carouselExampleCaptions"
        className="slide carousel carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://mdbootstrap.com/img/video/Lines.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
              style={{
                backgroundColor: "rgba(50, 123, 233, 0.1)",
              }}
            >
              <div className="carousel-caption absolute hidden text-center md:block">
                <h3 className="text-2xl">Light blue mask</h3>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://mdbootstrap.com/img/video/animation-intro.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
              style={{
                backgroundColor: "rgba(135, 50, 233, 0.1)",
              }}
            >
              <div className="carousel-caption absolute hidden text-center md:block">
                <h3 className="text-2xl">Light purple mask</h3>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://mdbcdn.b-cdn.net/img/video/Nature-Sunset.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
              style={{
                backgroundColor: "rgba(50, 233, 90, 0.1)",
              }}
            >
              <div className="carousel-caption absolute hidden text-center md:block">
                <h3 className="text-2xl">Light green mask</h3>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

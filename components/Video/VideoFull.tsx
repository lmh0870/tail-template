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
        id="carouselExampleCaptionsFull"
        className="slide carousel carousel-fade relative h-screen"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsFull"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsFull"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptionsFull"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative h-screen w-full overflow-hidden">
          <div className="carousel-item active relative float-left h-screen w-full bg-cover bg-center bg-no-repeat">
            <video
              className="min-h-full min-w-full max-w-fit xl:min-h-0 xl:min-w-0"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                className=""
                src="https://mdbootstrap.com/img/video/Lines.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="px-md-0 px-14 text-center text-white">
                  <h2 className="mb-4 text-3xl font-semibold">
                    Learn Tailwind Elements
                  </h2>
                  <h5 className="mb-6 text-lg font-semibold">
                    Best & free guide of responsive web design
                  </h5>
                  <div className="md:space-x-2">
                    <a
                      type="button"
                      className="mb-2 inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 md:mb-0"
                      href="#!"
                      role="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Start tutorial
                    </a>
                    <a
                      type="button"
                      className="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                      href="#!"
                      role="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left h-screen w-full bg-cover bg-center bg-no-repeat">
            <video
              className="min-h-full min-w-full max-w-fit xl:min-h-0 xl:min-w-0"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                className=""
                src="https://mdbootstrap.com/img/video/forest.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="px-md-0 px-14 text-center text-white">
                  <h2 className="mb-4 text-3xl font-semibold">
                    You can place here any content
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left h-screen w-full bg-cover bg-center bg-no-repeat">
            <video
              className="min-h-full min-w-full max-w-fit xl:min-h-0 xl:min-w-0"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                className=""
                src="https://mdbootstrap.com/img/video/Tropical.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
              style={{
                background:
                  "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)",
              }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="px-md-0 px-14 text-center text-white">
                  <h2 className="mb-4 text-3xl font-semibold">
                    And cover it with any mask
                  </h2>
                  <a
                    type="button"
                    className="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    href="#!"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCaptionsFull"
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
          data-bs-target="#carouselExampleCaptionsFull"
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

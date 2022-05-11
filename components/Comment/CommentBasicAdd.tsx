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
      <div className="w-full border bg-white shadow">
        <div className="flex">
          <div className="bg-purple-darker text-purple-lighter hidden w-1/5 pb-6 md:block">
            <h1 className="mb-2 mt-3 flex justify-between px-4 font-sans text-xl text-white">
              <span>Tailwind CSS</span>
              <svg
                className="text-purple-lightest h-6 w-6 fill-current"
                viewBox="0 0 32 32"
              >
                <g id="surface1">
                  <path d="M 16 3 C 14.894531 3 14 3.894531 14 5 C 14 5.085938 14.019531 5.167969 14.03125 5.25 C 10.574219 6.132813 8 9.273438 8 13 L 8 22 C 8 22.566406 7.566406 23 7 23 L 6 23 L 6 25 L 13.1875 25 C 13.074219 25.316406 13 25.648438 13 26 C 13 27.644531 14.355469 29 16 29 C 17.644531 29 19 27.644531 19 26 C 19 25.648438 18.925781 25.316406 18.8125 25 L 26 25 L 26 23 L 25 23 C 24.433594 23 24 22.566406 24 22 L 24 13.28125 C 24 9.523438 21.488281 6.171875 17.96875 5.25 C 17.980469 5.167969 18 5.085938 18 5 C 18 3.894531 17.105469 3 16 3 Z M 15.5625 7 C 15.707031 6.988281 15.851563 7 16 7 C 16.0625 7 16.125 7 16.1875 7 C 19.453125 7.097656 22 9.960938 22 13.28125 L 22 22 C 22 22.351563 22.074219 22.683594 22.1875 23 L 9.8125 23 C 9.925781 22.683594 10 22.351563 10 22 L 10 13 C 10 9.824219 12.445313 7.226563 15.5625 7 Z M 16 25 C 16.5625 25 17 25.4375 17 26 C 17 26.5625 16.5625 27 16 27 C 15.4375 27 15 26.5625 15 26 C 15 25.4375 15.4375 25 16 25 Z "></path>
                </g>
              </svg>
            </h1>
            <div className="mb-6 flex items-center px-4">
              <span className="bg-green mr-2 block h-2 w-2 rounded-full"></span>
              <span className="text-purple-lightest">Olivia</span>
            </div>

            <div className="mb-2 px-4 font-sans">Channels</div>
            <div className="bg-teal-dark font-semi-bold mb-6 py-1 px-4 text-white ">
              <span className="text-grey-light pr-1">#</span> general
            </div>

            <div className="mb-3 px-4 font-sans">Direct Messages</div>

            <div className="mb-3 flex items-center px-4">
              <span className="bg-green mr-2 block h-2 w-2 rounded-full"></span>
              <span className="text-purple-lightest">
                Olivia Dunham <i className="text-grey text-sm">(me)</i>
              </span>
            </div>

            <div className="mb-3 flex items-center px-4">
              <span className="bg-green mr-2 block h-2 w-2 rounded-full"></span>
              <span className="text-purple-lightest">Adam Bishop</span>
            </div>

            <div className="mb-6 flex items-center px-4">
              <span className="mr-2 block h-2 w-2 rounded-full border"></span>
              <span className="text-purple-lightest">killgt</span>
            </div>

            <div className="mb-3 px-4 font-sans">Applications</div>
          </div>

          <div className="flex w-full flex-col">
            <div className="flex items-center border-b px-6 py-2">
              <div className="flex flex-col">
                <h3 className="text-grey-darkest text-md mb-1 font-extrabold">
                  #general
                </h3>
                <div className="text-grey text-sm font-thin">
                  Chit-chattin about ugly HTML and mixing of concerns.
                </div>
              </div>
              <div className="ml-auto hidden md:block">
                <input
                  type="search"
                  placeholder="Search"
                  className="border-grey rounded-lg border p-2"
                />
              </div>
            </div>

            <div className="overflow-scroll-x flex-1 px-6 py-4">
              <div className="mb-4 flex items-start">
                <img
                  src="https://avatars2.githubusercontent.com/u/343407?s=460&v=4"
                  className="mr-3 h-10 w-10 rounded"
                />
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-md mr-2 font-sans font-bold">
                      killgt
                    </span>
                    <span className="text-grey text-xs font-light">11:46</span>
                  </div>
                  <p className="text-md text-grey-darkest pt-1 font-light">
                    The slack from the other side.
                  </p>
                </div>
              </div>

              <div className="mb-4 flex items-start">
                <img
                  src="https://i.imgur.com/8Km9tLL.jpg"
                  className="mr-3 h-10 w-10 rounded"
                />
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-md mr-2 font-sans font-bold">
                      Olivia Dunham
                    </span>
                    <span className="text-grey text-xs font-light">12:45</span>
                  </div>
                  <p className="text-md text-grey-darkest pt-1 font-light">
                    How are we supposed to control the marquee space without an
                    utility for it? I propose this:
                  </p>
                  <div className="bg-grey-lighter border-grey-light mt-2 whitespace-pre rounded border p-3 font-mono">
                    .marquee-lightspeed
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <img
                  src="https://i.imgur.com/qACoKgY.jpg"
                  className="mr-3 h-10 w-10 rounded"
                />
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-md mr-2 font-sans font-bold">
                      Adam Bishop
                    </span>
                    <span className="text-grey text-xs font-light">12:46</span>
                  </div>
                  <p className="text-md text-grey-darkest pt-1 font-light">
                    <a href="#" className="text-blue">
                      @Olivia Dunham
                    </a>{" "}
                    the size of the generated CSS is creating a singularity in
                    space/time, we must stop adding more utilities before its
                    too late!
                  </p>
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            <div className="border-grey m-6 flex overflow-hidden rounded-lg border-2">
              <span className="text-grey border-grey border-r-2 px-3 text-3xl">
                +
              </span>
              <input
                type="text"
                className="w-full px-4"
                placeholder="Message to #general"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

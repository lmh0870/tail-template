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
      <div className="lg:6/12 relative mx-auto w-10/12 py-20 md:w-7/12">
        <h1 className="text-center text-3xl font-bold text-blue-500">
          Timeline with Tailwindcss
        </h1>
        <div className="mt-10 border-l-2">
          <div
            className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-blue-600 px-6 py-4 text-white transition
          hover:-translate-y-2 md:flex-row md:space-y-0"
          >
            <div className="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-blue-600 md:mt-0"></div>

            <div className="absolute -left-10 z-0 h-1 w-10 bg-blue-300"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          <div className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-pink-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0">
            <div className="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-pink-600 md:mt-0"></div>

            <div className="absolute -left-10 z-0 h-1 w-10 bg-pink-300"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          <div className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-green-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0">
            <div className="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-green-600 md:mt-0"></div>

            <div className="absolute -left-10 z-0 h-1 w-10 bg-green-300"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          <div className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-purple-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0">
            <div className="absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-purple-600 md:mt-0"></div>

            <div className="absolute -left-10 z-0 h-1 w-10 bg-purple-300"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>

          <div className="relative ml-10 mb-10 flex transform cursor-pointer flex-col items-center rounded bg-yellow-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row">
            <div className="absolute -left-10 z-10 -mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-yellow-600 md:mt-0"></div>

            <div className="absolute -left-10 z-0 h-1 w-10 bg-yellow-300"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" className="text-center text-white hover:text-gray-300">
              Download materials
            </a>
          </div>
        </div>
        <section className="mt-4 text-center">
          Build with ❤️ by{" "}
          <a
            href="https://github.com/saadh393"
            target="_blank"
            rel="noreferrer"
          >
            Saad Hasan{" "}
          </a>
        </section>
      </div>
    </>
  );
}

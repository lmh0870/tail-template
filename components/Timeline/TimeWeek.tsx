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
        className="flex min-h-screen
        justify-center
        bg-gray-100
        p-24"
      >
        <div
          className="w-2/3 rounded-lg bg-white p-4 shadow
          lg:w-1/2 xl:w-1/3"
        >
          <div>
            <span className="date relative inline-block font-medium uppercase tracking-widest text-gray-900">
              Wednesday 8
            </span>
            <div className="mb-2 flex">
              <div className="w-2/12">
                <span className="block text-sm text-gray-600">8:00a</span>
                <span className="block text-sm text-gray-600">8:15a</span>
              </div>
              <div className="w-1/12">
                <span className="mt-2 block h-2 w-2 rounded-full bg-blue-400"></span>
              </div>
              <div className="w-9/12">
                <span className="block text-sm font-semibold">
                  Morning Standup
                </span>
                <span className="text-sm">Zoom ID: 1134 11 1134</span>
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-2/12">
                <span className="block text-sm text-gray-600">10:00a</span>
                <span className="block text-sm text-gray-600">2:00p</span>
              </div>
              <div className="w-1/12">
                <span className="mt-2 block h-2 w-2 rounded-full bg-red-400"></span>
              </div>
              <div className="w-9/12">
                <span className="block text-sm font-semibold">
                  Core Development
                </span>
                <span className="text-sm">Joey, Matt, CJ and Vlad</span>
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-2/12">
                <span className="block text-sm text-gray-600">3:00p</span>
                <span className="block text-sm text-gray-600">3:30p</span>
              </div>
              <div className="w-1/12">
                <span className="mt-2 block h-2 w-2 rounded-full bg-indigo-600"></span>
              </div>
              <div className="w-9/12">
                <span className="block text-sm font-semibold">
                  Interview with Ed Harris
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className="date relative inline-block font-medium uppercase tracking-widest text-gray-900">
              Thursday 9
            </span>
            <div className="mb-2 flex">
              <div className="w-2/12">
                <span className="block text-sm text-gray-600">8:00a</span>
                <span className="block text-sm text-gray-600">8:15a</span>
              </div>
              <div className="w-1/12">
                <span className="mt-2 block h-2 w-2 rounded-full bg-blue-400"></span>
              </div>
              <div className="w-9/12">
                <span className="block text-sm font-semibold">
                  Morning Standup
                </span>
                <span className="text-sm">Zoom ID: 1134 11 1134</span>
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-2/12">
                <span className="block text-sm text-gray-600">6:00p</span>
                <span className="block text-sm text-gray-600">7:30p</span>
              </div>
              <div className="w-1/12">
                <span className="mt-2 block h-2 w-2 rounded-full bg-yellow-400"></span>
              </div>
              <div className="w-9/12">
                <span className="block text-sm font-semibold">
                  Dinner with Mom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

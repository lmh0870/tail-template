export interface CompProps {
  [key: string]: any;
}

export default function Comp({}: CompProps) {
  return (
    <>
      <div className="flex h-[600px] bg-white">
        <div className="flex items-center px-8 text-center md:px-12 lg:w-1/2 lg:text-left">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Another World <span className="text-indigo-600">YU2BEE</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              이세계에 온걸 환영해! 평일 7시부터 새벽까지, 주말 2시~3시부터
              새벽까지 포털이 열립니다. 휴방은 트게더에 공지
            </p>
            <div className="mt-6 flex w-1/2 flex-col justify-center lg:justify-start">
              <a
                href="https://www.youtube.com/channel/UC78Sq04kj1xb3n6YvGX8D8g"
                className="mt-4 flex items-center justify-center rounded-lg text-white shadow-md hover:bg-gray-100"
              >
                <div className="px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="-35.20005 -41.33325 305.0671 247.9995"
                  >
                    <path
                      d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85"
                      fill="red"
                    />
                    <path
                      d="M93.333 117.559l61.333-34.89-61.333-34.894z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <h1 className="w-5/6 px-4 py-3 text-center font-bold text-gray-600">
                  Youtube
                </h1>
              </a>
              <a
                href="https://www.twitch.tv/yu2bee"
                className="mt-4 flex items-center justify-center rounded-lg text-white shadow-md hover:bg-gray-100"
              >
                <div className="px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-6 w-6"
                    viewBox="-6 0 268 268"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z"
                        fill="#5A3E85"
                      />
                    </g>
                  </svg>
                </div>
                <h1 className="w-5/6 px-4 py-3 text-center font-bold text-gray-600">
                  Twitch
                </h1>
              </a>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{
            clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
          }}
        >
          <div className="h-full bg-[url('/2022-02-03.png')] ">
            <div className="h-full bg-black opacity-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}

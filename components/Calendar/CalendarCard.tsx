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
      <div className="h-screen bg-gray-100 p-6">
        {/* Calendar - 1 */}
        <div
          className="mx-auto
          flex justify-start
          overflow-x-scroll
          rounded-lg
          bg-white
          py-4 px-2
          shadow-md
          md:mx-12
          md:justify-center"
        >
          <div
            className="hover-dark-shadow
            group
            mx-1
            flex
            w-16
            cursor-pointer
            justify-center
            rounded-lg
            transition-all duration-300
            hover:bg-purple-500
            hover:shadow-lg"
          >
            <div
              className="flex items-center
              px-4 py-4"
            >
              <div className="text-center">
                <p
                  className="text-sm text-gray-900
                  transition-all duration-300
                  group-hover:text-gray-100"
                >
                  {" "}
                  Sun{" "}
                </p>
                <p
                  className="mt-3
                  text-gray-900
                  transition-all duration-300
                  group-hover:font-bold group-hover:text-gray-100"
                >
                  {" "}
                  11{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="hover-dark-shadow
            group
            mx-1
            flex w-16 cursor-pointer justify-center
            rounded-lg
            transition-all duration-300
            hover:bg-purple-500
            hover:shadow-lg"
          >
            <div
              className="flex items-center
              px-4 py-4"
            >
              <div className="text-center">
                <p
                  className="text-sm text-gray-900
                  transition-all duration-300
                  group-hover:text-gray-100"
                >
                  {" "}
                  Mon{" "}
                </p>
                <p
                  className="mt-3
                  text-gray-900
                  transition-all duration-300
                  group-hover:font-bold group-hover:text-gray-100"
                >
                  {" "}
                  12{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="hover-dark-shadow
            group
            mx-1
            flex w-16 cursor-pointer justify-center
            rounded-lg
            transition-all duration-300
            hover:bg-purple-500
            hover:shadow-lg"
          >
            <div
              className="flex items-center
              px-4 py-4"
            >
              <div className="text-center">
                <p
                  className="text-sm text-gray-900
                  transition-all duration-300
                  group-hover:text-gray-100"
                >
                  {" "}
                  Tue{" "}
                </p>
                <p
                  className="mt-3
                  text-gray-900
                  transition-all duration-300
                  group-hover:font-bold	group-hover:text-gray-100"
                >
                  {" "}
                  13
                </p>
              </div>
            </div>
          </div>

          <div
            className="dark-shadow
            group
            relative mx-1
            flex w-16 cursor-pointer justify-center
            rounded-lg
            bg-purple-600
            shadow-lg"
          >
            <span
              className="absolute -top-1 -right-1
              flex
              h-3 w-3"
            >
              <span
                className="absolute inline-flex
                h-full w-full
                animate-ping
                rounded-full
                bg-purple-400
                opacity-0
                group-hover:opacity-75"
              ></span>
              <span
                className="relative inline-flex
                h-3 w-3
                rounded-full
                bg-purple-100"
              ></span>
            </span>
            <div
              className="flex items-center
              px-4 py-4"
            >
              <div className="text-center">
                <p className="text-sm text-gray-100"> Wed </p>
                <p
                  className="mt-3
                  font-bold text-gray-100"
                >
                  {" "}
                  14{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="hover-dark-shadow
            group
            mx-1
            flex w-16 cursor-pointer justify-center
            rounded-lg
            transition-all duration-300
            hover:bg-purple-500
            hover:shadow-lg
            "
          >
            <div
              className="flex items-center
              px-4 py-4"
            >
              <div className="text-center">
                <p
                  className="text-sm text-gray-900
                  transition-all duration-300
                  group-hover:text-gray-100"
                >
                  {" "}
                  Thu{" "}
                </p>
                <p
                  className="mt-3
                  text-gray-900
                  transition-all duration-300
                  group-hover:font-bold	group-hover:text-gray-100"
                >
                  {" "}
                  15{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="hover-dark-shadow
            group
            mx-1
            flex w-16 cursor-pointer justify-center
            rounded-lg
            transition-all duration-300
            hover:bg-purple-500
            hover:shadow-lg"
          >
            <div
              className="flex items-center
              px-4 py-4"
            >
              <div className="text-center">
                <p
                  className="text-sm text-gray-900
                  transition-all duration-300
                  group-hover:text-gray-100"
                >
                  {" "}
                  Fri{" "}
                </p>
                <p
                  className="mt-3
                  text-gray-900
                  transition-all duration-300
                  group-hover:font-bold	group-hover:text-gray-100"
                >
                  {" "}
                  16{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="hover-dark-shadow
            group
            mx-1
            flex w-16 cursor-pointer justify-center
            rounded-lg
            transition-all duration-300
            hover:bg-purple-500
            hover:shadow-lg"
          >
            <div
              className="flex items-center
              px-4 py-4"
            >
              <div className="text-center">
                <p
                  className="text-sm text-gray-900
                  transition-all duration-300
                  group-hover:text-gray-100"
                >
                  {" "}
                  Sat{" "}
                </p>
                <p
                  className="mt-3
                  text-gray-900
                  transition-all duration-300
                  group-hover:font-bold	group-hover:text-gray-100"
                >
                  {" "}
                  17{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* Calendar - 2 */}
        <div className="mx-auto flex justify-start overflow-x-scroll rounded-lg bg-white py-4 px-2 shadow-md md:mx-12  md:justify-center">
          <div className="hover-light-shadow group mx-1 flex w-16 cursor-pointer justify-center rounded-lg	transition-all	 duration-300 hover:bg-purple-100 hover:shadow-lg">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-sm text-gray-900 transition-all duration-300	group-hover:text-purple-900">
                  {" "}
                  Sun{" "}
                </p>
                <p className="mt-3 text-gray-900 transition-all duration-300 group-hover:font-bold	group-hover:text-purple-900">
                  {" "}
                  11{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="hover-light-shadow group mx-1 flex w-16 cursor-pointer justify-center rounded-lg	transition-all	 duration-300 hover:bg-purple-100 hover:shadow-lg">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-sm text-gray-900 transition-all duration-300	group-hover:text-purple-900">
                  {" "}
                  Mon{" "}
                </p>
                <p className="mt-3 text-gray-900 transition-all duration-300 group-hover:font-bold	group-hover:text-purple-900">
                  {" "}
                  12{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="hover-light-shadow group mx-1 flex w-16 cursor-pointer justify-center rounded-lg	transition-all	 duration-300 hover:bg-purple-100 hover:shadow-lg">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-sm text-gray-900 transition-all duration-300	group-hover:text-purple-900">
                  {" "}
                  Tue{" "}
                </p>
                <p className="mt-3 text-gray-900 transition-all duration-300 group-hover:font-bold	group-hover:text-purple-900">
                  {" "}
                  13
                </p>
              </div>
            </div>
          </div>

          <div className="light-shadow group relative mx-1 flex w-16 cursor-pointer content-center justify-center rounded-lg bg-purple-300 shadow-lg">
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-0 group-hover:opacity-75 "></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-500"></span>
            </span>
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-sm text-purple-900"> Wed </p>
                <p className="mt-3  font-bold text-purple-900"> 14 </p>
              </div>
            </div>
          </div>

          <div className="hover-light-shadow group mx-1 flex w-16 cursor-pointer content-center justify-center	rounded-lg transition-all	 duration-300 hover:bg-purple-100 hover:shadow-lg">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-sm text-gray-900 transition-all duration-300	group-hover:text-purple-900">
                  {" "}
                  Thu{" "}
                </p>
                <p className="mt-3 text-gray-900 transition-all duration-300 group-hover:font-bold	group-hover:text-purple-900">
                  {" "}
                  15{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="hover-light-shadow group mx-1 flex w-16 cursor-pointer justify-center rounded-lg	transition-all	 duration-300 hover:bg-purple-100 hover:shadow-lg">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-sm text-gray-900 transition-all duration-300	group-hover:text-purple-900">
                  {" "}
                  Fri{" "}
                </p>
                <p className="mt-3 text-gray-900 transition-all duration-300 group-hover:font-bold	group-hover:text-purple-900">
                  {" "}
                  16{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="hover-light-shadow group mx-1 flex w-16 cursor-pointer justify-center rounded-lg	transition-all	 duration-300 hover:bg-purple-100 hover:shadow-lg">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-sm text-gray-900 transition-all duration-300	group-hover:text-purple-900">
                  {" "}
                  Sat{" "}
                </p>
                <p className="mt-3 text-gray-900 transition-all duration-300 group-hover:font-bold	group-hover:text-purple-900">
                  {" "}
                  17{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

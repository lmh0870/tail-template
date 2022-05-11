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
      <div className="mx-auto max-w-2xl">
        <div className="px-3 py-2">
          <div className="flex flex-col gap-1 text-center">
            <a
              className="mx-auto block h-20 w-20 rounded-full border border-gray-400 bg-[url('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg')] bg-cover bg-center bg-no-repeat
              shadow-lg"
              href=""
            ></a>
            <p className="font-serif font-semibold">Marina Davinchi</p>
            <span className="text-sm text-gray-400">
              New York, NY - Los Angeles, CA
            </span>
            <span className="text-sm text-gray-400">
              https://www.youtube.com/watch?v=dQw4w9WgXcQ
            </span>
          </div>

          <div className="my-3 flex items-center justify-center gap-2">
            <div className="mx-4 text-center font-semibold">
              <p className="text-black">102</p>
              <span className="text-gray-400">Posts</span>
            </div>
            <div className="mx-4 text-center font-semibold">
              <p className="text-black">102</p>
              <span className="text-gray-400">Followers</span>
            </div>
            <div className="mx-4 text-center font-semibold">
              <p className="text-black">102</p>
              <span className="text-gray-400">Folowing</span>
            </div>
          </div>

          <div className="my-5 flex justify-center gap-2">
            <button className="rounded-full bg-pink-500 px-10 py-2 text-white shadow-lg">
              Follow
            </button>
            <button className="rounded-full border border-gray-500 bg-white px-10 py-2 shadow-lg">
              Message
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button className="w-full border-b-2 border-yellow-400 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button className="w-full py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          <div className="my-3 grid grid-cols-3 gap-2">
            <a
              className="block h-40 w-full rounded-lg bg-[url('https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg')] bg-cover bg-center bg-no-repeat"
              href=""
            ></a>
            <a
              className="block h-40 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg')",
              }}
            ></a>
            <a
              className="block h-40 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/6169/woman-hand-girl-professional.jpg')",
              }}
            ></a>

            <a
              className="block h-40 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/3851790/pexels-photo-3851790.jpeg')",
              }}
            ></a>
            <a
              className="block h-40 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg')",
              }}
            ></a>
            <a
              className="block h-40 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/4491173/pexels-photo-4491173.jpeg')",
              }}
            ></a>

            <a
              className="block h-40 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg')",
              }}
            ></a>
            <a
              className="block h-40 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/6019812/pexels-photo-6019812.jpeg')",
              }}
            ></a>
            <a
              className="block h-40 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              href=""
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg')",
              }}
            ></a>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-full bg-yellow-600 bg-opacity-20 px-10 py-5 text-gray-500">
          <button className="rounded-full bg-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-pink-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
          <button className="rounded-full bg-pink-500 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

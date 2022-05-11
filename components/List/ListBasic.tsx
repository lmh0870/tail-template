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
      <div className="min-h-64 overflow-hidden rounded-lg bg-white shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4">
        <p className="mb-2 px-2 px-4 pt-3 text-2xl font-thin text-gray-600">
          Contacts
        </p>
        <div className="px-2">
          <svg
            className="absolute z-50 m-1 text-blue-400"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.90997 16 3 13.09 3 9.5C3 5.90997 5.90997 3 9.5 3C13.09 3 16 5.90997 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01001 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01001 11.99 5 9.5 5C7.01001 5 5 7.01001 5 9.5Z"
              fill="black"
              fillOpacity="0.54"
            />
          </svg>
          <input
            type="text"
            className="relative w-full rounded bg-gray-200 p-1 pl-8"
            placeholder="Search teams or members"
          />
        </div>
        <div className="py-5 px-3">
          <div className="flex justify-between px-2 py-2">
            <p className="flex text-gray-700">
              <svg
                className="mx-2 w-2 text-gray-500"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              Tighten Co.
            </p>
            <p className="font-thin text-gray-500">Team</p>
          </div>
          <div className="flex justify-between rounded bg-blue-100 px-2 py-2">
            <p className="flex text-gray-700">
              <svg
                className="h2 mx-2 w-2 text-teal-500"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              Taylor Otwell
            </p>
            <p className="font-thin text-gray-500">Member</p>
          </div>
          <div className="flex justify-between px-2 py-2">
            <p className="flex text-gray-700">
              <svg
                className="h2 mx-2 w-2 text-gray-500"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              Adam Wathan
            </p>
            <p className="font-thin text-gray-500">Member</p>
          </div>
          <div className="flex justify-between px-2 py-2">
            <p className="flex text-gray-700">
              <svg
                className="h2 mx-2 w-2 text-gray-500"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              Ahmed Ashraf
            </p>
            <p className="font-thin text-gray-500">Member</p>
          </div>
          <div className="flex justify-between px-2 py-2">
            <p className="flex text-gray-700">
              <svg
                className="h2 mx-2 w-2 text-teal-500"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              Laracasts
            </p>
            <p className="font-thin text-gray-500">Team</p>
          </div>
        </div>
        <div className="flex flex-row-reverse bg-gray-300 px-2 py-3">
          <button className="rounded bg-blue-500 py-2 px-4 text-white">
            Invite
          </button>
          <button className="rounded py-2 px-4 text-gray-600">Cancel</button>
        </div>
      </div>
    </>
  );
}

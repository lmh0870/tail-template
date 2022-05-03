const data = [
  {
    image: "https://picsum.photos/seed/59/300/200",
    time: "1:15",
    profile: "https://picsum.photos/seed/1/40/40",
    title: "Learn CSS Box Model in 8 Minutes",
    subTitle: "Web Dev Simplified",
    view: 0,
    createdAt: 3,
  },
  {
    image: "https://picsum.photos/seed/59/300/200",
    time: "12",
    profile: "https://picsum.photos/seed/1/40/40",
    title: "Learn CSS Box Model in 8 Minutes",
    subTitle: "Web Dev Simplified",
    view: 0,
    createdAt: 3,
  },
  {
    image: "https://picsum.photos/seed/59/300/200",
    time: "12",
    profile: "https://picsum.photos/seed/1/40/40",
    title: "Learn CSS Box Model in 8 Minutes",
    subTitle: "Web Dev Simplified",
    view: 0,
    createdAt: 3,
  },
  {
    image: "https://picsum.photos/seed/59/300/200",
    time: "12",
    profile: "https://picsum.photos/seed/1/40/40",
    title: "Learn CSS Box Model in 8 Minutes",
    subTitle: "Web Dev Simplified",
    view: 0,
    createdAt: 3,
  },
];

interface CompProps {
  image: string;
  time: string;
  profile: string;
  title: string;
  subTitle: string;
  view: number;
  createdAt: number;
}

const Comp = ({
  image,
  time,
  profile,
  title,
  subTitle,
  view,
  createdAt,
}: CompProps) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
      <div className="flex w-full flex-col">
        <div className="relative">
          {/* <!-- Image Video --> */}
          <a href="#">
            <img src={image} className="h-auto w-96" alt="BG" />
          </a>
          <p className="py absolute right-2 bottom-2 bg-gray-900 px-1 text-xs text-gray-100">
            {time}
          </p>
        </div>
        <div className="mt-2 flex flex-row gap-2">
          {/* <!-- Profile Picture --> */}
          <a href="#">
            <img
              src={profile}
              className="max-w-10 max-h-10 rounded-full"
              alt="Profile"
            />
          </a>
          {/* <!-- Description --> */}
          <div className="flex flex-col">
            <a href="#">
              <p className="text-sm font-semibold text-gray-100">{title}</p>
            </a>
            <a
              className="mt-2 text-xs text-gray-400 hover:text-gray-100"
              href="#"
            >
              {" "}
              {subTitle}{" "}
            </a>
            <p className="mt-1 text-xs text-gray-400">
              {view}K views . {createdAt} years ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="grid max-w-6xl grid-cols-12 gap-2 gap-y-4">
          {data.map((data, i) => {
            return <Comp key={i} {...data} />;
          })}
        </div>
      </div>
    </>
  );
}

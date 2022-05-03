const data = [
  {
    profile: "https://picsum.photos/30/30",
    name: "Stephan Tromer",
    date: "Jan 13",
    title: "Go (Golang) with Structs and Interfaces",
    payload:
      "Although it would be possible for us to write programs only using Go’s built-in data types, at some point, it would become quite tedious. Consider a program that....,",
    image: "https://picsum.photos/100/100",
    tag: "Tutorial",
    createdAt: "7 min",
  },
  {
    profile: "https://picsum.photos/30/30",
    name: "Stephan Tromer",
    date: "Jan 13",
    title: "Go (Golang) with Structs and Interfaces",
    payload:
      "Although it would be possible for us to write programs only using Go’s built-in data types, at some point, it would become quite tedious. Consider a program that....,",
    image: "https://picsum.photos/100/100",
    tag: "Tutorial",
    createdAt: "7 min",
  },
  {
    profile: "https://picsum.photos/30/30",
    name: "Stephan Tromer",
    date: "Jan 13",
    title: "Go (Golang) with Structs and Interfaces",
    payload:
      "Although it would be possible for us to write programs only using Go’s built-in data types, at some point, it would become quite tedious. Consider a program that....,",
    image: "https://picsum.photos/100/100",
    tag: "Tutorial",
    createdAt: "7 min",
  },
];

interface CompProps {
  [key: string]: any;
}
const Comp = ({
  profile,
  name,
  date,
  title,
  payload,
  image,
  tag,
  createdAt,
}: CompProps) => {
  return (
    <>
      <div className="mt-5 flex w-1/2 flex-col">
        <header className="flex flex-row items-center gap-3">
          <img src={profile} className="rounded-full" />
          <div> {name} </div>
          <div className="text-sm text-gray-500"> {date} </div>
        </header>
        <section className="grid grid-cols-4 gap-3">
          <div className="col-span-3 flex flex-col">
            <div
              className="pt-3
              text-lg font-bold"
            >
              {title}
            </div>
            <div
              className="pt-2
              text-sm font-light "
            >
              {payload}
            </div>
          </div>
          {/*  */}
          <div className="flex items-center ">
            <img className="" src={image} />
          </div>
        </section>

        <footer className="flex flex-row items-center gap-3 pt-7">
          <button className="rounded-full bg-gray-200 py-1 px-2 text-xs delay-100 duration-100 hover:bg-gray-300">
            {tag}
          </button>

          <div className="text-xs text-gray-500">{createdAt} read</div>

          <div className="text-xs text-gray-500">
            Based on your reading history
          </div>
        </footer>
        <hr className="mt-5" />
      </div>
    </>
  );
};

export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <div className="flex h-screen flex-col items-center ">
        {data.map((data, i) => (
          <>
            <Comp key={i} {...data} />
          </>
        ))}
      </div>
    </>
  );
}

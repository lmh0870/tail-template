import { cls } from "@libs/client/utils";

const data = [
  {
    image:
      "bg-[url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')]",
    title: "Title",
    payload:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    image:
      "bg-[url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')]",
    title: "Title",
    payload:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    image:
      "bg-[url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')]",
    title: "Title",
    payload:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
];

interface CompProps {
  image: string;
  title: string;
  payload: string;
}
const Comp = ({ image, title, payload }: CompProps) => {
  return (
    <>
      <article
        className="overflow-hidden
        rounded-lg border
        border-gray-200 bg-white
        shadow-md
        "
      >
        <div
          className={cls(
            "aspect-video w-full bg-gray-100 bg-cover bg-center",
            image
          )}
        />
        <div className="p-5">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="mt-2 mb-3 font-normal text-gray-700">{payload}</p>
          <a
            href="#"
            className="inline-flex items-center rounded-lg
            bg-blue-600 px-3 py-2
            text-center text-sm font-medium text-white
            hover:bg-blue-700 focus:ring-2 focus:ring-blue-300
            "
          >
            Read more
          </a>
        </div>
      </article>
    </>
  );
};

export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <div className="mx-auto min-h-screen max-w-6xl p-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {data.map((data, i) => {
          return <Comp key={i} {...data} />;
        })}
      </div>
    </div>
  );
}

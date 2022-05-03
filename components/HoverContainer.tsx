import { cls } from "@libs/client/utils";

const data = {
  bg: "bg-[url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')]",
  title: "Top 10 highest paid programming languages of 2021",
};

export interface CardProps {
  [key: string]: any;
}

function Card({}: CardProps) {
  return (
    <article
      className="group
        relative
        h-64 w-full overflow-hidden
        rounded-lg
        bg-[url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')]
        bg-cover bg-center
        shadow-lg
        transition duration-300 ease-in-out hover:shadow-2xl"
    >
      <div
        className="absolute inset-0
          bg-black bg-opacity-0
          transition duration-300 ease-in-out
          group-hover:bg-opacity-50"
      />
      <div
        className="relative
          flex h-full w-full items-center justify-center
          px-4 opacity-0 group-hover:opacity-100
          sm:px-6 lg:px-4"
      >
        <a className="text-center text-2xl font-bold text-white" href="#">
          Top 10 highest paid programming languages of 2021
        </a>
      </div>
    </article>
  );
}

export interface CompProps {
  [key: string]: any;
}
export default function Comp({}: CompProps) {
  return (
    <section
      className="mx-auto
        mb-12
        max-w-7xl
        px-4 sm:px-6 lg:px-4"
    >
      <article>
        <h2 className="text-2xl font-extrabold text-gray-900">BLOG</h2>
        <section
          className="mt-6
            grid grid-cols-1 gap-x-6 gap-y-8
            md:grid-cols-2 lg:grid-cols-3"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </article>
    </section>
  );
}

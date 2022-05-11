import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mx-auto max-w-screen-lg">
        {/*  */}
        <header className="flex items-center justify-between py-2">
          <a href="#" className="px-2 font-bold capitalize lg:px-0">
            Tech Blog
          </a>
          <button className="block px-2 text-3xl md:hidden">
            <i className="bx bx-menu"></i>
          </button>
          <ul className="hidden items-center md:inline-flex">
            <li className="px-2 md:px-4">
              <a
                href=""
                className="font-semibold text-green-800 hover:text-green-600"
              >
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="px-2 md:px-4">
              <a
                href=""
                className="font-semibold text-gray-500 hover:text-green-600"
              >
                {" "}
                About{" "}
              </a>
            </li>
            <li className="px-2 md:px-4">
              <a
                href=""
                className="font-semibold text-gray-500 hover:text-green-600"
              >
                {" "}
                Press{" "}
              </a>
            </li>
            <li className="px-2 md:px-4">
              <a
                href=""
                className="font-semibold text-gray-500 hover:text-green-600"
              >
                {" "}
                Contact{" "}
              </a>
            </li>
            <li className="hidden px-2 md:block md:px-4">
              <a
                href=""
                className="font-semibold text-gray-500 hover:text-green-600"
              >
                {" "}
                Login{" "}
              </a>
            </li>
            <li className="hidden px-2 md:block md:px-4">
              <a
                href=""
                className="font-semibold text-gray-500 hover:text-green-600"
              >
                {" "}
                Register{" "}
              </a>
            </li>
          </ul>
        </header>
        <main className="mt-12">
          {/* Content - Header */}
          <div className="md:flex-no-wrap mb-16 flex flex-wrap space-x-0 md:space-x-6">
            {/*  */}
            <div className="md:w-4/7 relative  mb-4 block w-full rounded p-4 lg:mb-0 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="h-64 w-full rounded-md object-cover"
              />
              <span className="mt-4 hidden text-sm text-green-700 md:block">
                {" "}
                Technology{" "}
              </span>
              <h1 className="mt-2 mb-2 text-4xl font-bold leading-tight text-gray-800">
                Ignorant branched humanity led now marianne too.
              </h1>
              <p className="mb-4 text-gray-600">
                Necessary ye contented newspaper zealously breakfast he
                prevailed. Melancholy middletons yet understood decisively boy
                law she. Answer him easily are its barton little. Oh no though
                mother be things simple itself. Oh be me, sure wise sons, no.
                Piqued ye of am spirit regret. Stimulated discretion impossible
                admiration in particular conviction up.
              </p>
              <a
                href="./blog.html"
                className="mt-2 inline-block rounded-md bg-green-700 px-6 py-3 text-gray-100"
              >
                Read more
              </a>
            </div>
            {/*  */}
            <div className="md:w-4/7 w-full">
              <div className="mb-10 flex w-full flex-col rounded md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="m-4 block h-64 rounded-md md:m-0 md:hidden md:h-32 lg:block"
                />
                <div className="rounded bg-white px-4">
                  <span className="hidden text-sm text-green-700 md:block">
                    {" "}
                    Gadgets{" "}
                  </span>
                  <div className="mb-2 text-xl font-semibold text-gray-800 md:mt-0">
                    At every tiled on ye defer do. No attention suspected oh
                    difficult.
                  </div>
                  <p className="block p-2 pl-0 pt-1 text-sm text-gray-600 md:hidden">
                    Wonder matter now can estate esteem assure fat roused. Am
                    performed on existence as discourse is. Pleasure friendly at
                    marriage blessing or
                  </p>
                </div>
              </div>

              <div className="mb-10 flex w-full flex-col rounded md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="m-4 block h-64 rounded-md md:m-0 md:hidden md:h-32 lg:block"
                />
                <div className="rounded bg-white px-4">
                  <span className="hidden text-sm text-green-700 md:block">
                    {" "}
                    Bitcoin{" "}
                  </span>
                  <div className="mb-2 text-xl font-semibold text-gray-800 md:mt-0">
                    Fond his say old meet cold find come whom. The sir park sake
                    bred.
                  </div>
                  <p className="block p-2 pl-0 pt-1 text-sm text-gray-600 md:hidden">
                    Integer commodo, sapien ut vulputate viverra, Integer
                    commodo Integer commodo, sapien ut vulputate viverra,
                    Integer commodo
                  </p>
                </div>
              </div>
              <div className="mb-10 flex w-full flex-col rounded md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="m-4 block h-64 rounded-md md:m-0 md:hidden md:h-32 lg:block"
                />
                <div className="rounded bg-white px-4">
                  <span className="hidden text-sm text-green-700 md:block">
                    {" "}
                    Insights{" "}
                  </span>
                  <div className="mb-2 text-xl font-semibold text-gray-800 md:mt-0">
                    Advice me cousin an spring of needed. Tell use paid law ever
                    yet new.
                  </div>
                  <p className="block p-2 pl-0 pt-1 text-sm text-gray-600 md:hidden">
                    Meant to learn of vexed if style allow he there. Tiled man
                    stand tears ten joy there terms any widen.
                  </p>
                </div>
              </div>
              <div className="mb-10 flex w-full flex-col rounded md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="m-4 block h-64 rounded-md md:m-0 md:hidden md:h-32 lg:block"
                />
                <div className="rounded bg-white px-4">
                  <span className="hidden text-sm text-green-700 md:block">
                    {" "}
                    Cryptocurrency{" "}
                  </span>
                  <div className="mb-2 text-xl font-semibold text-gray-800 md:mt-0">
                    Advice me cousin an spring of needed. Tell use paid law ever
                    yet new.
                  </div>
                  <p className="block p-2 pl-0 pt-1 text-sm text-gray-600 md:hidden">
                    Meant to learn of vexed if style allow he there. Tiled man
                    stand tears ten joy there terms any widen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-16 mb-4 flex items-center justify-between px-4 lg:px-0">
            <h2 className="text-3xl font-bold">Latest news</h2>
            <a className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-gray-800 hover:bg-green-200">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="text-2xl font-bold text-gray-800">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p className="mt-2 text-gray-700">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>

                <a
                  href="#"
                  className="mt-2 ml-auto inline-block rounded py-2 text-green-900"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="text-2xl font-bold text-gray-800">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p className="mt-2 text-gray-700">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>

                <a
                  href="#"
                  className="mt-2 ml-auto inline-block rounded py-2 text-green-900"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="text-2xl font-bold text-gray-800">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p className="mt-2 text-gray-700">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>

                <a
                  href="#"
                  className="mt-2 ml-auto inline-block rounded py-2 text-green-900"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex rounded md:shadow">
            <img
              src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="w-0 rounded-l object-cover md:w-1/4"
            />
            <div className="px-4 py-2">
              <h3 className="text-3xl font-bold text-gray-800">
                Subscribe to newsletter
              </h3>
              <p className="text-xl text-gray-700">
                We sent latest news and posts once in every week, fresh from the
                oven
              </p>
              <form className="mt-4 mb-10">
                <input
                  type="email"
                  className="rounded border bg-gray-100 px-4 py-2 focus:border-green-400"
                  placeholder="john@tech.com"
                />
                <button className="rounded bg-green-800 px-4 py-2 text-gray-100">
                  Subscribe
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
                <p className="mt-1 text-sm text-green-900 opacity-50">
                  No spam. We promise
                </p>
              </form>
            </div>
          </div>
          <div className="mt-16 mb-4 flex items-center justify-between px-4 lg:px-0">
            <h2 className="text-3xl font-bold">Popular news</h2>
            <a className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-gray-800 hover:bg-green-200">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="text-2xl font-bold text-gray-800">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p className="mt-2 text-gray-700">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>

                <a
                  href="#"
                  className="mt-2 ml-auto inline-block rounded py-2 text-green-900"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="text-2xl font-bold text-gray-800">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p className="mt-2 text-gray-700">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>

                <a
                  href="#"
                  className="mt-2 ml-auto inline-block rounded py-2 text-green-900"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="w-full rounded p-4 lg:w-1/2 lg:w-1/3 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="text-2xl font-bold text-gray-800">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p className="mt-2 text-gray-700">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>

                <a
                  href="#"
                  className="mt-2 ml-auto inline-block rounded py-2 text-green-900"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
        </main>
        {/*  */}
        <footer className="mt-12 border-t px-4 pt-12 pb-32 lg:px-0">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5">
              <p className="hidden p-0 text-gray-600 lg:block lg:pr-12">
                Boisterous he on understood attachment as entreaties ye
                devonshire. In mile an form snug were been sell. Extremely ham
                any his departure for contained curiosity defective. Way now
                instrument had eat diminution melancholy expression sentiments
                stimulated.
              </p>
            </div>

            <div className="mt-6 w-full md:w-1/2 lg:mt-0 lg:w-1/5">
              <h6 className="mb-4 font-semibold text-gray-700">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div className="mt-6 w-full md:w-1/2 lg:mt-0 lg:w-1/5">
              <h6 className="mb-4 font-semibold text-gray-700">Content</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    Blog
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    Privacy Policy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    Terms & Conditions
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    Documentation
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div className="mt-6 w-full md:w-1/2 lg:mt-0 lg:w-1/5">
              <h6 className="mb-4 font-semibold text-gray-700">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block py-2 text-gray-600">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

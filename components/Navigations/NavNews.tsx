const data = [
  {
    image:
      "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/01/30/237315-asteroid-1.jpg",
    title:
      "Astronomer clicks photo of potentially hazardous asteroid coming towards Earth - WION",
    payload:
      "Human eyes (and lenses) are almost always pointed at the sky. Along with wonders of the universe, they are also on the look-out for threats that may be hurtling towards Earth at speeds of thousands of miles an hour.",
    category: "WION",
    date: "February 6, 2022",
  },
  {
    image:
      "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/01/30/237315-asteroid-1.jpg",
    title:
      "Astronomer clicks photo of potentially hazardous asteroid coming towards Earth - WION",
    payload:
      "Human eyes (and lenses) are almost always pointed at the sky. Along with wonders of the universe, they are also on the look-out for threats that may be hurtling towards Earth at speeds of thousands of miles an hour.",
    category: "WION",
    date: "February 6, 2022",
  },
  {
    image:
      "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/01/30/237315-asteroid-1.jpg",
    title:
      "Astronomer clicks photo of potentially hazardous asteroid coming towards Earth - WION",
    payload:
      "Human eyes (and lenses) are almost always pointed at the sky. Along with wonders of the universe, they are also on the look-out for threats that may be hurtling towards Earth at speeds of thousands of miles an hour.",
    category: "WION",
    date: "February 6, 2022",
  },
];

interface CompProps {
  image: string;
  title: string;
  payload: string;
  category: string;
  date: string;
  [key: string]: any;
}
const Comp = ({ image, title, payload, category, date }: CompProps) => {
  return (
    <>
      <div className="mx-auto my-auto max-w-xl px-4 py-4">
        <div className="mb-6 rounded-lg bg-gray-50 md:bg-white md:shadow-xl ">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.wionews.com/science/astronomer-clicks-photo-of-potentially-hazardous-asteroid-coming-towards-earth-451098"
          >
            <div className="md:flex-shrink-0">
              <img
                src={image}
                alt="uploaded cover image"
                className="h-full w-full rounded-lg rounded-b-none object-cover"
              />
            </div>
          </a>
          <div className="py-1">
            <div className="p-4">
              <h2 className="mb-2 truncate text-2xl font-bold tracking-normal text-gray-800 md:mt-4">
                {title}
              </h2>

              <p className="mr-1 break-words px-2 text-sm text-gray-700">
                {payload}
              </p>
            </div>

            <div className="flex items-center justify-between p-2 md:mx-4 md:p-4">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.wionews.com/science/astronomer-clicks-photo-of-potentially-hazardous-asteroid-coming-towards-earth-451098"
              >
                <div className="flex items-center">
                  <div className="ml-2 text-sm">
                    <p className="leading-none text-black">{category}</p>

                    <p className="text-gray-700">{date}</p>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.wionews.com/science/astronomer-clicks-photo-of-potentially-hazardous-asteroid-coming-towards-earth-451098"
                className="rounded-full bg-green-500 px-8 py-2 text-white hover:bg-green-600"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
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
      <body className="bg-gray-50">
        <nav
          id="header"
          className="fixed top-0 z-10
          w-full"
        >
          <div
            id="progress"
            className="top-0 z-20 h-1"
            style={{
              background: `
              linear-gradient(
                to right,
                #10b981 var(--scroll),
                transparent 0
              )
              `,
            }}
          ></div>
          <div
            id="nav-content"
            className="w-full
            bg-gray-50
            text-gray-700
            md:bg-transparent"
          >
            <div
              className="mx-auto
              flex max-w-screen-xl flex-col
              px-4
              md:flex-row md:items-center md:justify-between
              md:px-6 lg:px-8"
            >
              <div
                className="flex flex-row items-center justify-between
                p-4"
              >
                <a
                  href="#"
                  className="focus:shadow-outline
                  rounded-lg
                  text-2xl font-bold tracking-normal text-gray-900
                  focus:outline-none
                  md:text-3xl"
                >
                  Gonewz<span style={{ color: "#FF7F50" }}>.</span>
                </a>
                <button
                  className="rounded-lg
                  focus:shadow-none
                  focus:outline-none
                  md:hidden"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="h-6 w-6"
                  >
                    <path
                      x-show="!open"
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      x-show="open"
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="hidden
                flex-grow flex-col
                pb-4
                md:flex md:flex-row md:justify-end md:pb-0"
              >
                <a
                  className="mt-2 px-4 py-2
                  text-black
                  hover:underline
                  md:mt-0 md:ml-4"
                  href="/category?q=business"
                >
                  Business
                </a>
                <a
                  className="mt-2 px-4 py-2
                  text-black
                  hover:underline
                  md:mt-0 md:ml-4"
                  href="/category?q=technology"
                >
                  Technology
                </a>
                <a
                  className="mt-2 px-4 py-2
                  text-black
                  hover:underline
                  md:mt-0 md:ml-4"
                  href="https://github.com/ahampriyanshu/gonewz"
                >
                  About
                </a>
                <div
                  className="relative
                  flex items-center
                  rounded-full
                  bg-white
                  text-gray-600"
                >
                  <form action="/search" method="get">
                    <input
                      name="q"
                      id="search"
                      type="text"
                      placeholder="Search"
                      className="h-10
                      rounded-full
                      bg-white
                      px-4
                      text-sm placeholder-green-600
                      focus:outline-none
                      md:px-6 lg:px-8"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0
                      mt-3 mr-4"
                    >
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        // style={{ enableBackground:'new 0 0 56.966 56.966'}}
                        xmlSpace="preserve"
                        width="512px"
                        height="512px"
                      >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <h1
          className="mt-24 mb-4
          text-center
          text-2xl font-bold leading-none text-gray-700
          md:text-3xl"
        >
          <span className="text-green-500">Top Headlines</span>
        </h1>
        {/* Content */}
        {data.map((data, i) => {
          return <Comp key={i} {...data} />;
        })}

        <footer className="relative pt-5 pb-3 font-sans md:pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="flex w-full md:w-1/2">
                <div className="px-8 text-2xl">
                  <h3 className="font-bold text-gray-900">
                    Gonewz<span style={{ color: "#FF7F50" }}>.</span>
                  </h3>
                  <p className="py-4 text-sm text-gray-700">
                    News is something someone somewhere wants to suppress, all
                    the rest is advertising.
                  </p>
                  <div className="my-3">
                    <a
                      href="https://github.com/ahampriyanshu"
                      className="h-8 w-8 rounded-full outline-none focus:outline-none"
                      type="button"
                    >
                      <svg
                        className="cursor-pointer fill-current text-gray-500 hover:text-gray-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>

                    <a
                      className="h-8 w-8 rounded-full outline-none focus:outline-none"
                      href="https://www.linkedin.com/in/ahampriyanshu/"
                      type="button"
                    >
                      <svg
                        className="cursor-pointer fill-current text-gray-500 hover:text-gray-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>

                    <a
                      className=" h-8 w-8 rounded-full outline-none focus:outline-none"
                      href="https://wa.me/919917956610?text=Hi%20Priyanshu"
                      type="button"
                    >
                      <svg
                        className="cursor-pointer fill-current text-gray-500 hover:text-gray-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </a>

                    <a
                      className=" h-8 w-8 rounded-full outline-none focus:outline-none"
                      href="mailto:ahampriyanshu@gmail.com?subject=Hello"
                      type="button"
                    >
                      <svg
                        className="cursor-pointer fill-current text-gray-500 hover:text-gray-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                      </svg>
                    </a>

                    <a
                      className=" h-8 w-8 rounded-full outline-none focus:outline-none"
                      href="https://twitter.com/ahampriyanshu"
                      type="button"
                    >
                      <svg
                        className="cursor-pointer fill-current text-gray-500 hover:text-gray-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>

                    <a
                      className=" h-8 w-8 rounded-full outline-none focus:outline-none"
                      href="https://www.instagram.com/ahampriyanshu/"
                      type="button"
                    >
                      <svg
                        className="cursor-pointer fill-current text-gray-500 hover:text-gray-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    <a
                      className=" h-8 w-8 rounded-full outline-none focus:outline-none"
                      href="https://www.reddit.com/user/ahampriyanshu"
                      type="button"
                    >
                      <svg
                        className="cursor-pointer fill-current text-gray-500 hover:text-gray-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-6/12">
                <div className="items-top flex flex-wrap">
                  <div className="ml-auto w-full  px-4 lg:w-4/12">
                    <h3 className="mb-2 text-sm font-bold text-gray-900">
                      Outlets
                    </h3>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="pb-2 text-sm text-gray-700 hover:text-gray-900"
                          href="/source?q=bbc-news"
                        >
                          BBC
                        </a>
                      </li>
                      <li>
                        <a
                          className="pb-2 text-sm text-gray-700 hover:text-gray-900"
                          href="/source?q=cnn"
                        >
                          CNN
                        </a>
                      </li>
                      <li>
                        <a
                          className="pb-2 text-sm text-gray-700 hover:text-gray-900"
                          href="/source?q=fox-news"
                        >
                          Fox
                        </a>
                      </li>
                      <li>
                        <a
                          className="pb-2 text-sm text-gray-700 hover:text-gray-900"
                          href="/source?q=google-news"
                        >
                          Google
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full px-4 lg:w-4/12">
                    <h3 className="mb-2 text-sm font-bold text-gray-900">
                      Categories
                    </h3>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="pb-2 text-sm text-gray-700 hover:text-gray-900"
                          href="/category?q=entertainment"
                        >
                          Entertainment
                        </a>
                      </li>
                      <li>
                        <a
                          className="pb-2 text-sm text-gray-700 hover:text-gray-900"
                          href="/category?q=science"
                        >
                          Science
                        </a>
                      </li>
                      <li>
                        <a
                          className="pb-2 text-sm text-gray-700 hover:text-gray-900"
                          href="/category?q=sports"
                        >
                          Sports
                        </a>
                      </li>
                      <li>
                        <a
                          className="pb-2 text-sm text-gray-700 hover:text-gray-900"
                          href="/category?q=health"
                        >
                          Health
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-3 border-gray-400 md:my-6" />
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="mx-auto w-full px-4 text-center md:w-4/12">
                <div className="py-1 text-sm text-gray-600">
                  MIT Licensed © 2020 by
                  <a
                    href="https://github.com/ahampriyanshu"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    ahampriyanshu
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

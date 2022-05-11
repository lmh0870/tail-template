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
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="flex flex-wrap items-center pt-8">
        <div className="mr-auto ml-auto w-full px-4 md:w-6/12 ">
          <div className="relative flex flex-wrap justify-center">
            <div className="my-4 w-full px-4 lg:w-6/12">
              <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index">
                <div className="rounded-lg bg-red-600 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Svelte
                  </p>
                </div>
              </a>
              <a href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index">
                <div className="mt-8 rounded-lg bg-[#0EA5E9] p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    ReactJS
                  </p>
                </div>
              </a>
              <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index">
                <div className="mt-8 rounded-lg bg-[#334155] p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    NextJS
                  </p>
                </div>
              </a>
            </div>
            <div className="my-4 w-full px-4 lg:mt-16 lg:w-6/12">
              <a href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index">
                <div className="rounded-lg bg-yellow-500 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    JavaScript
                  </p>
                </div>
              </a>
              <a href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index">
                <div className="mt-8 rounded-lg bg-red-700 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Angular
                  </p>
                </div>
              </a>
              <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index">
                <div className="mt-8 rounded-lg bg-emerald-500 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Vue.js
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="ml-auto mr-auto mt-16 w-full px-12 md:w-4/12 md:px-4">
          <div className="text-blueGray-500 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
            <i className="fas fa-drafting-compass text-xl"></i>
          </div>
          <h3 className="mb-2 text-3xl font-semibold leading-normal">
            Javascript Components
          </h3>
          <p className="text-blueGray-600 mt-4 mb-4 text-lg font-light leading-relaxed">
            In order to create a great User Experience some components require
            JavaScript. In this way you can manipulate the elements on the page
            and give more options to your users.
          </p>
          <p className="text-blueGray-600 mt-4 mb-4 text-lg font-light leading-relaxed">
            We created a set of Components that are dynamic and come to help
            you.
          </p>
          <div className="block pb-6">
            <span
              className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full
            bg-white py-1 px-2 text-xs font-semibold uppercase last:mr-0"
            >
              Alerts
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase uppercase last:mr-0">
              Dropdowns
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase uppercase last:mr-0">
              Menus
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase uppercase last:mr-0">
              Modals
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase uppercase last:mr-0">
              Navbars
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase uppercase last:mr-0">
              Popovers
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase uppercase last:mr-0">
              Tabs
            </span>
            <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase uppercase last:mr-0">
              Tooltips
            </span>
          </div>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=njs-index"
            className="text-blueGray-700 hover:text-blueGray-500 font-bold transition-all duration-150 ease-linear"
          >
            View all
            <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
          </a>
        </div>
      </div>
      <footer className="relative mt-8 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-6/12">
              <div className="text-blueGray-500 py-1 text-sm font-semibold">
                Made with{" "}
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                >
                  Notus JS
                </a>{" "}
                by{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  {" "}
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

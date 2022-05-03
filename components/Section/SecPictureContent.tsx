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
      <section className="bg-blueGray-50 relative pt-12">
        <div className="flex flex-wrap items-center">
          {/* Left - Picture */}
          <div
            className="ml-auto mr-auto
            w-full
            px-4
            md:w-4/12"
          >
            <img
              alt="..."
              className="max-w-full
              rounded-lg
              shadow-lg"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
            />
          </div>
          {/* Right - Content */}
          <div
            className="ml-auto mr-auto
            w-full
            px-4
            md:w-5/12"
          >
            <div className="md:pr-12">
              <div
                className="mb-6 mt-8
                inline-flex
                h-16 w-16 items-center justify-center
                rounded-full
                bg-pink-300
                p-3
                text-center text-pink-600
                shadow-lg"
              >
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">A growing company</h3>
              <p
                className="text-blueGray-500
                mt-4
                text-lg leading-relaxed"
              >
                The extension comes with three pre-built pages to help you get
                started faster. You can change the text and images and
                you&apos;re good to go.
              </p>
              <ul className="mt-6 list-none">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span
                        className="mr-3
                        inline-block
                        rounded-full
                        bg-pink-200
                        py-1 px-2
                        text-xs font-semibold uppercase text-pink-600
                        "
                      ></span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Carefully crafted components
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span
                        className="mr-3
                        inline-block
                        rounded-full
                        bg-pink-200
                        py-1 px-2
                        text-xs font-semibold uppercase text-pink-600"
                      >
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Amazing page examples
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span
                        className="mr-3 inline-block
                        rounded-full
                        bg-pink-200
                        py-1 px-2
                        text-xs font-semibold uppercase text-pink-600"
                      >
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">Dynamic components</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

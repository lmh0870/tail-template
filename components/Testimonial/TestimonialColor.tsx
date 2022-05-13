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
      <section className="mb-20 text-gray-700">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl font-bold text-gray-800">
            Testimonials
          </h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>

        <div className="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div className="block rounded-lg bg-white shadow-lg">
              <div
                className="h-28 overflow-hidden rounded-t-lg"
                style={{
                  backgroundColor: "#9d789b",
                }}
              ></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border border-2 border-white bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p className="mt-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    className="inline-block w-6 pr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white shadow-lg">
              <div
                className="h-28 overflow-hidden rounded-t-lg"
                style={{
                  backgroundColor: "#7a81a8",
                }}
              ></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border border-2 border-white bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                <hr />
                <p className="mt-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    className="inline-block w-6 pr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white shadow-lg">
              <div
                className="h-28 overflow-hidden rounded-t-lg"
                style={{
                  backgroundColor: "#6d5b98",
                }}
              ></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border border-2 border-white bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                <hr />
                <p className="mt-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    className="inline-block w-6 pr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

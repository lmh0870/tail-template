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
      <section className="rounded-md bg-[url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg)] p-6 text-center shadow-lg md:p-12 md:text-left">
        <div className="flex justify-center">
          <div className="max-w-3xl">
            <div className="m-4 block rounded-lg bg-white p-6 shadow-lg">
              <div className="md:flex md:flex-row">
                <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                    className="rounded-full shadow-md"
                    alt="woman avatar"
                  />
                </div>
                <div className="md:ml-6">
                  <p className="mb-6 font-light text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                    quam sapiente molestiae numquam quas, voluptates omnis nulla
                    ea odio quia similique corrupti magnam.
                  </p>
                  <p className="mb-2 text-xl font-semibold text-gray-800">
                    Anna Smith
                  </p>
                  <p className="mb-0 font-semibold text-gray-500">
                    Product manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

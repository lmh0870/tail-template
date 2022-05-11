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
      <section className="body-font text-gray-600">
        <div className="max-w-7x1 container mx-auto px-5 py-24">
          <div className="mb-4 flex w-full flex-wrap p-4">
            <div className="mb-6 w-full lg:mb-0">
              <h1 className="title-font mb-2 text-5xl font-medium font-bold text-gray-900 sm:text-4xl">
                News
              </h1>
              <div className="h-1 w-20 rounded bg-indigo-500"></div>
            </div>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg bg-white p-6">
                <img
                  className="xs:h-72 mb-6 h-72 w-full rounded object-cover  object-center sm:h-72 md:h-64 lg:h-60 xl:h-56"
                  src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
                  alt="Image Size 720x400"
                />
                <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                  SUBTITLE
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Chichen Itza
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg bg-white p-6">
                <img
                  className="xs:h-72 mb-6 h-72 w-full rounded object-cover object-center sm:h-72 md:h-64 lg:h-60 xl:h-56"
                  src="https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg"
                  alt="Image Size 720x400"
                />
                <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                  SUBTITLE
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Colosseum Roma
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg bg-white p-6">
                <img
                  className="xs:h-72 mb-6 h-72 w-full rounded object-cover object-center sm:h-72 md:h-64 lg:h-60 xl:h-56"
                  src="https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574"
                  alt="Image Size 720x400"
                />
                <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                  SUBTITLE
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Great Pyramid of Giza
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div className="rounded-lg bg-white p-6">
                <img
                  className="xs:h-72 mb-6 h-72 w-full rounded object-cover object-center sm:h-72 md:h-64 lg:h-60 xl:h-56"
                  src="https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg"
                  alt="Image Size 720x400"
                />
                <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                  SUBTITLE
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  San Francisco
                </h2>
                <p className="text-base leading-relaxed">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

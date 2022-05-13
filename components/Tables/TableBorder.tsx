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
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 text-sm font-medium text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 text-sm font-medium text-gray-900"
                    >
                      First
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 text-sm font-medium text-gray-900"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-gray-900"
                    >
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                      Mark
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                      Otto
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      @mdo
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-medium text-gray-900">
                      2
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                      Jacob
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                      Thornton
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      @fat
                    </td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-medium text-gray-900">
                      3
                    </td>
                    <td
                      colSpan={2}
                      className="whitespace-nowrap border-r px-6 py-4 text-center text-sm font-light text-gray-900"
                    >
                      Larry the Bird
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      @twitter
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

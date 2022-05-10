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
      <div className="mx-auto w-2/3">
        <div className="my-6 rounded bg-white shadow-md">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="bg-grey-lightest text-grey-dark border-grey-light border-b py-4 px-6 text-sm font-bold uppercase">
                  City
                </th>
                <th className="bg-grey-lightest text-grey-dark border-grey-light border-b py-4 px-6 text-sm font-bold uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-grey-lighter">
                <td className="border-grey-light border-b py-4 px-6">
                  New York
                </td>
                <td className="border-grey-light border-b py-4 px-6">
                  <a
                    href="#"
                    className="text-grey-lighter
                    hover:bg-green-dark rounded bg-green-400
                    py-1 px-3 text-xs font-bold"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-grey-lighter hover:bg-blue-dark rounded bg-blue-400 py-1 px-3 text-xs font-bold"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="border-grey-light border-b py-4 px-6">Paris</td>
                <td className="border-grey-light border-b py-4 px-6">
                  <a
                    href="#"
                    className="text-grey-lighter bg-green hover:bg-green-dark rounded py-1 px-3 text-xs font-bold"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-grey-lighter bg-blue hover:bg-blue-dark rounded py-1 px-3 text-xs font-bold"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="border-grey-light border-b py-4 px-6">London</td>
                <td className="border-grey-light border-b py-4 px-6">
                  <a
                    href="#"
                    className="text-grey-lighter bg-green hover:bg-green-dark rounded py-1 px-3 text-xs font-bold"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-grey-lighter bg-blue hover:bg-blue-dark rounded py-1 px-3 text-xs font-bold"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="border-grey-light border-b py-4 px-6">Oslo</td>
                <td className="border-grey-light border-b py-4 px-6">
                  <a
                    href="#"
                    className="text-grey-lighter bg-green hover:bg-green-dark rounded py-1 px-3 text-xs font-bold"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-grey-lighter bg-blue hover:bg-blue-dark rounded py-1 px-3 text-xs font-bold"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="border-grey-light border-b py-4 px-6">
                  Mexico City
                </td>
                <td className="border-grey-light border-b py-4 px-6">
                  <a
                    href="#"
                    className="text-grey-lighter bg-green hover:bg-green-dark rounded py-1 px-3 text-xs font-bold"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-grey-lighter bg-blue hover:bg-blue-dark rounded py-1 px-3 text-xs font-bold"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

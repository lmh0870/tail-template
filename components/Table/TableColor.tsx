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
      <p className="m-5 text-center text-lg font-bold">Classic Table Design</p>
      <table className="m-5 mx-auto w-5/6 rounded-t-lg bg-gray-200 text-gray-800">
        <tr className="border-b-2 border-gray-300 text-left">
          <th className="px-4 py-3">Firstname</th>
          <th className="px-4 py-3">Lastname</th>
          <th className="px-4 py-3">Age</th>
          <th className="px-4 py-3">Sex</th>
        </tr>

        <tr className="border-b border-gray-200 bg-gray-100">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="border-b border-gray-200 bg-gray-100">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="border-b border-gray-200 bg-gray-100">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
      </table>

      <p className="m-5 text-center text-lg font-bold">Dark Table Design</p>
      <table className="m-5 mx-auto w-5/6 rounded-t-lg bg-gray-800 text-gray-200">
        <tr className="border-b border-gray-300 text-left">
          <th className="px-4 py-3">Firstname</th>
          <th className="px-4 py-3">Lastname</th>
          <th className="px-4 py-3">Age</th>
          <th className="px-4 py-3">Sex</th>
        </tr>
        <tr className="border-b border-gray-600 bg-gray-700">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="border-b border-gray-600 bg-gray-700">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="border-b border-gray-600 bg-gray-700">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
      </table>

      <p className="m-5 text-center text-lg font-bold">Gradient Table Design</p>
      <table className="m-5 mx-auto w-5/6 rounded-t-lg bg-gradient-to-l from-indigo-500 to-indigo-800 text-gray-100">
        <tr className="border-b-2 border-indigo-300 text-left">
          <th className="px-4 py-3">Firstname</th>
          <th className="px-4 py-3">Lastname</th>
          <th className="px-4 py-3">Age</th>
          <th className="px-4 py-3">Sex</th>
        </tr>
        <tr className="border-b border-indigo-400">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="border-b border-indigo-400">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="border-b border-indigo-400">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
      </table>

      <p className="m-5 text-center text-lg font-bold">
        Flat Color Table Design
      </p>
      <table className="m-5 mx-auto w-5/6 rounded-t-lg bg-pink-700 text-pink-100">
        <tr className="border-b-2 border-pink-200 text-left font-bold">
          <th className="px-4 py-3">Firstname</th>
          <th className="px-4 py-3">Lastname</th>
          <th className="px-4 py-3">Age</th>
          <th className="px-4 py-3">Sex</th>
        </tr>
        <tr className="bg-pink-600 font-semibold">
          <td className="border-b border-pink-500 px-4 py-3">Jill</td>
          <td className="border-b border-pink-500 px-4 py-3">Smith</td>
          <td className="border-b border-pink-500 px-4 py-3">50</td>
          <td className="border-b border-pink-500 px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="bg-pink-600 font-semibold">
          <td className="border-b border-pink-500 px-4 py-3">Jill</td>
          <td className="border-b border-pink-500 px-4 py-3">Smith</td>
          <td className="border-b border-pink-500 px-4 py-3">50</td>
          <td className="border-b border-pink-500 px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
        <tr className="bg-pink-600 font-semibold">
          <td className="border-b border-pink-500 px-4 py-3">Jill</td>
          <td className="border-b border-pink-500 px-4 py-3">Smith</td>
          <td className="border-b border-pink-500 px-4 py-3">50</td>
          <td className="border-b border-pink-500 px-4 py-3">Male</td>
        </tr>
        {/* <!-- each row --> */}
      </table>

      {/* <!-- flat color design --> */}

      <div className="mb-20"></div>
      {/* <!-- fill for tailwind preview bottom overflow --> */}
    </>
  );
}

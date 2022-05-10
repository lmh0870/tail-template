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
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col">
          <div
            className="overflow-x-auto
            shadow-md
            sm:rounded-lg"
          >
            <div
              className="inline-block
              min-w-full align-middle"
            >
              <div className="overflow-hidden">
                {/*  */}
                <table
                  className="min-w-full
                  table-fixed
                  divide-y divide-gray-200
                  dark:divide-gray-700"
                >
                  <thead
                    className="bg-gray-100
                    dark:bg-gray-700"
                  >
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all"
                            type="checkbox"
                            className="h-4 w-4
                            rounded
                            border-gray-300
                            bg-gray-100
                            text-blue-600
                            focus:ring-2 focus:ring-blue-500
                            dark:border-gray-600
                            dark:bg-gray-700
                            dark:ring-offset-gray-800
                            dark:focus:ring-blue-600"
                          />
                          <label htmlFor="checkbox-all" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6
                        text-left text-xs font-medium uppercase tracking-wider text-gray-700
                        dark:text-gray-400"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6
                        text-left text-xs font-medium uppercase tracking-wider text-gray-700
                        dark:text-gray-400"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider
                        text-gray-700
                        dark:text-gray-400"
                      >
                        Price
                      </th>
                      <th scope="col" className="p-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="divide-y divide-gray-200
                    bg-white
                    "
                  >
                    <tr className="hover:bg-gray-100">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            className="h-4 w-4
                            rounded
                            border-gray-300
                            bg-gray-100
                            text-blue-600
                            focus:ring-2 focus:ring-blue-500
                            "
                          />
                          <label htmlFor="checkbox-table-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td
                        className="whitespace-nowrap
                        py-4 px-6
                        text-sm font-medium text-gray-900
                        "
                      >
                        Apple Imac 27
                      </td>
                      <td
                        className="whitespace-nowrap
                         py-4 px-6
                         text-sm font-medium text-gray-500"
                      >
                        Desktop PC
                      </td>
                      <td
                        className="whitespace-nowrap
                         py-4 px-6
                         text-sm font-medium text-gray-900"
                      >
                        $1999
                      </td>
                      <td
                        className="whitespace-nowrap
                         py-4 px-6
                         text-right text-sm font-medium"
                      >
                        <a
                          href="#"
                          className="text-blue-600 hover:underline
                          dark:text-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr
                      className="hover:bg-gray-100
                    "
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-2"
                            type="checkbox"
                            className="h-4 w-4
                            rounded
                            border-gray-300
                            bg-gray-100
                            text-blue-600
                            focus:ring-2 focus:ring-blue-500
                            "
                          />
                          <label htmlFor="checkbox-table-2" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                        Apple MacBook Pro 17
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-500 dark:text-white">
                        Laptop
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                        $2999
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-3"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                          />
                          <label htmlFor="checkbox-table-3" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                        iPhone 13 Pro
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-500 dark:text-white">
                        Phone
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                        $999
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-4"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                          />
                          <label htmlFor="checkbox-table-4" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                        Apple Magic Mouse 2
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-500 dark:text-white">
                        Accessories
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                        $99
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-5"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                          />
                          <label htmlFor="checkbox-table-5" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                        Apple Watch Series 7
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-500 dark:text-white">
                        Accessories
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                        $599
                      </td>
                      <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5">
          This table component is part of a larger, open-source library of
          Tailwind CSS components. Learn more by going to the official{" "}
          <a
            className="text-blue-600 hover:underline"
            href="https://flowbite.com/docs/getting-started/introduction/"
          >
            Flowbite Documentation
          </a>
          .
        </p>
      </div>
    </>
  );
}

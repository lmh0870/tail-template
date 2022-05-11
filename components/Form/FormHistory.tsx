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
      <div className="bg-white">
        <div className="grid grid-cols-12 gap-0 ">
          <div
            className="xxl:col-span-8 relative col-span-12 hidden bg-fixed sm:col-span-12 md:col-span-7 md:block lg:col-span-8"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/originals/74/79/b0/7479b0e55f61567d40b0709a4d1b95d9.gif')",
              backgroundSize: "cover",
            }}
          >
            {/* <div className="h-screen bg-gray-700 sticky inset-0 ">
                <video 
                    src={Video} 
                    autoPlay
                    muted 
                    loop 
                    class="object-cover w-full h-full"
                >
                </video>
            </div>  */}
            <div className="absolute inset-0 z-20 flex h-full items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="fixed top-0 flex h-full items-center justify-center">
                <p className="text-5xl text-white lg:text-7xl">
                  <span className="rounded-md border-2 p-4" id="time" />
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="xxl:col-span-4 col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4">
            <div>
              <div className="border-b">
                <div className="my-4 px-6">
                  <h2 className="text-2xl font-semibold">Expense Tracker</h2>
                </div>
              </div>
              <div className="px-8 py-2">
                <h4 className="text-lg font-thin text-gray-500">
                  Your Balance
                </h4>
                <h4 className="text-2xl font-semibold">RM 430.00</h4>
              </div>
              <div className="my-2 flex flex-col space-x-0 px-6 lg:flex-row lg:space-x-2">
                <div className="w-full rounded-md border-2 bg-green-600 p-4  text-center text-white shadow-lg">
                  <h1 className="text-xl font-light">INCOME</h1>
                  <h1 className="text-2xl font-semibold text-green-100">
                    RM 600.00
                  </h1>
                </div>
                <div className="w-full rounded-md border-2 bg-red-600 p-4  text-center text-white shadow-lg">
                  <h1 className="text-xl font-light">EXPENSE</h1>
                  <h1 className="text-2xl font-semibold text-red-100">
                    RM 170.00
                  </h1>
                </div>
              </div>
              <div className="my-6 px-8">
                <div className="my-4 w-full border-b">
                  <h2 className="text-lg font-semibold">History</h2>
                </div>
                <div className="relative my-4 ml-6 flex justify-between border-r-8 border-green-500 bg-white p-4 shadow-md">
                  <div className="absolute -left-6">
                    <div className="flex w-6 cursor-pointer items-center justify-center bg-red-600 p-2 text-xs text-white">
                      x
                    </div>
                  </div>
                  <div>
                    <p>My wallet</p>
                  </div>
                  <div>
                    <p>RM +400</p>
                  </div>
                </div>
                <div className="relative my-4 ml-6 flex justify-between border-r-8 border-green-500 bg-white p-4 shadow-md">
                  <div className="absolute -left-6">
                    <div className="flex w-6 cursor-pointer items-center justify-center bg-red-600 p-2 text-xs text-white">
                      x
                    </div>
                  </div>
                  <div>
                    <p>Deck</p>
                  </div>
                  <div>
                    <p>RM +200</p>
                  </div>
                </div>
                <div className="relative my-4 ml-6 flex justify-between border-r-8 border-red-500 bg-white p-4 shadow-md">
                  <div className="absolute -left-6">
                    <div className="flex w-6 cursor-pointer items-center justify-center bg-red-600 p-2 text-xs text-white">
                      x
                    </div>
                  </div>
                  <div>
                    <p>Wheel</p>
                  </div>
                  <div>
                    <p>RM -170</p>
                  </div>
                </div>
              </div>
              <div className="my-6 px-8">
                <div className="my-4 w-full border-b">
                  <h2 className="text-lg font-semibold">Add new transaction</h2>
                </div>
                <div className="rounded-md border-2 bg-white p-4">
                  <form className="mt-4">
                    <div className="my-5 text-sm">
                      <label htmlFor="text" className="block text-black">
                        Text
                      </label>
                      <input
                        type="text"
                        autoFocus
                        className="mt-1 w-full rounded-sm bg-gray-100 px-4 py-3 focus:outline-none"
                        placeholder="Enter Text"
                      />
                    </div>
                    <div className="my-5 text-sm">
                      <label htmlFor="amount" className="block text-black">
                        Amount
                        <small className="text-gray-600">
                          {" "}
                          (
                          <span className="text-red-400">
                            {" "}
                            negative-expense
                          </span>{" "}
                          ,
                          <span className="text-green-400">
                            {" "}
                            positive-income
                          </span>
                          )
                        </small>
                      </label>
                      <input
                        type="number"
                        autoFocus
                        className="mt-1 w-full rounded-sm bg-gray-100 px-4 py-3 focus:outline-none"
                        placeholder="Enter Amount"
                      />
                    </div>
                    <div className="my-5">
                      <button className="block w-full rounded-sm bg-gray-800 p-3 text-center text-white  duration-300 hover:bg-black">
                        Add Transaction
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

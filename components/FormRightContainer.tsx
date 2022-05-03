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
    <div>
      <body className="bg-gray-400">
        <div className="container mx-auto">
          <div className="my-12 flex justify-center px-6">
            <div className="flex w-full lg:w-11/12 xl:w-3/4">
              {/* Left */}
              <div
                className="hidden h-auto w-full
                rounded-l-lg
                bg-gray-400
                bg-[url('https://source.unsplash.com/oWTW-jNGl9I/600x800')] bg-cover lg:block
                lg:w-1/2"
              />
              {/* Right */}
              <div className="w-full rounded-lg bg-white p-5 lg:w-1/2 lg:rounded-l-none">
                <div className="mb-4 px-8 text-center">
                  <h3 className="mb-2 pt-4 text-2xl">Forgot Your Password?</h3>
                  <p className="mb-4 text-sm text-gray-700">
                    We get it, stuff happens. Just enter your email address
                    below and we ll send you a link to reset your password!
                  </p>
                </div>
                <form className="mb-4 rounded bg-white px-8 pt-6 pb-8">
                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                      id="email"
                      type="email"
                      placeholder="Enter Email Address..."
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="focus:shadow-outline w-full rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
                      type="button"
                    >
                      Reset Password
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
                      href="./register.html"
                    >
                      Create an Account!
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
                      href="./index.html"
                    >
                      Already have an account? Login!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

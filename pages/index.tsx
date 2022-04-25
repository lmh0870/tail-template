import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-[2000px] bg-red-500 text-white">
      <h1 className="text-black">it works</h1>
      <input className="appearance-none" placeholder="First name" />
    </div>
  );
};

export default Home;

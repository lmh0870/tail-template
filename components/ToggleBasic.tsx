import { cls } from "@libs/client/utils";
import { useState } from "react";

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
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
  return (
    <>
      <div
        className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-gray-300 p-1 md:h-7 md:w-14"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* Switch */}
        <div
          className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-gray-400 p-1 md:h-7 md:w-14"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Switch */}
          <div
            className={
              "h-5 w-5 transform rounded-full bg-black shadow-md duration-300 ease-in-out md:h-6 md:w-6" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
      </div>
    </>
  );
}

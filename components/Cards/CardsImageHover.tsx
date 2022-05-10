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
      <div
        className="flex min-h-screen items-center justify-center
        bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500"
      >
        <div
          className="group
          relative aspect-video cursor-pointer
          overflow-hidden
          rounded-xl
          bg-red-400"
        >
          <div
            className="pt-30
            absolute inset-x-0 -bottom-2 z-50
            flex cursor-pointer items-end
            rounded-xl
            bg-gradient-to-t from-black/80 to-transparent
            text-white
            opacity-0 transition duration-300
            ease-in-out
            group-hover:opacity-100"
          >
            <div>
              <div
                className="translate-y-4
                transform transform-gpu
                space-y-3
                p-4 pb-10
                text-xl
                transition duration-300 ease-in-out
                group-hover:translate-y-0
                group-hover:opacity-100"
              >
                <div className="font-bold">Jessie Watsica</div>
                <div
                  className="text-sm
                  opacity-60
                  "
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio dolores error iure, perferendis sequi totam. Ad
                  aliquam aperiam atque deleniti dolor dolorem enim esse et in,
                  inventore itaque, pariatur reprehenderit.
                </div>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="aspect-square w-full
            object-cover
            transition duration-300 ease-in-out
            group-hover:scale-110"
            src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80
            "
          />
        </div>
      </div>
    </>
  );
}

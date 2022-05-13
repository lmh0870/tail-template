interface CompProps {
  [key: string]: any;
}
const Comp = () => {
  return <></>;
};

export interface ContainerProps {
  [key: string]: any;
}

export default function Container({}: ContainerProps) {
  return (
    <>
      <ul
        className="nav nav-tabs mb-4 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
        id="tabs-tabFill"
        role="tablist"
      >
        <li className="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-homeFill"
            className="
      active
      nav-link
      my-2
      block
      w-full
      border-x-0
      border-t-0
      border-b-2 border-transparent px-6 py-3
      text-xs
      font-medium
      uppercase
      leading-tight hover:border-transparent
      hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-home-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeFill"
            role="tab"
            aria-controls="tabs-homeFill"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-profileFill"
            className="
      nav-link
      my-2
      block
      w-full
      border-x-0
      border-t-0
      border-b-2
      border-transparent px-6 py-3 text-xs
      font-medium
      uppercase
      leading-tight
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-profile-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileFill"
            role="tab"
            aria-controls="tabs-profileFill"
            aria-selected="false"
          >
            Very very very very long link
          </a>
        </li>
        <li className="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-messagesFill"
            className="
      nav-link
      my-2
      block
      w-full
      border-x-0
      border-t-0
      border-b-2
      border-transparent px-6 py-3 text-xs
      font-medium
      uppercase
      leading-tight
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesFill"
            role="tab"
            aria-controls="tabs-messagesFill"
            aria-selected="false"
          >
            Messages
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentFill">
        <div
          className="active tab-pane show fade"
          id="tabs-homeFill"
          role="tabpanel"
          aria-labelledby="tabs-home-tabFill"
        >
          Tab 1 content fill
        </div>
        <div
          className="fade tab-pane"
          id="tabs-profileFill"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabFill"
        >
          Tab 2 content fill
        </div>
        <div
          className="fade tab-pane"
          id="tabs-messagesFill"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabFill"
        >
          Tab 3 content fill
        </div>
      </div>
    </>
  );
}

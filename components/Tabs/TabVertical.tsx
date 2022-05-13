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
      <div className="flex items-start">
        <ul
          className="nav nav-tabs mr-4 flex list-none flex-col flex-wrap border-b-0 pl-0"
          id="tabs-tabVertical"
          role="tablist"
        >
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-homeVertical"
              className="
          active
          nav-link
          my-2
          block
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
              id="tabs-home-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-homeVertical"
              role="tab"
              aria-controls="tabs-homeVertical"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-profileVertical"
              className="
          nav-link
          my-2
          block
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
              id="tabs-profile-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profileVertical"
              role="tab"
              aria-controls="tabs-profileVertical"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-messagesVertical"
              className="
          nav-link
          my-2
          block
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
              id="tabs-messages-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messagesVertical"
              role="tab"
              aria-controls="tabs-messagesVertical"
              aria-selected="false"
            >
              Messages
            </a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContentVertical">
          <div
            className="active tab-pane show fade"
            id="tabs-homeVertical"
            role="tabpanel"
            aria-labelledby="tabs-home-tabVertical"
          >
            Tab 1 content vertical
          </div>
          <div
            className="fade tab-pane"
            id="tabs-profileVertical"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical"
          >
            Tab 2 content vertical
          </div>
          <div
            className="fade tab-pane"
            id="tabs-messagesVertical"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical"
          >
            Tab 3 content vertical
          </div>
        </div>
      </div>
    </>
  );
}

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
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-home"
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
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-profile"
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
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-messages"
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
            id="tabs-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >
            Messages
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-contact"
            className="
      nav-link
      disabled
      pointer-events-none
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
            id="tabs-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-contact"
            role="tab"
            aria-controls="tabs-contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContent">
        <div
          className="active tab-pane show fade"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          Tab 1 content
        </div>
        <div
          className="fade tab-pane"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 2 content
        </div>
        <div
          className="fade tab-pane"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 3 content
        </div>
        <div
          className="fade tab-pane"
          id="tabs-contact"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab"
        >
          Tab 4 content
        </div>
      </div>
    </>
  );
}

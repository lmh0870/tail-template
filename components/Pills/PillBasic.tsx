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
      <ul
        className="nav nav-pills mb-4 flex list-none flex-col flex-wrap pl-0 md:flex-row"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#pills-home"
            className="
      active
      nav-link
      my-2
      block
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight
      focus:outline-none focus:ring-0
      md:mr-2
    "
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#pills-profile"
            className="
      nav-link
      my-2
      block
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight
      focus:outline-none
      focus:ring-0 md:mx-2
    "
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#pills-contact"
            className="
      nav-link
      my-2
      block
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight
      focus:outline-none
      focus:ring-0 md:mx-2
    "
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            href="#pills-disabled"
            className="
      nav-link
      disabled
      pointer-events-none
      my-2
      block
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight
      focus:outline-none
      focus:ring-0 md:ml-2
    "
            id="pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-disabled"
            role="tab"
            aria-controls="pills-disabled"
            aria-selected="false"
          >
            Disabled
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="active tab-pane show fade"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          Tab 1 content
        </div>
        <div
          className="fade tab-pane"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          Tab 2 content
        </div>
        <div
          className="fade tab-pane"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          Tab 3 content
        </div>
        <div
          className="fade tab-pane"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
        >
          Tab 4 disabled
        </div>
      </div>
    </>
  );
}

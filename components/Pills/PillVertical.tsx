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
      <div className="flex items-start">
        <ul
          className="nav nav-pills mr-4 flex list-none flex-col flex-wrap pl-0"
          id="pills-tabVertical"
          role="tablist"
        >
          <li
            className="nav-item mb-2 flex-grow text-center"
            role="presentation"
          >
            <a
              href="#pills-homeVertical"
              className="
          active
          nav-link
          block
          rounded
          px-6
          py-3
          text-xs
          font-medium
          uppercase
          leading-tight focus:outline-none
          focus:ring-0
        "
              id="pills-home-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#pills-homeVertical"
              role="tab"
              aria-controls="pills-homeVertical"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li
            className="nav-item my-2 flex-grow text-center"
            role="presentation"
          >
            <a
              href="#pills-profileVertical"
              className="
          nav-link
          block
          rounded
          px-6
          py-3
          text-xs
          font-medium
          uppercase
          leading-tight
          focus:outline-none focus:ring-0
        "
              id="pills-profile-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#pills-profileVertical"
              role="tab"
              aria-controls="pills-profileVertical"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li
            className="nav-item my-2 flex-grow text-center"
            role="presentation"
          >
            <a
              href="#pills-contactVertical"
              className="
          nav-link
          block
          rounded
          px-6
          py-3
          text-xs
          font-medium
          uppercase
          leading-tight
          focus:outline-none focus:ring-0
        "
              id="pills-contact-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#pills-contactVertical"
              role="tab"
              aria-controls="pills-contactVertical"
              aria-selected="false"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContentVertical">
          <div
            className="active tab-pane show fade"
            id="pills-homeVertical"
            role="tabpanel"
            aria-labelledby="pills-home-tabVertical"
          >
            Tab 1 content vertical
          </div>
          <div
            className="fade tab-pane"
            id="pills-profileVertical"
            role="tabpanel"
            aria-labelledby="pills-profile-tabVertical"
          >
            Tab 2 content vertical
          </div>
          <div
            className="fade tab-pane"
            id="pills-contactVertical"
            role="tabpanel"
            aria-labelledby="pills-contact-tabVertical"
          >
            Tab 3 content vertical
          </div>
        </div>
      </div>
    </>
  );
}

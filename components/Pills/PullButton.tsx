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
        id="pills-tab3"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className="
  active
  nav-link
  my-2
  block
  w-full
  rounded
  px-6
  py-3
  text-xs
  font-medium
  uppercase
  leading-tight
  focus:outline-none
  focus:ring-0 md:mr-2
  md:w-auto
"
            id="pills-home-tab3"
            data-bs-toggle="pill"
            data-bs-target="#pills-home3"
            role="tab"
            aria-controls="pills-home3"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className="
  nav-link
  my-2
  block
  w-full
  rounded
  px-6
  py-3
  text-xs
  font-medium
  uppercase
  leading-tight
  focus:outline-none
  focus:ring-0
  md:mx-2 md:w-auto
"
            id="pills-profile-tab3"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile3"
            role="tab"
            aria-controls="pills-profile3"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className="
  nav-link
  my-2
  block
  w-full
  rounded
  px-6
  py-3
  text-xs
  font-medium
  uppercase
  leading-tight
  focus:outline-none
  focus:ring-0
  md:ml-2 md:w-auto
"
            id="pills-contact-tab3"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact3"
            role="tab"
            aria-controls="pills-contact3"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent3">
        <div
          className="active tab-pane show fade"
          id="pills-home3"
          role="tabpanel"
          aria-labelledby="pills-home-tab3"
        >
          Tab 1 content button version
        </div>
        <div
          className="fade tab-pane"
          id="pills-profile3"
          role="tabpanel"
          aria-labelledby="pills-profile-tab3"
        >
          Tab 2 content button version
        </div>
        <div
          className="fade tab-pane"
          id="pills-contact3"
          role="tabpanel"
          aria-labelledby="pills-contact-tab3"
        >
          Tab 3 content button version
        </div>
      </div>
    </>
  );
}

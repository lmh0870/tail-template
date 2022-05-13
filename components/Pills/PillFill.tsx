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
        className="nav nav-pills mb-4 flex list-none flex-col pl-0 md:flex-row"
        id="pills-tabFill"
        role="tablist"
      >
        <li
          className="nav-item my-2 flex-auto text-center md:mr-2"
          role="presentation"
        >
          <a
            href="#pills-homeFill"
            className="
      active
      nav-link
      block
      w-full
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight focus:outline-none
      focus:ring-0
    "
            id="pills-home-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#pills-homeFill"
            role="tab"
            aria-controls="pills-homeFill"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li
          className="nav-item my-2 flex-auto text-center md:mx-2"
          role="presentation"
        >
          <a
            href="#pills-profileFill"
            className="
      nav-link
      block
      w-full
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight
      focus:outline-none focus:ring-0
    "
            id="pills-profile-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#pills-profileFill"
            role="tab"
            aria-controls="pills-profileFill"
            aria-selected="false"
          >
            Much longer nav link
          </a>
        </li>
        <li
          className="nav-item my-2 flex-auto text-center md:ml-2"
          role="presentation"
        >
          <a
            href="#pills-contactFill"
            className="
      nav-link
      block
      w-full
      rounded
      px-6
      py-3
      text-xs
      font-medium
      uppercase
      leading-tight
      focus:outline-none focus:ring-0
    "
            id="pills-contact-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#pills-contactFill"
            role="tab"
            aria-controls="pills-contactFill"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContentFill">
        <div
          className="active tab-pane show fade"
          id="pills-homeFill"
          role="tabpanel"
          aria-labelledby="pills-home-tabFill"
        >
          Tab 1 content fill
        </div>
        <div
          className="fade tab-pane"
          id="pills-profileFill"
          role="tabpanel"
          aria-labelledby="pills-profile-tabFill"
        >
          Tab 2 content fill
        </div>
        <div
          className="fade tab-pane"
          id="pills-contactFill"
          role="tabpanel"
          aria-labelledby="pills-contact-tabFill"
        >
          Tab 3 content fill
        </div>
      </div>
    </>
  );
}

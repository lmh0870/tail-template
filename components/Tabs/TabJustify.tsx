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
        className="
  nav nav-tabs nav-justified
  mb-4 flex
  list-none
  flex-col
  flex-wrap
  border-b-0
  pl-0
  md:flex-row
"
        id="tabs-tabJustify"
        role="tablist"
      >
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-homeJustify"
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
            id="tabs-home-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-homeJustify"
            role="tab"
            aria-controls="tabs-homeJustify"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-profileJustify"
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
            id="tabs-profile-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profileJustify"
            role="tab"
            aria-controls="tabs-profileJustify"
            aria-selected="false"
          >
            Very very very very long link
          </a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a
            href="#tabs-messagesJustify"
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
            id="tabs-messages-tabJustify"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesJustify"
            role="tab"
            aria-controls="tabs-messagesJustify"
            aria-selected="false"
          >
            Messages
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentJustify">
        <div
          className="active tab-pane show fade"
          id="tabs-homeJustify"
          role="tabpanel"
          aria-labelledby="tabs-home-tabJustify"
        >
          Tab 1 content justify
        </div>
        <div
          className="fade tab-pane"
          id="tabs-profileJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          Tab 2 content justify
        </div>
        <div
          className="fade tab-pane"
          id="tabs-messagesJustify"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabJustify"
        >
          Tab 3 content justify
        </div>
      </div>
    </>
  );
}

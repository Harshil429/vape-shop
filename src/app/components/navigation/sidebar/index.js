import Link from "next/link";

import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: `${isOpen ? "0" : "-100%"}`,
      }}
      className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        <IoMdClose />
      </button>
      <ul className="sidebar-nav text-center leading-relaxed text-xl">
        <li>
          <Link href="/" onClick={toggle}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={toggle}>
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/services" onClick={toggle}>
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="/reviews" onClick={toggle}>
            <p>Reviews</p>
          </Link>
        </li>
        <li>
          <Link href="/gallery" onClick={toggle}>
            <p>Gallery</p>
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={toggle}>
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

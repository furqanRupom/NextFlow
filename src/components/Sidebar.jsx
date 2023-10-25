import Logo from "../../src/assets/nexusFlow.png"
import {
  AiFillAppstore,
  AiFillMessage,
  AiOutlineContacts,
} from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <header className="min-h-screen  shadow w-fit px-8 py-2">
        <img className="w-24 h-24 object-cover pr-4" src={Logo} alt="logo" />
        <ul className="flex flex-col space-y-5 text-3xl text-gray-500 pt-3">
          <li className="hover:text-gray-700 duration-200 cursor-pointer">
            <Link to="/">
              <AiFillAppstore />
            </Link>
          </li>
          <li className="hover:text-gray-700 duration-200 cursor-pointer">
            <Link to="/about">
              <AiFillMessage />
            </Link>
          </li>
          <li className="hover:text-gray-700 duration-200 cursor-pointer">
            <IoSettingsOutline />
          </li>
          <li className="hover:text-gray-700 duration-200 cursor-pointer">
            <IoMdContact />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Sidebar;

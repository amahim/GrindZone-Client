import { FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Contact = () => (
  <div className="fab">
    {/* Main FAB button */}
    <div
      tabIndex={0}
      role="button"
      className="btn btn-lg btn-circle bg-[#97FB57] border-none shadow-2xl"
    >
      <FaPhone />
    </div>

    {/* Close FAB */}
    <div className="fab-close">
      <span className="btn btn-circle border-none shadow-2xl btn-lg btn-error">
        <IoClose className="text-2xl font-extrabold" />
      </span>
    </div>

    {/* Phone button with auto call */}
    <a href="tel:+8801869610686" className="btn ">
      +880 1869610686
    </a>
  </div>
);

export default Contact;

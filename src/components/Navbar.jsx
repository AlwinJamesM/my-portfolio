import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 max-w-[1400px] mx-auto px-4">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-xl font-bold primary-color m1-4">AJ MUECA</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/alwin-james-mueca-5808162b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-[#0077b5]" // Default black, hover LinkedIn blue
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AlwinJamesM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-[#333]" // Default black, hover dark gray
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/alwnjmes/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-[#E1306C]" // Default black, hover Instagram pink
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/alwnjmes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-[#1DA1F2]" // Default black, hover Twitter blue
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

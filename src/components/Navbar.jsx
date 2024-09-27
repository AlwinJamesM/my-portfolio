import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Corrected Twitter import

const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6 max-w-[1400px] mx-auto px-4">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-xl font-bold primary-color m1-4">AJ MUECA</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/alwin-james-mueca-5808162b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AlwinJamesM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/alwnjmes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/alwnjmes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

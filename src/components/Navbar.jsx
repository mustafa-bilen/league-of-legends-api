import { AiOutlineGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="bg-black  text-white flex justify-between  items-center p-4">
      <div>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/tr/7/77/League_of_Legends_logo.png"
          }
          alt="a"
          width="120px"
          className="ml-5"
        />
      </div>
      <div className="flex text-5xl  items-center gap-4 ">
        <a
          href="https://github.com/mustafa-bilen"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mstbln/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.youtube.com/@mustafa-bilen"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillYoutube />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

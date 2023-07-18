import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="flex justify-center text-[#455954] bg-slate-200 drop-shadow-3xl">
      <Link
        to={"/"}
        className="text-center grow-[2] ml-5 p-1 m-1 w-fit hover:cursor-pointer"
      >
        Off-The-Cuff
      </Link>
      <div className="grow-[7]"></div>
      <Link
        to={"/posts"}
        className="grow text-center p-1 m-1 hover:bg-slate-100 hover:cursor-pointer"
      >
        Posts
      </Link>
      <Link
        to={"/about"}
        className="grow text-center p-1 m-1 hover:bg-slate-100 hover:cursor-pointer"
      >
        About Me
      </Link>
    </section>
  );
};

export default Navbar;

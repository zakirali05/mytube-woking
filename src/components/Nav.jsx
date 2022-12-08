const Navbar = () => {
  return (
    <nav className="bg-slate-800 w-[100vw] z-[20] lg:fixed lg:w-[100vw] p-4 h-12 border-b-[1px] bod flex items-center sm:fixed sm:top-0 justify-between">
      <div className="logo">
        <em className="text-white font-bold text-xl">
          My<span className="text-red-400">Tube</span>
        </em>
      </div>
      <div className="serchbar">
        <form
          onSubmit={(e) => e.preventDefault}
          className="bg-white px-1 rounded-md md:mx-8 flex"
        >
          <input
            className="p-1 md:w-[18rem] lg:w-[18rem] w-32  border-r-2"
            type="text"
            placeholder="search something..."
          />
          <input className="text-black px-1" type="submit" value="Search" />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

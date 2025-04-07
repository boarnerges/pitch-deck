const SincBar = () => {
  return (
    <div className="max-w-5xl mx-auto ">
      <nav className="bg-white py-4 sticky top-0 z-50">
        <ul className="flex justify-center gap-4 sm:gap-8 sm:space-x-10 text-gray-800 font-medium">
          <li>
            <a href="#mission" className="hover:text-black">
              Mission
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-black">
              Features
            </a>
          </li>
          <li>
            <a href="#membership" className="hover:text-black">
              Membership
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default SincBar;

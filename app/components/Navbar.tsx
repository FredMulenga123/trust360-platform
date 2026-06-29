export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-yellow-400">
            Trust360™
          </h1>
          <p className="text-sm text-gray-300">
            Trust Infrastructure Nexus Africa
          </p>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-yellow-400">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-400">
              Solutions
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-400">
              Industries
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-400">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Request Demo
        </button>

      </div>
    </nav>
  );
}
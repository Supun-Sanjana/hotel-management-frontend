import UserTag from "../userData";

function Header() {
  return (
    <header className="px-6 py-4 shadow-md bg-white flex items-center justify-between">
      <h1 className="text-2xl font-extrabold text-gray-800">Serenity Stay</h1>

      <nav className="flex gap-6 text-gray-600 font-medium">
        <a href="#" className="hover:text-blue-500 transition">Home</a>
        <a href="#" className="hover:text-blue-500 transition">Rooms</a>
        <a href="#" className="hover:text-blue-500 transition">Services</a>
        <a href="#" className="hover:text-blue-500 transition">Booking</a>
        <a href="#" className="hover:text-blue-500 transition">About</a>
        <a href="#" className="hover:text-blue-500 transition">Contact</a>
      </nav>

      <button className="ml-6 bg-[#2B1B12] hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition">
        Sign up
      </button>
    </header>
  );
}

export default Header;

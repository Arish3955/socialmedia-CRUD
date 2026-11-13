function Navbar({ setCurrentPage, setIsAuthenticated, currentPage }) {
  const linkStyle = (page) =>
    currentPage === page
      ? "text-blue-600 font-bold"
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">L Y N K</h1>
      <div className="space-x-4">
        <button onClick={() => setCurrentPage("home")} className={linkStyle("home")}>Home</button>
        <button onClick={() => setCurrentPage("profile")} className={linkStyle("profile")}>Profile</button>
        <button onClick={() => setCurrentPage("messages")} className={linkStyle("messages")}>Messages</button>
        <button onClick={() => setCurrentPage("people")} className={linkStyle("people")}>People</button>
        <button onClick={() => setCurrentPage("notifications")} className={linkStyle("notifications")}>Notifications</button>
        <button onClick={() => setCurrentPage("settings")} className={linkStyle("settings")}>Settings</button>
        <button onClick={() => setIsAuthenticated(false)} className="text-red-500 font-semibold">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

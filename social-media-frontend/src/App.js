import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import Messages from "./components/Pages/Messages";
import People from "./components/Pages/People";
import Notifications from "./components/Pages/Notifications";
import Settings from "./components/Pages/Settings";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState(null);

  // load saved user on first render
  useEffect(() => {
    const saved = localStorage.getItem("lynk_user");
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed);
      setIsAuthenticated(true);
    }
  }, []);

  // when login/signup succeeds
  const handleAuthSuccess = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("lynk_user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setCurrentPage("home");
    localStorage.removeItem("lynk_user");
  };

  if (!isAuthenticated) {
    return <Auth onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        setCurrentPage={setCurrentPage}
        setIsAuthenticated={setIsAuthenticated}  // still available if you use it
        currentPage={currentPage}
        user={user}
        onLogout={handleLogout}                 // <-- add this to Navbar
      />

      <div className="p-6 text-center">
        {currentPage === "home" && <Home user={user} />}
        {currentPage === "profile" && <Profile user={user} />}
        {currentPage === "messages" && <Messages user={user} />}
        {currentPage === "people" && <People user={user} />}
        {currentPage === "notifications" && <Notifications user={user} />}
        {currentPage === "settings" && <Settings user={user} />}
      </div>
    </div>
  );
}

export default App;

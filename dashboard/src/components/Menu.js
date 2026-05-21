import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("User");
  const [initials, setInitials] = useState("US");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      const cleanName = storedUsername.trim();
      if (cleanName.includes(" ")) {
        const parts = cleanName.split(" ");
        setInitials((parts[0][0] + parts[1][0]).toUpperCase());
      } else {
        setInitials(cleanName.substring(0, 2).toUpperCase());
      }
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  
  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "http://localhost:3000/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container" style={{ position: "relative" }}>
      <img src="Screenshot_2026-03-19_at_8.53.18_AM-removebg-preview.png" alt="Zerodha logo" style={{ width: "100px" }} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=100&q=80"; e.target.style.width = "40px"; }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer", userSelect: "none" }}>
          <div className="avatar" style={{ backgroundColor: "#387ed1", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>{initials}</div>
          <p className="username" style={{ textTransform: "capitalize" }}>{username}</p>
        </div>
      </div>

      {isProfileDropdownOpen && (
        <div className="profile-dropdown" style={{
          position: "absolute",
          top: "100%",
          right: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          borderRadius: "8px",
          padding: "16px",
          width: "200px",
          zIndex: 1000,
          border: "1px solid #eee",
          marginTop: "8px",
          animation: "fadeIn 0.2s ease"
        }}>
          <div style={{ marginBottom: "12px", borderBottom: "1px solid #f0f0f0", paddingBottom: "12px" }}>
            <h6 style={{ margin: 0, fontWeight: "bold", color: "#333", textTransform: "capitalize" }}>{username}</h6>
            <span style={{ fontSize: "0.75rem", color: "#999" }}>Trader Account Active</span>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ padding: "8px 0", fontSize: "0.9rem", color: "#555", cursor: "pointer" }} onClick={() => setIsProfileDropdownOpen(false)}>
              <i className="fa-regular fa-user" style={{ marginRight: "8px" }}></i> Profile Settings
            </li>
            <li style={{ padding: "8px 0", fontSize: "0.9rem", color: "#555", cursor: "pointer" }} onClick={() => setIsProfileDropdownOpen(false)}>
              <i className="fa-solid fa-shield-halved" style={{ marginRight: "8px" }}></i> Security & Console
            </li>
            <li style={{ padding: "8px 0 0 0", borderTop: "1px solid #f0f0f0", marginTop: "12px" }}>
              <button 
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "8px",
                  backgroundColor: "#ff4d4f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "semibold",
                  fontSize: "0.85rem",
                  transition: "background 0.2s"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#ff7875"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#ff4d4f"}
              >
                <i className="fa-solid fa-arrow-right-from-bracket" style={{ marginRight: "6px" }}></i> Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;

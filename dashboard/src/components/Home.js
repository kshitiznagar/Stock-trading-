import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Parse query params
    const queryParams = new URLSearchParams(window.location.search);
    const tokenParam = queryParams.get("token");
    const usernameParam = queryParams.get("username");

    if (tokenParam) {
      localStorage.setItem("token", tokenParam);
      if (usernameParam) {
        localStorage.setItem("username", usernameParam);
      }
      
      // Clean query parameters from URL bar
      const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState({ path: cleanUrl }, "", cleanUrl);
      
      setIsAuthenticated(true);
    } else {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        // Redirect to frontend login page
        window.location.href = "http://localhost:3000/login";
      } else {
        setIsAuthenticated(true);
      }
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "sans-serif", color: "#666" }}>
        <div style={{ textAlign: "center" }}>
          <div className="spinner" style={{ border: "4px solid rgba(0, 0, 0, 0.1)", borderTop: "4px solid #387ed1", borderRadius: "50%", width: "40px", height: "40px", animation: "spin 1s linear infinite", margin: "0 auto 15px auto" }}></div>
          <h3>Authenticating...</h3>
          <p>Connecting to secure trading platform...</p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const [username, setUsername] = useState("user");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [toastMessage, setToastMessage] = useState(null);
  
  // Segment statuses
  const [segments, setSegments] = useState({
    equity: true,
    fo: true,
    commodity: false,
    currency: false,
    mutualFunds: true,
  });

  // App preferences
  const [prefTheme, setPrefTheme] = useState("Light");
  const [emailNotifications, setEmailNotifications] = useState(true);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "user";
    setUsername(storedUsername);
    setFullName(storedUsername.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "));
    setEmail(`${storedUsername.toLowerCase().replace(/\s+/g, "")}@snaptrade.com`);
    setPhone("+91 98765 43210");
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    localStorage.setItem("username", fullName.toLowerCase());
    // Trigger local storage storage event so other components update if listening
    window.dispatchEvent(new Event("storage"));
    showToast("Profile details updated successfully!");
  };

  const handleSegmentToggle = (segmentName) => {
    const updated = !segments[segmentName];
    setSegments(prev => ({
      ...prev,
      [segmentName]: updated
    }));
    
    const friendlyNames = {
      equity: "Equity Segment",
      fo: "Futures & Options (F&O) Segment",
      commodity: "Commodity Segment",
      currency: "Currency Segment",
      mutualFunds: "Mutual Funds"
    };
    
    showToast(`${friendlyNames[segmentName]} has been ${updated ? "activated" : "deactivated"}.`);
  };

  return (
    <div className="profile-settings-page">
      {toastMessage && (
        <div className="toast-notification">
          <i className="fa-solid fa-circle-check"></i> {toastMessage}
        </div>
      )}

      <div className="profile-header-banner">
        <h2>Account Profile</h2>
        <p>Manage your account settings, segments, and platform preferences.</p>
      </div>

      <div className="profile-settings-grid">
        {/* Left Side: General Profile Card & Segments */}
        <div className="profile-column-left">
          
          {/* Card 1: User Info Display */}
          <div className="settings-card profile-details-card">
            <div className="profile-card-header">
              <div className="profile-large-avatar">
                {fullName ? fullName.substring(0, 2).toUpperCase() : "US"}
              </div>
              <div className="profile-card-header-info">
                <h3>{fullName}</h3>
                <span className="client-id-badge">Client ID: ST{10000 + Math.floor(Math.random() * 90000)}</span>
                <span className="status-indicator-active"><span className="pulse-dot"></span> Active Brokerage Account</span>
              </div>
            </div>
            
            <div className="profile-quick-stats">
              <div className="quick-stat-item">
                <span className="stat-label">Account Type</span>
                <span className="stat-val">Retail Investor</span>
              </div>
              <div className="quick-stat-item">
                <span className="stat-label">Depository</span>
                <span className="stat-val">CDSL</span>
              </div>
              <div className="quick-stat-item">
                <span className="stat-label">Trading Limit</span>
                <span className="stat-val">₹5,00,000</span>
              </div>
            </div>
          </div>

          {/* Card 2: Trading Segments */}
          <div className="settings-card segments-card">
            <div className="card-title-section">
              <h4>Active Trading Segments</h4>
              <p>Enable or disable active trading segments for your account.</p>
            </div>
            
            <div className="segments-list">
              <div className="segment-row">
                <div className="segment-info">
                  <h5>Equity</h5>
                  <p>Invest & trade stocks directly on NSE/BSE</p>
                </div>
                <label className="switch-toggle">
                  <input 
                    type="checkbox" 
                    checked={segments.equity} 
                    onChange={() => handleSegmentToggle("equity")} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              <div className="segment-row">
                <div className="segment-info">
                  <h5>Futures & Options (F&O)</h5>
                  <p>Leverage market index & stock derivatives</p>
                </div>
                <label className="switch-toggle">
                  <input 
                    type="checkbox" 
                    checked={segments.fo} 
                    onChange={() => handleSegmentToggle("fo")} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              <div className="segment-row">
                <div className="segment-info">
                  <h5>Commodities</h5>
                  <p>Trade Gold, Silver, Crude Oil and agriculture contracts</p>
                </div>
                <label className="switch-toggle">
                  <input 
                    type="checkbox" 
                    checked={segments.commodity} 
                    onChange={() => handleSegmentToggle("commodity")} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              <div className="segment-row">
                <div className="segment-info">
                  <h5>Currency Derivatives</h5>
                  <p>Trade currency futures and cross-currency pairs</p>
                </div>
                <label className="switch-toggle">
                  <input 
                    type="checkbox" 
                    checked={segments.currency} 
                    onChange={() => handleSegmentToggle("currency")} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              <div className="segment-row">
                <div className="segment-info">
                  <h5>Mutual Funds</h5>
                  <p>Invest in direct schemes with zero commission fees</p>
                </div>
                <label className="switch-toggle">
                  <input 
                    type="checkbox" 
                    checked={segments.mutualFunds} 
                    onChange={() => handleSegmentToggle("mutualFunds")} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Edit Details Form & Banking & Prefs */}
        <div className="profile-column-right">
          
          {/* Card 3: Edit Info Form */}
          <div className="settings-card edit-profile-card">
            <div className="card-title-section">
              <h4>Contact & Profile Settings</h4>
              <p>Keep your primary contact info updated with the exchange logs.</p>
            </div>
            
            <form onSubmit={handleProfileSave} className="profile-edit-form">
              <div className="form-group">
                <label htmlFor="fullname-input">Full Name</label>
                <input 
                  id="fullname-input"
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Primary Email Address</label>
                <input 
                  id="email-input"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone-input">Registered Mobile</label>
                <input 
                  id="phone-input"
                  type="text" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} 
                  required
                />
              </div>

              <button type="submit" className="save-profile-btn">
                <i className="fa-solid fa-floppy-disk"></i> Save Profile Details
              </button>
            </form>
          </div>

          {/* Card 4: Linked Bank Account */}
          <div className="settings-card bank-account-card">
            <div className="card-title-section">
              <h4>Linked Bank Account</h4>
              <p>Primary bank for adding funds and processing payouts.</p>
            </div>
            
            <div className="bank-details-box">
              <div className="bank-logo-placeholder">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div className="bank-meta-info">
                <h5>HDFC Bank Ltd.</h5>
                <p className="bank-acc-no">Account: ••••••••5830</p>
                <span className="bank-ifsc">IFSC: HDFC0000060</span>
                <span className="acc-type-tag">Primary Savings</span>
              </div>
            </div>
          </div>

          {/* Card 5: Preferences */}
          <div className="settings-card preferences-card">
            <div className="card-title-section">
              <h4>System & Alert Preferences</h4>
            </div>

            <div className="pref-items-list">
              <div className="pref-item">
                <div className="pref-info">
                  <span className="pref-name">Platform Dashboard Theme</span>
                  <span className="pref-desc">Switch dashboard styling</span>
                </div>
                <div className="theme-toggle-buttons">
                  <button 
                    type="button" 
                    className={prefTheme === "Light" ? "theme-btn active" : "theme-btn"} 
                    onClick={() => { setPrefTheme("Light"); showToast("Theme set to Light"); }}
                  >
                    Light
                  </button>
                  <button 
                    type="button" 
                    className={prefTheme === "Glass" ? "theme-btn active" : "theme-btn"} 
                    onClick={() => { setPrefTheme("Glass"); showToast("Theme set to Glassmorphism Dark"); }}
                  >
                    Glass
                  </button>
                </div>
              </div>

              <div className="pref-item">
                <div className="pref-info">
                  <span className="pref-name">Daily Market Summary</span>
                  <span className="pref-desc">Receive evening reports via email</span>
                </div>
                <label className="switch-toggle">
                  <input 
                    type="checkbox" 
                    checked={emailNotifications} 
                    onChange={() => { setEmailNotifications(!emailNotifications); showToast(`Daily digest emails ${!emailNotifications ? "subscribed" : "unsubscribed"}`); }} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;

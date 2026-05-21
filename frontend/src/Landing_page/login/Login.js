import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3002/login', {
        email,
        password
      });
      
      const { token, username } = response.data;
      
      // Save credentials in local storage of frontend
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      // Redirect to Dashboard (port 3001) with token and username as query params
      window.location.href = `http://localhost:3001/?token=${encodeURIComponent(token)}&username=${encodeURIComponent(username)}`;
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card border-0 shadow-lg p-4 p-sm-5" style={{ borderRadius: '12px' }}>
            <div className="text-center mb-4">
              <h2 className="fw-bold" style={{ color: '#384d6c' }}>Welcome Back</h2>
              <p className="text-muted">Log in to your account to start trading</p>
            </div>

            {error && (
              <div className="alert alert-danger border-0 text-center" role="alert" style={{ borderRadius: '8px', fontSize: '0.9rem' }}>
                <i className="fa-solid fa-triangle-exclamation me-2"></i> {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label className="form-label text-muted fw-semibold" htmlFor="email" style={{ fontSize: '0.85rem' }}>Email Address</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0 text-muted" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control bg-light border-start-0 py-2"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px', boxShadow: 'none' }}
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <label className="form-label text-muted fw-semibold" htmlFor="password" style={{ fontSize: '0.85rem' }}>Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0 text-muted" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control bg-light border-start-0 py-2"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px', boxShadow: 'none' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-semibold mb-4 text-white"
                disabled={loading}
                style={{
                  backgroundColor: '#387ed1',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(56, 126, 209, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Logging in...
                  </>
                ) : 'Login'}
              </button>

              <div className="text-center mt-3">
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  Don't have an account? <Link to="/signup" className="fw-semibold text-decoration-none" style={{ color: '#387ed1' }}>Sign up now</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

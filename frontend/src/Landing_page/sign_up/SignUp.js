import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3002/register', {
        username,
        email,
        password
      });

      setSuccess('Account created successfully! Redirecting to login page...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to create account. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="row w-100 align-items-center">
        {/* Left Side Info */}
        <div className="col-12 col-md-6 text-center text-md-start p-4">
          <h2 className="fw-bold mb-3" style={{ color: '#384d6c', fontSize: '2.2rem' }}>
            Open a free demat and trading account online
          </h2>
          <h5 className="text-muted fw-normal lh-base mb-4">
            Start investing brokerage-free and join a community of 1.6+ crore investors and traders.
          </h5>
          <div className="d-none d-md-block text-center mt-4">
            <img 
              src="/media/images/account_open.svg" 
              alt="Demat Account Opening"
              className="img-fluid"
              style={{ maxHeight: '250px' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
          <div className="card border-0 shadow p-4 p-sm-5" style={{ borderRadius: '12px' }}>
            <h3 className="fw-bold mb-4" style={{ color: '#384d6c' }}>Signup Now</h3>

            {error && (
              <div className="alert alert-danger border-0 text-center" role="alert" style={{ borderRadius: '8px', fontSize: '0.9rem' }}>
                <i className="fa-solid fa-triangle-exclamation me-2"></i> {error}
              </div>
            )}

            {success && (
              <div className="alert alert-success border-0 text-center" role="alert" style={{ borderRadius: '8px', fontSize: '0.9rem' }}>
                <i className="fa-solid fa-circle-check me-2"></i> {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label className="form-label text-muted fw-semibold" htmlFor="username" style={{ fontSize: '0.85rem' }}>Username</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0 text-muted" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>
                    <i className="fa-regular fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control bg-light border-start-0 py-2"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px', boxShadow: 'none' }}
                  />
                </div>
              </div>

              <div className="form-group mb-3">
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
                className="btn btn-primary w-100 py-2 fw-semibold mb-3 text-white"
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
                    Registering...
                  </>
                ) : 'Sign Up'}
              </button>

              <div className="text-center mt-3">
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  Already have an account? <Link to="/login" className="fw-semibold text-decoration-none" style={{ color: '#387ed1' }}>Log in here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
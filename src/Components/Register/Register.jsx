import React, { useState } from 'react';
import './register.css';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import CTaxifyLogo from '../../Assets/image/1.png';

const RegisterPopup = ({ isOpen, onClose, openLoginPopup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    setPasswordError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validasi email
    if (!email.includes('@')) {
      setEmailError('Email harus mengandung @');
      return;
    }

    // Validasi password dan repeat password
    if (password !== repeatPassword) {
      setPasswordError('Password anda tidak sama');
      return;
    }

    // Lanjutkan proses pendaftaran jika validasi berhasil
    console.log('Form Submitted');
  };

  if (!isOpen) return null;

  return (
    <div className={`register-popup-overlay ${isOpen ? 'show' : ''}`}>
      <div className={`register-popup ${isOpen ? 'show' : ''}`}>
        <img src={CTaxifyLogo} alt="CTaxify Logo" className="logo" />
        <p className="tagline">Mari gabung dengan kami menjadi masa depan sadar pajak</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="repeat-password">Repeat Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="repeat-password"
                  value={repeatPassword}
                  onChange={handleRepeatPasswordChange}
                  placeholder="Repeat your password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
          </div>

          {passwordError && <p className="error-message">{passwordError}</p>}

          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-text">
          Memiliki akun? <a href="#" onClick={openLoginPopup}>Silahkan Login</a> {/* Menampilkan LoginPopup */}
        </p>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default RegisterPopup;

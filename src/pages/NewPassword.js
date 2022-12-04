import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import qs from 'query-string';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import logo from '../assets/img/logo/logo.png';
import { newUserPasswordRequest } from '../store/actions/users';

function NewPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  useEffect(() => {
    if (!query.email) {
      navigate('/login');
    }
  }, []);

  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();
    if (password !== password2) {
      toast.error('Passwords are not similar');
      return;
    }
    dispatch(newUserPasswordRequest(password));
  }, [password, password2]);

  return (
    <>
      <Helmet>
        <title>New Password</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="row">
            <figure className="logo">
              <Link to="/" className="logoLink">
                <img src={logo} alt="nreni" className="logoImg" />
                <p className="logoName">NRENI</p>
              </Link>
            </figure>
            <p className="pasResetTitle">reset your password</p>
          </div>
        </div>
      </header>
      <div className="resetPas">
        <div className="container">
          <div className="resetPasPage">
            <form onSubmit={handleSubmit} className="resetPasForm">
              <h2 className="resetPasTitle">create new password</h2>
              <hr />
              <p className="resetPasInfo">
                Your new password must be different from previous used passwords.
              </p>
              <input
                type="password"
                onChange={(ev) => setPassword(ev.target.value)}
                className="resetPasInput"
                placeholder="Type new password"
                value={password}
              />
              <input
                type="password"
                onChange={(ev) => setPassword2(ev.target.value)}
                className="resetPasInput"
                placeholder="Confirm password"
                value={password2}
              />
              <button type="submit" className="resetPasBtn">Reset password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPassword;

import React, { useState, useContext } from "react";
import { AuthContext } from "../App.jsx";
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';
require('firebase/auth');


const SignUp = (props) => {
  const Auth = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)


  const handleForm = (e, provider) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    console.log(name);
    if (provider) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .currentUser(name)
        .then(res => {
          history.push('/login');
          console.log('inside create', name)

          return res.user.updateProfile({
            displayName: name
          })
        })
        .catch(err => {
          setError(err.message)
        });
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            let user = { 'email': email, 'name': name };
            console.log(res.user);
            Auth.setCurrentUser(user.name);
            history.push('/login');
            console.log('inside create', name)
            return res.user.updateProfile({
              displayName: name
            })
          }
        })
        .catch(err => {
          setError(err.message)
        });
    }

    setLoading(false)
  };


  return (
    <>
      <div className="register">
        {error && <div className="alert alert-danger" role="alert">
          Failed to create account: {error}
        </div>}
        <div className="register__container">
          <input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="password"
            className="register__textBox"
            value={passConfirm}
            onChange={(e) => setPassConfirm(e.target.value)}
            placeholder="Verify Password"
          />
          <button disabled={loading} className="w-25" type="submit" onClick={handleForm}>
            Register
          </button>
          <div>
            Already have an account? <Link to="/login">Login</Link> now.
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
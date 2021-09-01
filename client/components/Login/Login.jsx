import React, { useState, useContext, useEffect } from 'react';
import Logo from '/public/img/Logo.png';
import SignUp from './SignUp.jsx';
import { AuthContext } from '../App.jsx';
import { Link, Switch, useHistory } from 'react-router-dom';
import firebase from 'firebase';
require('firebase/auth');

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const Auth = useContext(AuthContext);
  let history = useHistory();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      Auth.setCurrentUser(user);
    })
    return unsubscribe;
  }, [])


  const handleForm = e => {
    e.preventDefault();
    firebase
      .auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setError("");
        setLoading(true);
        Auth.setLoggedIn(true);
        history.push('/home');
      })
      .catch((err) => {
        setError(err.message)
      });

    setLoading(false);
  };

  let img = document.createElement('img');
  img.style = {
    height: '25%',
    width: '25%'
  }


  return (
    <>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center bg-secondary'>
          <h1 className='text-white'>Surfinch</h1>
        </div>
        <div >
          <h1>Login</h1>
          {error && <div className="alert alert-danger" role="alert">
            Failed to login: {error}
          </div>}
          <form onSubmit={e => handleForm(e)}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <hr />
            <button disabled={loading} type="submit">Login</button>
            <div>
              <Link to="/SignUp">
                <button type="button">
                  New User?
                </button>
              </Link>
            </div>
            <span>{error}</span>
          </form>
        </div>
        {/* <div className='d-flex justify-content-center'> */}
        {/* <img src={Logo} width='20%' height='20%' alt='finch' /> */}
        {/* </div> */}
      </div>
    </>
  )
}

export default Login;
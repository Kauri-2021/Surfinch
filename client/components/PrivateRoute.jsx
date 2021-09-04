//For use in future release

/************** Implement Private Routes restriction *****************/
// import React, { useContext } from 'react';
// import { Route, Redirect } from "react-router-dom"
// import { AuthContext } from './App.jsx';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const Auth = useContext(AuthContext);
//   const { isLoggedIn } = Auth;

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
//       }}
//     ></Route>
//   )
// }

// export default PrivateRoute;


/*************** Add to App.jsx to implement Private Route ***************/
// import NavBar from './Shared/NavBar.jsx';

// // PRIVATE ROUTES
// import PrivateRoute from "./PrivateRoute.jsx"

// // PAGE COMPONENTS
// import Homepage from './Homepage/Homepage.jsx';
// 	@@ -31,40 +31,38 @@ const App = () => {
//     console.log('state update rerender');
//   }, [isLoggedIn])



//   return (
//     <div className="main-container">
//       <Router>
//         <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, currentUser, setCurrentUser }}>
//           <Switch>
//             <div className="big-page-container">
//               {!isLoggedIn ?
//                 <div className="unidentified-container">
//                   <Route exact path="/">
//                     <Redirect to="/login" />
//                   </Route>
//                   <Route exact path="/login" component={Login} />
//                   <Route exact path="/signup" component={SignUp} />
//                 </div>
//                 :
//                 <div className="page-container">
//                   <NavBar />
//                   <Route>
//                     <PrivateRoute exact path="/home" component={Homepage} />
//                     <PrivateRoute path="/user-profile" component={Profile} />
//                     <PrivateRoute path="/bird-entry" component={BirdEntry} />
//                     <PrivateRoute path="/BirdProfile" component={BirdProfile} />
//                   </Route>
//                 </div>
//               }
//             </div>
//           </Switch>
//         </AuthContext.Provider>
//       </Router>
//     </div>
//   );
// }
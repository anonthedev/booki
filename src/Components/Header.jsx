import "./Header.css";
import { useEffect, useState } from "react";

import {
  auth,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
} from "../firebase";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../reduxThings/userSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const [ShowSignOut, setShowSignOut] = useState(false);

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider).then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        navigate("/home", { replace: true });
      });
    } else if (username) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/", { replace: true });
      });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home", { replace: true });
      }
    });
  }, [username]);

  function setUser(user) {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  function ShowSignOutFunction() {
    setShowSignOut(!ShowSignOut);
  }

  return (
    <nav className="nav">
      <img className="logo" src="/images/logo.png" alt="booki-logo" />
      {!username ? (
        <button className="sign-in-btn" onClick={handleAuth}>
          Sign In
        </button>
      ) : (
        <div className="pic-signout">
          <img
            className="user-pic"
            onClick={ShowSignOutFunction}
            src={userPhoto}
            alt="profile-pic"
            referrerpolicy="no-referrer"
          />
          <button
            className={ShowSignOut ? "sign-out-btn" : "sign-out-btn-hide"}
            onClick={handleAuth}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;

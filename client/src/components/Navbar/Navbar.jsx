import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useSelector,useDispatch } from "react-redux";
import './Navbar.css'
import search from '../../assets/search.png'
import Avatar from '../../components/Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser';
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";


const Navbar =()=> {
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
const handleLogout = () => {
  dispatch({ type: "LOGOUT" });
  navigate("/");
  dispatch(setCurrentUser(null));
};

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo ">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn v-class-resp">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn v-class-resp">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn v-class-resp">
          For teams
        </Link>
        <form className="searchbar">
          <input type="text" placeholder="Search..."></input>
          <img src={search} alt="search" width={18} className="search-icon" />
        </form>

        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <div className="av">
              <Avatar
                backgroundColor="#009dff"
                px="13px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/User/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
            </div>

            <button
              className="nav-item nav-links nav-logout"
              onClick={handleLogout}
            >
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar
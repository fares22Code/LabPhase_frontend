import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";



function Navbar() {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>

<div className="container">
        < div className="logo">
        <Link className="link" to="/">
        
            <span className="text">Magic</span>
            
          <span className="text-plus">!</span>
          </Link>
        </div>
        <div className="links">
          <span> About</span>
          <span>Community</span>
         
          <div className="links">
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                    
                  <Link className="link" to="/add">
                        Add New Service
                      </Link>
                      
                      <Link className="link" to="/myServices">
                        My Services
                      </Link>
                      
                      
                    </>
                  )}

                      <Link className="link" to="/profile">
                    Profile
                  </Link> 
                  
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                 
                </div>
              )}
            </div>
          ) : (
            <>

<Link className="links" to="/login">
          <span>Sign in</span>
          </Link>



          <Link className="links" to="/register">
         <button>Join</button>
         </Link>
         </>
          )}
          </div>
          </div>
          
        </div>
   </div>
  );
};

 export default Navbar;
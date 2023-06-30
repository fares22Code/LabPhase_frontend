import React from 'react'
import "./MarketPlace.scss";
import { Link } from "react-router-dom";

function MarketPlace() {


  return (
    <div className='marketplace'>

<div className="explore">
        <div className="container">
          <h1>Explore the Marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
             
              <div className="line"></div>
              <Link to="/services?cat=Graphics & Design" className="link">  
              <span>Graphics & Design</span>
              </Link>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
               
              />
              
              <div className="line"></div>
              <Link to="/services?cat=Digital Marketing" className="link">  
              <span>Digital Marketing</span>
              </Link>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <Link to="/services?cat=Writing & Translation" className="link">  
              <span>Writing & Translation</span>
              </Link>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <Link to="/services?cat=Video & Animation" className="link">  
              <span>Video & Animation</span>
              </Link>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <Link to="/services?cat=Music & Audio" className="link">  
              <span>Music & Audio</span>
              </Link>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <Link to="/services?cat=Programming & Tech" className="link">  
              <span>Programming & Tech</span>
              </Link>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <Link to="/services?cat=Business" className="link">  
              <span>Business</span>
              </Link>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <Link to="/services?cat=Lifestyle" className="link"> 
              <span>Lifestyle</span>
              </Link>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <Link to="/services?cat=Data" className="link"> 
              <span>Data</span>
              </Link>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <Link to="/services?cat=Photography" className="link"> 
              <span>Photography</span>
              </Link>
            </div>
          </div>
        </div>
      </div>









    </div>
  )
}

export default MarketPlace
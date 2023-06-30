import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/services?search=${input}`);
  };
  const handleSubmit2 = () => {
    navigate(`/services?search=Web Design`);
  };
  const handleSubmit3 = () => {
    navigate(`/services?cat=WordPress`);
  };
  const handleSubmit4 = () => {
    navigate(`/services?cat=Logo Design`);
  };
  const handleSubmit5 = () => {
    navigate(`/services?cat=AI Servicess`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>Freelance</span> services.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" 
              placeholder="Create ' Logo,Website,Application...' " 
              onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button onClick={handleSubmit2}>Web Design</button>
            <button onClick={handleSubmit3}>WordPress</button>
            <button onClick={handleSubmit4}>Logo Design</button>
            <button onClick={handleSubmit5}>AI Services</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Featured;

import React from 'react';
import './Header.css'
import stadiumImg from './bannerImg/stadium.jpg'
const Header = () => {

  
  return (
    <div className="bg-image">
      
<div className="banner">
 <img className="mt-0" src={stadiumImg} alt="" />
 <div className="leagueTitle">Football League</div>
 </div>
</div>

  );
};
export default Header;
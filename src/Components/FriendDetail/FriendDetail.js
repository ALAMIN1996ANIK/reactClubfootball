import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee, faAnchor, faAt  } from '@fortawesome/free-solid-svg-icons'
// import stadiumImg from './bannerImg/male.png'
// import maleImg from '../../Photo/male.png'
// import femaleImg from '../../Photo/female.png'
import './FriendDetail.css'
import { Link } from 'react-router-dom';



const FriendDetail = () => {
    
    const { friendId} = useParams();
    
    const [friend, setFriend] = useState({});
   
    useEffect(()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${friendId}`;
     fetch(url)
     .then(res => res.json())
     .then(data => setFriend(data.teams[0]))
    }, [friendId] )

    // let conditionalImg;
    // if (strGender === 'Male') {
    //     conditionalImg = <img src={maleImg} alt="" />
    // }
    // else if (strGender === 'Female') {
    //     conditionalImg = <img src={femaleImg} alt="" />
    // }

   
       const img = {
        height: '300px'
    }
    return (
            
        <div className="background">
        <div>
            <img className="w-100 mt-0" src={friend.strTeamBanner} alt="" />
        </div>
        <Link to={`/Home`}>
       
        <button className="btn-success">Back to Home  {}</button>
       </Link>
        <div className="container my-3">
            <div className="row text-dark bg-success align-items-center rounded">
                <div className="col-lg-6">
                <img style={img} src={friend.strTeamLogo} alt=""/>
                <h1>Name: {friend.strTeam}</h1>
         <h5>Country: {friend.strCountry}</h5>
          <h5>League: {friend.strLeague}</h5>
       <h5>Type: {friend.strSport}</h5>
       <h5>Gender: {friend.strGender}</h5>
                   
                </div>

                <div className="col-lg-6  col-sm-12">
                <img style={img} src={friend.strTeamJersey} alt=""/>
                
                </div>
            </div>
            <div className="text-black my-3">
                
                <p>{friend.strDescriptionEN}</p>
                
            </div>
        </div><br />
        <div className="text-center">
      
<span><FontAwesomeIcon className="fa-2x bg-white rounded p-1 mx-2 mb-5" icon={faCoffee} /></span>

<span><FontAwesomeIcon className="fa-2x bg-white rounded p-1 mx-2 mb-5" icon={faAnchor} /></span>
<span><FontAwesomeIcon className="fa-2x bg-white rounded p-1 mx-2 mb-5" icon={faAt} /></span>


        </div>
    </div>
   
        
    );
};

export default FriendDetail;
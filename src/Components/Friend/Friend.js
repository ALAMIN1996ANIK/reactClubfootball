import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {  strTeam, strCountry, strGender, strTeamBadge, idTeam} = props.friend;

    
     const friendStyle = {
    padding : '20px',
    boxShadow : '0 12px 13px rgb(0 0 0 / 16%), 0 12px 13px rgb(0 0 0 / 16%)',
    borderRadius: '6px',
    color : 'black',
    backgroundColor: 'Teal',
    margin: '1px',
    fontFamily : 'roboto',
     
     }
    const img = {
        height: '200px'
    }
    
    return (
        <div >
           

         <div style={friendStyle}>

        <img style={img} src= {strTeamBadge} alt="" />
        <h2>{strTeam}</h2>
        <h2>{strCountry}</h2>
        <h3>{strGender}</h3>
    
       <Link to={`/friend/${idTeam}`}>
       
        <button className="btn-success" >Show Details  {}</button>
       </Link>
    </div>
        </div>

        
    ); 
};

export default Friend;
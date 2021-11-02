import React from 'react';
import  {useEffect, useState} from 'react';
import Friend from '../Friend/Friend';
import Footer from '../footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    const [friends , setFriend] = useState([]);
   useEffect(()=>{
  
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
    .then(res => res.json())
    .then(data => setFriend(data.teams))
   }, [])

   const teamsCart = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '20px',
    marginLeft: '80px',
    marginRight: '20px',
   }
   const divBackground ={
    backgroundColor: ' MediumAquaMarine',
  }
    return (
    
      <div style={divBackground} >
      <Header></Header>
      <div>

      </div>
      <br />
        {/* <h1>Total friends : {friends.length}</h1> */}
  <div style = {teamsCart} >
  {
    friends.map(friend => <Friend friend={friend}></Friend>)
  }


  
  </div>
<Footer></Footer>
    </div>
    );
};

export default Home;
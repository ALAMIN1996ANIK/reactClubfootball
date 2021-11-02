
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Header from './Components/Header/Header';



 
function App() {
  
  return (
    <div>
      
      <Router>
        <Switch>
         <Route path = '/Header'>
          <Header></Header>
         </Route>

          <Route path ='/Home'>
          <Home></Home>
          </Route>
           
           <Route path = '/friend/:friendId'>
             <FriendDetail></FriendDetail>
           </Route>

           <Route exact path ='/'>
            <Home></Home>
           </Route>

           <Route path='/*'>
             <NoMatch></NoMatch>
           </Route>

           
        </Switch>
      </Router>
    </div>
 
    
  );
}

export default App;

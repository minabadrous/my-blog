import CreatePost from "./CreatePost";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./Navbar";
import PostDetails from "./PostDetails";
import NotFound from "./NotFound";
import EditPost from "./EditPost";


function App() {
  return (
    
    <div className="App">
      
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          
          <Route path="/create">
            <CreatePost />
          </Route>

          <Route path="/posts/:id">
            <PostDetails />
          </Route>

          <Route path="/edit/:id">
            <EditPost />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;

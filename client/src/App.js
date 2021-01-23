
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import PostDetails from './components/posts/PostDetails'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/post/:id' component={PostDetails} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

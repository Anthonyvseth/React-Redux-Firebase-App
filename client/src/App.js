
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import CreatePost from './components/posts/CreatePost'
import PostDetails from './components/posts/PostDetails'

function App() {
  return (
    <BrowserRouter>
     <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/post/:id' component={PostDetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreatePost} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

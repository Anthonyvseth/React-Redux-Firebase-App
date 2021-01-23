
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Services from './Pages/Services';
import SignUp from './Pages/SignUp';

function App() {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  )
}

export default App;

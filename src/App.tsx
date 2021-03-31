import React from 'react';
import {Router} from '@reach/router'
import Home from './pages/Home';
import Layout from './components/layout/Layout'

function App() {

return(
  <React.Fragment>
    <Layout>
    <Router>
      <Home path='/'/>
    </Router>
    </Layout>
    
  </React.Fragment>
 
)
}

export default App;

import Navigation from './components/common/navigation'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import PageRenderer from './components/page-renderer'

function App() {
  return (
    <Router>
      <div className="App"> 
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

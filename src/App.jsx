import { Route, Switch, Redirect } from "react-router-dom";
import Guide from './pages/Guide'
import Home from './pages/Home'

function App() {
  return (
    <Switch>
      <Route path='/guide' component={Guide}></Route>
      <Route path='/home' component={Home}></Route>
      <Redirect to="/guide"></Redirect>
    </Switch>
  );
}

export default App;

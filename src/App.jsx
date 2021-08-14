import { Route, Switch, Redirect } from "react-router-dom";
import Guide from "./pages/Guide";
import Home from "./pages/Home";
import Notice from "./pages/Notice";

function App() {
  return (
    <Switch>
      <Route path='/guide' component={Guide}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/notice' component={Notice} />
      <Redirect to='/guide'></Redirect>
    </Switch>
  );
}

export default App;

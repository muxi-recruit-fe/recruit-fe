import { Route, Redirect, HashRouter } from "react-router-dom";
import Miji from "./pages/miji";
import Info from "./pages/info";

function App() {
  return (
    <HashRouter>
      <Route path='/miji' component={Miji}></Route>
      <Route path='/info' component={Info}></Route>
      <Redirect to='/miji'></Redirect>
    </HashRouter>
  );
}

export default App;
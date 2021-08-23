
import './App.css';
import Hackathon from './pages/hackathon/hackathon';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Meeting from './pages/meeting/meeting';
import Travel from './pages/travel/travel';
import Introduction from './pages/introduction/introduction';
import Join from './pages/join/join';
import Guide from "./pages/Guide";
import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Miji from "./pages/miji";
import Info from "./pages/info";
import Product from "./pages/Product";
import Pc from './pages/Pc'
import AnimatedRouter from 'react-animated-router';
import 'react-animated-router/animate.css';

function App(props) {
  return (
    <div className='animate-route'>
      <Router>
        <Redirect exact from="/" to="/guide" />
        <AnimatedRouter>
        <Route path="/meeting" component={Meeting}></Route>
        <Route path="/travel" component={Travel}></Route>
        <Route path="/hackathon" component={Hackathon}></Route>
        <Route path="/join" component={Join}></Route>
        <Route path="/introduction" component={Introduction}></Route>
        </AnimatedRouter>
        <Route path='/product' component={Product}></Route>
        <Route path='/guide' component={Guide}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/notice' component={Notice} />
        <Route path='/miji' component={Miji}></Route>
        <Route path='/info' component={Info}></Route>
        <Route path='/pc' component={Pc}></Route>
      </Router>
    </div>
  );
}


export default App;

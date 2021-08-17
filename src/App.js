import './App.css';
import Hackathon from './pages/hackathon/hackathon';
import { BrowserRouter as Router, Link, Route, Switch ,HashRouter} from 'react-router-dom';
import Meeting from './pages/meeting/meeting';
import Travel from './pages/travel/travel';
import Introduction from './pages/introduction/introduction';
import Join from './pages/join/join';
import AnimatedRouter from 'react-animated-router'; 
import 'react-animated-router/animate.css';

function App() {
  return (
    <div className='animate-route'>
    <Router>
        <AnimatedRouter>
          <Route path="/meeting" component = {Meeting}></Route>
          <Route path="/travel" component = {Travel}></Route>
          <Route path="/hackathon" component = {Hackathon}></Route>
          <Route path="/join" component = {Join}></Route>
          <Route path="/introduction" component = {Introduction}></Route>
        </AnimatedRouter>
    </Router>
    </div>
  );
}


export default App;

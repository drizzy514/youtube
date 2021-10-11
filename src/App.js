import './App.css';
import { Switch, Route } from 'react-router-dom';



import Channel from "./pages/Channel/Channel";
import Home from "./pages/Home/Home";
import Video from './pages/Video/Video';
// components 
import SiteHeader from "./components/Siteheader/SiteHeader"
import PhoneSidebar from './components/PhoneSidebar/PhoneSidebar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Public from './routes/Public';
import Profile from './pages/Profile/Profile';
import Private from "./routes/Private"
import WatchHistory from './components/WatchHistory/WatchHistory';
import TrendPage from './pages/TrendPage/TrendPage';

function App() {
  return (
    <>
    <div className="app">
       <SiteHeader />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/trend" component={TrendPage} />
            <Route path="/channel" component={Channel} />
            <Route path="/video" component ={Video} />
            <Route path="/history" component={WatchHistory} />
            <Public path="/login" component ={Login} />
              <Public path="/signup" component ={Signup} />
            <Private path="/profile" component={Profile} />

          </Switch>
          <PhoneSidebar />
     </div>
    </>
  );
}

export default App;

import './App.css';
import { Switch, Route } from 'react-router-dom';



import Channel from "./pages/Channel/Chanel";
import Home from "./pages/Home/Home";
import Video from './pages/Video/Video';
// components 
import SiteHeader from "./components/Siteheader/SiteHeader"


function App() {
  return (
    <>
    <div className="app">
       <SiteHeader />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/channel" component={ Channel} />
            <Route path="/video" component ={Video} />
          </Switch>
     </div>
    </>
  );
}

export default App;

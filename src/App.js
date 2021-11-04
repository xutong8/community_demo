import './App.css';
import Image from './components/Image';
import pyq from './assets/images/pyq.svg';
import pyq_selected from './assets/images/pyq_selected.svg';
import service from './assets/images/service.svg';
import service_selected from './assets/images/service_selected.svg';
import talk from './assets/images/talk.svg';
import talk_selected from './assets/images/talk_selected.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import PYQ from './components/PYQ';
import Service from './components/Service';
import Talk from './components/Talk';
import my from './assets/images/my.svg';
import my_selected from './assets/images/my_selected.svg';
import User from './components/User';

function App() {
  const [route, setRoute] = useState(0);

  return (
    <Router>
      <div className="app">
        <div className="content">
          <Route path="/pyq">
            <PYQ />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/talk">
            <Talk />
          </Route>
          <Route path="/myinfo">
            <User />
          </Route>
          <Redirect from="/" to="/pyq" />
        </div>
        <div className="bottom">
          <div className="item" onClick={() => setRoute(0)}>
            <Link to="/pyq" style={{ textDecoration: 'none', color: route === 0 ? '#bf536f' : 'black' }}>
              {
                route === 0 ?
                  <Image src={pyq_selected} desc="交流" /> :
                  <Image src={pyq} desc="交流" />
              }
            </Link>
          </div>
          <div className="item" onClick={() => setRoute(1)}>
            <Link to="/service" style={{ textDecoration: 'none', color: route === 1 ? '#bf536f' : 'black' }}>
              {
                route === 1 ?
                  <Image src={service_selected} desc="服务" /> :
                  <Image src={service} desc="服务" />
              }
            </Link>
          </div>
          <div className="item" onClick={() => setRoute(2)}>
            <Link to="/talk" style={{ textDecoration: 'none', color: route === 2 ? '#bf536f' : 'black' }}>
              {
                route === 2 ?
                  <Image src={talk_selected} desc="联系" /> :
                  <Image src={talk} desc="联系" />
              }
            </Link>
          </div>
          <div className="item" onClick={() => setRoute(3)}>
            <Link to="/myinfo" style={{ textDecoration: 'none', color: route === 3 ? '#bf536f' : 'black' }}>
              {
                route === 3 ?
                  <Image src={my_selected} desc="我的" /> :
                  <Image src={my} desc="我的" />
              }
            </Link>
          </div>
        </div>
      </div>
    </Router >
  );
}

export default App;

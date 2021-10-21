import './styles/scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';
import Investments from './components/Investments';
import Funds from './components/Funds';
import Contact from './components/Contact';
import Manifesto from './components/Manifesto';
import Donate from './components/Donate';
import SuccessDonation from './components/SuccessDonation';
import CancelledDonation from './components/CancelledDonation';
function App() {
  return (
    <Router basename="/">
      <Header />
      {/* start of Homepage Main Content */}
      <div id="mainContainer">
        <div className="content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/upskillfund.org" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/investments" component={Investments} />
            <Route path="/manifesto" component={Manifesto} />
            <Route path="/funds" component={Funds} />
            <Route path="/contact" component={Contact} />
            <Route path="/donate" component={Donate} />
            <Route path="/success" component={SuccessDonation} />
            <Route path="/canceled" component={CancelledDonation} />
          </Switch>
        </div>
        <Footer />
      </div>
      {/* End of Homepage Main Content */}
    </Router>
  );
}

export default App;

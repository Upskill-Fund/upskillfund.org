import './styles/scss/main.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollIntoView from './components/reusable/ScrollIntoView';
function App() {
  return (
    <div>
      <Router>
        <ScrollIntoView>
          <Header />
          {/* start of Homepage Main Content */}
          <div>
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
              <Route path="/privacypolicy" component={PrivacyPolicy} />
            </Switch>
          </div>
          <Footer />
        </ScrollIntoView>

        {/* End of Homepage Main Content */}
      </Router>
    </div>
  );
}

export default App;

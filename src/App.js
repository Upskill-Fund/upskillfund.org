import './styles/scss/main.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';
import Investments from './components/Investments';
import Funds from './components/Funds';
function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* start of Homepage Main Content */}
      <div id="mainContainer">
        <div id="scrollSlides">
          <div className="content">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/investments" component={Investments} />
              <Route path="/funds" component={Funds} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
      {/* End of Homepage Main Content */}
    </BrowserRouter>
  );
}

export default App;

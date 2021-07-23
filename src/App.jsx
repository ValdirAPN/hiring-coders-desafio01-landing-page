import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modal from 'react-modal';
import { CartProvider } from './hooks/useCart';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer'
import { GlobalStyle } from './styles/global';
import { Login } from './pages/Login';

Modal.setAppElement('#root');

export function App() {

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>

      <Footer />

      <GlobalStyle />
    </ CartProvider>
  );
}

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import Home from './Home';
import Pagina02 from './paginas/Pagina02';
import Pagina03 from './paginas/Pagina03';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>Teste...</h1>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/pagina02">Página 02</Link>
              </li>
              <li>
                <Link to="/pagina03">Página 03</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/pagina02">
              <Pagina02 />
            </Route>
            <Route path="/pagina03">
              <Pagina03 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <h2>Finalizando...</h2>
        </div>
      </Router>
    );
  }
}

export default App;

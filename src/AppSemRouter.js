import React from 'react';
import './App.css';

import Pagina01 from './Home';
import Pagina02 from './paginas/Pagina02';
import Pagina03 from './paginas/Pagina03';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pagina: 0 };
    this.paginas = [<Pagina01 />, <Pagina02 />, <Pagina03 />];
  }

  handleClick = () => {
    this.setState((state) => 
      ({ pagina: (state.pagina + 1) % this.paginas.length })
    );
  }

  handleClickPagina01 = () => {
    this.setState({ pagina: 0});
  }

  render() {
    const { pagina } = this.state;
    return (
      <div className="App">
        {this.paginas[pagina]}
        <a href="#" onClick={this.handleClick}>Trocar</a>
        <br />
        <br />
        <a href="#" onClick={this.handleClickPagina01}>Pagina 01</a>
      </div>
    );
  }
}

export default App;

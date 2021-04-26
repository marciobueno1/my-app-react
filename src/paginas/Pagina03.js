import { Link } from 'react-router-dom';

function Pagina03() {
    return (
        <div>
            <h1>Página 03</h1>
            <Link to="/">Início</Link>
            <br />
            <a href="https://google.com" target="_blank">Google</a>
        </div>
    );
}
  
export default Pagina03;
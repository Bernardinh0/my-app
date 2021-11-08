import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50" />
        <h2>Header</h2>
      </header>
    <section>
        <h1>Contenu</h1>
        <button type="button" class="btn btn-primary">Primary</button>
    </section>
    <footer>
        <h2>Footer</h2>
    </footer>
    </div>
  );
}

export default App;

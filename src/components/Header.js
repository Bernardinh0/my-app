import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
<nav class="navbar navbar-light" >
    <div class="container-fluid">
    <NavLink class="navbar-brand" to="#"><img src={logo} className="App-logo" alt="logo" width="50" />
</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </header>

    )
}
export default Header
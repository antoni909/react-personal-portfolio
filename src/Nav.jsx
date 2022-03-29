import { Outlet, Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
      <h1>Nav Component</h1>
      <nav 
        style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}
      >
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/resume"> Resume </Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Nav;

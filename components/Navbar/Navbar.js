import Link from "next/link";
import "./Navbar.scss";

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a title="BitzPrice" className="navbar-brand" href="/">
        BitzPrice
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a title="Home" className="nav-link">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a title="About" className="nav-link">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;

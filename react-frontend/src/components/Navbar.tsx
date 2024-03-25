import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHome,
  faListAlt,
  faThLarge,
  faClipboardList,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        SideMenu
      </a>
      <div className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              <FontAwesomeIcon icon={faTachometerAlt} />
              <span className="d-none d-sm-inline">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faHome} />
              <span className="d-none d-sm-inline">Home</span>
            </a>
          </li>
          <li className="nav-item disabled">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faListAlt} />
              <span className="d-none d-sm-inline">Articles</span>
            </a>
          </li>
          <li className="nav-item disabled">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faThLarge} />
              <span className="d-none d-sm-inline">Products</span>
            </a>
          </li>
          <li className="nav-item disabled">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faClipboardList} />
              <span className="d-none d-sm-inline">Orders</span>
            </a>
          </li>
          <li className="nav-item disabled">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faUsers} />
              <span className="d-none d-sm-inline">Customers</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

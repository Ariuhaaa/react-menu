import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";

function App() {
  const st = window.location;
  const p = new URLSearchParams(st.search);

  console.log(window.location);
  console.log(window.location.pathname);
  console.log(p);
  console.log(p.get("id"));

  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <div className="container">
      <header>
        <nav className="bg-light navbar navbar-expand-lg">
          {/* Link ashiglav */}

          {/* <ul>
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={splitLocation[1] === "about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={splitLocation[1] === "service" ? "active" : ""}>
              <Link to="/service/inner">Service</Link>
            </li>
          </ul> */}

          {/* NavLink ashiglav */}
          {/* <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul> */}
          {/* Link ashiglav */}

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

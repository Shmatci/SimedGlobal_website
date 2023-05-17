import Link from "next/link";
import { tttItems } from "../../data/menu";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={95} />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item dropdown mega-dropdown-md active">
            <a
              className="nav-link"
              href="/"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Home
            </a>
            
          </li>
          {/* End li (home mega menu) */}

          <li className="nav-item">
            <a
              className="nav-link"
              href="/about/about-us"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              About
            </a>
          </li>
          {/* End li (about page) */}

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/ttt"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              3T's
            </a>
            <ul className="dropdown-menu">
              {tttItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="dropdown-item">
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End li (ttt) */}

          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Contact
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}
      </div>
    </nav>
  );
};

export default MainMenu;

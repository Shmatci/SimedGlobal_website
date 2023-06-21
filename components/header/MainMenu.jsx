import Link from "next/link";
import { tttItems } from "../../data/menu";
import { useRouter } from "next/router";
import Image from "next/image";

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

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image src="/images/logo/main_logo.png" alt="" width={95} height={40}/>
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown mega-dropdown-md">
            <Link
              className="nav-link"
              href="/"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Home
            </Link>
            
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              href="/about"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              About Us
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="/ttt"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              3T&apos;s
            </Link>
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

          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;

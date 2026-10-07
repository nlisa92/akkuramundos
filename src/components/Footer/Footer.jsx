import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer() {
  const navigation = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Our approach", path: "/approach" },
    { label: "Stories", path: "/stories" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Top */}
        <div className="footer__top">

          {/* Brand */}
          <div className="footer__brand">
            <NavLink
              to="/"
              className="footer__logo"
              aria-label="Akkuramundos home"
            >
              <img
                src="/images/logo.png"
                alt="Akkuramundos"
                className="footer__logo-image"
              />

              <span className="footer__logo-text">
                AKKURAMUNDOS
              </span>
            </NavLink>

            <p className="footer__location">
              Málaga · Costa del Sol
            </p>
          </div>

          {/* Navigation */}
          <nav
            className="footer__nav"
            aria-label="Footer navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `footer__nav-link ${
                    isActive
                      ? "footer__nav-link--active"
                      : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div className="footer__middle">

          <div className="footer__socials">
            <a
              href="#"
              className="footer__social"
              aria-label="Instagram"
            >
              ig
            </a>

            <a
              href="#"
              className="footer__social"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#"
              className="footer__social"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>

          <div className="footer__contacts">
            <a
              href="#"
              className="footer__contact-link"
            >
              Instagram
            </a>

            <span>·</span>

            <a
              href="#"
              className="footer__contact-link"
            >
              Facebook
            </a>

            <span>·</span>

            <a
              href="mailto:akkuramundos@gmail.com"
              className="footer__contact-link"
            >
              akkuramundos@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">

          <p className="footer__copyright">
            Akkuramundos · Non-profit association.
            President: Mayte Alvarado.
            Address: C/ Cuarteles 39, 2º D,
            29002 Málaga, Spain.
            CIF: G10545936.
          </p>

          <p className="footer__rights">
            © {new Date().getFullYear()} Akkuramundos.
            All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
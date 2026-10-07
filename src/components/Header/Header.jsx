import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Our approach", path: "/approach" },
    { label: "Stories", path: "/stories" },
    { label: "Contact", path: "/contact", isButton: true },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">

        {/* Logo */}
        <NavLink
          to="/"
          className="header__logo"
          onClick={closeMenu}
          aria-label="Akkuramundos home"
        >
          <img
            src="/images/logo.png"
            alt="Akkuramundos"
            className="header__logo-image"
          />

          <span className="header__logo-text">
            AKKURAMUNDOS
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <nav
          className="header__nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `header__link ${
                  item.isButton
                    ? "header__contact-link"
                    : ""
                } ${
                  isActive
                    ? "header__link--active"
                    : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="header__languages">
            <button
              type="button"
              className="header__language header__language--active"
            >
              EN
            </button>

            <span className="header__language-separator">
              /
            </span>

            <button
              type="button"
              className="header__language"
            >
              ES
            </button>

            <span className="header__language-separator">
              /
            </span>

            <button
              type="button"
              className="header__language"
            >
              RU
            </button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`header__menu-button ${
            isMenuOpen
              ? "header__menu-button--open"
              : ""
          }`}
          onClick={() =>
            setIsMenuOpen((prev) => !prev)
          }
          aria-label={
            isMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile navigation */}
        <div
          className={`header__mobile-menu ${
            isMenuOpen
              ? "header__mobile-menu--open"
              : ""
          }`}
        >
          <nav
            className="header__mobile-nav"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `header__mobile-link ${
                    item.isButton
                      ? "header__mobile-link--contact"
                      : ""
                  } ${
                    isActive
                      ? "header__mobile-link--active"
                      : ""
                  }`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__mobile-languages">
            <button
              type="button"
              className="header__language header__language--active"
            >
              EN
            </button>

            <span>/</span>

            <button
              type="button"
              className="header__language"
            >
              ES
            </button>

            <span>/</span>

            <button
              type="button"
              className="header__language"
            >
              RU
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
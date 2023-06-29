import React from "react";
import Link from "next/link";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={style.navbar}>
        <Link href="/">
          <span>
            <svg
              width="36"
              height="28"
              viewBox="0 0 36 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 28C13.95 28 18 23.275 18 17.5V10.5C18 4.725 13.95 0 9 0C4.05 0 0 4.725 0 10.5V17.5C0 23.275 4.05 28 9 28Z"
                fill="url(#paint0_linear_0_104)"
              />
              <path
                d="M27 28C31.95 28 36 23.275 36 17.5V10.5C36 4.725 31.95 0 27 0C22.05 0 18 4.725 18 10.5V17.5C18 23.275 22.05 28 27 28Z"
                fill="url(#paint1_linear_0_104)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_104"
                  x1="18"
                  y1="28"
                  x2="18"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BFDBFE" stop-opacity="0.01" />
                  <stop offset="1" stop-color="#3B82F6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_104"
                  x1="18"
                  y1="0"
                  x2="18"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BFDBFE" stop-opacity="0.01" />
                  <stop offset="1" stop-color="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </Link>
        <div className={style.navmenu}>
            <ul>
              <li>
                <button className={style.subscribe}>
                  Subscribe
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="#fff">
                <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                  </span>
                </button>
              </li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

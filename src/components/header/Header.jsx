import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link style={{ color: '#FF6060' }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ color: '#FF6060' }} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

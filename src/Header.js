import React from 'react';

function Header({ className }) {
  return (
    <header className={className}>
      <img src="/images/logo.png" alt="Little Lemon logo" />
    </header>
  );
}

export default Header;

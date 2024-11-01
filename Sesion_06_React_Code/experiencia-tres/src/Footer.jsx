import React from 'react';
import './footer.css';  

function Footer({ copyright }) {
  return (
    <footer className="footer">
      <p>{copyright}</p>
    </footer>
  );
}

export default Footer;

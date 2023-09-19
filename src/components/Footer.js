import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer>
      <p>Copyright &copy; {date} </p>
      <Link to='/about'>About</Link>
    </footer>
  );
};

export default Footer;

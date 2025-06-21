import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" style={styles.link}>Back to Home</Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    paddingTop: '100px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  link: {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default NotFound;

import React from "react"; 
import { Link } from 'react-router-dom';
//import './Header.css';

const Header = () => {
    return(
        <header style={styles.header}>
            
            <nav style={styles.nav}>
            <h1 style={styles.title}>Bolos e Doces da Camila</h1>
                <a href="#">Bolos</a>
                <a href="#">Doces Gourmet</a>
                <Link to="/personalizar">Doces Personalizados</Link>
                <button style={styles.loginButton}>Login</button>
            </nav>
            
        </header>
    );
};

const styles = {
    header: {
        fontFamily: "'Indie Flower', cursive",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '20px',
        backdropFilter: 'blur(8px)',
        marginBottom: '2rem',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333',
      },
    nav: {
        alignItems: 'center',
        display: 'flex',
        gap: '2rem',
      },
      loginButton: {
        backgroundColor: '#e49ab0',
        border: 'none',
        borderRadius: '20px',
        padding: '0.5rem 1rem',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
      }
};

export default Header;
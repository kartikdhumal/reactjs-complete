import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    return (
        <div className="main">
        <div className="navbar-container">
            <h1 className="navbar-title">React By Kartik Dhumal</h1>
            <div className="navbar-section">
                <ul className="navbar-links">
                    <li className="navbar-item"><Link to="/package" className="navbar-link">Package</Link></li>
                    <li className="navbar-item"><Link to="/component" className="navbar-link">Component & JSX</Link></li>
                    <li className="navbar-item"><Link to="/dom" className="navbar-link">DOM & Virtual DOM</Link></li>
                    <li className="navbar-item"><Link to="/hooks" className="navbar-link">Hooks</Link></li>
                    <li className="navbar-item"><Link to="/router" className="navbar-link">React Router DOM</Link></li>
                    <li className="navbar-item"><Link to="/lazyloading" className="navbar-link">Lazy Loading / Dynamic Bundling / On Demand Loading</Link></li>
                    <li className="navbar-item"><Link to="/propsdrilling" className="navbar-link">Props Drilling / Lifting stateup</Link></li>
                    <li className="navbar-item"><Link to="/context" className="navbar-link">Context</Link></li>
                    <li className="navbar-item"><Link to="/redux" className="navbar-link">React Redux</Link></li>
                    <li className="navbar-item"><Link to="/templateliteral" className="navbar-link">Template Literal</Link></li>
                    <li className="navbar-item"><Link to="/testing" className="navbar-link">Testing</Link></li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Navbar;

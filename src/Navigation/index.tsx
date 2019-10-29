import React, { PureComponent } from 'react';
import {
    Link
  } from "react-router-dom";

class Navigation extends PureComponent {
    render() {
        return <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
    }
}

export default Navigation;

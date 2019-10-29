import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Landing from './index';

import './home.scss';

class Home extends PureComponent {
    render() {
        return <div className="home">
            <Link to="/portfolio">
                <Landing header="ENTER" />
            </Link>
        </div>
    }
}

export default Home;
import React, { PureComponent } from 'react';
import sdTable from './sd_table.svg';
import './styles.scss';


class Landing extends PureComponent {
    render() {
        return <div className="landing-container">
            <div>
            <img id="sd_table" src={sdTable} />

            <div className="sd_atom">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
                <div className="nucleus"></div>
            </div>
            </div>
        </div>
    }
}

export default Landing;
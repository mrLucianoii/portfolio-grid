import React, { PureComponent } from 'react';
import sdTable from './sd_table.svg';

import './styles.scss';

interface Props {
    header?: string;
  }

class Landing extends PureComponent<Props, {}> {
    render() {
        const { header } = this.props;
        return <header className="App-header">
             <img id="sd_table" src={sdTable} />
             <div className="sd_atom">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
                <div className="nucleus"></div>
            </div>
            <h1>{header}</h1>
        </header>
    }
}

export default Landing;
import React, { PureComponent } from 'react';
import { data as protfolioData } from './data/portfolio';
import Landing from '../landing';
import './grid.scss';

class PortfolioGridLayout extends PureComponent {
    renderGrid = () => {
        return protfolioData.map((item, key) => {
            return <div className="item" key={`portfolio-${key}`}>
                <div className="box" >
                    <img src={item.image} />
                    <div className=""><span>{item.title}</span></div>
                    <div className="tooltip">{item.toolTip}</div>
                </div>
            </div>
        }
        );
    }
    render() {
        return <div className="grid ">
                <div className="item" key={`portfolio-999`}>
                    <div className="box" >
                        <Landing />
                    </div>
                </div>
                {this.renderGrid()}
            </div>
    }
};

export default PortfolioGridLayout;

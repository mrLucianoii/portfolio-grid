import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { data as protfolioData } from './data/portfolio';
import { DetailModal } from './components/DetailModal';
import './grid.scss';
import SocialIcons from '../components/SocialIcons';

class PortfolioGridLayout extends PureComponent {
    renderGrid = () => {
        return protfolioData.map((item, key) => {
            return <div className="item" key={`portfolio-${key}`}>
                <div className="box" >
                    <DetailModal
                        itemNode={ <>
                            <img src={item.logo ? item.logo : item.image} />
                            <div className=""><p>{item.toolTip}</p></div>
                        </>
                        }
                        detail={item}
                    />
                </div>
            </div>
        }
        );
    }
    render() {
        return <>
            <Link to="/">HOME</Link>
            <div className="grid ">
                <div className="item" key={`portfolio-979`}>
                    <div className="box portfolio">
                        <h1>PORTFOLIO</h1>
                    </div>
                </div>
                <div className="item" key={`portfolio-999`}>
                    <div className="box">
                        <div>
                            <SocialIcons />
                        </div>
                    </div>
                </div>
                {this.renderGrid()}
            </div>
        </>
    }
};

export default PortfolioGridLayout;

import React, { PureComponent } from "react";
// @ts-ignore
import { SocialIcon } from 'react-social-icons';

import './styles.scss'

class SocialIcons extends PureComponent {
    render() {
        return <>
            <h4>Connect on Social Meida</h4>
            <span className="icons">
                <SocialIcon url="https://www.linkedin.com/in/luciano1st/" />
                <SocialIcon url="https://medium.com/@luciano_5082" />
                <SocialIcon url="https://www.facebook.com/brandedsolid/" />
                <SocialIcon url="https://twitter.com/SOLID_Luciano" />
                <SocialIcon url="https://github.com/mrLucianoii" />
            </span>
        </>
    }
}

export default SocialIcons;

import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets head to beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr It is cold',
        iconName: 'snowflake'
    },
}

const getSeason = (lat, month) => {
    // North hemisphere 3-8 as summer.
    // Southern Hemisphere: 0-2, 9-11 as Summer.
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';   
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

// functional component at the bottom anyways..
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const sConfig = seasonConfig[season]; 

    return (
        <div className={`season-display ${season}`}>
           <i className={`icon-left massive ${sConfig.iconName} icon`} /> 
           <h1>{sConfig.text}</h1>
           <i className={`icon-right massive ${sConfig.iconName} icon`} /> 
        </div>
    );
};

export default SeasonDisplay;

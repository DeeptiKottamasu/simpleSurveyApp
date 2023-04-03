import React from 'react';
import DigitalToolsList from '../components/DigitalToolsList';

function DigitalTools(){
    const DIGITAL_TOOLS = [
        {id: '001', name: 'SurveyTool',
         info: 'Submit Survey Requests through this tool', 
         image: 'https://jobycodirect.com/images/items/random-small-images43.png'
        },
    ];
    return (< DigitalToolsList items={DIGITAL_TOOLS} />);
}

export default DigitalTools;

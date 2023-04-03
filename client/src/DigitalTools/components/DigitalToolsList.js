import React from 'react';
import './DigitalToolsList.css';
import DigitalToolItem from './DigitalToolItem';

function DigitalToolsList(props){
    if (props.items.length === 0){
        return (<div>
            <h2>'No Digital Tools found currently :('</h2>
        </div>);
    }
    else{
        return (
            <div className='digital-tools-list'>
                <h1> List of Digital Tools</h1>
                <ul>
                {props.items.map(tool => (
                <DigitalToolItem key={tool.id} id={tool.id} name={tool.name} info={tool.info} image={tool.image}/>
                ))}
                </ul>
            </ div>
        );
    }

};

export default DigitalToolsList;
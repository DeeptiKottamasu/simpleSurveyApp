import React from 'react';
import './DigitalToolItem.css';
import Card from '../../shared/components/UIElements/Card';
import Avatar from '../../shared/components/UIElements/Avatar';
import { Link } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';

function DigitalToolItem(props){
    return (
    <li className='tool-item'>
        <Card className='tool-item__content'>
            <Link to={`/${props.name}/info`} >
                < div className='tool-item__image'>
                    <Avatar image={props.image}/>
                </div>
                <div className='tool-item__info'>                
                    <h3>{props.name}</h3>
                    <h4>{props.info}</h4>
                </div>
            </Link>
            <div>
                <Button inverse to = {`/${props.name}/createProject`}> Start a new Project </ Button>
                <Button inverse to= {`/contactUs`} > Contact for more info </ Button>
            </div>
        </Card>
    </li>
    );
};

export default DigitalToolItem;
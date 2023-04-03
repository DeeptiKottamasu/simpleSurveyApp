import React, {useContext} from 'react';
import './DigitalToolInfo.css';
import Card from '../../shared/components/UIElements/Card';
import Avatar from '../../shared/components/UIElements/Avatar';
import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';

const TOOL_LIST = [
{id: '001', 
name: 'SurveyTool',
info: 'Submit Survey Requests through this tool', 
image: 'https://jobycodirect.com/images/items/random-small-images43.png'
},
{id: '002', 
name: 'FunTool',
info: 'Have fun this tool', 
image: 'https://jobycodirect.com/images/items/random-small-images44.png'
}
];

function DigitalToolInfo(){
    const auth = useContext(AuthContext);
    const toolNameInUrl = useParams().toolName;
    const tool = TOOL_LIST.filter( tool => tool.name === toolNameInUrl)[0];
    if (tool == null){
        return (
            <Card className='tool-item__content'>
            <h1> No tool with the name {toolNameInUrl} found. Please select a valid tool from the 'Digital Tools' menu.</ h1>
            </ Card> 
        );
    }else{
        console.log("URL :" + tool.name + "/createProject");
        return (
        <Card className='tool-item__content'>
            <h1> Info on Tool {tool.name}</ h1>
            <h2> {tool.info}</h2>
            <div>
                <Avatar image={tool.image}/>
            </div >
            <div>
                { !auth.isLoggedin && (    
                    <Button inverse to = {`/login-signup`}>  Start a new Project </ Button>
                )} 
                { auth.isLoggedin && (    
                    <Button inverse to = {`/${tool.name}/createProject`}>  Start a new Project </ Button>
                )} 
                <Button inverse to = '/contactUs'> Contact for more info </ Button>
            </div>
        </ Card>
        );
    }
};

export default DigitalToolInfo;
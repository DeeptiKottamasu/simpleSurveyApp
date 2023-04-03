import React, {useContext} from 'react';
import { AuthContext } from '../../shared/context/auth-context';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

function Logout(){
    const auth = useContext(AuthContext);

    function logoutHandler(){
        auth.logout();
    };

    return (
        <Card className="authentication">
            <h1> Please confirm that you want to log out.</h1>
            <Button inverse onClick={logoutHandler}> Confirm Logout </Button>
        
        </ Card>
    )

}

export default Logout;
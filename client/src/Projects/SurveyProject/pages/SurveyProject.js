import React, {useState, useContext} from 'react';
import Input from "../../../shared/components/FormElements/Input";
import './SurveyProject.css';
import Button from '../../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE } from '../../../shared/util/validators';
import { useForm } from '../../../shared/hooks/form-hooks';
import Card from '../../../shared/components/UIElements/Card';
import { AuthContext } from '../../../shared/context/auth-context';

function SurveyProject(){
    const auth = useContext(AuthContext);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formState, inputHandler] = useForm(
        {
          form_input: {
            value: '',
            isValid: false
          }
        },
        false
      );

    function submitProjectHandler(){
        setIsSubmitted(true);
        console.log(" after pressing submit "+auth);
    };

    return (
    <Card className="authentication">
        <form className="survey-form">
            <Input 
                element='input' 
                id='form_input'
                type='text' 
                label ='Survey Request'
                error_text='Please enter a valid input' 
                //TODO: change the validator here
                validators = {[ VALIDATOR_REQUIRE ]}
                onInput={inputHandler}
            >
            </ Input>
            <Button  disabled={!formState.isValid} onClick={submitProjectHandler} to = {`/`}> Submit</Button>
            { isSubmitted && <h1> Project Submitted successfully.</ h1>}
        </form>
    </Card>);
}

export default SurveyProject; 
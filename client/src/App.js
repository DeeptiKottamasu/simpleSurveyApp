import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import DigitalTools from './DigitalTools/pages/DigitalTools';
import DigitalToolInfo from './DigitalToolsInfo/pages/DigitalToolInfo';
import ContactPage from './Contact/ContactPage';
import SurveyProject from './Projects/SurveyProject/pages/SurveyProject';
import Auth from './User/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import Logout from './User/pages/Logout';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = useCallback(()=> {
    setIsLoggedin(true);

  }, []);

  const logout = useCallback(()=> {
    setIsLoggedin(false);

  }, []);

  let routes;
  if (isLoggedin){
    routes = (
      <Switch>
        <Route path='/' exact>
            <DigitalTools/>
        </ Route>
        <Route path='/:toolName/info' exact>
            <DigitalToolInfo/>
        </ Route>
        <Route path='/SurveyTool/createProject' exact>
            <SurveyProject/>
        </ Route>
        <Route path='/contactUs' exact>
            < ContactPage />
        </ Route>
        <Route path='/logout' exact>
            < Logout />
        </ Route>
        <Redirect to='/' />
      </Switch>
    );

  }else{
    routes = (
      <Switch>
          <Route path='/' exact>
              <DigitalTools/>
          </ Route>
          <Route path='/login-signup' exact>
              <Auth/>
          </ Route>
          <Route path='/:toolName/info' exact>
              <DigitalToolInfo/>
          </ Route>
          <Route path='/contactUs' exact>
              < ContactPage />
          </ Route>
          <Redirect to='/login-signup'/>
          <Route path='/SurveyTool/createProject' exact>
            <SurveyProject/>
        </ Route>
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedin: isLoggedin, login: login, logout: logout}} >
      <Router>
        < MainNavigation />
        <main>
          {routes}
        </main>
      </ Router>
    </AuthContext.Provider>
    );
}

export default App;

// Refer https://medium.com/javascript-in-plain-english/how-to-set-up-protected-routes-in-your-react-application-a3254deda380
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import Login from './Login';
import Dashboard from './Dashboard';
import Settings from './Setting';
import ProtectedRoute from './ProtectedRoute';

ReactDOM.render((
     <BrowserRouter>
         <Switch>
             <Route path="/login" component={Login}  exact/>
             <ProtectedRoute exact={true} path="/" component={Dashboard} />
             <ProtectedRoute path="/setting" component={Settings} />
             <ProtectedRoute component={Dashboard} />
         </Switch>
     </BrowserRouter>
 ), document.getElementById('root'));

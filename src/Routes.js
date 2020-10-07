import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Sweets from './pages/Sweets';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/drinks" component={Drinks} />
                <Route path="/sweets" component={Sweets} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
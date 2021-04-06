import React from 'react';

import { Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Registration from '../pages/Registration';
// import Location from '../pages/Location';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/registration' exact component={Registration}/>
        </Switch>
    )
};

export default Routes;
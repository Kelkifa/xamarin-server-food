import { Route, Switch } from 'react-router';

import FoodCreate from './pages/FoodCreate';
import FoodList from './pages/FoodList.jsx';
import FoodUpdate from './pages/FoodUpdate';
import NotFound from 'components/NotFound/NotFound';
import PropTypes from 'prop-types';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

Food.propTypes = {

};

function Food(props) {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${match.url}/update`} component={FoodUpdate} />
            <Route exact path={`${match.url}/list`} component={FoodList} />
            <Route exact path={`${match.url}/create`} component={FoodCreate} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Food;
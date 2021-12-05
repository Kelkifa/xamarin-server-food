import 'components/customScss/base.scss';

import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Food from 'features/food/Food';
import NotFound from 'components/NotFound/NotFound';
import { Suspense } from 'react';

function App(props) {

    useEffect(() => {
        const fetchAuth = async () => {
            try {
                // await authApi.login({});
            } catch (err) {

            }
        }

        fetchAuth();
    }, [])
    return (
        <Suspense fallback={<div>Loading ... </div>}>
            <Router>
                <Switch>
                    <Route path="/food" component={Food} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;
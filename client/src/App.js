import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import authApi from './api/authApi';

App.propTypes = {

};

function App(props) {
    useEffect(() => {
        const fetchAuth = async () => {
            try {
                await authApi.login({});
            } catch (err) {

            }
        }

        fetchAuth();
    }, [])
    return (
        <div>
            app hello
        </div>
    );
}

export default App;
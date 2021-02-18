import { Link } from '@reach/router';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <h1>Error has occured</h1>
            <Link to='/'>Landing Page</Link>
        </div>
    )
}

export default ErrorPage
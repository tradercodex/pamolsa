import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const token = localStorage.getItem('token');

class ProtectedRoute extends React.Component {

    isLogged = () => {
        if (token) {
            return true;
        } else {
            return false
        }
    }

    render() {  
        const { component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props => {
                    if (this.isLogged()) {
                        return <Component {...props} />;
                    } else {
                        return (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: {
                                        from: props.location
                                    }
                                }}
                            />
                        );
                    }
                }
                }
            />
        )
    }
}

export default ProtectedRoute;
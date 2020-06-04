//Higher order component --> component that renders other component
//Reuse code
//Render Hijacking
//props manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

//higher order component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private message</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (AuthComponent) => {
    return(props) => (
        <div>
            { props.isAuth ? (
                    <AuthComponent {...props}/>
                ) : (
                    <p>Login to view info</p>
            )}
        </div>
    );
}

//Calling compnent from other component using higher order component
const AdminInfo = withAdminWarning(Info);
const Authentication = requireAuthentication(Info)
//ReactDOM.render(<AdminInfo isAdmin={true} info='There are details'/>, document.getElementById('app'));
ReactDOM.render(<Authentication isAuth={true} info='These are details' />, document.getElementById('app'));
import React from 'react';

const Error = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <div>
                ERROR. Something goes wrong ;(
            </div>
            <button onClick={() => props.history.push('/')} style={{marginTop: "10px"}}> Go to main page</button>

        </div>
    );
};

export default Error;
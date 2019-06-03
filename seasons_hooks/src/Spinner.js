import React from 'react';

const Spinner = (props) => {
    return (
      <div className="ui active dimmer">
        <div className="ui bigger text loader">{props.message}</div>
      </div>
    );
}

// provide the default props... a magic
Spinner.defaultProps = {
    message: 'Loading ...'
};

export default Spinner;

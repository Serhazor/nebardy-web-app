import React from 'react';
import {Helmet} from 'react-helmet';

class bodyColor extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            ...
        </div>
    );
  }
};

export default bodyColor
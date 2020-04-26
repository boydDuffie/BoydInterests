import React from 'react';
import './Blurb.css';
import {albumcovers} from '../../albumcovers';

class Blurb extends React.Component {
    render() {
    return (
        <div className="Blurb">
            <p>{albumcovers[this.props.i].blurb}</p>
        </div>
    );
    }
}

export default Blurb;
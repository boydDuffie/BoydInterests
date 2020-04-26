import React from 'react';
import './Album.css';
import {albumcovers} from '../../albumcovers';

class Picture extends React.Component {
    render() {
        // //generating random number to pick an image from the list
        // let i=Math.floor(Math.random()*(albumcovers.length-1));

        //placeholder image file
        return(
            <div className="Album">
                <div className="image-container">
                    <a href="index.html">
                        <img src={process.env.PUBLIC_URL + '/albumcovers/' + albumcovers[this.props.idx].name + '.png'} alt={albumcovers[this.props.idx].name} />
                    </a>
                </div>
                <h2>{albumcovers[this.props.idx].name}</h2>
            </div>
        );
    }
}

export default Picture;
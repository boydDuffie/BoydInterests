import React from 'react';
import './Album.css';
import {albumcovers} from '../../albumcovers';

//need to get a list of album names
//implement a means of cycling through the pictures when image is clicked on 



class Picture extends React.Component {
    render() {
        let i=Math.floor(Math.random()*(albumcovers.length-1))
        //placeholder image file
        return(
            <div className="Album">
                <div className="image-container">
                    <a href="index.html">
                        <img src={process.env.PUBLIC_URL + '/albumcovers/' + albumcovers[i].name + '.png'} alt={albumcovers[i].name} />
                    </a>
                </div>
                <h2>{albumcovers[i].name}</h2>
            </div>
        );
    }
}

export default Picture;
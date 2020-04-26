import React from 'react';
import './Picture.css';

//need to get a list of album names
//implement a means of cycling through the pictures when image is clicked on 

class Picture extends React.Component {
    render() {
        //placeholder image file
        return(
            <img src="../../../public/albums/Baraka.png" alt="Baraka"></img>
        );
    }
}

export default Picture;